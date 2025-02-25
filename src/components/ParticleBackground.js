import React, { useEffect, useRef } from 'react';

const ParticleBackground = ({ onBlackHoleFullScreen }) => {
  const canvasRef = useRef(null);
  const blackHoleActiveRef = useRef(false);
  const blackHoleRef = useRef(null);
  let konamiProgress = 0;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    const G = 3.0;
    const TIME_STEP = 0.5;
    const GRAVITY_RANGE = 300;
    const MIN_PARTICLES = 40;
    const INITIAL_PARTICLE_COUNT = Math.min(50, window.innerWidth / 30);
    const BLACK_HOLE_MASS = 2000;

    const konamiCode = [
      'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
      'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
      'KeyB', 'KeyQ'
    ];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    class Particle {
      constructor(isCentral = false) {
        this.respawn(isCentral);
      }
      
      respawn(isCentral = false) {
        if (isCentral) {
          this.x = canvas.width / 2;
          this.y = canvas.height / 2;
          this.size = 10;
          this.mass = 50;
          this.speedX = 0;
          this.speedY = 0;
          this.color = 'rgba(255, 165, 0, 0.8)';
          this.isCentral = true;
        } else {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.size = Math.random() * 4 + 1;
          this.density = Math.random() * 0.5 + 0.5;
          this.mass = this.size * this.density;
          const dx = this.x - canvas.width / 2;
          const dy = this.y - canvas.height / 2;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const orbitalSpeed = Math.sqrt(G * 50 / dist);
          const angle = Math.atan2(dy, dx);
          this.speedX = -orbitalSpeed * Math.sin(angle) + (Math.random() - 0.5) * 4;
          this.speedY = orbitalSpeed * Math.cos(angle) + (Math.random() - 0.5) * 4;
          this.color = this.getRandomColor();
          this.isCentral = false;
          this.opacity = 1;
        }
      }
      
      getRandomColor() {
        const colors = [
          'rgba(59, 130, 246, 0.5)',
          'rgba(139, 92, 246, 0.5)',
          'rgba(99, 102, 241, 0.5)',
          'rgba(16, 185, 129, 0.5)',
          'rgba(6, 182, 212, 0.5)'
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      }
      
      update(particles, blackHole) {
        if (this.isCentral && !blackHoleActiveRef.current) return;
        
        let totalForceX = 0;
        let totalForceY = 0;
        
        particles.forEach(other => {
          if (other !== this) {
            const dx = other.x - this.x;
            const dy = other.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy) || 0.01;
            const minDistance = this.size + other.size;
            
            if (distance < minDistance) {
              this.handleCollision(other, particles);
            } else if (distance < GRAVITY_RANGE) {
              const force = (G * this.mass * other.mass) / (distance * distance);
              const angle = Math.atan2(dy, dx);
              totalForceX += force * Math.cos(angle);
              totalForceY += force * Math.sin(angle);
            }
          }
        });
        
        if (blackHole) {
          const dx = blackHole.x - this.x;
          const dy = blackHole.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy) || 0.01;
          if (distance < blackHole.size) {
            this.markForRemoval = true;
          } else {
            const force = (G * this.mass * blackHole.mass) / (distance * distance);
            const angle = Math.atan2(dy, dx);
            totalForceX += force * Math.cos(angle);
            totalForceY += force * Math.sin(angle);
          }
        }
        
        const accelX = totalForceX / this.mass;
        const accelY = totalForceY / this.mass;
        
        this.speedX += accelX * TIME_STEP;
        this.speedY += accelY * TIME_STEP;
        
        if (this.isCentral) {
          this.speedX *= 0.99;
          this.speedY *= 0.99;
        }
        
        this.x += this.speedX * TIME_STEP;
        this.y += this.speedY * TIME_STEP;
        
        if (this.x > canvas.width) this.x -= canvas.width;
        if (this.x < 0) this.x += canvas.width;
        if (this.y > canvas.height) this.y -= canvas.height;
        if (this.y < 0) this.y += canvas.height;
      }
      
      handleCollision(other, particles) {
        if (this.isCentral || other.isCentral) {
          const dx = other.x - this.x;
          const dy = other.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy) || 0.01;
          const normalX = dx / distance;
          const normalY = dy / distance;
          const overlap = (this.size + other.size) - distance;
          const pushFactor = overlap * 0.5;
          if (!this.isCentral) {
            this.x -= pushFactor * normalX;
            this.y -= pushFactor * normalY;
          }
          if (!other.isCentral) {
            other.x += pushFactor * normalX;
            other.y += pushFactor * normalY;
          }
          return;
        }

        if (Math.random() < 0.5) {
          this.markForRemoval = true;
          other.markForRemoval = true;
        } else {
          const totalMass = this.mass + other.mass;
          const newSize = Math.min(Math.sqrt(totalMass), 15);
          this.size = newSize;
          this.mass = totalMass;
          this.speedX = (this.speedX * this.mass + other.speedX * other.mass) / totalMass;
          this.speedY = (this.speedY * this.mass + other.speedY * other.mass) / totalMass;
          this.color = this.blendColors(this.color, other.color, this.mass, other.mass);
          other.markForRemoval = true;
        }
      }
      
      blendColors(color1, color2, mass1, mass2) {
        const rgba1 = color1.match(/\d+/g).map(Number);
        const rgba2 = color2.match(/\d+/g).map(Number);
        const totalMass = mass1 + mass2;
        const r = Math.round((rgba1[0] * mass1 + rgba2[0] * mass2) / totalMass);
        const g = Math.round((rgba1[1] * mass1 + rgba2[1] * mass2) / totalMass);
        const b = Math.round((rgba1[2] * mass1 + rgba2[2] * mass2) / totalMass);
        return `rgba(${r}, ${g}, ${b}, 0.5)`;
      }
      
      draw() {
        const actualColor = this.color.replace(/[\d.]+\)$/, `${this.opacity || 1})`);
        ctx.fillStyle = actualColor;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    class BlackHole {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 20;
        this.mass = BLACK_HOLE_MASS;
        this.growthRate = 0.005;
        this.maxSize = Math.sqrt(canvas.width * canvas.width + canvas.height * canvas.height);
        this.darknessRatio = 0; // 0 to 1, controlling darkness level
      }
      
      update() {
        this.size += this.growthRate;
        this.growthRate *= 1.0001;
        this.mass += this.growthRate * 2;
        
        // Calculate darkness ratio - increases as the black hole grows
        const sizeRatio = this.size / this.maxSize;
        // Apply a non-linear curve for more dramatic darkening as the hole gets bigger
        this.darknessRatio = Math.min(1, Math.pow(sizeRatio * 3, 1.5));
        
        // Always notify parent about the current darkness ratio
        if (onBlackHoleFullScreen) {
          onBlackHoleFullScreen(this.darknessRatio);
        }
      }
      
      draw() {
        // Draw the bright accretion disk with Interstellar movie style
        ctx.save();
        
        // 1. First draw the outer glow/halo of the black hole - bright blue-white
        const outerGlowGradient = ctx.createRadialGradient(
          this.x, this.y, this.size * 1.2,
          this.x, this.y, this.size * 2.2
        );
        
        outerGlowGradient.addColorStop(0, 'rgba(220, 240, 255, 0.9)');
        outerGlowGradient.addColorStop(0.3, 'rgba(180, 220, 255, 0.6)');
        outerGlowGradient.addColorStop(0.7, 'rgba(120, 180, 255, 0.3)');
        outerGlowGradient.addColorStop(1, 'rgba(80, 120, 220, 0)');
        
        ctx.fillStyle = outerGlowGradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 2.2, 0, Math.PI * 2);
        ctx.fill();
        
        // 2. Draw the horizontal accretion disk (bright, thin band)
        ctx.translate(this.x, this.y);
        
        // Bright disk with blue-white gradient
        const diskGradient = ctx.createLinearGradient(
          -this.size * 3, 0,
          this.size * 3, 0
        );
        
        // Bright white/blue in center, fading at edges
        diskGradient.addColorStop(0, 'rgba(100, 150, 255, 0)');
        diskGradient.addColorStop(0.2, 'rgba(150, 200, 255, 0.6)');
        diskGradient.addColorStop(0.35, 'rgba(200, 230, 255, 0.8)');
        diskGradient.addColorStop(0.5, 'rgba(250, 250, 255, 1)');  
        diskGradient.addColorStop(0.65, 'rgba(200, 230, 255, 0.8)');
        diskGradient.addColorStop(0.8, 'rgba(150, 200, 255, 0.6)');
        diskGradient.addColorStop(1, 'rgba(100, 150, 255, 0)');
        
        // Draw a thin disk
        const diskThickness = this.size * 0.15; // Thin disk (15% of black hole)
        
        ctx.fillStyle = diskGradient;
        ctx.beginPath();
        ctx.ellipse(0, 0, this.size * 3, diskThickness, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // 3. Add some lens flare effects for the bright accretion disk
        // Top and bottom "light leaks"
        const flareGradient = ctx.createRadialGradient(
          0, 0, this.size,
          0, 0, this.size * 4
        );
        
        flareGradient.addColorStop(0, 'rgba(220, 240, 255, 0.7)');
        flareGradient.addColorStop(0.3, 'rgba(180, 220, 255, 0.4)');
        flareGradient.addColorStop(0.7, 'rgba(120, 180, 255, 0.1)');
        flareGradient.addColorStop(1, 'rgba(80, 150, 250, 0)');
        
        ctx.fillStyle = flareGradient;
        ctx.globalCompositeOperation = 'lighter';
        
        // Draw light "halos" above and below 
        ctx.beginPath();
        ctx.ellipse(0, -this.size * 1.2, this.size * 0.8, this.size * 0.3, 0, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.beginPath();
        ctx.ellipse(0, this.size * 1.2, this.size * 0.8, this.size * 0.3, 0, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
        
        // 4. Then draw the black hole's shadow (completely black circle)
        ctx.fillStyle = 'rgb(0, 0, 0)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        // 5. Draw the photon ring (bright ring around the black hole)
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 1.05, 0, Math.PI * 2);
        ctx.lineWidth = this.size * 0.05;
        ctx.strokeStyle = 'rgba(250, 250, 255, 0.9)';
        ctx.stroke();
      }
      
      // Method to get the current background alpha based on black hole size
      getBackgroundAlpha() {
        return this.darknessRatio;
      }
    }
    
    let particles = [];
    let stars = [];
    
    // Create some background stars for the gravitational lensing effect
    const createStars = () => {
      const numStars = 100;
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          brightness: Math.random() * 0.5 + 0.5
        });
      }
    };
    
    createStars();
    
    particles.push(new Particle(true)); // Sun
    for (let i = 0; i < INITIAL_PARTICLE_COUNT; i++) {
      particles.push(new Particle());
    }
    
    function connectParticles() {
      const maxDistance = GRAVITY_RANGE;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < maxDistance) {
            const opacity = 1 - (distance / maxDistance);
            const blackHoleFactor = blackHoleRef.current ? 
              (1 - blackHoleRef.current.getBackgroundAlpha()) : 1;
            
            ctx.strokeStyle = `rgba(99, 102, 241, ${opacity * 0.15 * blackHoleFactor})`;
            ctx.lineWidth = 0.3;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }
    
    const handleKeyDown = (e) => {
      if (blackHoleActiveRef.current) return;
      
      const key = e.code;
      
      if (key === konamiCode[konamiProgress]) {
        konamiProgress++;
        
        if (konamiProgress === konamiCode.length) {
          const sun = particles.find(p => p.isCentral);
          if (sun) {
            blackHoleActiveRef.current = true;
            blackHoleRef.current = new BlackHole(sun.x, sun.y);
            particles = particles.filter(p => !p.isCentral);
            console.log("Black hole activated");
          }
          konamiProgress = 0;
        }
      } else {
        konamiProgress = 0;
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);

    // Drawing the background with proper layering
    const drawBackground = () => {
      // Drawing the main gradient background
      const getBackgroundGradient = () => {
        // Default starting colors for the gradient background
        let startRed = 26, startGreen = 35, startBlue = 45; // #1A232D
        let endRed = 46, endGreen = 37, endBlue = 49; // #2E2531
        
        // If black hole is active, calculate darkness effect on background
        if (blackHoleActiveRef.current && blackHoleRef.current) {
          const darknessLevel = blackHoleRef.current.getBackgroundAlpha();
          
          // Adjust background colors based on darkness level
          startRed = Math.round(startRed * (1 - darknessLevel));
          startGreen = Math.round(startGreen * (1 - darknessLevel));
          startBlue = Math.round(startBlue * (1 - darknessLevel));
          
          endRed = Math.round(endRed * (1 - darknessLevel));
          endGreen = Math.round(endGreen * (1 - darknessLevel));
          endBlue = Math.round(endBlue * (1 - darknessLevel));
        }
        
        // Create gradient
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop(0, `rgb(${startRed}, ${startGreen}, ${startBlue})`);
        gradient.addColorStop(1, `rgb(${endRed}, ${endGreen}, ${endBlue})`);
        
        return gradient;
      };
      
      // Fill the canvas with the gradient background
      ctx.fillStyle = getBackgroundGradient();
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Create a clipping region around the black hole if it exists
      // This prevents the background from being drawn over the black hole
      if (blackHoleActiveRef.current && blackHoleRef.current) {
        // Temporarily save the context state
        ctx.save();
        
        // Create a clipping path that excludes the black hole area
        ctx.beginPath();
        ctx.rect(0, 0, canvas.width, canvas.height); // Entire canvas
        
        // Cut out the black hole
        ctx.arc(blackHoleRef.current.x, blackHoleRef.current.y, 
                blackHoleRef.current.size * 1.05, 0, Math.PI * 2, true); // Counter-clockwise for hole
        
        ctx.clip(); // Apply the clipping region
        
        // Draw stars if no black hole is active (otherwise black hole draws them with distortion)
        stars.forEach(star => {
          ctx.fillStyle = `rgba(255, 255, 255, ${star.brightness})`;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
          ctx.fill();
        });
        
        // Restore the context to remove the clipping path
        ctx.restore();
      } else {
        // Draw stars normally if no black hole is active
        stars.forEach(star => {
          ctx.fillStyle = `rgba(255, 255, 255, ${star.brightness})`;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
          ctx.fill();
        });
      }
    };

    const animate = () => {
      // Start with a clean canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw the background (will be clipped around the black hole)
      drawBackground();
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update(particles, blackHoleRef.current);
        
        // Fade particle opacity as black hole grows
        if (blackHoleActiveRef.current && blackHoleRef.current) {
          const darknessLevel = blackHoleRef.current.getBackgroundAlpha();
          particle.opacity = Math.max(0.1, 1 - darknessLevel * 0.8);
        }
        
        particle.draw();
      });
      
      // Connect particles with lines
      connectParticles();
      
      // If black hole is active, update and draw it
      if (blackHoleRef.current) {
        blackHoleRef.current.update();
        blackHoleRef.current.draw();
      }
      
      // Clean up removed particles and add new ones if needed
      particles = particles.filter(p => !p.markForRemoval);
      while (particles.length < MIN_PARTICLES + (blackHoleActiveRef.current ? 0 : 1)) {
        particles.push(new Particle());
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('keydown', handleKeyDown);
      cancelAnimationFrame(animationFrameId);
    };
  }, [onBlackHoleFullScreen]);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 w-full h-full"
      style={{ background: 'transparent' }}
    />
  );
};

export default ParticleBackground;
import React, { useEffect, useRef, useState } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const [sunClicks, setSunClicks] = useState(0);
  const [blackHoleActive, setBlackHoleActive] = useState(false);
  const [blackHole, setBlackHole] = useState(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    const G = 3.0; // Increased from 1.5 for stronger gravity
    const TIME_STEP = 0.5;
    const GRAVITY_RANGE = 300;
    const MIN_PARTICLES = 40;
    const INITIAL_PARTICLE_COUNT = Math.min(50, window.innerWidth / 30);
    const BLACK_HOLE_MASS = 1000;

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
            const force = (G * this.mass * BLACK_HOLE_MASS) / (distance * distance);
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
        ctx.fillStyle = this.color;
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
        this.growthRate = 0.1;
      }
      
      update() {
        this.size += this.growthRate;
      }
      
      draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 1)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size + 5, 0, Math.PI * 2);
        ctx.stroke();
      }
    }
    
    let particles = [];
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
            ctx.strokeStyle = `rgba(99, 102, 241, ${opacity * 0.15})`;
            ctx.lineWidth = 0.3;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }
    
    const handleClick = (e) => {
      if (blackHoleActive) return; // No clicks after black hole
      
      const sun = particles.find(p => p.isCentral);
      if (sun) {
        const dx = e.clientX - sun.x;
        const dy = e.clientY - sun.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < sun.size * 2) { // Increased clickable area (20px radius)
          setSunClicks(prev => {
            const newClicks = prev + 1;
            console.log(`Sun clicked: ${newClicks}/5`); // Debug log
            if (newClicks >= 5) {
              setBlackHoleActive(true);
              setBlackHole(new BlackHole(sun.x, sun.y));
              particles = particles.filter(p => !p.isCentral); // Remove sun
              return 0; // Reset clicks
            }
            return newClicks;
          });
        }
      }
    };
    
    canvas.addEventListener('click', handleClick);

    const animate = () => {
      if (blackHoleActive) {
        ctx.fillStyle = 'rgba(10, 10, 25, 0.5)';
      } else {
        ctx.fillStyle = 'rgba(10, 10, 25, 0.3)';
      }
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update(particles, blackHole);
        particle.draw();
      });
      
      if (blackHole) {
        blackHole.update();
        blackHole.draw();
      }
      
      particles = particles.filter(p => !p.markForRemoval);
      while (particles.length < MIN_PARTICLES + (blackHoleActive ? 0 : 1)) {
        particles.push(new Particle());
      }
      
      connectParticles();
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 opacity-20 pointer-events-auto"
      style={{ background: 'transparent' }}
    />
  );
};

export default ParticleBackground;
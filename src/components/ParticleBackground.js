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
    const MIN_PARTICLES = 20;
    const INITIAL_PARTICLE_COUNT = Math.min(25, window.innerWidth / 30);
    const BLACK_HOLE_MASS = 2000;
    const TAIL_LENGTH = 60;
    const MAX_INITIAL_SPEED = 1.5;

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

    class CollisionEffect {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.radius = 2;
        this.maxRadius = 15;
        this.opacity = 0.7;
        this.life = 1.0;
      }

      update() {
        if (this.life > 0) {
          this.radius += (this.maxRadius - this.radius) * 0.1;
          this.life -= 0.05;
          this.opacity = this.life * 0.7;
          return true;
        }
        return false;
      }

      draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.radius
        );
        const color = this.color.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*[\d.]+\)/);
        if (color) {
          gradient.addColorStop(0, `rgba(${color[1]}, ${color[2]}, ${color[3]}, ${this.opacity})`);
          gradient.addColorStop(0.7, `rgba(${color[1]}, ${color[2]}, ${color[3]}, ${this.opacity * 0.5})`);
          gradient.addColorStop(1, `rgba(${color[1]}, ${color[2]}, ${color[3]}, 0)`);
        } else {
          gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
          gradient.addColorStop(0.7, `rgba(255, 255, 255, ${this.opacity * 0.5})`);
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        }
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    }

    class Particle {
      constructor(isCentral = false) {
        this.positionHistory = [];
        this.respawn(isCentral);
      }

      respawn(isCentral = false) {
        this.positionHistory = [];
        if (isCentral) {
          this.x = canvas.width / 2;
          this.y = canvas.height / 2;
          this.size = 10;
          this.mass = 50;
          this.speedX = 0;
          this.speedY = 0;
          this.color = 'rgba(255, 215, 0, 0.8)';
          this.isCentral = true;
          this.fixedColor = true;
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
          let baseSpeedX = -orbitalSpeed * Math.sin(angle) + (Math.random() - 0.5) * 2;
          let baseSpeedY = orbitalSpeed * Math.cos(angle) + (Math.random() - 0.5) * 2;
          const currentSpeed = Math.sqrt(baseSpeedX * baseSpeedX + baseSpeedY * baseSpeedY);
          if (currentSpeed > MAX_INITIAL_SPEED) {
            const scaleFactor = MAX_INITIAL_SPEED / currentSpeed;
            baseSpeedX *= scaleFactor;
            baseSpeedY *= scaleFactor;
          }
          this.speedX = baseSpeedX;
          this.speedY = baseSpeedY;
          this.color = this.getRandomColor();
          this.isCentral = false;
          this.opacity = 0.1;
        }
      }

      getRandomColor() {
        const colors = [
          'rgba(59, 130, 246, 0.1)',
          'rgba(139, 92, 246, 0.1)',
          'rgba(99, 102, 241, 0.1)',
          'rgba(16, 185, 129, 0.1)',
          'rgba(6, 182, 212, 0.1)'
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      }

      update(particles, blackHole, collisionEffects) {
        const shouldAddPosition =
          this.positionHistory.length === 0 ||
          (this.positionHistory.length > 0 &&
            (Math.abs(this.x - this.positionHistory[this.positionHistory.length - 1].x) > 0.5 ||
              Math.abs(this.y - this.positionHistory[this.positionHistory.length - 1].y) > 0.5));
        if (shouldAddPosition) {
          if (this.positionHistory.length >= TAIL_LENGTH) {
            this.positionHistory.shift();
          }
          this.positionHistory.push({ x: this.x, y: this.y });
        }

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
              const collisionPoint = this.handleCollision(other, particles, collisionEffects);
              if (collisionPoint) {
                collisionEffects.push(new CollisionEffect(collisionPoint.x, collisionPoint.y, this.color));
              }
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
            collisionEffects.push(new CollisionEffect(this.x, this.y, this.color));
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

        const currentSpeed = Math.sqrt(this.speedX * this.speedX + this.speedY * this.speedY);
        const maxSpeed = 4;
        if (currentSpeed > maxSpeed) {
          const scaleFactor = maxSpeed / currentSpeed;
          this.speedX *= scaleFactor;
          this.speedY *= scaleFactor;
        }

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

      handleCollision(other, particles, collisionEffects) {
        const dx = other.x - this.x;
        const dy = other.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy) || 0.01;
        const normalX = dx / distance;
        const normalY = dy / distance;
        const collisionPoint = {
          x: this.x + normalX * this.size,
          y: this.y + normalY * this.size
        };

        if (this.isCentral || other.isCentral) {
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
          return collisionPoint;
        }

        if (Math.random() < 0.5) {
          this.markForRemoval = true;
          other.markForRemoval = true;
          return collisionPoint;
        } else {
          const totalMass = this.mass + other.mass;
          const newSize = Math.min(Math.sqrt(totalMass), 15);
          this.size = newSize;
          this.mass = totalMass;
          this.speedX = (this.speedX * this.mass + other.speedX * other.mass) / totalMass;
          this.speedY = (this.speedY * this.mass + other.speedY * other.mass) / totalMass;
          if (!this.fixedColor && !other.fixedColor) {
            this.color = this.blendColors(this.color, other.color, this.mass, other.mass);
          }
          other.markForRemoval = true;
          return collisionPoint;
        }
      }

      blendColors(color1, color2, mass1, mass2) {
        const rgba1 = color1.match(/\d+/g).map(Number);
        const rgba2 = color2.match(/\d+/g).map(Number);
        const totalMass = mass1 + mass2;
        const r = Math.round((rgba1[0] * mass1 + rgba2[0] * mass2) / totalMass);
        const g = Math.round((rgba1[1] * mass1 + rgba2[1] * mass2) / totalMass);
        const b = Math.round((rgba1[2] * mass1 + rgba2[2] * mass2) / totalMass);
        const a = Math.min(0.1, ((rgba1[3] || 0.1) * mass1 + (rgba2[3] || 0.1) * mass2) / totalMass);
        return `rgba(${r}, ${g}, ${b}, ${a})`;
      }

      drawTail(ctx) {
        if (this.positionHistory.length < 1) return;
        const baseColorMatch = this.color.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*[\d.]+\)/);
        let r, g, b;
        if (baseColorMatch) {
          r = baseColorMatch[1];
          g = baseColorMatch[2];
          b = baseColorMatch[3];
        } else {
          r = g = b = 255;
        }
        for (let i = 0; i < this.positionHistory.length; i++) {
          const pos = this.positionHistory[i];
          const opacityFactor = i / (this.positionHistory.length - 1);
          const fadeOpacity = 0.1 * opacityFactor;
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${fadeOpacity})`;
          ctx.beginPath();
          ctx.arc(pos.x, pos.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      draw() {
        this.drawTail(ctx);
        let actualOpacity = this.opacity;
        if (this.fixedColor && this.isCentral) {
          ctx.fillStyle = this.color;
        } else {
          if (blackHoleActiveRef.current && blackHoleRef.current) {
            actualOpacity = actualOpacity * (1 - blackHoleRef.current.getBackgroundAlpha() * 0.5);
          }
          const actualColor = this.color.replace(/[\d.]+\)$/, `${actualOpacity})`);
          ctx.fillStyle = actualColor;
        }
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
        this.darknessRatio = 0;
        this.jetLength = 100;
        this.jetWidth = 10;
      }

      update() {
        this.size += this.growthRate;
        this.growthRate *= 1.0001;
        this.mass += this.growthRate * 2;
        this.darknessRatio = Math.min(1, Math.pow((this.size / this.maxSize) * 3, 1.5));
        if (onBlackHoleFullScreen) {
          onBlackHoleFullScreen(this.darknessRatio);
        }
      }

      applyLensing(ctx, stars) {
        const EVENT_HORIZON_FACTOR = 1.1;
        const MAX_LENSING_DISTANCE = this.size * 7;
        stars.forEach(star => {
          const dx = star.x - this.x;
          const dy = star.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const angle = Math.atan2(dy, dx);
          if (distance > MAX_LENSING_DISTANCE || distance < this.size) return;
          const distanceFactor = 1 - ((distance - this.size) / (MAX_LENSING_DISTANCE - this.size));
          const lensingStrength = Math.pow(distanceFactor, 2) * 2.5;
          const lensedDistance = distance - (this.size * lensingStrength * 0.8);
          if (lensedDistance < this.size * EVENT_HORIZON_FACTOR) return;
          const lensedX = this.x + Math.cos(angle) * lensedDistance;
          const lensedY = this.y + Math.sin(angle) * lensedDistance;
          const brightnessFactor = 1 + lensingStrength * 1.5;
          const lensedBrightness = Math.min(1, star.brightness * brightnessFactor);
          const sizeFactor = 1 + lensingStrength * 1.0;
          const lensedSize = star.size * sizeFactor;
          ctx.fillStyle = `rgba(255, 255, 255, ${lensedBrightness})`;
          ctx.beginPath();
          ctx.arc(lensedX, lensedY, lensedSize, 0, Math.PI * 2);
          ctx.fill();
          if (distance < this.size * 3) {
            const glowRadius = lensedSize * 3;
            const glowGradient = ctx.createRadialGradient(
              lensedX, lensedY, 0,
              lensedX, lensedY, glowRadius
            );
            glowGradient.addColorStop(0, `rgba(180, 220, 255, ${lensedBrightness * 0.7})`);
            glowGradient.addColorStop(1, 'rgba(180, 220, 255, 0)');
            ctx.fillStyle = glowGradient;
            ctx.beginPath();
            ctx.arc(lensedX, lensedY, glowRadius, 0, Math.PI * 2);
            ctx.fill();
          }
        });
      }

      draw() {
        ctx.save();

        // Outer glow/halo (drawn first, but limited to not overlap center)
        const outerGlowGradient = ctx.createRadialGradient(
          this.x, this.y, this.size * 1.5, // Start beyond the shadow
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

        // Accretion disk (drawn with adjusted inner radius)
        ctx.translate(this.x, this.y);
        const diskGradient = ctx.createRadialGradient(
          0, 0, this.size * 1.5, // Moved further out to avoid center
          0, 0, this.size * 3
        );
        diskGradient.addColorStop(0, 'rgba(250, 250, 255, 0.9)');
        diskGradient.addColorStop(0.4, 'rgba(230, 210, 180, 0.7)');
        diskGradient.addColorStop(0.8, 'rgba(250, 180, 100, 0.6)');
        diskGradient.addColorStop(1, 'rgba(180, 60, 30, 0)');
        ctx.fillStyle = diskGradient;
        ctx.beginPath();
        ctx.ellipse(0, 0, this.size * 3, this.size * 3 * 0.15, 0, 0, Math.PI * 2);
        ctx.fill();

        // Doppler effect on accretion disk
        ctx.globalCompositeOperation = 'source-atop';
        const dopplerGradient = ctx.createLinearGradient(
          -this.size * 3, 0,
          this.size * 3, 0
        );
        dopplerGradient.addColorStop(0, 'rgba(180, 220, 255, 0.9)');
        dopplerGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0)');
        dopplerGradient.addColorStop(1, 'rgba(255, 120, 50, 0.5)');
        ctx.fillStyle = dopplerGradient;
        ctx.fill();
        ctx.globalCompositeOperation = 'source-over';

        // Photon ring
        ctx.beginPath();
        ctx.arc(0, 0, this.size * 1.6, 0, Math.PI * 2);
        ctx.lineWidth = this.size * 0.15;
        const ringGradient = ctx.createLinearGradient(
          -this.size * 2, 0,
          this.size * 2, 0
        );
        ringGradient.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
        ringGradient.addColorStop(0.5, 'rgba(230, 240, 255, 0.8)');
        ringGradient.addColorStop(1, 'rgba(200, 220, 255, 0.7)');
        ctx.strokeStyle = ringGradient;
        ctx.stroke();

        ctx.restore();

        // Einstein ring
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 1.1, 0, Math.PI * 2);
        ctx.lineWidth = this.size * 0.07;
        const ringGlow = ctx.createRadialGradient(
          this.x, this.y, this.size * 1.05,
          this.x, this.y, this.size * 1.2
        );
        ringGlow.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
        ringGlow.addColorStop(1, 'rgba(180, 220, 255, 0)');
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.stroke();
        ctx.fillStyle = ringGlow;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 1.2, 0, Math.PI * 2);
        ctx.fill();

        // Polar jets
        const jetGradient = ctx.createLinearGradient(
          this.x, this.y - this.jetLength,
          this.x, this.y + this.jetLength
        );
        jetGradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
        jetGradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.5)');
        jetGradient.addColorStop(0.8, 'rgba(255, 255, 255, 0.5)');
        jetGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.beginPath();
        ctx.moveTo(this.x - this.jetWidth / 2, this.y);
        ctx.lineTo(this.x, this.y - this.jetLength);
        ctx.lineTo(this.x + this.jetWidth / 2, this.y);
        ctx.fillStyle = jetGradient;
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(this.x - this.jetWidth / 2, this.y);
        ctx.lineTo(this.x, this.y + this.jetLength);
        ctx.lineTo(this.x + this.jetWidth / 2, this.y);
        ctx.fill();

        // Pitch black shadow (drawn last to overwrite everything)
        ctx.fillStyle = 'rgb(0, 0, 0)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }

      getBackgroundAlpha() {
        return this.darknessRatio;
      }
    }

    let particles = [];
    let stars = [];
    let collisionEffects = [];

    const createStars = () => {
      const numStars = 150;
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

    particles.push(new Particle(true));
    for (let i = 0; i < INITIAL_PARTICLE_COUNT; i++) {
      particles.push(new Particle());
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

    const drawBackground = () => {
      const getBackgroundGradient = () => {
        let startRed = 18, startGreen = 24, startBlue = 32;
        let endRed = 32, endGreen = 26, endBlue = 36;
        if (blackHoleActiveRef.current && blackHoleRef.current) {
          const darknessLevel = blackHoleRef.current.getBackgroundAlpha();
          startRed = Math.round(startRed * (1 - darknessLevel));
          startGreen = Math.round(startGreen * (1 - darknessLevel));
          startBlue = Math.round(startBlue * (1 - darknessLevel));
          endRed = Math.round(endRed * (1 - darknessLevel));
          endGreen = Math.round(endGreen * (1 - darknessLevel));
          endBlue = Math.round(endBlue * (1 - darknessLevel));
        }
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop(0, `rgb(${startRed}, ${startGreen}, ${startBlue})`);
        gradient.addColorStop(1, `rgb(${endRed}, ${endGreen}, ${endBlue})`);
        return gradient;
      };
      ctx.fillStyle = getBackgroundGradient();
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (blackHoleActiveRef.current && blackHoleRef.current) {
        ctx.save();
        ctx.beginPath();
        ctx.rect(0, 0, canvas.width, canvas.height);
        ctx.arc(blackHoleRef.current.x, blackHoleRef.current.y, blackHoleRef.current.size * 1.05, 0, Math.PI * 2, true);
        ctx.clip();
        stars.forEach(star => {
          ctx.fillStyle = `rgba(255, 255, 255, ${star.brightness})`;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
          ctx.fill();
        });
        ctx.restore();
      } else {
        stars.forEach(star => {
          ctx.fillStyle = `rgba(255, 255, 255, ${star.brightness})`;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
          ctx.fill();
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBackground();

      if (blackHoleRef.current) {
        blackHoleRef.current.applyLensing(ctx, stars);
      }

      collisionEffects = collisionEffects.filter(effect => {
        effect.update();
        effect.draw(ctx);
        return effect.life > 0;
      });

      particles.forEach(particle => {
        particle.update(particles, blackHoleRef.current, collisionEffects);
        if (blackHoleActiveRef.current && blackHoleRef.current) {
          const darknessLevel = blackHoleRef.current.getBackgroundAlpha();
          particle.opacity = Math.max(0.05, 0.1 - darknessLevel * 0.05);
        }
        particle.draw();
      });

      if (blackHoleRef.current) {
        blackHoleRef.current.update();
        blackHoleRef.current.draw();
      }

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
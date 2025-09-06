import { useEffect, useState } from "react";

export const SunriseBackground = () => {
  const [particles, setParticles] = useState([]);
  const [rays, setRays] = useState([]);

  useEffect(() => {
    generateParticles();
    generateRays();

    const handleResize = () => {
      generateParticles();
      generateRays();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateParticles = () => {
    const numberOfParticles = Math.floor(
      (window.innerWidth * window.innerHeight) / 12000
    );
    const newParticles = [];

    for (let i = 0; i < numberOfParticles; i++) {
      newParticles.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.4 + 0.1,
        animationDuration: Math.random() * 8 + 6,
        delay: Math.random() * 5,
      });
    }
    setParticles(newParticles);
  };

  const generateRays = () => {
    const numberOfRays = 12;
    const newRays = [];

    for (let i = 0; i < numberOfRays; i++) {
      const angle = (360 / numberOfRays) * i;
      newRays.push({
        id: i,
        angle: angle,
        length: Math.random() * 30 + 40,
        width: Math.random() * 2 + 1,
        opacity: Math.random() * 0.3 + 0.2,
        animationDuration: Math.random() * 4 + 3,
        delay: Math.random() * 2,
      });
    }
    setRays(newRays);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-orange-100/40 via-yellow-50/30 to-blue-50/20" />

      {/* Sunrise circle at bottom */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
        {/* Main sun circle */}
        <div
          className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-yellow-300/80 to-orange-400/60 animate-pulse"
          style={{ animationDuration: "4s" }}
        />

        {/* Inner glow */}
        <div
          className="absolute inset-0 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-yellow-200/60 to-orange-300/40 animate-ping"
          style={{ animationDuration: "6s" }}
        />

        {/* Outer glow */}
        <div
          className="absolute -inset-4 w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full bg-gradient-to-br from-yellow-200/30 to-orange-200/20 blur-md animate-pulse"
          style={{ animationDuration: "5s" }}
        />
      </div>

      {/* Sun rays */}
      {rays.map((ray) => (
        <div
          key={ray.id}
          className="absolute bottom-0 left-1/2 origin-bottom animate-pulse"
          style={{
            transform: `translateX(-50%) rotate(${ray.angle}deg)`,
            animationDuration: ray.animationDuration + "s",
            animationDelay: ray.delay + "s",
          }}
        >
          <div
            className="bg-gradient-to-t from-yellow-300/40 to-transparent blur-sm"
            style={{
              width: ray.width + "px",
              height: ray.length + "vh",
              opacity: ray.opacity,
            }}
          />
        </div>
      ))}

      {/* Floating light particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-yellow-200/30 animate-bounce blur-[1px]"
          style={{
            width: particle.size + "px",
            height: particle.size + "px",
            left: particle.x + "%",
            top: particle.y + "%",
            opacity: particle.opacity,
            animationDuration: particle.animationDuration + "s",
            animationDelay: particle.delay + "s",
          }}
        />
      ))}

      {/* Additional light streaks */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-yellow-100/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-orange-100/10 to-transparent blur-sm" />

      {/* Ambient light spots */}
      <div
        className="absolute bottom-10 left-1/4 w-20 h-20 rounded-full bg-yellow-200/20 blur-lg animate-pulse"
        style={{ animationDuration: "7s" }}
      />
      <div
        className="absolute bottom-16 right-1/3 w-16 h-16 rounded-full bg-orange-200/15 blur-lg animate-pulse"
        style={{ animationDuration: "8s", animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-8 left-2/3 w-24 h-24 rounded-full bg-yellow-100/25 blur-xl animate-pulse"
        style={{ animationDuration: "6s", animationDelay: "1s" }}
      />
    </div>
  );
};

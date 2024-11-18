import React, { useEffect, useRef, useState } from "react";

const Bee = () => {
  const [flightPath, setFlightPath] = useState([]);
  const beeRef = useRef(null);
  const lastRotationRef = useRef(0);

  const generateFlightPath = () => {
    const points = [];
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    let lastX = screenWidth / 2;
    let lastY = screenHeight / 2;

    for (let i = 0; i < 10; i++) {
      const x = Math.max(
        50,
        Math.min(screenWidth - 50, lastX + (Math.random() * 200 - 100))
      );
      const y = Math.max(
        50,
        Math.min(screenHeight - 100, lastY + (Math.random() * 200 - 150))
      );

      points.push({ x, y });
      lastX = x;
      lastY = y;
    }

    return points;
  };

  const animateBee = () => {
    if (!beeRef.current || flightPath.length < 2) return;

    const bee = beeRef.current;
    let currentPoint = 0;

    const moveBee = () => {
      if (currentPoint >= flightPath.length - 1) {
        setFlightPath(generateFlightPath());
        return;
      }

      const start = flightPath[currentPoint];
      const end = flightPath[currentPoint + 1];

      const dx = end.x - start.x;
      const dy = end.y - start.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const duration = distance / 200 + 0.5; // Adjusted for smoother motion

      const desiredAngle = (Math.atan2(dy, dx) * 180) / Math.PI;

      const lastRotation = lastRotationRef.current;
      const deltaRotation = desiredAngle - lastRotation;
      const shortestRotation = ((deltaRotation + 180) % 360) - 180;
      const smoothedRotation = lastRotation + shortestRotation * 0.5; // Smooth out rotation

      lastRotationRef.current = smoothedRotation;

      bee.style.transition = `transform ${duration}s cubic-bezier(0.4, 0, 0.2, 1)`;
      bee.style.transform = `translate(${end.x}px, ${end.y}px) rotate(${smoothedRotation}deg)`;

      currentPoint++;

      setTimeout(moveBee, duration * 1000);
    };

    moveBee();
  };

  useEffect(() => {
    setFlightPath(generateFlightPath());
  }, []);

  useEffect(() => {
    if (flightPath.length > 0) animateBee();
  }, [flightPath]);

  const calculateBeeSize = () => {
    const baseSize = 100; // Base size for a large screen
    const screenSizeFactor =
      Math.min(window.innerWidth, window.innerHeight) / 1000;
    return baseSize * screenSizeFactor;
  };

  const styles = {
    container: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100vh",
      pointerEvents: "none",
      zIndex: 50,
      overflow: "hidden",
    },
    bee: {
      position: "absolute",
      width: `${calculateBeeSize()}px`,
      height: `${calculateBeeSize()}px`,
      transformOrigin: "center",
      objectFit: "contain",
    },
    wing: {
      animation: "wing 0.5s infinite ease-in-out",
    },
  };

  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes wing {
            0%, 100% { transform: scaleX(1) scaleY(1); }
            50% { transform: scaleX(0.95) scaleY(0.95); }
          }
        `}
      </style>
      <img ref={beeRef} src="bee.png" alt="Flying bee" style={styles.bee} />
    </div>
  );
};

export default Bee;

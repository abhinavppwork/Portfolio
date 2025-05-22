import { useEffect } from "react";

const Particles = () => {
  useEffect(() => {
    particlesJS.load("particles-js", "/particles.json", () => {
      console.log("Particles.js config loaded");
    });
  }, []);

  return (
    <div
      id="particles-js"
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        zIndex: -1,
        top: 0,
        left: 0,
        background: "#000", // change as needed
      }}
    />
  );
};

export default Particles;

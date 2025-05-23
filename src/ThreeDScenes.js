import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const ThreeDScene = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <OrbitControls enableZoom={false} />
      <Sphere visible args={[1, 100, 100]} scale={1.5}>
        <MeshDistortMaterial
          color="#4caf50"
          attach="material"
          distort={0.3}
          speed={2}
        />
      </Sphere>
    </Canvas>
  );
};

export default ThreeDScene;

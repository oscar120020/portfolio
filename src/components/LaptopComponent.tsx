import { OrbitControls, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import * as THREE from "three";
import { LoadingModel } from "./ui/LoadingModel";
import { LaptopModel } from "./models/Laptop";

interface Props {
    image: string;
    autoRotate: boolean
}

export const LaptopComponent = ({image, autoRotate}: Props) => {
  return (
    <Canvas
      camera={{
        position: [0, 6, 25],
        fov: 65,
      }}
      gl={{
        outputEncoding: THREE.sRGBEncoding,
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 2.5,
      }}
    >
      <Suspense fallback={<LoadingModel/>}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          target={[0, 5, 1]}
          enablePan={false}
          autoRotate={autoRotate}
        />
        <LaptopModel image={image} />
      </Suspense>
      <pointLight position={[-10, 20, -10]} intensity={0.7} />
      <directionalLight position={[10, 10, 10]} intensity={1.3} color="#fff" />
      <ambientLight intensity={0.5} color="#fff" />
      <Preload all />
    </Canvas>
  );
};

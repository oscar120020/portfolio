import { OrbitControls, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import * as THREE from "three";
import { IpadModel } from "./models/Ipad";

interface Props {
    image: string;
    autoRotate: boolean
}

export const IpadComponent = ({image, autoRotate}: Props) => {
  return (
    <Canvas
      camera={{
        position: [0, 6, 25],
        fov: 60,
      }}
      gl={{
        outputEncoding: THREE.sRGBEncoding,
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 2.5,
      }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          target={[0, 12, 0]}
          enablePan={false}
          autoRotate={autoRotate}
        />
        <IpadModel image={image} />
      </Suspense>
      <pointLight position={[-10, 20, -10]} intensity={0.7} />
      <directionalLight position={[10, 10, 10]} intensity={1.3} color="#fff" />
      <ambientLight intensity={0.3} color="#fff" />
      <Preload all />
    </Canvas>
  );
};

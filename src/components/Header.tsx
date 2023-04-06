import { OrbitControls, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { LaptopModel } from "./Laptop";
import * as THREE from "three";
import { IpadModel } from "./Ipad";
import StarsCanvas from "./Stars";
import { github } from "../assets";
import { socialMedia } from "../constants";

export const Header = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className={`max-w-7xl p-6 flex flex-col justify-center items-center`}>
        <div>
          <h1
            className={`text-white text-[45px] text-center font-bold sm:leading-12 leading-[52px]`}
          >
            Hola, soy <span className="text-tertiary">Oscar Martinez</span>
          </h1>
          <p className={`text-white-100 text-[22px] text-center`}>
            Desarrollador Full-Stack
          </p>
        </div>
        <div className="flex gap-3 mt-3">
          {
            socialMedia.map(media => (
              <a
                key={media.url}
                href={media.url}
                target="_blank"
                className="w-[30px] h-[30px]"
              >
                <img src={media.icon} alt={media.name} />
              </a>
            ))
          }
        </div>
      </div>
    </div>
  );
};

{
  /* <div className="h-[800px] border-black">
        <Canvas
          camera={{
            position: [0, 6, 25],
            fov: 75,
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
            />
            <IpadModel />
          </Suspense>
          <pointLight
            position={[-10, 20, -10]}
            intensity={0.7}
          />
          <directionalLight
            position={[10, 10, 10]}
            intensity={1.3}
            color="#fff"
          />
          <ambientLight intensity={0.3} color="#fff" />
          <Preload all />
        </Canvas>
      </div>
      <div className="h-[800px]">
        <Canvas
          camera={{
            position: [0, 6, 25],
            fov: 75,
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
              target={[0, 5, 1]}
              enablePan={false}
            />
            <LaptopModel />
          </Suspense>
          <pointLight
            position={[-10, 20, -10]}
            intensity={0.7}
          />
          <directionalLight
            position={[10, 10, 10]}
            intensity={1.3}
            color="#fff"
          />
          <ambientLight intensity={0.5} color="#fff" />
          <Preload all />
        </Canvas>
      </div> */
}

import { OrbitControls, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { Suspense } from "react";
import * as THREE from 'three';
import { IpadModel } from "./Ipad";

export const ProjectModal = () => {
  return (
    <motion.div className="bg-blur fixed w-screen min-h-screen z-100 left-0 top-0 inset-0 flex justify-center items-center">
      <div className="xs:w-[85%] w-full lg:h-auto h-[85%] max-w-[1100px] mt-[68px] mx-5 bg-white overflow-y-scroll flex lg:flex-row flex-col-reverse">
        <div className="lg:w-[40%] w-full lg:h-[600px] h-[40%]">
          <p className="text-black">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
            excepturi, tempore dolorem consequatur ex ea neque nesciunt
            molestias saepe eligendi quasi sint quam aut accusamus a modi
            eveniet quis quod?
          </p>
        </div>
        <div className="lg:w-[60%] w-full lg:h-[600px] h-[60%]">
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
              />
              <IpadModel />
            </Suspense>
            <pointLight position={[-10, 20, -10]} intensity={0.7} />
            <directionalLight
              position={[10, 10, 10]}
              intensity={1.3}
              color="#fff"
            />
            <ambientLight intensity={0.3} color="#fff" />
            <Preload all />
          </Canvas>
        </div>
      </div>
    </motion.div>
  );
};

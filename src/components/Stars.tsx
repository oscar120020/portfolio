import { PointMaterial, Points, Preload } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

const Stars = () => {
  const ref = useRef<any>();
  const mousePos = useRef({
    x: 10,
    y: 10,
  });
  const sphere = random.inSphere(new Float32Array(2500), {radius: 1.1})
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mousePos.current = { x: event.clientX, y: event.clientY }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };
  }, []);

  useEffect(() => {
    setIsMobile(window.screen.width < 500)
  }, [])

  useFrame((state, delta) => {
    if (isMobile) {
      ref.current.rotation.x -= delta / 10; 
      ref.current.rotation.y -= delta / 15;
    } else {
      ref.current.rotation.x = -mousePos.current.x * 0.0006; 
      ref.current.rotation.y = -mousePos.current.y * 0.0006;
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
      >
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-full absolute z-[-1] inset-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
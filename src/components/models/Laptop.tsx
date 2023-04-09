import * as THREE from "three";
import { Html, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { GroupProps } from "@react-three/fiber";
import { chat_pc, icc_pc, shop_pc } from "../../assets";

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh;
    Plane005: THREE.Mesh;
    Plane005_1: THREE.Mesh;
    Plane007: THREE.Mesh;
    Plane007_1: THREE.Mesh;
    Screen: THREE.Mesh;
    Teclas: THREE.Mesh;
    Touchpad: THREE.Mesh;
    TouchpadBtns: THREE.Mesh;
  };
  materials: {
    grey: THREE.MeshStandardMaterial;
    Black: THREE.MeshStandardMaterial;
    Screen: THREE.MeshStandardMaterial;
    Keys: THREE.MeshStandardMaterial;
  };
};

interface Props extends GroupProps {
  image: string;
}

export const LaptopModel = ({image, ...props}: Props) => {
  const { nodes, materials } = useGLTF("./Laptop.glb") as GLTFResult;
  return (
    <group
      {...props}
      dispose={null}
      rotation={[0.1, 0, 0]}
      scale={0.7}
    >
      <group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={nodes.Cube.material}
          userData={{ name: "Cube" }}
        />
        <group userData={{ name: "Base" }}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane005.geometry}
            material={materials.grey}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane005_1.geometry}
            material={materials.Black}
          />
        </group>
        <group userData={{ name: "Tapa" }}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane007.geometry}
            material={materials.Black}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane007_1.geometry}
            material={materials.grey}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Screen.geometry}
          material={materials.Screen}
          userData={{ name: "Screen" }}
        >
            <Html
                transform
                occlude
                position={[0, 12.9, -5.38]}
                style={{
                    width: '914px',
                    height: '650px',
                    borderRadius: '25px 25px 10px 10px',
                    overflow: 'scroll',
                }}
                className="laptop-container"
            >   
                <img
                  src={image}
                  alt="page"
                  className="min-h-full min-w-full"
                />
            </Html>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Teclas.geometry}
          material={materials.Keys}
          userData={{ name: "Teclas" }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Touchpad.geometry}
          material={materials.Keys}
          userData={{ name: "Touchpad" }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TouchpadBtns.geometry}
          material={materials.Keys}
          userData={{ name: "TouchpadBtns" }}
        />
      </group>
    </group>
  );
};

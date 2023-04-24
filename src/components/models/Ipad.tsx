import * as THREE from "three";
import React from "react";
import { Html, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { GroupProps } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    aECxmXbZEIzGUHM: THREE.Mesh;
    WhlxbaYfsXeMUCt: THREE.Mesh;
    kyqgosGwBQpScsG: THREE.Mesh;
    mndrlEbtVdHhGMo: THREE.Mesh;
    nwcHCuwxdKpCgWo: THREE.Mesh;
    gdeJKIhJXINgrYh: THREE.Mesh;
    ArWKwJjfhxVbBMW: THREE.Mesh;
    ysTUozDdizWVQXV: THREE.Mesh;
    PIzugUUCVUOfcMk: THREE.Mesh;
    wAhMcFfKTtyzNzi: THREE.Mesh;
    QxDDcFPFhLQFsSG: THREE.Mesh;
    AqQKRyrpQwgBryg: THREE.Mesh;
    NgCgolCaNjqjcGZ: THREE.Mesh;
    kvzPWODtCYjxUHV: THREE.Mesh;
    nbwVSADQhYNDTpG: THREE.Mesh;
    LhdDpZTaoXzvEEj: THREE.Mesh;
    LzcuanfYWpHCipQ: THREE.Mesh;
    iXEWIfpTRTyEAmy: THREE.Mesh;
    kCmxqEsUEZeCgVi: THREE.Mesh;
    pEEytdBMnHnGyHf: THREE.Mesh;
    WjRjdgofilNQBSw: THREE.Mesh;
    azGKOzbkDXvKAGK: THREE.Mesh;
    KrwCNcMwboPgCok: THREE.Mesh;
    PAAoyRECyjFHYme: THREE.Mesh;
    ajubXvpUTWnWmDu_0: THREE.Mesh;
    gHBUFtXsGrwMOmY: THREE.Mesh;
    fHauwxoIEFKtvOx: THREE.Mesh;
    mTkNfzhZGYVeHtw: THREE.Mesh;
    WYHnWFgKtNXpiYQ: THREE.Mesh;
    tWPGnTQcSWOELFw: THREE.Mesh;
    OUJxSIJrLYNmldQ: THREE.Mesh;
    uEpLYkIjrrbqcef: THREE.Mesh;
    pZOyelrgjGrmZfx: THREE.Mesh;
    arETawMxPjZCMEa: THREE.Mesh;
    MdhDahfMTHTMOnv: THREE.Mesh;
    CIKmzlWHngmAoKr: THREE.Mesh;
  };
  materials: {
    gOzKWfldoAhClOI: THREE.MeshStandardMaterial;
    isbqkijGoNYDTxF: THREE.MeshStandardMaterial;
    qlZPKxBFgZdoAjL: THREE.MeshStandardMaterial;
    TMaMJjIPkqFqacG: THREE.MeshStandardMaterial;
    lIbmhnHcRxCyKTH: THREE.MeshStandardMaterial;
    JQuejxSwmuFbDqi: THREE.MeshStandardMaterial;
    LmzdlAXwDtjIPEa: THREE.MeshStandardMaterial;
    yaLBQePStnlbxkc: THREE.MeshStandardMaterial;
    qPdRArWhuRLRGFi: THREE.MeshStandardMaterial;
    gABZztNTvVoXmXc: THREE.MeshStandardMaterial;
    xiLgcDwUCBmXkPy: THREE.MeshStandardMaterial;
    fxxucOdZGHHXkYk: THREE.MeshStandardMaterial;
    yOrtZNlfOvvxPSM: THREE.MeshStandardMaterial;
    TTqkrhlXHkdrldy: THREE.MeshStandardMaterial;
    vVXWFKSmigZlowN: THREE.MeshStandardMaterial;
    qQZEgslfSFKUScB: THREE.MeshStandardMaterial;
    eTUqMdUiJziCRoV: THREE.MeshStandardMaterial;
    yRJLRfFCjLbxLIu: THREE.MeshStandardMaterial;
    WiLZDKmGOAGYwwJ: THREE.MeshStandardMaterial;
    jypBaSgBJwGTeBs: THREE.MeshStandardMaterial;
    oXLVwLNmHxoKxYU: THREE.MeshStandardMaterial;
    oScFSXJqbuAqAHZ: THREE.MeshStandardMaterial;
  };
};

interface Props extends GroupProps{
  image: string;
}

export const IpadModel = ({image, ...props}: Props) => {
  const { nodes, materials } = useGLTF("/ipad_7.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group
        name="Sketchfab_model"
        rotation={[-Math.PI / 2, 0, 0]}
        scale={95}
      >
        <group name="USDRoot" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            name="aECxmXbZEIzGUHM"
            castShadow
            receiveShadow
            geometry={nodes.aECxmXbZEIzGUHM.geometry}
            material={materials.gOzKWfldoAhClOI}
          >
            <Html
                transform
                occlude
                position={[0, 12.54, 0.15]}
                style={{
                    backgroundColor: 'white',
                    width: '622px',
                    height: '828px',
                    overflow: 'scroll',
                }}
                className="laptop-container"
            >
                <img src={image} alt="page" className="min-w-full min-h-full" />
            </Html>
          </mesh>
          <mesh
            name="WhlxbaYfsXeMUCt"
            castShadow
            receiveShadow
            geometry={nodes.WhlxbaYfsXeMUCt.geometry}
            material={materials.isbqkijGoNYDTxF}
          />
          <mesh
            name="kyqgosGwBQpScsG"
            castShadow
            receiveShadow
            geometry={nodes.kyqgosGwBQpScsG.geometry}
            material={materials.qlZPKxBFgZdoAjL}
          />
          <mesh
            name="mndrlEbtVdHhGMo"
            castShadow
            receiveShadow
            geometry={nodes.mndrlEbtVdHhGMo.geometry}
            material={materials.isbqkijGoNYDTxF}
          />
          <mesh
            name="nwcHCuwxdKpCgWo"
            castShadow
            receiveShadow
            geometry={nodes.nwcHCuwxdKpCgWo.geometry}
            material={materials.TMaMJjIPkqFqacG}
          />
          <mesh
            name="gdeJKIhJXINgrYh"
            castShadow
            receiveShadow
            geometry={nodes.gdeJKIhJXINgrYh.geometry}
            material={materials.lIbmhnHcRxCyKTH}
          />
          <mesh
            name="ArWKwJjfhxVbBMW"
            castShadow
            receiveShadow
            geometry={nodes.ArWKwJjfhxVbBMW.geometry}
            material={materials.qlZPKxBFgZdoAjL}
          />
          <mesh
            name="ysTUozDdizWVQXV"
            castShadow
            receiveShadow
            geometry={nodes.ysTUozDdizWVQXV.geometry}
            material={materials.isbqkijGoNYDTxF}
          />
          <mesh
            name="PIzugUUCVUOfcMk"
            castShadow
            receiveShadow
            geometry={nodes.PIzugUUCVUOfcMk.geometry}
            material={materials.JQuejxSwmuFbDqi}
          />
          <mesh
            name="wAhMcFfKTtyzNzi"
            castShadow
            receiveShadow
            geometry={nodes.wAhMcFfKTtyzNzi.geometry}
            material={materials.LmzdlAXwDtjIPEa}
          />
          <mesh
            name="QxDDcFPFhLQFsSG"
            castShadow
            receiveShadow
            geometry={nodes.QxDDcFPFhLQFsSG.geometry}
            material={materials.yaLBQePStnlbxkc}
          />
          <mesh
            name="AqQKRyrpQwgBryg"
            castShadow
            receiveShadow
            geometry={nodes.AqQKRyrpQwgBryg.geometry}
            material={materials.qPdRArWhuRLRGFi}
          />
          <mesh
            name="NgCgolCaNjqjcGZ"
            castShadow
            receiveShadow
            geometry={nodes.NgCgolCaNjqjcGZ.geometry}
            material={materials.gABZztNTvVoXmXc}
          />
          <mesh
            name="kvzPWODtCYjxUHV"
            castShadow
            receiveShadow
            geometry={nodes.kvzPWODtCYjxUHV.geometry}
            material={materials.qPdRArWhuRLRGFi}
          />
          <mesh
            name="nbwVSADQhYNDTpG"
            castShadow
            receiveShadow
            geometry={nodes.nbwVSADQhYNDTpG.geometry}
            material={materials.qPdRArWhuRLRGFi}
          />
          <mesh
            name="LhdDpZTaoXzvEEj"
            castShadow
            receiveShadow
            geometry={nodes.LhdDpZTaoXzvEEj.geometry}
            material={materials.xiLgcDwUCBmXkPy}
          />
          <mesh
            name="LzcuanfYWpHCipQ"
            castShadow
            receiveShadow
            geometry={nodes.LzcuanfYWpHCipQ.geometry}
            material={materials.xiLgcDwUCBmXkPy}
          />
          <mesh
            name="iXEWIfpTRTyEAmy"
            castShadow
            receiveShadow
            geometry={nodes.iXEWIfpTRTyEAmy.geometry}
            material={materials.xiLgcDwUCBmXkPy}
          />
          <mesh
            name="kCmxqEsUEZeCgVi"
            castShadow
            receiveShadow
            geometry={nodes.kCmxqEsUEZeCgVi.geometry}
            material={materials.xiLgcDwUCBmXkPy}
          />
          <mesh
            name="pEEytdBMnHnGyHf"
            castShadow
            receiveShadow
            geometry={nodes.pEEytdBMnHnGyHf.geometry}
            material={materials.fxxucOdZGHHXkYk}
          />
          <mesh
            name="WjRjdgofilNQBSw"
            castShadow
            receiveShadow
            geometry={nodes.WjRjdgofilNQBSw.geometry}
            material={materials.yOrtZNlfOvvxPSM}
          />
          <mesh
            name="azGKOzbkDXvKAGK"
            castShadow
            receiveShadow
            geometry={nodes.azGKOzbkDXvKAGK.geometry}
            material={materials.JQuejxSwmuFbDqi}
          />
          <mesh
            name="KrwCNcMwboPgCok"
            castShadow
            receiveShadow
            geometry={nodes.KrwCNcMwboPgCok.geometry}
            material={materials.TTqkrhlXHkdrldy}
          />
          <mesh
            name="PAAoyRECyjFHYme"
            castShadow
            receiveShadow
            geometry={nodes.PAAoyRECyjFHYme.geometry}
            material={materials.vVXWFKSmigZlowN}
          />
          <mesh
            name="ajubXvpUTWnWmDu_0"
            castShadow
            receiveShadow
            geometry={nodes.ajubXvpUTWnWmDu_0.geometry}
            material={materials.JQuejxSwmuFbDqi}
          />
          <mesh
            name="gHBUFtXsGrwMOmY"
            castShadow
            receiveShadow
            geometry={nodes.gHBUFtXsGrwMOmY.geometry}
            material={materials.TTqkrhlXHkdrldy}
          />
          <mesh
            name="fHauwxoIEFKtvOx"
            castShadow
            receiveShadow
            geometry={nodes.fHauwxoIEFKtvOx.geometry}
            material={materials.vVXWFKSmigZlowN}
          />
          <mesh
            name="mTkNfzhZGYVeHtw"
            castShadow
            receiveShadow
            geometry={nodes.mTkNfzhZGYVeHtw.geometry}
            material={materials.yOrtZNlfOvvxPSM}
          />
          <mesh
            name="WYHnWFgKtNXpiYQ"
            castShadow
            receiveShadow
            geometry={nodes.WYHnWFgKtNXpiYQ.geometry}
            material={materials.qQZEgslfSFKUScB}
          />
          <mesh
            name="tWPGnTQcSWOELFw"
            castShadow
            receiveShadow
            geometry={nodes.tWPGnTQcSWOELFw.geometry}
            material={materials.eTUqMdUiJziCRoV}
          />
          <mesh
            name="OUJxSIJrLYNmldQ"
            castShadow
            receiveShadow
            geometry={nodes.OUJxSIJrLYNmldQ.geometry}
            material={materials.yRJLRfFCjLbxLIu}
          />
          <mesh
            name="uEpLYkIjrrbqcef"
            castShadow
            receiveShadow
            geometry={nodes.uEpLYkIjrrbqcef.geometry}
            material={materials.WiLZDKmGOAGYwwJ}
          />
          <mesh
            name="pZOyelrgjGrmZfx"
            castShadow
            receiveShadow
            geometry={nodes.pZOyelrgjGrmZfx.geometry}
            material={materials.jypBaSgBJwGTeBs}
          />
          <mesh
            name="arETawMxPjZCMEa"
            castShadow
            receiveShadow
            geometry={nodes.arETawMxPjZCMEa.geometry}
            material={materials.JQuejxSwmuFbDqi}
          />
          <mesh
            name="MdhDahfMTHTMOnv"
            castShadow
            receiveShadow
            geometry={nodes.MdhDahfMTHTMOnv.geometry}
            material={materials.oXLVwLNmHxoKxYU}
          />
          <mesh
            name="CIKmzlWHngmAoKr"
            castShadow
            receiveShadow
            geometry={nodes.CIKmzlWHngmAoKr.geometry}
            material={materials.oScFSXJqbuAqAHZ}
          />
        </group>
      </group>
    </group>
  );
}

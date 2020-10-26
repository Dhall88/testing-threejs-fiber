import React, { Suspense, useRef } from "react";
import { Canvas, useLoader, useFrame, extend, useThree } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import "./style.css";
import Block from "./components/Block";

function Loading() {
  return (
    <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <sphereGeometry attach="geometry" args={[1, 16, 16]} />
      <meshStandardMaterial
        attach="material"
        color="white"
        transparent
        opacity={0.6}
        roughness={1}
        metalness={0}
      />
    </mesh>
  );
}

function ArWing() {
  const group = useRef();
  console.log(group)
  const { nodes } = useLoader(GLTFLoader, "./models/arwing.glb");
  // console.log('weeee')
  useFrame(() => {
    group.current.rotation.y += 0.004;
  });
  return (
    <group ref={group}>
      <mesh visible geometry={nodes.Default.geometry}>
        <meshStandardMaterial
          attach="material"
          color="white"
          roughness={0.3}
          metalness={0.3}
        />
      </mesh>
    </group>
  );
}

// function Sphere() {
//   return (
//     <mesh visible position={[0,0,0]} rotation={[0, 0, 0]} castShadow>
//       <boxGeometry attach="geometry" args={[1, 1, 1]} />
//       <meshBasicMaterial
//         attach="material"
//         color="white"
//         roughness={0.1}
//         metalness={1}
//       />
//     </mesh>
//   );
// }

  // function Block() {
  //   return (
  //     <mesh
  //       visible
  //       userData={{ test: "hello" }}
  //       position={[0, 0, 0]}
  //       rotation={[0, 0, 0]}
  //       castShadow
  //     >
  //       <boxGeometry attach="geometry" args={[5, 16, 16]} />
  //       <meshStandardMaterial
  //         attach="material"
  //         color="white"
  //         transparent
  //         roughness={0.1}
  //         metalness={0.1}
  //       />
  //     </mesh>
  //   );
  // }


export default function App() {
  let map=[], result=[], key=0;
  for(let i = -5; i<5; i++) {
    for(let j = -10; j<10; j++) {
      map.push(<Block key = {key} coords={[i,-3,j]} color="green" />)
      key++;
    }
  }
  // console.log(<Canvas></Canvas>)
  return (
    <>
      <Canvas 
      style={{ background: "#171717" }}
      camera={{ position: [0, 0, 1] }}>
        <directionalLight intensity={0.5} />
        <Suspense fallback={<Loading />}>
          {/* <ArWing /> */}

          {map}

          {/* <Block key = {1} coords={[0,-3,0]} color="green" /> */}
        </Suspense>
      </Canvas>
    </>
    // <Block />
  );
}

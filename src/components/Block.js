import React, {useRef} from "react";
import ReactDOM from "react-dom";
import { Canvas, useLoader, useFrame } from "react-three-fiber";

// import "./style.css";

// function Light({ brightness, color }) {
//   return (
//     <rectAreaLight
//       width={3}
//       height={3}
//       color={color}
//       intensity={brightness}
//       position={[-2, 0, 5]}
//       lookAt={[0, 0, 0]}
//       penumbra={1}
//       castShadow
//     />
//   );
// }

export default function Block(props) {
    const group = useRef();
    console.log(group)
    useFrame(() => {
        group.current.rotation.y -= 0.004;
      });
    return (
        <group ref={group}>
      <mesh visible position={[props.coords[0],props.coords[1],props.coords[2]]} rotation={[0, 0, 0]} castShadow>
        <boxGeometry attach="geometry" args={[1, 1, 1]} />
        <meshBasicMaterial
          attach="material"
          color={props.color}
          roughness={0.1}
          metalness={1}
        />
      </mesh>
      </group>
    );
  }
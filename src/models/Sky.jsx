import React from "react";
import { useFrame } from "@react-three/fiber";


const Sky = () => {
  const skyRef = useRef();

  useFrame(() => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.15 * delta
    }
  })
  
  return (
    <mesh>
      <primitive object={nodes.Body17} />
    </mesh>
  );
}

export default Sky;
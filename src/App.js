import React, { useState, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Canvas, useRender , extend} from "react-three-fiber";
import { OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import { useSpring, a } from "react-spring/three";

extend({OrbitControls});
const Box = () => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const props = useSpring({
    scale: active ? [1.5,1.5,1.5]: [1,1,1],
    color: hovered ? "hotpink" : "gray"
  })
  useRender(() => {
    meshRef.current.rotation.y += 0.05
  })
  return (
    <a.mesh
    ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setActive(!active)}
      scale={props.scale}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <a.meshBasicMaterial
        attach="material"
        color={props.color}
      />
    </a.mesh>
  );
};
function App() {
  return (
      <Canvas>
        <Box />
      </Canvas>
  );
}

export default App;

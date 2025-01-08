import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { Suspense } from "react";
import { PerspectiveCamera } from "@react-three/drei";

interface Props {
  x: number;
  y: number;
  z: number;
  initialPos: number[];
}

const Scene = ({ x, y, z, initialPos }: Props) => {
  {
    /* Ref Effect */
  }

  {
    /* Loading GLTF */
  }
  const gltf = useLoader(GLTFLoader, "../../models/final-scene.gltf");
  console.log("Scene Loaded");

  return (
    <>
      <PerspectiveCamera
        position={[initialPos[0], initialPos[1], initialPos[2]]}
      />
      <Suspense fallback={<boxGeometry />}>
        <mesh position={[x, y, z]} receiveShadow>
          <primitive object={gltf.scene} scale={0.5} />
        </mesh>
      </Suspense>
    </>
  );
};
Scene.defaultProps = {
  x: 0,
  y: 0,
  z: 0,
  initialPos: [0, 0, 0],
};

export default Scene;

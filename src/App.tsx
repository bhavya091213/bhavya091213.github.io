import { Canvas } from "@react-three/fiber";
import "./App.css";
import Scene from "./models/scene";
import Name from "./models/Name";
import { Suspense } from "react";
import MainButtons from "./components/MainButtons";
import LoadingAnimation from "./components/LoadingAnimation";
import { Stats } from "@react-three/drei";
function App() {
  {
    /*Possibly have it so a state controlsl the useEffect*/
  }
  const mainCameraPos = [0, 5.5, 7.5];
  return (
    <>
      <Suspense fallback={<LoadingAnimation />}>
        <Canvas
          camera={{
            position: [mainCameraPos[0], mainCameraPos[1], mainCameraPos[2]],
          }}
          style={{ width: `100%`, height: `auto`, position: `relative` }}
          shadows
        >
          {/* Meshes */}
          <Scene x={0} y={0} z={0} initialPos={mainCameraPos} />
          <Name name="BHAVYA PATEL" x={0} y={4.5} z={-2} size={1} />
          <Name name="PORTFOLIO" x={0} y={3.3} z={-1.5} size={1.5} />
          <MainButtons />
          <Stats showPanel={3} className="stats" />
        </Canvas>
      </Suspense>
    </>
  );
}

export default App;

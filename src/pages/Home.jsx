import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";

import Building from "../models/building";
import { Sky } from "@react-three/drei";
import HomeInfo from "../components/HomeInfo";

const Home = () => {
    const [isRotating, setIsRotating] = useState(false); 
    const [currentStage, setCurrentStage] = useState(1);

    const adjustBuildingForScreenSize = () => {
        let screenScale = null;
        let screenPosition = [-0.2, -1.5, -5];
        let rotation = [0.7, 0.1, 0];

        if (window.innerWidth < 768) {
            screenScale = [0.9,0.9,0.9];
        } else {
            screenScale = [1,1,1];
        }

        return [screenScale, screenPosition, rotation]
    }

    const [isbuildingScale, buildingPosition, buildingrotation] = adjustBuildingForScreenSize();

    return (
        <section className="w-full h-screen relative">
        <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
            {currentStage && <HomeInfo currentStage={currentStage} />}
        </div>


            <Canvas className={`w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing" : "cursor-grab"}`} camera={{ near: 0.1, far: 1000 }}>
                <Suspense fallback={<Loader/>}>
                    <directionalLight position={[-0.5,1,1]} intensity={2} />
                    <ambientLight intensity={0.5}/>
                    <hemisphereLight skyColor="#ble1ff" groundColor="#000000" intensity={1}/>

                    <Sky isRotating={isRotating}/>
                    <Building 
                        position={buildingPosition}
                        scale={isbuildingScale}
                        rotation={buildingrotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                        setCurrentStage={setCurrentStage}
                    />
                </Suspense>
            </Canvas>
        </section>
    )
}

export default Home
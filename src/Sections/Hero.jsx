import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import HackerRoom from "../Components/HackerRoom";
import CanvasLoader from "../Components/CanvasLoader";

import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../Constansts";
import Target from "../Components/Target";
import ReactLogo from "../Components/ReactLogo";
import Cube from "../Components/Cube";
import Rings from "../Components/Ring";
import Ring from "../Components/Ring";
import HeroCamera from "../Components/HeroCamera";
import Button from "../Components/Button";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className=" w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Mushfiq <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Building Products & Brands
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        {/* <Leva/>  */}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 25]} />
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                // scale={2}
                // position={[0,0,0]}
                // rotation={[0,280,0]}
                position={sizes.deskPosition}
                rotation={[0, -5.8, 0]}
                scale={sizes.deskScale}
              />
            </HeroCamera>
            <group>
              <Target position={sizes.targetPosition}/>
              <ReactLogo position={sizes.reactLogoPosition}/>
              <Cube position={sizes.cubePosition}/>
              <Ring position={sizes.ringPosition}/>
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about"className="w-fit">
          <Button name="Let's work together" isBeam containerClass='sm:w-fit w-full sm:min-w-96' />
        </a>
      </div>
    </section>
  );
};

export default Hero;

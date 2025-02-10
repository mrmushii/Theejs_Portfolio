import React, { Suspense, useState } from 'react'
import { myProjects } from '../Constansts'
import { Canvas } from '@react-three/fiber'
import { Center, OrbitControls } from '@react-three/drei'
import CanvasLoader from '../Components/CanvasLoader'
import { Group } from 'three/examples/jsm/libs/tween.module.js'
import DemoComputer from '../Components/DemoComputer'

const projectCount = myProjects.length

const Projects = () => {
  const [selectedProjectIndex, setselectedProjectIndex] = useState(0)
  const currentProjects = myProjects[selectedProjectIndex]
  const handleNavigation = (direction) => {
    setselectedProjectIndex((prevIndex) => {
      if(direction === 'previous'){
        return prevIndex === 0 ? projectCount -1 : prevIndex - 1
      } else{
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1
      }
    })
  }

  return (
    <section className='c-space my-20'>
      <p className='head-text'>My Work</p>
      <div className='grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full'>
        <div className='flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200'>
          <div className='absolute top-0 right-0'>
            <img src={currentProjects.spotlight} alt=""  className='w-full h-96 object-cover rounded-xl'/>
          </div>
          <div className='p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg' style={currentProjects.logoStyle}>
            <img src={currentProjects.logo} alt="" className='w-10 bg-cover h-10 shadow-sm' />
          </div>
          <div className='flex flex-col text-white-600 my-5'>
            <p className='text-white text-2xl font-semibold animatedText'>{currentProjects.title}</p>
            <p className='animatedText'>{currentProjects.subdesc}</p>

          </div>
          <div className='flex items-center justify-between flex-wrap gap-5'>
            <div className='flex items-center gap-3'>
              {currentProjects.tags.map((tag, index) =>(
                <div key={index} className='tech-logo'>
                  <img src={tag.path} alt="" />
                </div>
              ))}
            </div>
            <a href={currentProjects.href && currentProjects.href} className='flex items-center gap-2 cursor-pointer text-white-600'
            target='_blank' rel='noreferrer'>
              <p>Check GitHub Repo</p>
              <img src="/assets/arrow-up.png" alt="" className='w-3 h-3 cursor-pointer' />
            </a>
          </div>
          <div className='flex justify-between items-center mt-7'>
            <button className='arrow-btn' onClick={()=>handleNavigation('previous')}>
              <img src="/assets/left-arrow.png" alt=""  className='w-4 h-4'/>
            </button>
            <button className='arrow-btn' onClick={()=>handleNavigation('next')}>
              <img src="/assets/right-arrow.png" alt=""  className='w-4 h-4'/>
            </button>
          </div>
        </div>

        <div className='border border-black-300 bg-black-200 rounded-lgh96 md:h-full'>
          <Canvas>
              <ambientLight intensity={Math.PI}/>
              <directionalLight position={[10,10,5]}/>
              <Center>
                <Suspense fallback={<CanvasLoader/>}>
                <group scale={2} position={[0,-3,0]} rotation={[0,-.1,0]}>
                  <DemoComputer texture={currentProjects.texture}/>
                </group>

                </Suspense>
              </Center>
              <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false}/>
          </Canvas>
        </div>
      </div>
    </section>
  )
}

export default Projects
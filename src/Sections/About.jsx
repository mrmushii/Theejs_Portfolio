import React, { useState } from 'react'
import Globe from 'react-globe.gl'
import { color } from 'three/tsl'
import Button from '../Components/Button'

const About = () => {
  const [hasCopied, sethasCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(
      'mushfiq2808@gmail.com'
    );
    sethasCopied(true)
    setTimeout(() => {
      sethasCopied(false)
    }, 2000);
  }
  return (
    <section className='c-space my-20' id='about'>
      <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
      <div className='col-span-1 xl:row-span-3'>
        <div className='grid-container'>
          <img src="/assets/grid1.png" alt="" />
          <div>
          <p className='grid-headtext'>Hi, I'm Mushfiq</p>
          <p className='grid-subtext'>with 2 years of experience, I have honed my skills in frontend and backend developement, with a focus on animated 3D websites.</p>
          </div>
        </div>
        
      </div>
      <div className='col-span-1 xl:row-span-3'>
        <div className='grid-container'>
        <img src="/assets/grid2.png" alt="" className='w-full sm:w-[276px] h-fit object-contain' />
        <div>
          <p className='grid-headtext'>Tech Stack</p>
          <p className='grid-subtext'>I specialize in Javascript with a focus on React and Next.js ecosystem.</p>
        </div>
        </div>
      </div>
      <div className='col-span-1 xl:row-span-4'>
        <div className='grid-container'>
          <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
          <Globe height={326}
           width={326}
           backgroundColor='rgba(0,0,0,0)'
           backgroundImageOpacity={.8}
           showAtmosphere
           
           globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
           bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
           labelsData={[{
            lat:22.365713,lng:91.818649,
            text: "I'm here!",
            color:'white',
            size:60,
           }]}  
           />
          </div>
          <div>
            <p className='grid-headtext'>I work remotely accross most timezone.</p>
            <p className='grid-subtext'>I,m based in Bangladesh, with remote work available.</p>
            <Button name='Contact Me' isBeam containerClass='w-full mt-10'/>
          </div>
        </div>
      </div>

      <div className='xl:col-span-2 xl:row-span-3'>
           <div className='grid-container'>
            <img src="/assets/grid3.png" alt="" className='w-full sm:h-[266px] h-fit object-contain' />
            <div>
              <p className='grid-headtext'>My Passion for  Coding</p>
              <p className='grid-subtext'>I love solving problems and building projects through code. Coding isn't just my profession- it is my passion.</p>
            </div>
           </div>
      </div>
      <div className='xl:col-span-1 xl:row-span-2'>
        <div className='grid-container'>
          <img src="/assets/grid4.png" alt=""  className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top'/>
          <div className='space-y-2'>
            <p className='grid-subtext text-center'>Contact me</p>
            <div className='copy-container  ontainer' onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="" />
                <p className='lg:text-xl md:text-lg font-medium text-gray_gradient text-white'>mushfiq2808@gmail.com</p>
            </div>  
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default About
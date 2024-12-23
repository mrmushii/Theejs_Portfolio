import React from 'react'
import { clientReviews } from '../Constansts'

const Clients = () => {
  return (
    <section className='c-space my-20' id='clients'>
      <h3 className='head-text'>Hear from My clients</h3>

      <div className='client-container'>
        {clientReviews.map(({id, name, review, img, position})=>(
          <div key={id} className='client-review'>
            <div>
              <p className='text-white font-light'>{review}</p>
              <div className='client-content'>
                <div className='flex gap-3'>
                  <img src={img} alt="" className='w-12 h-12 rounded-full blur-sm' />
                  <div className='flex flex-col'>
                    <p className='font-semibold text-white-800'>{name}</p>
                    <p className='text-white-500 md:text-base text-sm'>
                      {position}
                    </p>
                  </div>
                </div>

                <div className='flex self-end items-center gap-2'>
                  {Array.from({
                    length:5,
                  }).map((_,index)=>(
                    <img src='/assets/star.png' key={index} alt="" className='w-5 h-5' />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Clients
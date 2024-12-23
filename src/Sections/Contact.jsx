import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

  const formRef = useRef()
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = ({target:{name,value}}) =>{
    setForm({...form,[name]:value})
  }

  //service_9nthpb9
  const handleSubmit = async (e) =>{
    e.preventDefault();
    setLoading(true)
    try{
      await emailjs.send('service_9nthpb9','template_vgq6idc',{
        from_name: form.name,
        to_name: 'Mushfiq',
        to_email:'mushfiq2808@gmail.com',
        message: form.message
      },'xJsFs8aUyHFi8YUb_')

      setLoading(false)
      alert('Your message has been sent!')
      setForm({
        name: '',
        email: '',
        message: '',
      })
    } catch(error){
      setLoading(false)
      console.log(error);

      alert('Something went wrong!')
      
    }
    
  }

  return (
    <section className='c-space my-20' id='contact'>
      <div className='relative min-h-screen flex items-center justify-center flex-col'>
        <img src="/assets/terminal.png" alt="" className='absolute inset-0 min-h-screen' />
        <div className='contact-container'>
        <h3 className='head-text'>Let's talk</h3>
        <p className='text-lg text-white-600 mt-3'>
          Whether you're looking to build a new website, improve your existing platform, or bring a unique project to life, I'm here to help
        </p>
        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7'>
          <label className='space-y-3'>
            <span className='field-label'>Full Name</span>
            <input type="text"
            name='name'
            value={form.value}
            onChange={handleChange}
            required
            className='field-input'
            placeholder='John Cena' />
          </label>
          <label className='space-y-3'>
            <span className='field-label'>Email</span>
            <input type="email"
            name='email'
            value={form.value}
            onChange={handleChange}
            required
            className='field-input'
            placeholder='johncena@gmail.com' />
          </label>
          <label className='space-y-3'>
            <span className='field-label'>Your Message</span>
            <textarea type='text' 
            name='message'
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className='field-input'
            placeholder="Hi, I'm interested in..." />
          </label>
          <button className='field-btn' type='submit' disabled={loading}>{loading? 'Sending...' : 'Send Message'}
            <img src="/assets/arrow-up.png" alt="" className='field-btn_arrow' />
          </button>
        </form>
        </div>
      
      </div>
    </section>
  )
}

export default Contact
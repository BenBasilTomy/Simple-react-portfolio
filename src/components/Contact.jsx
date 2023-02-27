import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <form method='POST' action="https://getform.io/f/b46f4771-fbba-4d26-954f-02efc04fed17" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
              <br></br>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                {/*<p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - myemail@gmail.com</p>*/}
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Your Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Send message</button>
        </form>
    </div></div>
  )
}

export default Contact
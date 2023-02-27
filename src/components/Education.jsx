import React from 'react';
import WorkImg from '../assets/workImg.jpeg';
import realEstate from '../assets/realestate.jpg';
import {BsPatchCheckFill} from 'react-icons/bs'

const Education = () => {
  return (
    <div name='education' className='shadow-md shadow-[#040c16] '>  
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'> 
      <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Education</p>
      </div>
        <div className="container experience__container text-gray-400">
            <div className="experience_frontend">
                
                    <div className="experience__backend">
                        <article className='experience__details'>
                            <BsPatchCheckFill />
                            <b>MCA</b><br></br>
                            <small className='text-lght'>2021-2023</small><br></br>
                            <small className='text-lght'>Mar Athanasius College of Engineering,<br></br>Kothamangalam</small>
                        </article>
                        <br></br>
                        <article className='experience__details'>
                            <BsPatchCheckFill />
                            <b>BCA</b><br></br>
                            <small className='text-lght'>2018-2021</small><br></br>
                            <small className='text-lght'>Baselios Poulose II Catholicos College,<br></br>Piravom</small>
                        </article>
                        <br></br>
                        <article className='experience__details'>
                            <BsPatchCheckFill />
                            <b>Plus Two</b><br></br>
                            <small className='text-lght'>2018</small><br></br>
                            <small className='text-lght'>Nirmala Public School,<br></br>Muvattupuzha</small>
                        </article>
                        
                    </div>
               
            </div>
        </div>
       </div></div>
  );
};

export default Education;

import { infoList } from '@/assets/assets'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10
    scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
      <h2 className='text-center text-5xl font-Ovo'>About Me</h2>

       <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
           <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
            <Image src={assets.user_image} alt='user'  className ='w-full rounded-3xl'/>
           </div>

           <div className='flex-1'>
            <p className='m-10 max-w-2xl font-Ovo'>
               I am an enthusiastic and dedicated undergraduate in Information
 Technology at the University of Moratuwa, driven by a passion for
 innovation and continuous learning. With strong confidence,
 adaptability, and leadership skills, I approach complex challenges
 creatively and collaboratively. I have hands-on knowledge of
 technologies such as .NET, Angular, MySQL, C, and Java. I am eager
 to apply my technical expertise, contribute to impactful projects, and
 further develop my professional skills through a software engineering
 internship in a dynamic IT environment.

            </p>

            <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'> 
              {infoList.map(({icon,iconDark,title,description},index)=>(
                <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer'
                key={index}>
                  <Image src

              )}

            </ul>
            
           </div>
       </div>
  
    </div>
  )
}

export default About

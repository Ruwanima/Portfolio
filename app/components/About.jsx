import React from 'react'
import Image from 'next/image'
import { infoList, assets, toolsData } from '@/assets/assets'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
      <h2 className='text-center text-5xl font-Ovo'>About Me</h2>

      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        {/* Profile Image */}
        <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
          <Image 
            src={assets.user_image} 
            alt='user'  
            className='w-full rounded-3xl' 
            priority
          />
        </div>

        {/* About Content */}
        <div className='flex-1'>
          <p className='m-10 max-w-2xl font-Ovo text-gray-700 leading-relaxed'>
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

          {/* Info List */}
          <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'> 
            {infoList.map(({ icon, title, description }, index) => (
              <li 
                key={index}
                className='border border-gray-300 rounded-xl p-6 cursor-pointer 
                hover:bg-lightHover hover:-translate-y-1 duration-500 shadow-sm shadow-blac/30k'
              >
                <Image src={icon} alt={title} className='w-7 mt-3' />
                <h3 className='my-4 font-semibold text-gray-800'>{title}</h3>
                <p className='text-gray-600 text-sm'>{description}</p>
              </li>
            ))}
          </ul>

              <h4 className='my-6 text-gray-700 font-Ovo'>Tools I use</h4>

              <ul className='flex items-center gap-3 sm:gap-5'>
                {toolsData.map((tool,index) => (
                  <li key={index} className='flex items-center justify-center
                  w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg
                  cursor-pointer hover:-translate-y-1 duration-500'>
                    <Image src={tool} alt='Tool' className='w-5 sm:w-7 h-6' />
                    <span className='ml-2 text-gray-700'>{tool.name}</span>
                  </li>
                ))}
              </ul>


        </div>
      </div>
    </div>
  )
}

export default About

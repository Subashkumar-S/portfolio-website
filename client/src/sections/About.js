import React from 'react'
import Button from '../components/Button'
import aboutImage from "../assets/person.png"
import Skills from '../components/Skills'
import Tools from '../components/Tools'


const About = ({color}) => {
  const resumeDownloadLink = '/assets/Subashkumar_S_Resume.pdf';
  return (
    <section id='about' className='flex flex-col w-full min-h-screen justify-center items-center gap-8 text-primary-white bg-active-black py-[10vh] px-[10vw]'>
      <div className='flex items-center justify-center flex-col lg:gap-20 lg:flex-row '>
        <img src={aboutImage} alt="person"  height={300} width={300}/>
        <div className='flex flex-col gap-4 lg:w-1/2  lg:md-40 flex-1'>
          <h3 className='text-4xl font-montserrat font-bold'><span style={{ color }}>About </span> me,</h3>
          <p className='text-xl font-semi-bold font-palanquin'>
            Hi, I'm Subashkumar. I recently graduated with a Bachelor's degree in Information Technology
             from University College Of Engineering, BIT Campus, Tiruchirappalli. 
          </p>
          <p className='text-xl font-semi-bold font-palanquin'>
            I'm a passionate and aspiring software developer with a curiosity for creating innovative
            solutions that make a difference. As someone who's constantly fascinated by the world of technology,
          </p>
          <Button color={color} downloadLink={resumeDownloadLink}>Resume</Button>
        </div>
        
      </div>
      <Skills color={color} />
      <Tools color={color} />

    </section>
  )
}

export default About
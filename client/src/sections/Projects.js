import React from 'react'
import data from "../components/data.json"
import Button from '../components/Button';


const Projects = () => {
    return (
      <section id='projects' className='w-full md:px-[10vw] py-[10vh] bg-primary-black text-primary-white  '>
        <h3 className='text-center text-4xl font-montserrat font-bold'>My Recent <span className='text-pink'>Works</span></h3>
        {data.projects.map((project, index) => (
          <div key={index} className='flex flex-col lg:flex-row items-center justify-center py-10 max-sm:px-4 max-md:px-10 text-active-black'>
            <img src={project.image} alt={project.title}  className=' h-[240px]   md:w-[600px] md:h-[500px]'/>
            <div className='flex flex-col gap-4 bg-active-black  text-primary-white -my-2 mx-2 lg:-ml-10 px-8 py-4 rounded-md'>
                <h2 className='font-bold font-palanquin text-2xl text-pink'>{project.title}</h2>
                <p className='text-base '>{project.description}</p>
                <h4 className='font-semi-bold text-xl'>Tech stack :</h4>
                <ul className='flex gap-4'>
                {project.techstack.map((tech, techIndex) => (
                    <li key={techIndex}>{tech}</li>
                ))}
                </ul>
                <div className='flex flex-wrap gap-4'>
                <Button openInNewTab={true} href={project.github} target="_blank" >GitHub</Button>
                {
                    project.demo &&
                    <Button openInNewTab={true} href={project.demo} target="_blank" >Demo</Button>
                }
                </div>
            </div>
          </div>
        ))}
      </section>
    );
  };
  
  export default Projects;
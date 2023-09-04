import React from 'react'
import data from "../components/data.json"
import Button from '../components/Button';


const Projects = ({color}) => {
    return (
      <section id='projects' className='w-full md:px-[10vw] py-[10vh] bg-primary-black text-primary-white z-10'>
        <h3 className='text-center text-4xl font-montserrat font-bold'>My Recent <span style={{color}} >Works</span></h3>
        {data.projects.map((project, index) => (
          <div key={index} className='flex flex-col lg:flex-row items-center justify-center py-10 max-sm:px-4 max-md:px-10 text-active-black max-w-7xl'>
            <img src={project.image} alt={project.title}  className=' h-[240px]   md:w-[600px] md:h-[500px]'/>
            <div className='flex flex-col gap-4 bg-active-black  text-primary-white -my-2 mx-2 lg:-ml-10 px-8 py-4 rounded-md'>
                <h2 className='font-bold font-palanquin text-2xl' style={{color}}>{project.title}</h2>
                <p className='text-base text-gray'>{project.description}</p>
                <h4 style={{color}} className='font-bold text-xl font-palanquin'>Tech stack :</h4>
                <ul className='flex gap-4 flex-wrap text-gray'>
                {project.techstack.map((tech, techIndex) => (
                    <li key={techIndex}>{tech}</li>
                ))}
                </ul>
                <div className='flex flex-wrap gap-4'>
                <Button color={color} openInNewTab={true} href={project.github} target="_blank" >GitHub</Button>
                {
                    project.demo &&
                    <Button color={color} openInNewTab={true} href={project.demo} target="_blank" >Demo</Button>
                }
                </div>
            </div>
          </div>
        ))}
      </section>
    );
  };
  
  export default Projects;
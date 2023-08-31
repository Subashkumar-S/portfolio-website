import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";
import { SlPhone } from "react-icons/sl";
import Socials from './Socials';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ContactDetails = () => {

    const socialMedia = [
        {icon: FaFacebook, link: "https://www.facebook.com/profile.php?id=100016289860060"},
        {icon: FaInstagram, link: "https://www.instagram.com/__subashkumar__/"},
        {icon: FaLinkedin, link: "https://www.linkedin.com/in/subashkumar-s/"},
    ]
  return (
    <div className='flex flex-col gap-4 w-full md:w-1/2 max-md:items-center items-start justify-center '>
        <div> 
            <h4 className='text-2xl font-palanquin font-semibold max-md:text-center'>Contact Info</h4>
            <div className='flex gap-4 items-center  my-4'>
                <FontAwesomeIcon icon={faLocationDot} />
                <p>Ariyalur, Tamil Nadu,  India.</p>
            </div>
            <div className='flex gap-4 items-center  my-4'>
                <SiGmail />
                <p>subashs2232@gmail.com</p>
            </div>
            <div className='flex gap-4 items-center  my-4'>
                <SlPhone />
                <p>+91 9876543210</p>
            </div>
            
        </div>
        <div className=' ' >
            <h4 className='text-2xl font-palanquin font-semibold mb-4'>Find me on</h4>
            <div className='flex gap-4 '>
                {
                    socialMedia.map((item, index) => (
                        <a  key={index}
                            href={item.link}>
                            <Socials>
                            <item.icon className='text-xl' />
                            </Socials>
                        </a>
                    ))
                }
           </div>
        </div>
    </div>
  )
}

export default ContactDetails
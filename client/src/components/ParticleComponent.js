import Particles from "react-tsparticles";
import options from '../particles/config'
import { useCallback } from "react";
import { loadFull } from "tsparticles";



export default function ParticlesComponent(){

    const particlesInit = useCallback(async (engine)=> {
        await loadFull(engine)
    },[])

    

    return (
        <Particles
        id="partciles-component"
        init={particlesInit}
        options={options}
        />
    )
}
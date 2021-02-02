import React from 'react'
import Navbar from '../Navbar'
import SideBar from '../Sidebar'
import {
    HeroContainer, 
    HeroContent, 
    HeroItems, 
    HeroH1, 
    HeroP, 
    HeroBtn
} from './HeroElements';
import { useState } from 'react'

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen);
    }

    return (
        <HeroContainer>
            <Navbar toggle={toggle}/>
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Najlepsza Pizza Świata</HeroH1>
                    <HeroP>U Ciebie w 30 minut</HeroP>
                    <HeroBtn>Złóż zamówienie</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero;
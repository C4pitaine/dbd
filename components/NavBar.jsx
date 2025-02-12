'use client'
import { useState } from "react"

export default function NavBar(){

    const [isOpen,setIsOpen] = useState(false)

    const activeMenu = () =>{
        if(isOpen){
            setIsOpen(false)
        }else{
            setIsOpen(true)
        }
    }
    return(
        <>
            <header>
                <div className="logo"><img src="/images/logo.png" alt="Logo Dead by daylight" /></div>
                <nav>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Community</a></li>
                        <li><a href="">Help</a></li>
                    </ul>
                    {isOpen ? 
                    <div id="burger" className="active" onClick={activeMenu}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>  
                    : 
                    <div id="burger" onClick={activeMenu}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>}
                </nav>
                <div className="langue">
                    <img src="/images/langue.png" alt="" />
                    <select name="langue" id="langue">
                        {/* <option value="en">FR</option> */}
                        <option value="fr">EN</option>
                    </select>
                </div>
            </header>
            {isOpen && (
                <div className="slide" id="menu">
                    <a href="">Home</a>
                    <a href="">Community</a>
                    <a href="">Help</a>
                </div>
            )}
        </>
    )
}
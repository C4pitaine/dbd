'use client'
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import Trailer from '../../components/Trailer';
import Iframe from '../../components/Iframe';
import Gameplay from '../../components/Gameplay';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';


export default function HomePage(){
    
    const [downloading, setDownloading] = useState(false)
    const [isDownloaded,setIsDownloaded] = useState(false)
    const [contact,setContact] = useState(false)
    const [errorContact,setErrorContact] = useState(false)
    const [successContact,setSuccessContact] = useState(false)
    const [message,setMessage] = useState('')
    const [gameplay,setGameplay] = useState('SURVIVOR')
    const download = () =>{
        setDownloading(true)
        interval()
    }
    const interval = () =>{
        setInterval(()=>{
            setDownloading(false)
            setIsDownloaded(true)
        },4000)
    }

    const handleSubmit = () =>{
        setContact(false)
        setErrorContact(false)
        setMessage("")
        const input = document.querySelector('.inputEmail')
        const checkBox = document.querySelector('.checkBox')
        if(input.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)){
            if(checkBox.checked){
                setContact(true)
                setErrorContact(false)
                setMessage('Votre adresse email est enregistrée')
            }else{
                setErrorContact(true)
                setMessage('Veuillez cocher la checkbox')
            }
        }else{
            setErrorContact(true)
            setMessage('Veuillez entrer une adresse email valide')
        }
    }

    return(
        <>
            <div className="slide" id="home">
                <div className="title">
                    <img src="/images/logoHome.png" alt="Logo titre dead by daylight"/>
                </div>
                <div className="download" onClick={download}>
                    {downloading ? <div className="button">Downloading...</div> : <div className="button">Download Now</div>}
                </div>
                {isDownloaded && (
                    <Alert severity="success" className='downloadAlert'>
                        The game has been downloaded
                    </Alert>
                )}
            </div>
            <Trailer/>
            <div className="slide" id="pres">
                <div className="wrapper">
                    <div className="left">
                        <div className="killer">
                            <h2>Play as the KILLER</h2>
                            <img src="/images/killer.png" alt="Logo Killer Dead By Daylight" />
                        </div>
                        <div className="video">
                            <Iframe 
                                source="https://www.youtube.com/embed/38YcYajoN7g?si=c_W4DGOTZeJt7ccJ" 
                            />
                        </div>
                    </div>
                    <div className="right">
                        <div className="survivor">
                            <h2>Play as the SURVIVOR</h2>
                            <img src="/images/survivor.png" alt="Logo Survivor Dead By Daylight" />
                        </div>
                        <div className="video">
                            <Iframe 
                                source="https://www.youtube.com/embed/vDcEdoR7Rh0?si=fCFrWjf5A7I8KTxd" 
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="slide" id="gameplay">
                <div className="wrapper">
                    <div className="buttons">
                        <div className={`buttonKiller ${gameplay == "KILLER" ? "active" : ""}`} onClick={() => setGameplay('KILLER')}>KILLER</div>
                        <div className={`buttonSurvivor ${gameplay == "SURVIVOR" ? "active" : ""}`} onClick={()=> setGameplay('SURVIVOR')}>SURVIVOR</div>
                    </div>
                    {gameplay == "SURVIVOR" && <img className='image' src="/images/survivor.png" alt="Logo Survivor Dead By Daylight" />}
                    {gameplay == "KILLER" && <img className='image' src="/images/killer.png" alt="Logo Killer Dead By Daylight" />}
                    <h3>{gameplay} GAMEPLAY BASICS</h3>
                    {gameplay == 'SURVIVOR' && 
                    <div className="gameplays">
                        <Gameplay 
                            title="REPAIR"
                            src="/images/surv1.png"
                            description="To power up the Exit Gates and escape, Survivors must repair 5 of the 7 generators located throughout the map."
                        />
                        <Gameplay 
                            title="EVADE"
                            src="/images/surv2.png"
                            description="Most Killers are faster than Survivors. Avoid running in a straight line. Instead, drop pallets in the Killer’s path."
                        />
                        <Gameplay 
                            title="ESCAPE"
                            src="/images/surv3.png"
                            description="If struck twice by the Killer you’ll enter the Dying State where you can be picked up and impaled on a sacrificial hook."
                        />
                    </div>}
                    {gameplay == 'KILLER' && 
                    <div className="gameplays">
                        <Gameplay 
                            title="HUNT"
                            src="/images/kill1.png"
                            description="Survivors need to repair generators around the map to power up the Exit Gates and escape. "
                        />
                        <Gameplay 
                            title="CHASE"
                            src="/images/kill2.png"
                            description="As Survivors run for their lives, they’ll leave scratch marks for you to follow. Should the trail go cold."
                        />
                        <Gameplay 
                            title="HOOK"
                            src="/images/kill3.png"
                            description="Striking a Survivor once puts them into the Injured State. Twice, and they enter the Dying State."
                        />
                    </div>}
                </div>
            </div>
            <div className="slide" id="dc">
                <div className="title">
                    <div className="wrapper"><h2>Downloadable Content</h2></div>
                </div>
                <div className="wrapper-carousel">
                    <Carousel />
                </div>
            </div>
            <div className="slide" id="contact">
                <div className="contact">
                    <div className="wrapper">
                        <h2>STAY ONE STEP AHEAD</h2>
                        <p>Get all the lasted Dead by Daylight news, updates, deals, and more delivered straight to your inbox.</p>
                        {errorContact &&  <p className='errorContact'>{message}</p>}
                        {contact &&  <p className='successContact'>{message}</p>}
                        <div className="signup">
                            <p>Email address</p>
                            <div className="input">
                                <input type="text"  placeholder='Enter your email adress' className='inputEmail'/>
                                <div className="button" onClick={handleSubmit}>Sign up</div>
                            </div>
                        </div>
                        <div className="check">
                            <input type="checkbox" className='checkBox'/>
                            <p>Yes, I would like to receive newsletters, information and promotions about Dead By Daylight from Behaviour Interactive Inc. (“BHVR”). I will be able to withdraw my consent at any time</p>
                        </div>
                        <p className='policy'>By clicking on Sign Up, I confirm that I am 18 years old or over and that I accept BHVR’s <strong>Privacy Policy</strong> and <strong>Terms of Use</strong></p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
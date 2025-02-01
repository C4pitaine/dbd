'use client'
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import Trailer from '../../components/Trailer';


export default function HomePage(){
    
    const [downloading, setDownloading] = useState(false)
    const [isDownloaded,setIsDownloaded] = useState(false)
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
                <div className="left">
                    <div className="killer">
                        <h2>Play as the KILLER</h2>
                        <img src="/images/killer.png" alt="Logo Killer Dead By Daylight" />
                    </div>
                </div>
                <div className="right">
                    <div className="survivor">
                        <h2>Play as the SURVIVOR</h2>
                        <img src="/images/survivor.png" alt="Logo Survivor Dead By Daylight" />
                    </div>
                </div>
            </div>
        </>
    )
}
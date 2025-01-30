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
        </>
    )
}
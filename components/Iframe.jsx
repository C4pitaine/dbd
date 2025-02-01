export default function Iframe(props){
    return(
        <>
            <iframe 
                src={props.source} 
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
            >
            </iframe>
        </>
    )
}  


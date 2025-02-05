export default function Gameplay(props){
    return( 
        <>
            <div className="gameplay">
                <h4>{props.title}</h4>
                <img src={props.src} alt={props.alt} />
                <div className="description">
                    <p>{props.description}</p>
                </div>
            </div>
        </>
    )
}
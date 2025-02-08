export default function Dlc(props){
    return(
        <>
            <div className="dlc">
                <img src={props.src} alt={props.alt} />
                <h3>CONTENT OVERVIEW</h3>
                <h4>This chapter DLC includes:</h4>
                <div className="content">
                    <ul>
                        {props.contents.map((content,key)=>
                            <li key={key}>{content}</li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    )
}
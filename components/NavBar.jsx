export default function NavBar(){

    return(
        <>
            <div className="logo"><img src="/images/logo.png" alt="Logo Dead by daylight" /></div>
            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Community</a></li>
                    <li><a href="">Help</a></li>
                </ul>
            </nav>
            <div className="langue">
                <img src="/images/langue.png" alt="" />
                <div>EN</div>
            </div>
        </>
    )
}
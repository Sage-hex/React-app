function Header(){

    return(
        <header className="header">
            <div className="logo-div">
                <h1 className="logo">
                    The<span>Curve</span>
                </h1>
            </div>

            <nav className="navBar">
                <ul className="navlinks">
                    <li> <a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Inquire</a></li>
                </ul>

            </nav>

            <div className="action">
                <button className="btn login">Login</button>
                <button className="btn signup">SignUp</button>
            </div>

            <div className="burger">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </header>
    );
}

export default Header
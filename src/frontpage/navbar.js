import { Link } from 'react-router-dom';
import style from "./index.module.css";


function Navbar() {

    return (
        <nav className={style.menu}>
            <div className = {style.logo}>
                <Link to = "/">
                    <img src = "774655QZp2g5GY.png" alt = "Logo of Realm of Rich"></img>
                </Link>
            </div>
            <div className = {style.navicons}>
                <a href="#popup1" className={`${style.headerbutton} ${style.btn}`} id ={style.loginbutton}>Log In</a>
                
            </div>
            <div id="popup1" class={style.popup}>
            <a href="#popupclose" class={style.close}>&times;</a>
            <h2>Login to enjoy the magic</h2>

            <div id="auth-options"></div>
            <div id="loader">Loading...</div>
            </div>
            <a href="#popupclose" class={style.closepopup}></a>
            
        </nav>
    );
}

export default Navbar;
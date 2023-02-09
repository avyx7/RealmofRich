import Navbar from "./navbar";
import style from "./index.module.css";
import megawinimage from "../assets/IMG_1770.PNG";
import button from "../assets/Button.png";



function Header() {
    return (
    <header className={style.appheader}>
      
        
        <Navbar/>
        <div className={style.megaWin}>
          <div className={style.megawincontainer}>
            <div className={style.star} id={style.star1}></div>
            <div className={style.star} id={style.star2}></div>
            <div className={style.star} id={style.star3}></div>
            <img className={style.megawinimage} src={megawinimage} />
            <div className={style.star} id={style.star4}></div>
            <div className={style.star} id={style.star5}></div>
            <div className={style.star} id={style.star6}></div>
            <div className={style.star} id={style.star7}></div>
            <div className={style.star} id={style.star8}></div>
          </div>
          

        </div>
        <div className={style.headertext}>
          <h1 id={style.h1}>THE PLATFORM FOR FINANCE & EDUCATION</h1>
          {/*<div className={style.headertext} id ={style.h1}><span id = {style.backgroundwhite}>Unlimited Coaching</span> Tution courses
          <br/><span id={style.h2}>Solve challenges & Earn money</span>
          <br/><span id={style.h3}>Enter your email to get a magic chestbox</span></div>*/}

          {/*<div className={style.inputboxcontainer}>
            <div class={`${style.materialtextfield}`}>
              <input type="text" required/>
              <label data-content="mobile number">Mobile number</label>
            </div>
            <div className={style.headerbutton} id={style.getstartedbutton}>Get Started</div>
          </div>*/}
          <a href="#popup1"><div className={style.getStarted} ></div></a>
        </div>
        <div className={style.headskeleton}>
          
        </div>
        
    </header>
        );
}

export default Header;
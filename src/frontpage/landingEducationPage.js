import React from 'react'
import style from "./landingEducation.module.css"
import Navbar from "./navbar";
import style1 from "./index.module.css";
import Footer from "./footer";

export default function LandingEducation() {
  return (
        <>
        <div className={style.header}>
        <Navbar/>
          <div className={style1.headertext} id={style.headertext}>
            <h1 id={style1.h1}>The best education platform</h1>
            <div className={style1.getStarted} id={style.getStarted}></div>
          </div>
          
        </div>
        <div className={style.econtainer} id={style.pithagoras}>
          <div className={style.name}>Pithagoras</div>
          <div className={style.message}>Learn about <br/> wisdom</div>
        </div>
        <div className={style.econtainer} id={style.lincoln}>
          <div className={style.name}>Abraham Lincoln</div>
          <div className={style.message}>Learn about the<br/> Geometry</div>
        </div>
        <div className={style.econtainer} id={style.newton}>
          <div className={style.name}>Issac Newton</div>
          <div className={style.message}>Learn about the<br/> history of <br/>Calculus</div>
        </div>
        <div className={style.econtainer} id={style.viete}>
          <div className={style.name}>François Viète</div>
          <div className={style.message}>Learn about the<br/> Algebra</div>
        </div>
        <div className={style.econtainer} id={style.galileo}>
          <div className={style.name}>Galileo</div>
          <div className={style.message}>Learn about the<br/> Planets</div>
        </div>
        <div className={style1.scrollingText}>
                    <div className={style1.scroll+' '+style1.text1}>
                      <div>
                            Special Offer!<span> Blah Blah Blah Blah! </span>Special Offer!<span> Blah Blah Blah Blah! Blah!</span>
                      </div>
                      <div>
                            Special Offer!<span> Blah Blah Blah Blah! </span>Special Offer!<span>Blah Blah Blah Blah! Blah! </span>
                      </div>
                    </div>
                    <div  className={style1.scroll+' '+style1.text2}>
                      <div>
                            Special Offer!<span> Blah Blah Blah Blah! Blah!</span>Special Offer!<span> Blah Blah Blah Blah! Blah!</span>
                      </div>
                      <div>
                            Special Offer!<span> Blah Blah Blah Blah! Blah!</span>Special Offer!<span>Blah Blah Blah Blah! Blah!</span>
                      </div>
                    </div>
                  </div>
        <Footer />
        </>
  )
}

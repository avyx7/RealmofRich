import React from 'react'
import banner from "../../assets/education/banner.png"; import salebanner from "../../assets/education/salebanner1.png";
import examprepdecor from "../../assets/education/examPrep.png";
import buybutton991 from "../../assets/education/yellowButton1.png";import buybutton992 from "../../assets/education/yellowButtonalt1.png";
import book1 from "../../assets/education/book1.gif";import book2 from "../../assets/education/book2.gif";import book3 from "../../assets/education/book3.gif";
import darkPink from "../../assets/education/darkPink.png";import darkYellow from "../../assets/education/darkYellow.png";
import purple from "../../assets/education/purple.png";
import card1 from "../../assets/education/card1.jpg";import card2 from "../../assets/education/card2.jpg"
import card3 from "../../assets/education/card3.jpg";import card5 from "../../assets/education/card5.jpg";import card7 from "../../assets/education/card7.jpg";
import style from '../../assets/educationHome.module.css';


function EducationShop() {
  return (
    <>
    <div className={style.educationalItems}>
        <div className={style.educationalItemsbanner}>
            <img className='' src={banner} />
            <div className={style.educationalItemsbannertext}>
                Educational Items
            </div>
        </div>
        
        <div class={style.educationPara}>
            <div class={style.educationShopBanner}>
                <span className={style.educationShopBannertext}> AUDIO BOOKS</span>
            </div>
            <div className={style.educationalItemsgrid}>
                <div className={style.winnerMindset}>
                    <div className={style.winnerMindsetgrid}>
                            <img className={style.decor} src={salebanner} />

                            <img className={style.buyButton} src={buybutton991} />
                    </div>
                    
                </div>
                <div className={style.examPrep}>
                    <div className={style.examPrepgrid}>

                            <img className={style.decor} src={examprepdecor} />

                            <img className={style.buyButton} src={buybutton992} />
                    </div>
                </div>

            </div>
            <div className={style.educationalItemsgrid1}>
                <div className={style.audioBook1}>
                    <img className={style.audiobookimg} src={book1} />
                    <div>
                        <div className={style.bookName}>Audio book1</div>
                        <div className={style.buyButtonsecondcontainer}>
                            <img className={style.buyButtonsecond} src = {darkPink} />
                            <div className={style.buttonprice}>₹130</div>
                        </div>  
                    </div>
                
                </div>
                <div className={style.audioBook2}>
                    <img className={style.audiobookimg} src={book2} />
                    <div>
                        <div className={style.bookName}>Audio book2</div>
                        <div className={style.buyButtonsecondcontainer}>
                            <img className={style.buyButtonsecond} src = {darkYellow} />
                            <div className={style.buttonprice}>₹130</div>
                        </div>  
                    </div>
                </div>
                <div className={style.audioBook3}>
                    <img className={style.audiobookimg} src={book3} />
                    <div>
                        <div className={style.bookName}>Audio book3</div>
                        <div className={style.buyButtonsecondcontainer}>
                            <img className={style.buyButtonsecond} src = {purple} />
                            <div className={style.buttonprice}>₹130</div>
                        </div>  
                    </div>
                </div>

            </div>

        </div>

        <div class={style.educationPara}>
            <div class={style.educationShopBanner}>
                <span className={style.educationShopBannertext}> Explained in 100 SECONDS</span>
            </div>
            <div className={style.educationalItemsgrid}>
                <div className={style.forces}>
                    <img className='' src = {card1} />
                </div>
                <div className={style.heat}>
                    <img className='' src = {card2} />
                </div>

            </div>
            <div className={style.educationalItemsgrid1}>
                <div className={style.algebra}>
                    <img className='' src = {card3} />
                </div>
                <div className={style.fractional}>
                    <img className='' src = {card5} />
                </div>
                <div className={style.bundle}>
                    <img className='' src = {card7} />
                </div>

            </div>

        </div>
        

    </div>
    </>
  )
}

export default EducationShop
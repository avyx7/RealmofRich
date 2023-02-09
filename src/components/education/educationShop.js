import React from 'react'
import banner from "../../assets/education/banner.png"; import salebanner from "../../assets/education/salebanner1.png";
import examprepdecor from "../../assets/education/examPrep.png";
import buybutton991 from "../../assets/education/yellowButton1.png";import buybutton992 from "../../assets/education/yellowButtonalt1.png";
import book1 from "../../assets/education/book1.gif";import book2 from "../../assets/education/book2.gif";import book3 from "../../assets/education/book3.gif";
import darkPink from "../../assets/education/darkPink.png";import darkYellow from "../../assets/education/darkYellow.png";
import purple from "../../assets/education/purple.png";
import card1 from "../../assets/education/card1.jpg";import card2 from "../../assets/education/card2.jpg"
import card3 from "../../assets/education/card3.jpg";import card5 from "../../assets/education/card5.jpg";import card7 from "../../assets/education/card7.jpg"


function EducationShop() {
  return (
    <>
    <div className='educationalItems'>
        <div className='educationalItemsbanner'>
            <img className='' src={banner} />
            <div className='educationalItemsbannertext'>
                Educational Items
            </div>
        </div>
        
        <div class="educationPara">
            <div class="educationShopBanner">
                <span className='educationShopBannertext'> AUDIO BOOKS</span>
            </div>
            <div className='educationalItemsgrid'>
                <div className='winnerMindset'>
                    <div className='winnerMindsetgrid'>
                            <img className='decor' src={salebanner} />

                            <img className='buyButton' src={buybutton991} />
                    </div>
                    
                </div>
                <div className='examPrep'>
                    <div className='examPrepgrid'>

                            <img className='decor' src={examprepdecor} />

                            <img className='buyButton' src={buybutton992} />
                    </div>
                </div>

            </div>
            <div className='educationalItemsgrid1'>
                <div className='audioBook1'>
                    <img className='audiobookimg' src={book1} />
                    <div>
                        <div className='bookName'>Audio book1</div>
                        <div className='buyButtonsecondcontainer'>
                            <img className='buyButtonsecond' src = {darkPink} />
                            <div className='buttonprice'>₹130</div>
                        </div>  
                    </div>
                
                </div>
                <div className='audioBook2'>
                    <img className='audiobookimg' src={book2} />
                    <div>
                        <div className='bookName'>Audio book2</div>
                        <div className='buyButtonsecondcontainer'>
                            <img className='buyButtonsecond' src = {darkYellow} />
                            <div className='buttonprice'>₹130</div>
                        </div>  
                    </div>
                </div>
                <div className='audioBook3'>
                    <img className='audiobookimg' src={book3} />
                    <div>
                        <div className='bookName'>Audio book3</div>
                        <div className='buyButtonsecondcontainer'>
                            <img className='buyButtonsecond' src = {purple} />
                            <div className='buttonprice'>₹130</div>
                        </div>  
                    </div>
                </div>

            </div>

        </div>

        <div class="educationPara">
            <div class="educationShopBanner">
                <span className='educationShopBannertext'> Explained in 100 SECONDS</span>
            </div>
            <div className='educationalItemsgrid'>
                <div className='forces'>
                    <img className='' src = {card1} />
                </div>
                <div className='heat'>
                    <img className='' src = {card2} />
                </div>

            </div>
            <div className='educationalItemsgrid1'>
                <div className='algebra'>
                    <img className='' src = {card3} />
                </div>
                <div className='fractional'>
                    <img className='' src = {card5} />
                </div>
                <div className='bundle'>
                    <img className='' src = {card7} />
                </div>

            </div>

        </div>
        

    </div>
    </>
  )
}

export default EducationShop
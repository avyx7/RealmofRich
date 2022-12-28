import Divider from "./divider";
import style from "./index.module.css";

function Homepage() {
    return (
        <div className={style.homepage}>
            <div className={style.homepagecontainer}>
                <div className={style.segment} id ={style.coaching}>
                    <div className={style.segmenttext}>
                        <span className ={style.segmenttextheader}>The Classroom Superman</span>
                        <br/><br/><span className ={style.segmenttextcontent}>Enjoy all subjects coaching
                        <br/>for just <span>&#8377;</span>230.
                        <br/>Class 4 - 12</span>
                    </div>
                    <div className={style.bookcontainer}>
                      <div className={style.firstbook}>
                        <img className={style.books} src="IMG_08881.jpg"></img>
                        <div class={style.overlay}>Book of<br/>Mathematics</div>
                      </div>
                    
                      <div className={style.secondbook}>
                        <img className={style.books} src="191794358.png"></img>
                        <div class={style.overlay}>Book of<br/>Newtonian Physics</div>
                      </div>
                    </div>

                </div>
                <Divider/>
                <div className={style.segment} id ={style.earnmoney}>
                    
                <div class={style.center}>
                  <div class={style.top3}>
                    <div class={`${style.two} ${style.item}`}>
                      <div class={style.pos}>
                        2
                      </div>
                      <div class={style.pic} id ={style.pic1} ></div>
                      <div class={style.name}>
                        Season 2
                      </div>
                      <div class={style.score}>
                        6453
                      </div>
                    </div>
                    <div class={`${style.one} ${style.item}`}>
                      <div class={style.pos}>
                        1
                      </div>
                      <div class={style.pic} id ={style.pic2} ></div>
                      <div class={style.name}>
                        Season 1
                      </div>
                      <div class={style.score}>
                        6794
                      </div>
                    </div>
                    <div class={`${style.three} ${style.item}`}>
                      <div class={style.pos}>
                        3
                      </div>
                      <div class={style.pic} id ={style.pic3} ></div>
                      <div class={style.name}>
                        Season 3
                      </div>
                      <div class={style.score}>
                        6034
                      </div>
                    </div>
                  </div>
                  <div class={style.list}>
                    <div class={style.item}>
                      <div class={style.pos}>
                        4
                      </div>
                      <div class={style.pic} id ={style.pic4} ></div>
                      <div class={style.name}>
                        Clayton Watson
                      </div>
                      <div class={style.score}>
                        5980
                      </div>
                    </div>
                    <div class={style.item}>
                      <div class={style.pos}>
                        5
                      </div>
                      <div class={style.pic} id ={style.pic5} ></div>
                      <div class={style.name}>
                        Debbie Lane
                      </div>
                      <div class={style.score}>
                        5978
                      </div>
                    </div>
                    <div class={style.item}>
                      <div class={style.pos}>
                        6
                      </div>
                      <div class={style.pic} id ={style.pic6} ></div>
                      <div class={style.name}>
                        Gabriella Steward
                      </div>
                      <div class={style.score}>
                        5845
                      </div>
                    </div>
                    <div class={style.item}>
                      <div class={style.pos}>
                        7
                      </div>
                      <div class={style.pic} id ={style.pic7} ></div>
                      <div class={style.name}>
                        Nina Perkins
                      </div>
                      <div class={style.score}>
                        5799
                      </div>
                    </div>


                  </div>
                </div>

                    <div className={style.segmenttext}>
                        <span className ={style.segmenttextheader}>Earn money from Tasks</span>
                        <br/><br/><span className ={style.segmenttextcontent}>Solve Challenges take rewards
                        <br/>Money directly into your bank
                        <br/></span>
                    </div>
                    
                </div>
                <Divider/>
                <div className={style.segment} id ={style.careermap}>
                    <div className={style.segmenttext}>
                        <span className ={style.segmenttextheader}>Your Career. Your Destiny</span>
                        <br/><br/><span className ={style.segmenttextcontent}>Visual career map for your future
                        </span>
                    </div>
                    <div>
                    <img className={style.careermap} id = "" src="b1b01fab041.webp"></img>
                    </div>

                </div>
                <Divider/>
                <div className={style.segment}>
                <span className ={style.segmenttextcontent} id={style.pricing}>
                  <h4><div className={`${style.textcenter} ${style.bold}`}>Choose your plan.</div>
                    You pay on a monthly basis. It is a subscription. Cancel anytime and you enjoy it for the rest of the month.
                  </h4>
                  </span>
                <div className={style.tablecontainer}>
                  <table>
                    <caption>RealmOfRich Plans</caption>
                    <thead>
                      <tr>
                        <th scope="col"></th>
                        <th scope="col">Silver VIP</th>
                        <th scope="col">Bronze VIP</th>
                    
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td data-label="Account">Monthly Price</td>
                        <td data-label="Due Date">199</td>
                        <td data-label="Amount">599</td>
                        
                      </tr>
                      <tr>
                        <td scope="row" data-label="Account">Coaching Level</td>
                        <td data-label="Due Date">Standard</td>
                        <td data-label="Amount">Deep Learning</td>
                        
                      </tr>
                      <tr>
                        <td scope="row" data-label="Account">Earning Tasks</td>
                        <td data-label="Due Date">Premium</td>
                        <td data-label="Amount">Premium</td>
                        
                      </tr>
                      <tr>
                        <td scope="row" data-label="Acount">Share account with</td>
                        <td data-label="Due Date">3 Devices</td>
                        <td data-label="Amount">3 Devices</td>
                        
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className={style.tablecontainersmallscreen}>
                  <table>
                    <caption>RealmOfRich Plans</caption>
                    <thead>
                      <tr>
                        <th scope="col"></th>
                        <th scope="col">Standard</th>
                        <th scope="col">Deep Learning</th>
                    
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td data-label="Plan">STANDARD</td>
                        <td data-label="Monthly Price">199</td>
                        <td data-label="Coaching Level">Awesome</td>
                        <td data-label="Earning Tasks">Premium type</td>
                        <td data-label="Share account with">3 Devices</td>
                        
                      </tr>
                      <tr>
                      <td data-label="Plan">DEEP LEARNING</td>
                        <td data-label="Monthly Price">599</td>
                        <td data-label="Coaching Level">Expert</td>
                        <td data-label="Earning Tasks">Premium type</td>
                        <td data-label="Share account with">3 Devices</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                    
                        
                {/*<div class="container1 group">
                  <div class="grid-1-5 no-border">
                    <h2>&zwnj;&zwnj;&zwnj;&zwnj; </h2>

                    <ul>
                      <li>Monthly price</li>
                      <li>Coaching level</li>
                      <li>Earning Tasks</li>
                      <li>Share with</li>
                    </ul>
                  </div>
                  <div class="grid-1-5 ">
                    <h2>STANDARD</h2>
                   
                    <ul>
                      <li>199</li>
                      <li>Awesome</li>
                      <li>Premium</li>
                      <li>3 Devices</li>
                    </ul>
                  </div>
                  <div class="grid-1-5">
                    <h2>Deep Learning</h2>

                    <ul>
                      <li>599</li>
                      <li>Expert</li>
                      <li>Premium</li>
                      <li>3 Devices</li>
                    </ul>	
                  </div>

		
                </div>*/}
                        
                        
                       
                    
                
                </div>
                <Divider/>
                <div className={style.segment} >
                <div class={style.container}>
                    <h1>Are you Job ready?</h1> 
                <p>LogIn to put yourself out to the world</p>
                </div>
                </div>
            </div>
          </div>

    );
}

export default Homepage;
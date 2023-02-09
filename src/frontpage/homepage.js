import React, {useState} from 'react';
import Divider from "./divider";
import style from "./index.module.css";
import mobileFrame from "../assets/homepage/mobileFrame1.png";import coin from "../assets/homepage/tasks/IMG_17873.png";
import star from "../assets/homepage/tasks/star.png";

function Homepage() {
  const [display, setdisplay] = useState(false);





  
    return (
        <div className={style.homepage}>
            <div className={style.homepagecontainer}>
              <div className={style.testimony} id={style.h2}>
              “Dad does our finance and mom likes to get new recipes for food.”<br/>
                  Join people like you on the platform. 
              </div>
              <div className={style.areaContainer}>
                <div className={style.areaPartition1}>
                  <div className={style.text1} id={style.h2}>
                    Video Classes for <br/>
                    class 1-12
                  </div>
                </div>
                <div className={style.areaPartition2}>
                  <div className={style.mobileFrame} id={style.classes}>
                    <img className={style.mobileFrameImage} src = {mobileFrame} />
                    <div className={style.mobilebackground} id={style.classesBackground1}>

                    </div>
                    <div className={style.mobilebackground} id={style.classesBackground2}>

                    </div>
                    <div className={style.mobilebackground + ' ' + (display? '': style.display_none) } id={style.classesBackground3}>

                    </div>
                    <div className={style.mobilebackground + ' ' + (display? '': style.display_none) } id={style.classesBackground4}>

                    </div>
                    <div className={style.mobilebackground + ' ' + (display? '': style.display_none) } id={style.classesBackground5}>

                    </div>
                    <div className={style.mobilebackground + ' ' + (display? '': style.display_none) } id={style.classesBackground6}>

                    </div>
                    <div className={style.mobilebackground + ' ' + (display? '': style.display_none) } id={style.classesBackground7}>

                    </div>
                    <div className={style.mobilebackground + ' ' + (display? '': style.display_none) } id={style.classesBackground8}>

                    </div>
                  </div>
                </div>

              </div>
              <div className={style.areaContainer}>
                <div className={style.areaPartition1}>
                  <div className={style.text1} id={style.h2}>
                    Video Classes for <br/>
                    ₹230 & ₹599
                  </div>
                </div>
                <div className={style.areaPartition2}>
                  <div className={style.mobileFrame} id={style.classes}>
                    <img className={style.mobileFrameImage} src = {mobileFrame} />
                    <div className={style.newtonmobilebackground} id={style.newtonBackground1}>

                    </div>
                  </div>
                </div>

              </div>
              <div className={style.areaContainer}>
                <div className={style.areaPartition1}>
                  <div className={style.text1} id={style.h2}>
                    someone started a company
                  </div>
                </div>
                <div className={style.areaPartition2}>
                  <div className={style.mobileFrame} id={style.business}>
                    <img className={style.mobileFrameImage} src = {mobileFrame} />
                    <div className={style.businessmobilebackground} id={style.businessBackground1}>

                    </div>
                  </div>
                </div>

              </div>

                {/*<div className={style.segment} id ={style.coaching}>
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
                  */}
                  <div className={style.scrollingText}>
                    <div className={style.scroll+' '+style.text1}>
                      <div>
                            Special Offer!<span> Blah Blah Blah Blah! </span>Special Offer!<span> Blah Blah Blah Blah! Blah!</span>
                      </div>
                      <div>
                            Special Offer!<span> Blah Blah Blah Blah! </span>Special Offer!<span>Blah Blah Blah Blah! Blah! </span>
                      </div>
                    </div>
                    <div  className={style.scroll+' '+style.text2}>
                      <div>
                            Special Offer!<span> Blah Blah Blah Blah! Blah!</span>Special Offer!<span> Blah Blah Blah Blah! Blah!</span>
                      </div>
                      <div>
                            Special Offer!<span> Blah Blah Blah Blah! Blah!</span>Special Offer!<span>Blah Blah Blah Blah! Blah!</span>
                      </div>
                    </div>
                    <div className={style.getStarted} id={style.scrollingTextgetStarted}></div>
                  </div>
                  <div className={style.section} id ={style.careermap}>
                    <div className={style.careermapheading}>
                      <div className={style.careermapheadingcontent}>
                      CareerMap
                      </div>
                      
                    </div>

                    <div className={style.careermapbottom}>

                    </div>
                  </div>
                <Divider/>
                <div className={style.section} id ={style.earnmoney}>
                    
                    <div className={style.taskscontainer}>
                      <div className={style.taskArea}>
                        <div className={style.taskinternalcontainer}>
                          <div className={style.taskname}>
                            Write a research on local sanitation
                          </div>
                          <div className={style.reward}>
                              <div> 200 </div>
                              <img className={style.coinstar} src={coin} />
                          </div>
                          <div className={style.exppoints}>
                            <div> 50 </div>
                            <img className={style.coinstar} src={star} />
                          </div>
                          <div className={style.taskcategory}>
                            Local Research
                          </div>
                        </div>
                      </div>

                      <div className={style.taskArea}>
                        <div className={style.taskinternalcontainer}>
                          <div className={style.taskname}>
                            Teach a class of students
                          </div>
                          <div className={style.reward}>
                              <div> 100 </div>
                              <img className={style.coinstar} src={coin} />
                          </div>
                          <div className={style.exppoints}>
                            <div> 10 </div>
                            <img className={style.coinstar} src={star} />
                          </div>
                          <div className={style.taskcategory}>
                            Local Activity
                          </div>
                        </div>
                      </div>

                      <div className={style.taskArea}>
                        <div className={style.taskinternalcontainer}>
                          <div className={style.taskname}>
                          World Cleanup Day participation
                          </div>
                          <div className={style.reward}>
                              <div> 300 </div>
                              <img className={style.coinstar} src={coin} />
                          </div>
                          <div className={style.exppoints}>
                            <div> 300 </div>
                            <img className={style.coinstar} src={star} />
                          </div>
                          <div className={style.taskcategory}>
                            Local Activity
                          </div>
                        </div>
                      </div>

                      <div className={style.taskArea}>
                        <div className={style.taskinternalcontainer}>
                          <div className={style.taskname}>
                          Help manage a bakery
                          </div>
                          <div className={style.reward}>
                              <div> 200 </div>
                              <img className={style.coinstar} src={coin} />
                          </div>
                          <div className={style.exppoints}>
                            <div> 500 </div>
                            <img className={style.coinstar} src={star} />
                          </div>
                          <div className={style.taskcategory}>
                            Local Activity
                          </div>
                        </div>
                      </div>

                      <div className={style.taskArea}>
                        <div className={style.taskinternalcontainer}>
                          <div className={style.taskname}>
                          Get a cooking experience
                          </div>
                          <div className={style.reward}>
                              <div> 200 </div>
                              <img className={style.coinstar} src={coin} />
                          </div>
                          <div className={style.exppoints}>
                            <div> 500 </div>
                            <img className={style.coinstar} src={star} />
                          </div>
                          <div className={style.taskcategory}>
                            Local Activity
                          </div>
                        </div>
                      </div>

                      <div className={style.taskArea}>
                        <div className={style.taskinternalcontainer}>
                          <div className={style.taskname}>
                          Gather data in local area
                          </div>
                          <div className={style.reward}>
                              <div> 500 </div>
                              <img className={style.coinstar} src={coin} />
                          </div>
                          <div className={style.exppoints}>
                            <div> 500 </div>
                            <img className={style.coinstar} src={star} />
                          </div>
                          <div className={style.taskcategory}>
                            Data
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={style.sectiontext}>
                        <span>Earn money from Tasks</span>
                        <br/><br/><span className ={style.segmenttextcontent}>Solve Challenges and get rewards</span>
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
                {/*
                <Divider/>
                <div className={style.segment} >
                <div class={style.container}>
                    <h1>Are you Job ready?</h1> 
                <p>LogIn to put yourself out to the world</p>
                </div>
                </div>
              */}
            </div>
          </div>

    );
}

export default Homepage;
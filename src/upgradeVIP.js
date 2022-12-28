import React, {useEffect } from 'react';
import close from "./icons/close.png";

function UpgradeVIP(props) {
    return (
        <div>
            <div className="completebackground backgroundVIP">
                <div className='educationmodalhead'>
                    <div className='educationmodalheadcontainer'>
                        <div className='educationmodalheadtext'>
                        </div>
                        <div className='educationmodalclosebutton' >
                          <img src = {close} onClick = {props.toggleopenclose}/>
                        </div>
                    </div>
                  </div>
                  <div className='educationmodalcontent' id = "educationmodalcontentid">
                    <div className='pricingcontainer'>
                    <div className='upgradeVIPheading'>
                      UPGRADE VIP
                    </div>
                    <div className="segment">
                        <span className ="segmenttextcontent" id="pricing">
                          <h2><div className="textcenter bold">Choose your plan.</div>
                            You pay on a monthly basis. It is a subscription. Cancel anytime and you enjoy it for the rest of the month.
                          </h2>
                          </span>
                        <div className="tablecontainer">
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
                              <tr>
                                <td scope="row" data-label="Acount"></td>
                                <td data-label="Due Date">
                                  <button className="bubbly-button">Silver VIP</button>
                                </td>
                                <td data-label="Amount">
                                  <button className="bubbly-button">Bronze VIP</button>
                                </td>
                                
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <div className="tablecontainersmallscreen">
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

                    <img className = "upgradeVIPimage"src = "../educationimages/2222.JPG"/>
                  </div>
        </div>
        </div>
      </div>  
    );

}
export default UpgradeVIP
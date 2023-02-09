import React from 'react';
import './pepper.css';
import RightSideBar from './rightSideBar';
import Blackhole from './blackhole';
import { auth } from '../../App';

import img from '../../i1.jpg';import img2 from '../../assets/peepsAssets/peeps/Flm0BjraYAEE6UY.jpg';
import png from './001-png.png';import calender from './002-calendar.png';import location from './004-location-pin.png';import button from './button.png';
import comment from './003-bubble-chat.png';import repost from './004-repeat.png';import like from './002-heart-1.png';import share from './005-down.png';
export default function Pepper() {

  const { uid, photoURL } = auth.currentUser;

  let pepperId = 11111;
  let pepper_created_time = 1672896049;
  let pepper_text = 'There is no need for these emotional rants. Just STOP BREAKING THE LAW, ASSHOLES.';
  let pepper_image = '/assets/peepsAssets/peeps/Flm0BjraYAEE6UY.jpg';
  let owner_pepper_id = '';                                         //If this is null, it's an orginal pepper. If this is not null, it's a comment or thread.
  let ownerId = ['Nupur J Sharma', '../../i1.jpg', '@userHandle', true]; //This pepper is posted by : displayName, profilePic, userHandle, verified
  let quoting_pepper = '';                                          //If not null this pepper is quoting another pepper with id.
  let quoted_by_peppers = [''];                                     // This pepper is quoted by this array of pepper ids.
  let pepper_hastags = ['#breaking_the_law'];
  let pepper_comments_number = 50;
  let pepper_reposted_number = 14;
  let epper_likes_number = 2000;
  let pepper_analytics = [5000, 50, 55];                            // seenBy, reposted, likes

//Cropping Image to create new Pepper
//TextArea to create new Pepper
//Visual UI for Quoting Pepper, Threads, trending visual effects
  return (
    <div className='pepperContainer'>
      
      <div className='Peeps'>
        <div class="contentContainer">
          <div class="content">
            <div class="content__container">
              <p class="content__container__text">
                Hello
              </p>
              
              <ul class="content__container__list">
                <li class="content__container__list__item">world !</li>
                <li class="content__container__list__item">bob !</li>
                <li class="content__container__list__item">users !</li>
                <li class="content__container__list__item">everybody !</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='Pepper'>
          <div className='PepperOwner'>
            <img className = 'profilePic'  src = {photoURL || "../icons/profilepic-min.png"} alt = "profile pic" />
          </div>
          <div className='PepperContent'>
            <div className='PepperInput'>
              <textarea className = "PepperInputArea" placeholder="  Say Something nice!"></textarea>
              <div className='PepperInputAreaButtons'>
                <img className = "add_image" src = {png} />
                <img className = "add_calender" src = {calender} />
                <img className = "add_location" src = {location} />
                <div className = "add_pepper">
                  Add Pepper
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className='Pepper'>
          <div className='PepperOwner'>
            <img className='profilePic' src = {img}/>
          </div>
          <div className='PepperContent'>
            <div className='ownerName'><span className='displayName'>{ownerId[0]}</span> {ownerId[3]} {ownerId[2]} {pepper_created_time}</div>
            <div className='PepperText'>{pepper_text}</div> <img className='images' src = {img2}/>
          </div>
          <div className='PepperActionButtons'>
            <div className='PepperActionButtonsComment'>
              <img className="" src = {comment}/>
            </div>
            <div className='PepperActionButtonsRepost'>
              <img className="" src = {repost}/>
            </div>
            <div className='PepperActionButtonsLike'>
              <img className="" src = {like}/>
            </div>
            <div className='PepperActionButtonsShare'>
            <img className="" src = {share}/>
            </div>
          </div>

        </div>
        <div className='Pepper'>
          <div className='PepperOwner'>
            <img className='profilePic' src = {img}/>
          </div>
          <div className='PepperContent'>
            <div className='ownerName'><span className='displayName'>{ownerId[0]}</span> {ownerId[3]} {ownerId[2]} {pepper_created_time}</div>
            <div className='PepperText'>{pepper_text}</div> <img className='images' src = {img2}/>
          </div>
          <div className='PepperActionButtons'>
            <div className='PepperActionButtonsComment'>
              <img className="" src = {comment}/>
            </div>
            <div className='PepperActionButtonsRepost'>
              <img className="" src = {repost}/>
            </div>
            <div className='PepperActionButtonsLike'>
              <img className="" src = {like}/>
            </div>
            <div className='PepperActionButtonsShare'>
            <img className="" src = {share}/>
            </div>
          </div>

        </div>
        <div className='Pepper'>
          <div className='PepperOwner'>
            <img className='profilePic' src = {img}/>
          </div>
          <div className='PepperContent'>
            <div className='ownerName'><span className='displayName'>{ownerId[0]}</span> {ownerId[3]} {ownerId[2]} {pepper_created_time}</div>
            <div className='PepperText'>{pepper_text}</div> <img className='images' src = {img2}/>
          </div>
          <div className='PepperActionButtons'>
            <div className='PepperActionButtonsComment'>
              <img className="" src = {comment}/>
            </div>
            <div className='PepperActionButtonsRepost'>
              <img className="" src = {repost}/>
            </div>
            <div className='PepperActionButtonsLike'>
              <img className="" src = {like}/>
            </div>
            <div className='PepperActionButtonsShare'>
            <img className="" src = {share}/>
            </div>
          </div>

        </div>
        <div className='Pepper'>
          <div className='PepperOwner'>
            <img className='profilePic' src = {img}/>
          </div>
          <div className='PepperContent'>
            <div className='ownerName'><span className='displayName'>{ownerId[0]}</span> {ownerId[3]} {ownerId[2]} {pepper_created_time}</div>
            <div className='PepperText'>{pepper_text}</div> <img className='images' src = {img2}/>
          </div>
          <div className='PepperActionButtons'>
            <div className='PepperActionButtonsComment'>
              <img className="" src = {comment}/>
            </div>
            <div className='PepperActionButtonsRepost'>
              <img className="" src = {repost}/>
            </div>
            <div className='PepperActionButtonsLike'>
              <img className="" src = {like}/>
            </div>
            <div className='PepperActionButtonsShare'>
            <img className="" src = {share}/>
            </div>
          </div>

        </div>
        <div className='Pepper'>
          <div className='PepperOwner'>
            <img className='profilePic' src = {img}/>
          </div>
          <div className='PepperContent'>
            <div className='ownerName'><span className='displayName'>{ownerId[0]}</span> {ownerId[3]} {ownerId[2]} {pepper_created_time}</div>
            <div className='PepperText'>{pepper_text}</div> <img className='images' src = {img2}/>
          </div>
          <div className='PepperActionButtons'>
            <div className='PepperActionButtonsComment'>
              <img className="" src = {comment}/>
            </div>
            <div className='PepperActionButtonsRepost'>
              <img className="" src = {repost}/>
            </div>
            <div className='PepperActionButtonsLike'>
              <img className="" src = {like}/>
            </div>
            <div className='PepperActionButtonsShare'>
            <img className="" src = {share}/>
            </div>
          </div>

        </div>
        <div className='Pepper'>
        
        </div>
        <div className='Pepper'>
        
        </div>
        <div className='Pepper'>
        
        </div>
        <div className='Pepper'>
        
        </div>
        <div className='Pepper'>
        
        </div>
      </div>
      <div className='rightSideBar'>
        <div className='rightSideBargrid'>
          <Blackhole/>
          <RightSideBar/>
        </div>
      </div>

    </div>
  )
}

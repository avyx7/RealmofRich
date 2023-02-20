import {Link } from "react-router-dom";
import style from './pepper.module.css';
import { auth } from '../../App';
import img from '../../i1.jpg';import img2 from '../../assets/peepsAssets/peeps/Flm0BjraYAEE6UY.jpg';
import png from '../../components/pepper/001-png.png';import calender from '../../components/pepper/002-calendar.png';import location from '../../components/pepper/004-location-pin.png';import button from '../../components/pepper/001-paper-plane-1.png';
import comment from '../../components/pepper/003-bubble-chat.png';import repost from '../../components/pepper/004-repeat.png';import like from '../../components/pepper/002-heart-1.png';import share from '../../components/pepper/005-down.png';
import weddingicon from "../../assets/icons/001-wedding-ring.png";import jobicon from "../../assets/icons/002-notebook.png";

export default function Peeps(){

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


    return(
      <>
              <div class={style.contentContainer}>
            <div class={style.content}>
              <div class={style.content__container}>
                <p class={style.content__container__text}>
                  Hello
                </p>
                <ul class={style.content__container__list}>
                  <li class={style.content__container__list__item}>world !</li>
                  <li class={style.content__container__list__item}>bob !</li>
                  <li class={style.content__container__list__item}>users !</li>
                  <li class={style.content__container__list__item}>everybody !</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={style.changelayout}>
            <div className={style.layoutcontainer1}>
              <div className={style.matrimony}><img className={style.matrimonyicon} src = {weddingicon} /></div>
            
              <div className={style.jobs}><img className={style.jobicon} src = {jobicon}/></div>
  
              </div>
          </div>
          <div className={style.Pepper}>
            <div className={style.PepperOwner}>
              <img className = {style.profilePic}  src = {photoURL || "../icons/profilepic-min.png"} alt = "profile pic" />
            </div>
            <div className={style.PepperContent}>
              <div className={style.PepperInput}>
                <textarea className = {style.PepperInputArea} placeholder="  Say Something nice!"></textarea>
                <div className={style.PepperInputAreaButtons}>
                  <img className = {style.add_image} src = {png} />
                  <img className = {style.add_calender} src = {calender} />
                  <img className = {style.add_location} src = {location} />
                  <div className = {style.add_pepper}><img src = {button} /></div>
  
                </div>
              </div>
            </div>
          </div>
          <div className={style.Pepper}>
            <div className={style.PepperOwner}>
              <img className={style.profilePic} src = {img}/>
            </div>
            <Link to="post/yrf"><div className={style.PepperContent} onClick>
              <div className={style.ownerName}>
                <div className={style.displayName}>{ownerId[0]}</div> 
                <div className={style.badge}>{ownerId[3]}</div>
                <div className={style.userhandle}>{ownerId[2]}</div>
                <div className={style.createdtime}>{pepper_created_time}</div>
              </div>
              <div className={style.PepperText}>{pepper_text}</div> <img className={style.images} src = {img2}/>
            </div>
            </Link>
            <div className={style.PepperActionButtons}>
              <div className={style.PepperActionButtonsComment}>
                <img className="" src = {comment}/>
                <div className={style.commentNumber}>91</div>
              </div>
              <div className={style.PepperActionButtonsRepost}>
                <img className="" src = {repost}/>
                <div className={style.repostNumber}>20</div>
              </div>
              <div className={style.PepperActionButtonsLike}>
                <img className="" src = {like}/>
                <div className={style.likeNumber}>200</div>
              </div>
              <div className={style.PepperActionButtonsShare}>
              <img className="" src = {share}/>
              </div>
            </div>
  
          </div>
          <div className={style.Pepper}>
            <div className={style.PepperOwner}>
              <img className={style.profilePic} src = {img}/>
            </div>
            <div className={style.PepperContent}>
              <div className={style.ownerName}>
                <div className={style.displayName}>{ownerId[0]}</div> 
                <div className={style.badge}>{ownerId[3]}</div>
                <div className={style.userhandle}>{ownerId[2]}</div>
                <div className={style.createdtime}>{pepper_created_time}</div>
              </div>
              <div className={style.PepperText}>{pepper_text}</div> <img className={style.images} src = {img2}/>
            </div>
            <div className={style.PepperActionButtons}>
              <div className={style.PepperActionButtonsComment}>
                <img className="" src = {comment}/>
                <div className={style.commentNumber}>91</div>
              </div>
              <div className={style.PepperActionButtonsRepost}>
                <img className="" src = {repost}/>
                <div className={style.repostNumber}>20</div>
              </div>
              <div className={style.PepperActionButtonsLike}>
                <img className="" src = {like}/>
                <div className={style.likeNumber}>200</div>
              </div>
              <div className={style.PepperActionButtonsShare}>
              <img className="" src = {share}/>
              </div>
            </div>
  
          </div>
          <div className={style.Pepper}>
            <div className={style.PepperOwner}>
              <img className={style.profilePic} src = {img}/>
            </div>
            <div className={style.PepperContent}>
              <div className={style.ownerName}>
                <div className={style.displayName}>{ownerId[0]}</div> 
                <div className={style.badge}>{ownerId[3]}</div>
                <div className={style.userhandle}>{ownerId[2]}</div>
                <div className={style.createdtime}>{pepper_created_time}</div>
              </div>
              <div className={style.PepperText}>{pepper_text}</div> <img className={style.images} src = {img2}/>
            </div>
            <div className={style.PepperActionButtons}>
              <div className={style.PepperActionButtonsComment}>
                <img className="" src = {comment}/>
                <div className={style.commentNumber}>91</div>
              </div>
              <div className={style.PepperActionButtonsRepost}>
                <img className="" src = {repost}/>
                <div className={style.repostNumber}>20</div>
              </div>
              <div className={style.PepperActionButtonsLike}>
                <img className="" src = {like}/>
                <div className={style.likeNumber}>200</div>
              </div>
              <div className={style.PepperActionButtonsShare}>
              <img className="" src = {share}/>
              </div>
            </div>
  
          </div>
          <div className={style.Pepper}>
            <div className={style.PepperOwner}>
              <img className={style.profilePic} src = {img}/>
            </div>
            <div className={style.PepperContent}>
              <div className={style.ownerName}>
                <div className={style.displayName}>{ownerId[0]}</div> 
                <div className={style.badge}>{ownerId[3]}</div>
                <div className={style.userhandle}>{ownerId[2]}</div>
                <div className={style.createdtime}>{pepper_created_time}</div>
              </div>
              <div className={style.PepperText}>{pepper_text}</div> <img className={style.images} src = {img2}/>
            </div>
            <div className={style.PepperActionButtons}>
              <div className={style.PepperActionButtonsComment}>
                <img className="" src = {comment}/>
                <div className={style.commentNumber}>91</div>
              </div>
              <div className={style.PepperActionButtonsRepost}>
                <img className="" src = {repost}/>
                <div className={style.repostNumber}>20</div>
              </div>
              <div className={style.PepperActionButtonsLike}>
                <img className="" src = {like}/>
                <div className={style.likeNumber}>200</div>
              </div>
              <div className={style.PepperActionButtonsShare}>
              <img className="" src = {share}/>
              </div>
            </div>
  
          </div>
          <div className={style.Pepper}>
            <div className={style.PepperOwner}>
              <img className={style.profilePic} src = {img}/>
            </div>
            <div className={style.PepperContent}>
              <div className={style.ownerName}>
                <div className={style.displayName}>{ownerId[0]}</div> 
                <div className={style.badge}>{ownerId[3]}</div>
                <div className={style.userhandle}>{ownerId[2]}</div>
                <div className={style.createdtime}>{pepper_created_time}</div>
              </div>
              <div className={style.PepperText}>{pepper_text}</div> <img className={style.images} src = {img2}/>
            </div>
            <div className={style.PepperActionButtons}>
              <div className={style.PepperActionButtonsComment}>
                <img className="" src = {comment}/>
                <div className={style.commentNumber}>91</div>
              </div>
              <div className={style.PepperActionButtonsRepost}>
                <img className="" src = {repost}/>
                <div className={style.repostNumber}>20</div>
              </div>
              <div className={style.PepperActionButtonsLike}>
                <img className="" src = {like}/>
                <div className={style.likeNumber}>200</div>
              </div>
              <div className={style.PepperActionButtonsShare}>
              <img className="" src = {share}/>
              </div>
            </div>
  
          </div>
          <div className={style.Pepper}>
          
          </div>
          <div className={style.Pepper}>
          
          </div>
          <div className={style.Pepper}>
          
          </div>
          <div className={style.Pepper}>
          
          </div>
          <div className={style.Pepper}>
          
          </div>
      </>
    )
  }
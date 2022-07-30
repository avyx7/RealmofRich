import React from 'react'
import close from "../icons/close.png"

export default function AchievementModal(props) {
  return (
    <div className='modalcontainer'>
        <div className='modalhead'>
            <div className='modalheadcontainer'>
                <div className='modalheadtext'>
                    Achievements
                </div>
                <div className='modalclosebutton'  onClick = {()=> props.onClick()}>
                    <img src = {close} onClick = {()=> props.onClick()}></img>
                </div>
            </div>
        </div>
        <div className='modalcontent'>

        </div>
    </div>
  )
}

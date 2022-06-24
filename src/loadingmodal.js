import React from 'react'

export default function Loadingmodal() {
  return (
    <>
    <img className='loadingModalContainer' src = "./506e17127797633.614985a0c23a3.jpg" />


    <div className='loadingModalGrid'>

        <div className='loadingModalGridLeft'>
          <div className='loadingModalGridLeftContent'>
            <img className='cloudimage' src = "580b585b.png"/>
            <img className='filledcirle' src = "./icons/001-circle.png"/>
            <img className='plus' src = "./icons/004-plus.png"/>
            <img className='cloudimage2' src = "580b585b.png"/>
            <img className='cloudimage3' src = "580b585b.png"/>
            <img className='heart' src = "./icons/001-heart.png"/>
          </div>
        </div>
        <div className='loadingModalGridRight'>
          <div className='loadingModalGridRightContent'>
            <img className='cloudimage' src = "580b585b.png"/>
            <img className='heart' src = "./icons/001-heart.png"/>
            <img className='dottedcirle' src = "./icons/004-plus.png"/>
            <img className='cloudimage2' src = "580b585b.png"/>
            <img className='cloudimage3' src = "580b585b.png"/>
            <img className='filledcirle' src = "./icons/001-circle.png"/>
          </div>
        </div>
    </div>
    </>
    
  )
}

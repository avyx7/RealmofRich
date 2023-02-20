import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import style from '../components/pepper/pepper.module.css';
import Peeps from '../components/pepper/Peeps';
import RightSideBar from '../components/pepper/rightSideBar';
import Blackhole, {Blackhole1} from '../components/pepper/blackhole';

export default function Pepper() {

  let { postId } = useParams();
  
//Cropping Image to create new Pepper
//TextArea to create new Pepper
//Visual UI for Quoting Pepper, Threads, trending visual effects


  return (
    <div className={style.pepperContainer}>
      
      <div className={style.Peeps}>
        {/*(postId !== null) ? pepper() : peeps()*/}
        <Outlet/>
      </div>
      <div className={style.rightSideBar}>
        <div className={style.rightSideBargrid}>
          
          <Blackhole1/>
          <RightSideBar/>
        </div>
      </div>

    </div>
  )
}


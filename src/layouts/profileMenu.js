import React from 'react';
import { Link } from 'react-router-dom';
import style from '../assets/educationHome.module.css';


function ProfileMenu(props) {

        return (
            <>
                <nav className={!props.profilemenu ? `${style.notactive}`: `${style.profilemenu}`} onClick = {props.onClick()}>
                    <ul className={style.profilemenu}>
                        <li className={style.profilemenuitems} onClick={props.toggleopenclose}>
 
                            <img className={style.profilevipicon} src = "../icons/vipcircle-min.png" alt = "vip icon"></img> Upgrade VIP

                        </li>
                        <li className={style.profilemenuitems}>
                            <Link to = "#">
                                View Profile
                            </Link>
                        </li>
                        <li className={style.profilemenuitems}>
                            <Link to = "#">
                                Help & Support
                            </Link>
                        </li>
                        <li className={style.profilemenuitems} onClick={props.setlogout()}>
                            <Link to = "#">
                                Log Out
                            </Link>
                        </li>
                    </ul>
                </nav>
            </>
        )

}

export default ProfileMenu;
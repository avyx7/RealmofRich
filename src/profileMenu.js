import React from 'react';
import { Link } from 'react-router-dom';


function ProfileMenu(props) {

        return (
            <>
                <nav className={!props.profilemenu ? "not-active": "profilemenu"} onClick = {props.onClick()}>
                    <ul className="profile-menu">
                        <li className="profile-menu-items" onClick={props.toggleopenclose}>
 
                            <img className="profilevipicon" src = "../icons/vipcircle-min.png" alt = "vip icon"></img> Upgrade VIP

                        </li>
                        <li className="profile-menu-items">
                            <Link to = "#">
                                View Profile
                            </Link>
                        </li>
                        <li className="profile-menu-items">
                            <Link to = "#">
                                Help & Support
                            </Link>
                        </li>
                        <li className="profile-menu-items" onClick={props.setlogout()}>
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
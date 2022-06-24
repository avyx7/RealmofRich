import { Link } from 'react-router-dom';
import style from "./index.module.css";

function Footer() {
    return (
<div className={style.segment} id = {style.footer}>
    <div className={`${style.footerhead} ${style.container}`} >
       <p id ={style.footerhead}>RealmofRich is all about Education & Finance</p>
    </div>
    <div className={style.col1}>
        <div className={style.row1}>
        <Link to = "/faq">FAQ</Link>
        </div>
        <div className={style.row2}>
        <Link to = "/jobs">Jobs</Link>
        </div>
        <div className={style.row3}>
        <Link to = "/privacypolicy">Privacy Policy</Link>
        </div>
    </div>
    <div className={style.col2}>
        <div className={style.row1}>
        <Link to = "/helpcenter">Help Center</Link>
        </div>
        <div className={style.row2}>
        <Link to = "/companyinfo">Company Information</Link>
        </div>
        <div className={style.row3}>
        <Link to = "/cookie">Cookie Preference</Link>
        </div>
    </div>
    <div className={style.col3}>
        <div className={style.row1}>
        <Link to = "/account">Account</Link>
        </div>
        <div className={style.row2}>
        <Link to = "/contactus">Contact Us</Link>
        </div>
        <div className={style.row3}>
        <Link to = "/termsofservice">Terms of Use</Link>
        </div>
    </div>
</div>
 );
}

export default Footer;
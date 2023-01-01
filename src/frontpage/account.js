import Navbar from "./navbar";
import Footer from "./footer";
import style from "./index.module.css";

function Account() {
    return (
        <div>
            <div className={style.logoheader}>
            <Navbar/>
            </div>
            <div className={`${style.privacypolicy} ${style.privacycontenttextmargin}`}>
                <h1>Account</h1>
                <h4>RealmOfRich is a brand name of DBH Consulting LLP.</h4>
                <h2>
                    'We' represents DBH Consulting LLP. Company was registered in July 2016.
                    DBH is a startup recognised by DIPP under startup recognition program.
                    Startup Certificate No.: DIPP12778

                    
                </h2>
            </div>
            <Footer />
        </div>
        );
}

export default Account;
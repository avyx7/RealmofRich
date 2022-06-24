import Navbar from "./navbar";
import Footer from "./footer";
import style from "./index.module.css";

function Cookie() {
    return (
        <div>
            <div className={style.logoheader}>
            <Navbar/>
            </div>
            <div className={`${style.privacypolicy} ${style.privacycontenttextmargin}`}>
                <h2>Cookie </h2>
                <div className={`${style.subhead} ${style.backshade} ${style.padding}`}>
                <h3>Essential Cookies</h3>
                These cookies are strictly necessary to provide our website or online service. For example, we and our Service Providers may use these cookies to authenticate and identify visitors when they use our websites and applications so we can provide our service to them. They also help us to enforce our Terms of Use, prevent fraud and maintain the security of our services.<br/><br/>

                Lifespan: Most cookies are session cookies (which are only active until you close your browser) or are cookies which are only active for one day. Some cookies are active for a longer time, ranging from 3 to 12 months. The cookies used to prevent fraud and maintain the security or our services are active for a maximum period of 24 months.
                </div>
                    
                
            </div>
            <Footer />
        </div>
        );
}

export default Cookie;
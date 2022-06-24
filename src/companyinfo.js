import Navbar from "./navbar";
import Footer from "./footer";
import style from "./index.module.css";

function CompanyInformation() {
    return (
        <div>
            <div className={style.logoheader}>
            <Navbar/>
            </div>
            <div className={`${style.privacypolicy} ${style.privacycontenttextmargin}`}>
                <h2>Company Information </h2>
                <div className={`${style.subhead} ${style.backshade} ${style.padding}`}>
                <h3>RealmOfRich is a brand name of DBH Consulting LLP.</h3>
                'We' represents DBH Consulting LLP. Company was registered in July 2016.
                DBH is a startup recognised by DIPP under startup recognition program.
                Startup Certificate No.: DIPP12778
                <br/><br/>
                <div>
                <div className={style.underline}>Company Registered address</div>
                DBH Consulting LLP<br/>
                Near Jayguru Lodge, Laldih,<br/>
                Ghatshila<br/>
                Jharkhand [832303]<br/><br/>

                <div className={style.underline}>Company Mailing address</div>
                DBH Consulting LLP<br/>
                NF 9/7, New Line,<br/>
                Moubhandar
                Ghatshila<br/>
                Jharkhand [832103]<br/><br/>

                <div className={style.underline}>Company Office address</div>
                DBH Consulting LLP<br/>
                3rd Floor, Landmark Building<br/>
                Opposite of Siddhi Vinayka Temple<br/>
                CBM Compound<br/>
                Visakhapatnam<br/>
                Andhra Pradesh [530003]
                
                </div>

                </div>
                    
                
            </div>
            <Footer />
        </div>
        );
}

export default CompanyInformation;
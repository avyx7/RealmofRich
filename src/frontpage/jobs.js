import Navbar from "./navbar";
import Footer from "./footer";
import style from "./index.module.css";

function Jobs() {
    return (
        <div className={style.jobs}>
            <div className={style.logoheader}>
            <Navbar/>
            </div>
            <div className={`${style.privacypolicy} ${style.privacycontenttextmargin} ${style.container}`}>
                <h1>We are always Hiring</h1>
                <h2>
                    Human Resource Trainer
                </h2>
                <p className={style.jobdetail}>Feminine, Charismatic, Instinctive Leadership position
                    <br/>5.5 Lacs + Lots of Benefits
                    <br/>aye aye Commander
                    <br/>Are you able to give prep speeches and inspire people?
                    Job includes training people, passing on ideas and inspiring people to act together for a greater cause.
                    You must know English, Hindi and more languages besides it.
                    You must be more than your degree or skill..much much more
                    <br/>Any graduate & post graduate can apply who is a charismatic person. Doesn't mind learning new ideas but infact enjoys it.
                    If you got all these qualities which nobody can teach but can only posses:
                    <br/>Feminine but enjoys masculinity
                    <br/>Intelligent
                    <br/>Charismatic
                    <br/>Possesses leadership instinct</p>
                    <img src="giphy3.gif"></img>

            </div>
            <Footer />
        </div>
        );
}

export default Jobs;
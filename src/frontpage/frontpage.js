import { useEffect } from "react";


import { ui, uiConfig } from "../App";
import Divider from "./divider";
import Header from "./header";
import Homepage from "./homepage";
import Footer from "./footer";
import LandingEducation from "./landingEducationPage";




function Frontpage() {

  useEffect(() => {
    ui.start('#auth-options', uiConfig);
  },[]);

    return (


      <>

      <Header/>
      <Divider/>
      <Homepage/>
      <Divider/>
      <Footer />
      </>
    );
  }

  export default Frontpage;
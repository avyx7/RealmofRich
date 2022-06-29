import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { ui, uiConfig } from "./App";
import Divider from "./divider";
import Header from "./header";
import Homepage from "./homepage";
import Footer from "./footer";
import Privacy from "./privacypolicy";
import CompanyInformation from "./companyinfo";
import Jobs from "./jobs";
import Account from "./account";
import Termsofservice from "./termsofservice";
import Cookie from "./cookie";
import Faq from "./faq";



function Frontpage() {

  useEffect(() => {
    ui.start('#auth-options', uiConfig);
  });

    return (
      <Router>
        <div>
          <Switch>
            <Route exact path = "/">
              <Header/>
              <Divider/>
              <Homepage/>
              <Divider/>
              <Footer />
            </Route>
            <Route exact path = "/privacypolicy">
              <Privacy/>
            </Route>
            <Route exact path = "/companyinfo">
              <CompanyInformation/>
            </Route>
            <Route exact path = "/jobs">
              <Jobs/>
            </Route>
            <Route exact path = "/account">
              <Account/>
            </Route>
            <Route exact path = "/termsofservice">
              <Termsofservice/>
            </Route>
            <Route exact path = "/cookie">
              <Cookie/>
            </Route>
            <Route exact path = "/faq">
              <Faq/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }

  export default Frontpage;
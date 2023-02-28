import React from "react";
import { Helmet } from "react-helmet";

import {
  Navbar,
  Footer,
  Landing,
  About,
  Skills,
  Education,
  Contacts,
  Projects,
  Services,
  GithubCalenderComp,
} from "../../components";
import { headerData } from "../../data/headerData";

function Main() {
  return (
    <div>
      <Helmet>
        <title>{headerData.name} - Porfolio</title>
      </Helmet>

      <Navbar />
      <Landing />
      <About />
      <Skills />
      <Education />
      <Projects />
      <GithubCalenderComp />
      <Contacts />
      <Footer />
    </div>
  );
}

export default Main;

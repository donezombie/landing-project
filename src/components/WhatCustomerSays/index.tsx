import { Fragment } from "react";
import { SectionTitle } from "../SectionTitle";
import { Testimonials } from "../Testimonials";

const WhatCustomerSays = () => {
  return (
    <Fragment>
      <SectionTitle
        preTitle="Testimonials"
        title="What Customer Say About Us"
      />
      <Testimonials />
    </Fragment>
  );
};

export default WhatCustomerSays;
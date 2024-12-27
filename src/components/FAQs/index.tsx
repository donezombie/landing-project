import { Fragment } from "react";
import { Faq } from "../Faq";
import { SectionTitle } from "../SectionTitle";
import { faqData } from "@/customize/data";

const FAQs = () => {
  return (
    <Fragment>
      <SectionTitle
        preTitle="FAQ"
        title="Frequently Asked Questions"
      />

      <Faq />
    </Fragment>
  );
};

export default FAQs;

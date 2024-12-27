import { Fragment } from "react";
import { SectionTitle } from "../SectionTitle";
import { Benefits } from "../Benefits";
import { benefitOne } from "@/customize/data";

const WhyChooseUs = () => {
  return (
    <Fragment>
      <SectionTitle
        preTitle="Why choose us"
        title="Eat Nourishing Diet Be Healthy"
      >
        We are dedicated to your success, offering ongoing support and practical
        strategies to help you reach your wellness goals.
      </SectionTitle>

      <Benefits data={benefitOne} />
    </Fragment>
  );
};

export default WhyChooseUs;

import { Container } from "@/components/Container";
import HeaderContainer from "@/components/HeaderContainer";
import WhatCustomerSays from "@/components/WhatCustomerSays";
import { Metadata } from "next";
import AboutUs from "@/components/AboutUs";
import { genTitle } from "@/helpers";
import MeetOurTeams from "@/components/MeetOurTeams";

export const metadata: Metadata = {
  title: genTitle("About Us"),
  description: "Please learn more about Privacy Policy here!",
};

const AboutUsPage = () => {
  return (
    <div>
      <HeaderContainer className="mb-16 mt-8 relative w-full">
        About Us
      </HeaderContainer>

      <Container>
        <AboutUs />
        <MeetOurTeams />
        <WhatCustomerSays />
      </Container>
    </div>
  );
};

export default AboutUsPage;

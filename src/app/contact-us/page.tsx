import { Container } from "@/components/Container";
import FAQs from "@/components/FAQs";
import FormLetTalkNow from "@/components/FormLetTalkNow";
import HeaderContainer from "@/components/HeaderContainer";
import { genTitle } from "@/helpers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: genTitle("Contact Us"),
  description: "Please learn more about Privacy Policy here!",
};

const AboutUs = () => {
  return (
    <div className="component:AboutUs">
      <HeaderContainer className="mb-16 mt-8 relative w-full">
        Contact Us
      </HeaderContainer>

      <Container className="max-w-[1000px] p-[8px] md:p-0">
        <FormLetTalkNow />

        <FAQs />
      </Container>
    </div>
  );
};

export default AboutUs;

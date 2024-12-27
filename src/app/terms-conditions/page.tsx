import HeaderContainer from "@/components/HeaderContainer";
import { termsData } from "@/customize/data";
import { genTitle } from "@/helpers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: genTitle("Terms & Conditions"),
  description: "Please learn more about Privacy Policy here!",
};

const PrivacyPolicy = () => {
  return (
    <div>
      <HeaderContainer className="mb-16 mt-8 relative w-full">
        Terms & Conditions
      </HeaderContainer>

      <div className="max-w-[1040px] m-auto p-3 md:p-0">
        <div
          className="page-content"
          dangerouslySetInnerHTML={{
            __html: termsData,
          }}
        />
      </div>
    </div>
  );
};

export default PrivacyPolicy;

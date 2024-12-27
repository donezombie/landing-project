import HeaderContainer from "@/components/HeaderContainer";
import { privacyPolicyData } from "@/customize/data";
import { genTitle } from "@/helpers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: genTitle("Privacy Policy"),
  description: "Please learn more about Privacy Policy here!",
};

const PrivacyPolicy = () => {
  return (
    <div>
      <HeaderContainer className="mb-16 mt-8 relative w-full">
        Privacy Policy
      </HeaderContainer>

      <div className="max-w-[1040px] m-auto p-3 md:p-0">
        <div
          className="page-content"
          dangerouslySetInnerHTML={{
            __html: privacyPolicyData,
          }}
        />
      </div>
    </div>
  );
};

export default PrivacyPolicy;

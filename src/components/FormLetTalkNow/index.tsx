import Button from "@/components/Button";
import CheckBoxField from "../CustomFields/CheckBoxField";
import InputField from "../CustomFields/InputField";
import { contactInfo } from "@/customize/data";
import Link from "next/link";

const FormLetTalkNow = () => {
  return (
    <form className="gap-10 mb-24 flex flex-col sm:flex-row">
      <div className="shrink-0 flex flex-col gap-3 w-full md:w-1/2">
        <h2 className="text-[2rem] leading-[1.4rem] mb-4">Let's Talk Now</h2>
        <InputField name="firstName" placeholder="First Name" required />
        <InputField name="lastName" placeholder="Last Name" required />
        <InputField name="mobileNumber" placeholder="Mobile Number" required />
        <InputField
          type="email"
          name="email"
          placeholder="Email Address"
          required
        />

        <div className="flex gap-3 mt-3">
          <CheckBoxField
            name="consent-1"
            id="consent-1"
            className="shrink-0 translate-y-1"
          />
          <label htmlFor="consent-1" className="hover:cursor-pointer">
            I have read and agreed to{" "}
            <a
              className="text-primary hover:cursor-pointer"
              href="/terms-conditions"
            >
              Terms and condition
            </a>{" "}
            and{" "}
            <a
              className="text-primary hover:cursor-pointer"
              href="/privacy-policy"
            >
              Privacy Policy
            </a>
            .
          </label>
        </div>

        <div className="flex gap-3">
          <CheckBoxField
            name="consent-2"
            id="consent-2"
            className="shrink-0 translate-y-1"
          />
          <label htmlFor="consent-2" className="hover:cursor-pointer">
            By checking this box, I verify that this is my mobile number and
            that I would like to sign up to SMS Messages from “{contactInfo.nameProject}”.
            Legal company name. I understand that I am not required to provide
            my consent as a condition of purchasing any products or services.
            Msg freq may vary. Msg and data rates may apply. Reply HELP for help
            or STOP to optout.
          </label>
        </div>

        <Button className="mt-2">Apply Now</Button>
      </div>

      {/*  */}
      <div className="shrink-0 bg-gray-100 p-6 rounded-2xl w-full md:w-1/2 text-xl">
        <p>
          <strong>Text “JOIN” to +1 {contactInfo.phone}</strong> to sign up for
          recurring marketing alerts. Message and data rates may apply. By
          subscribing above, you confirm you are authorized to add the telephone
          number and hereby give consent to receive SMS/text messages from you
          at the telephone number. You understand that your consent is not
          required as a condition to purchase products or services. When you
          sign up to <strong>{contactInfo.nameProject}</strong>, message and data rates may
          apply.
          <br />
          <br />
          You also accept our{" "}
          <a
            className="text-primary hover:cursor-pointer"
            href="/terms-conditions"
          >
            Terms and Conditions
          </a>
          &nbsp;and our&nbsp;
          <a
            className="text-primary hover:cursor-pointer"
            href="/privacy-policy"
          >
            Privacy Policy
          </a>
          . Msg frequency may vary. You may revoke future alerts and messages
          via the online portal or by texting “STOP” to{" "}
          <strong>{contactInfo.phone}</strong> to opt-out. For help, text “HELP” to{" "}
          <strong>{contactInfo.phone}</strong>. T-Mobile is not liable for delayed or
          undelivered messages.
        </p>
      </div>
    </form>
  );
};

export default FormLetTalkNow;

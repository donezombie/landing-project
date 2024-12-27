import Link from "next/link";
import Button from "../Button";
import { benefitOne } from "@/customize/data";
import { Benefits } from "../Benefits";

const AboutUs = () => {
  return (
    <div className="component:AboutUs m-auto max-w-[1200px]">
      <div className="flex flex-col md:flex-row gap-20">
        <div className="flex flex-col md:w-[500px]">
          <img
            loading="lazy"
            src="/custom/businesswomen-using-laptop.webp"
            alt="img-about-us"
            className="max-w-100 animate-fade rounded-2xl"
          />

          <h5 className="mt-4 text-2xl leading-1">
            Get Online Support For Consult With Our Specialist.
          </h5>
          <hr className="mt-4" />

          <a className="flex w-full mt-3" href="/contact-us">
            <Button className="w-full">Contact Us</Button>
          </a>
        </div>

        <div className="md:w-1/2">
          <h3 className="animate-fade text-5xl">Eat Nourishing Diet Be Healthy.</h3>
          <p className="animate-fade animate-delay-300 text-2xl text-gray-500 mt-4">
            We are dedicated to your success, offering ongoing support and
            practical strategies to help you reach your wellness goals.
          </p>

          <Benefits data={benefitOne} noImage />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

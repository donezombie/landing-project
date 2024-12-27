import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import WhatCustomerSays from "@/components/WhatCustomerSays";
import MeetOurTeams from "@/components/MeetOurTeams";
import FAQs from "@/components/FAQs";
import FormLetTalkNow from "@/components/FormLetTalkNow";
import WhyChooseUs from "@/components/WhyChooseUs";
import { SectionTitle } from "@/components/SectionTitle";
import { contactInfo } from "@/customize/data";
import CountNumber from "@/components/CountNumber";

export default function Home() {
  return (
    <Container>
      <Hero />

      <div className="mt-28">
        <SectionTitle
          preTitle="About Us"
          title="We provide best weight loss support in town"
        />

        <div className="flex flex-col lg:flex-row gap-10">
          <div
            className="overflow-hidden rounded-2xl shrink-0 w-full md:w-1/2"
            style={{ maxWidth: 900 }}
          >
            <img
              src="/custom/healthy-clean-food.webp"
              alt="health-clean-food-about"
            />
          </div>

          <div>
            <h2 className="text-gray-500 text-xl">
              At {contactInfo.organization}, we are committed to helping you
              achieve your weight loss goals with personalized support, expert
              guidance, and proven strategies. Whether you're just starting your
              journey or looking for new ways to stay motivated, our team is
              here to provide the resources and encouragement you need to
              succeed.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-8">
              {[
                {
                  label: "Active Members",
                  value: 920,
                },
                {
                  label: "Winning Awward",
                  value: 780,
                },
                {
                  label: "Happy Patient",
                  value: 560,
                },
              ].map((el, index) => {
                return (
                  <div
                    key={el.label}
                    className="flex flex-col items-center gap-2 border p-4 rounded-lg border-primary opacity-0 intersect:animate-fade-up intersect-once"
                    style={{
                      animationDelay: `${index * 200}ms`
                    }}
                  >
                    <p className="text-5xl">
                      <CountNumber number={el.value} />+
                    </p>
                    <span className="text-md font-normal text-gray-500">{el.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <WhyChooseUs />
      </div>

      <div className="mt-24">
        <MeetOurTeams />
      </div>

      <div className="mt-24">
        <WhatCustomerSays />
      </div>

      <div className="max-w-[1000px] m-auto mt-24">
        <FormLetTalkNow />
      </div>

      <FAQs />
    </Container>
  );
}

import React from "react";
import { Container } from "@/components/Container";
import { contactInfo } from "@/customize/data";

export const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3 opacity-0 intersect:animate-fade-up intersect-once">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-xl leading-normal ">
              I started the program with the intention of reducing my sugar
              cravings. I have always had a sweet tooth.
              <br />
              <br />I have always had PCOD which makes it a bit more difficult
              to shed weight. Most advice from her is do-able and are now part
              of my daily routine.
            </p>

            <Avatar
              image={"img/user3.jpg"}
              name="Sarah Steiner"
              title="Developer"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-xl leading-normal ">
              I started working with {contactInfo.nameProject} from December 2020 when I was
              balancing two roles in my life which is my day job while pursuing
              my passion as an entrepreneur.
              <br />
              <br />
              This was leading to chronic stress for me and I was becoming aware
              of the impact it was having on my health.
            </p>

            <Avatar
              image={"img/user2.jpg"}
              name="Dylan Ambrose"
              title="Marketer"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-xl leading-normal ">
              As a business owner I was witnessing huge losses in my business
              due to COVID but I chose this time to invest in myself.
              <br />
              <br />I want to live my life in a more meaningful way and don’t
              want to end up at the doctor’s a few years later. I want to be fit
              and fine and be able to do anything that comes up in life.
            </p>

            <Avatar
              image={"img/user1.jpg"}
              name="Gabrielle Winn"
              title="Sales"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

interface AvatarProps {
  image: any;
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <img src={props.image} style={{ width: 40, height: 40 }} alt="Avatar" />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <>
      {" "}
      <mark className="text-primary-darker bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}

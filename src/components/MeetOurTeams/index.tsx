import { Fragment } from "react";
import { SectionTitle } from "../SectionTitle";
import { meetOurTeams } from "@/customize/data";

const MeetOurTeams = () => {
  return (
    <Fragment>
      <SectionTitle preTitle="Our Team" title="Meet Our Professional Coaches" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 opacity-0 intersect:animate-fade-right intersect-once">
        {meetOurTeams.map((el, index) => {
          return (
            <div
              key={el.name}
              className={`flex flex-col bg-gray-100 p-2 lg:p-14 rounded-2xl opacity-0 intersect:animate-fade-up intersect-once`}
              style={{
                animationDelay: `${index * 300}ms`,
              }}
            >
              <div className="rounded-2xl rounded-b-none overflow-hidden">
                <img loading="lazy" src={el.img} alt="each-member" />
              </div>
              <div className="flex justify-center items-center flex-col bg-white w-full p-4 rounded-2xl rounded-t-none">
                <span className="text-xl mb-1">{el.name}</span>
                <span className="text-sm text-gray-400">{el.role}</span>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default MeetOurTeams;

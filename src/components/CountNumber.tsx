"use client";
import CountUp from "react-countup";

const CountNumber = ({ number }: { number: number }) => {
  return <CountUp start={0} end={number} />;
};

export default CountNumber;

import React from "react";
import { twMerge } from 'tailwind-merge'

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container(props: Readonly<ContainerProps>) {
  return (
    <div
      className={twMerge(`container p-8 mx-auto xl:px-0 ${
        props.className ? props.className : ""
      }`)}>
      {props.children}
    </div>
  );
}


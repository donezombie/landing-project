import classNames from "classnames";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface ButtonProps extends React.PropsWithChildren {}

const Button = (props: ButtonProps & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
  const { children, className, ...restProps } = props;
  return <button className={classNames("px-6 py-2 text-white bg-primary rounded-md", className)} {...restProps}>{children}</button>;
};

export default Button;

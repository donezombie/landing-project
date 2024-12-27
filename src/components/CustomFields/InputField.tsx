import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import classNames from "classnames";

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: string;
  placeholder?: string;
  required?: boolean;
  label?: string;
}

const InputField = (props: InputProps) => {
  const { name, placeholder, label, type = "text", required } = props;

  return (
    <div className={classNames("component:InputField flex flex-col gap-2")}>
      {!!label && <label
        className={classNames(
          "after",
          required && `after:content-['*'] after:text-red-600 after:ml-1`
        )}
        htmlFor={name}
      >
        {label}
      </label>}
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type={type}
        placeholder={placeholder}
        name={name}
        id={name}
        required={!!required}
      />
    </div>
  );
};

export default InputField;

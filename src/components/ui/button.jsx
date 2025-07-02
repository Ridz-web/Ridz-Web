import React from "react";
import classNames from "classnames";

export const Button = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={classNames(
        "bg-black text-white px-5 py-2 rounded-xl shadow-md hover:scale-[1.03] hover:shadow-lg transition-all duration-300 ease-in-out active:scale-[0.98]",
        className
      )}>
      {children}
    </button>
  );
};

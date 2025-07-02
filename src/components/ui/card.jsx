import React from "react";
import classNames from "classnames";

export const Card = ({ children, className }) => {
  return (
    <div
      className={classNames(
        "bg-white rounded-2xl p-6 shadow-xl border border-zinc-200 transition-all duration-300",
        className
      )}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className }) => {
  return (
    <div className={classNames("text-zinc-700", className)}>{children}</div>
  );
};

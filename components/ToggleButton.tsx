"use client";

import { useState } from "react";

type ToggleButtonProps = {
  value?: boolean;
  onToggle?: (newValue: boolean) => void;
};

export default function ToggleButton({ value, onToggle }: ToggleButtonProps) {
  const [internalValue, setInternalValue] = useState(false);

  const isControlled = value !== undefined;
  const enabled = isControlled ? value : internalValue;

  const toggle = () => {
    const newValue = !enabled;
    if (!isControlled) {
      setInternalValue(newValue);
    }
    onToggle?.(newValue);
  };

  // return (
  //   <button
  //     onClick={toggle}
  //     className={`w-[60px] h-[32px] rounded-full flex items-center p-1 transition-colors shadow-md
  //       ${
  //         enabled
  //           ? "bg-red-500 justify-end"
  //           : "bg-white justify-start border border-red-500"
  //       }
  //     `}
  //   >
  //     <div
  //       className={`
  //         w-[24px] h-[24px] rounded-full transition-all duration-500 ease-in-out
  //         ${enabled ? "bg-white translate-x-0" : "bg-red-500 translate-x-0"}
  //       `}
  //       style={{
  //         transform: `translateX(${enabled ? "0" : "-28px"})`,
  //       }}
  //     />
  //   </button>
  // );

  return (
    <button
      onClick={toggle}
      className={`relative w-[60px] h-[32px] rounded-full transition-colors shadow-[0_4px_20px_rgba(0,0,0,0.15)] overflow-hidden
        ${enabled ? "bg-blue-500" : "bg-slate-300"}
      `}
    >
      {/* 이동하는 원 */}
      <div
        className={`
          absolute top-1 left-1 w-[24px] h-[24px] rounded-full transition-transform duration-500 ease-in-out
          ${enabled ? "bg-white" : "bg-slate-500"}
        `}
        style={{
          transform: `translateX(${enabled ? "28px" : "0px"})`,
        }}
      />
    </button>
  );
}

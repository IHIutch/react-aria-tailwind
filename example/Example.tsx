import React from "react";
import { Button } from "../src/Button";
import { ToggleButton } from "../src/ToggleButton";

export function Example() {
  return (
    <div className="m-8 grid max-w-sm grid-cols-2 gap-2">
      <h1 className="col-span-2">React Aria Tailwind</h1>
      <Button
        className="cursor-default rounded py-2 px-4 font-bold text-white transition duration-150 ease-in-out focus:outline-none"
        defaultClassName="bg-blue-500"
        hoverClassName="bg-blue-600"
        activeClassName="bg-blue-700"
        focusVisibleClassName="ring ring-offset-2 ring-blue-400"
        disabledClassName="bg-gray-400"
      >
        Button
      </Button>
      <Button
        className="cursor-default rounded py-2 px-4 font-bold text-white transition duration-150 ease-in-out focus:outline-none"
        defaultClassName="bg-blue-500"
        hoverClassName="bg-blue-600"
        activeClassName="bg-blue-700"
        focusVisibleClassName="ring ring-offset-2 ring-blue-400"
        disabledClassName="bg-gray-400"
        isDisabled
      >
        Button
      </Button>
      <ToggleButton
        className="cursor-default rounded py-2 px-4 font-bold text-white transition duration-150 ease-in-out focus:outline-none"
        defaultClassName="bg-blue-500"
        hoverClassName="bg-blue-600"
        activeClassName="bg-blue-700"
        focusVisibleClassName="ring ring-offset-2 ring-blue-400"
        disabledClassName="bg-gray-400"
        selectedClassName="bg-green-600"
        selectedHoverClassName="bg-green-700"
        selectedActiveClassName="bg-green-800"
        defaultSelected
      >
        Toggle Button
      </ToggleButton>
    </div>
  );
}

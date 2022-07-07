import React from "react";
import { Button } from "../src/Button";
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from "../src/FormControl";
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

      <FormControl isInvalid>
        <FormLabel className="block pb-2 text-sm font-medium text-gray-900">
          Type Your Name
        </FormLabel>
        <Input
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
          placeholder="John"
        />
        <FormHelperText className="mt-2 text-sm text-gray-600">
          Desc test
        </FormHelperText>
        <FormErrorMessage className="mt-2 text-sm text-red-600">
          Error test
        </FormErrorMessage>
      </FormControl>
    </div>
  );
}

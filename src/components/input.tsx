import { LegacyRef, forwardRef } from "react";
import { Input as ShadInput } from "./ui/input";
import { cn } from "@/lib/utils";
import { CiWarning } from "react-icons/ci";
import { FieldError } from "react-hook-form";

type InputProps = {
  id?: string;
  name?: string;
  type?: string;
  label?: string;
  error?: FieldError;
  value?: string;
  placeholder?: string;
  focus?: boolean;
};

export const InputComponent = (
  { id, name, value, type, error, placeholder, focus, ...rest }: InputProps,
  ref: LegacyRef<HTMLInputElement>
) => {
  return (
    <div>
      <ShadInput
        type={type}
        id={id}
        name={name}
        {...rest}
        value={value}
        className={cn("transition-all", error && "border-red-400")}
        placeholder={placeholder}
        // @ts-ignore
        ref={ref}
      />
      {!!error && (
        <label
          htmlFor={id}
          className="flex  items-center gap-1 text-red-400 text-sm mt-2"
        >
          <CiWarning size={20} />
          {error.message}
        </label>
      )}
    </div>
  );
};

export const Input = forwardRef(InputComponent);

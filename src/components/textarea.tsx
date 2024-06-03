import { LegacyRef, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { CiWarning } from "react-icons/ci";
import { FieldError } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";

type InputProps = {
  id?: string;
  name?: string;
  label?: string;
  error?: FieldError;
  placeholder?: string;
  focus?: boolean;
  className: string;
  value?: string;
  maxLength: number;
};

export const TextAreaComponent = (
  {
    id,
    maxLength,
    className,
    value,
    name,
    error,
    placeholder,
    focus,
    ...rest
  }: InputProps,
  ref: LegacyRef<HTMLTextAreaElement>
) => {
  return (
    <div>
      <Textarea
        id={id}
        name={name}
        {...rest}
        className={cn(`${className} transition-all`, error && "border-red-400")}
        placeholder={placeholder}
        maxLength={maxLength}
        value={value}
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

export const TextArea = forwardRef(TextAreaComponent);

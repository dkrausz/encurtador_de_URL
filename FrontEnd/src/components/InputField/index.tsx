import { forwardRef, type ForwardedRef, type InputHTMLAttributes } from "react";
import type { FieldError } from "react-hook-form";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  inputId: string;
  error?: FieldError;
}

export const InputField = forwardRef(({ label, inputId, error, ...rest }: IInputProps, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <div className="flex flex-col h-12 ">
      <div className="flex justify-between">
        <label htmlFor={inputId} className="text-neutral-300">
          {label}
        </label>
        <input ref={ref} id={inputId} className="bg-stone-400 rounded-md w-96 h-8" {...rest} />
      </div>
      {error ? <p className="text-red-600 text-sm">{error.message}</p> : <p />}
    </div>
  );
});

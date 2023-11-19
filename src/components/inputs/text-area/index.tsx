"use client"

import { FieldError } from "react-hook-form"

export type TextAreaProps = {
  error?: FieldError | undefined
}

export const TextArea = ({
  ...props
}: TextAreaProps & React.InputHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <div className="flex flex-col gap-1 mb-2">
      <textarea
        className={`border resize-none font-medium placeholder:text-base text-black rounded-lg bg-transparent outline-none w-full h-56 p-4 transition-colors duration-100 ease-linea mt-4 ${
          props.error
            ? "border-[##CC5F5F] placeholder:text-[##CC5F5F] hover:border-[##CC5F5F] focus:border-[##CC5F5F]"
            : "border-[#BEC0CA] placeholder:text-[#BEC0CA] hover:border-[#8AC926] focus:border-[#8AC926]"
        }`}
        placeholder={props.placeholder || "Escreva aqui..."}
        {...props}
      />
      {props.error?.message && (
        <span className="text-[##CC5F5F] font-medium tracking-wide text-sm">
          {props.error.message}
        </span>
      )}
    </div>
  )
}

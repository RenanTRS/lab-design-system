import { Slot } from '@radix-ui/react-slot';
import { InputHTMLAttributes, ReactNode } from 'react';

export interface TextInputRootProps {
  children: ReactNode;
}
const TextInputRoot = (props: TextInputInputProps) => {
  return (
    <div className="flex items-center gap-3 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300">
      {props.children}
    </div>
  )
}
TextInputRoot.displayName = 'TextInput.Root'; //Apenas para facilitar a visualização do código no storybook

export interface TextInputIconProps {
  children: ReactNode;
}
const TextInputIcon = (props: TextInputIconProps) => {
  return (
    <Slot className="w-6 h-6 text-gray-400">
      {props.children}
    </Slot>
  )
}
TextInputIcon.displayName = 'TextInput.Icon'; //Apenas para facilitar a visualização do código no storybook


export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const TextInputInput = (props: TextInputInputProps) => {
  return (
      <input
        className="bg-transparent flex-1 outline-none text-gray-100 text-xs placeholder:text-gray-400"
        {...props}
      />
  )
}
TextInputInput.displayName = 'TextInput.Input'; //Apenas para facilitar a visualização do código no storybook

export const TextInput ={
  Root: TextInputRoot,
  Icon: TextInputIcon,
  Input: TextInputInput
}
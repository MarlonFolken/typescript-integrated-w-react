import { MouseEventHandler, ReactNode } from "react";

/** Para nombrar la interfaz, usamos la convención de nombre de componente, seguido de Props */ 
interface ButtonProps {
  children: ReactNode,
  handleClick: MouseEventHandler<HTMLButtonElement>
} 

export default function Button({ children, handleClick }: ButtonProps) {
  return (
    <button 
      onClick={handleClick}
      className="button is-primary"
    >
      {children}
    </button>
  )
}
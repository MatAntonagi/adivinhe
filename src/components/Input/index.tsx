import style from "./style.module.css"

type InputProps = React.ComponentProps<"input">

function Input({ ...rest }: InputProps) {
  return (
    <input 
      type="text" 
      className={style.input} 
      {...rest}
    />
  )
}

export { Input }
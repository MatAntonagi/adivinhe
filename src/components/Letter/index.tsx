import style from "./style.module.css";

type LetterProps = {
  value?: string;
  size?: "default" | "small";
  color?: "default" | "correct" | "wrong";
}

function Letter({ value = "", size = "default", color = "default" }: LetterProps) {
  return (
    <div className={`
    ${style.letter} 
    ${size === "small" ? style.letterSmall : ""}
    ${color === "correct" ? style.letterCorrect : ""}
    ${color === "wrong" ? style.letterWrong : ""}
    `}>
      <span>{value}</span>
    </div>
  )
}

export { Letter }
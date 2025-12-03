import style from "./style.module.css";

type LetterProps = {
  value?: string;
}

function Letter({ value = "" }: LetterProps) {
  return (
    <div className={style.letter}>
      <span>{value}</span>
    </div>
  )
}

export { Letter }
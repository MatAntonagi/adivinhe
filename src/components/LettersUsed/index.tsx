import { Letter } from "../Letter"
import style from "./style.module.css"

export type LettersUsedProps = {
  value: string
  correct: boolean
}

type Props = {
  data: LettersUsedProps[]
}

function LettersUsed({ data }: Props) {
  return(
    <div className={style.lettersUsed}>
      <h5>Letras Ultilizadas</h5>

      <div>
        {
          data.map(({ value, correct }) => (
            <Letter 
            value={value} 
            size="small" 
            color={correct ? "correct" : "wrong"} />
          ))
        }
      </div>
    </div>
  )
}

export { LettersUsed }
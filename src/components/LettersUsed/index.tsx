import { Letter } from "../Letter"
import style from "./style.module.css"

function LettersUsed() {
  return(
    <div className={style.lettersUsed}>
      <h5>Letras Ultilizadas</h5>

      <div>
        <Letter value={"J"} size="small" color="wrong" />
        <Letter value={"E"} size="small" color="correct"/>
        <Letter value={"S"} size="small" color="correct"/>
        <Letter value={"U"} size="small" color="wrong" />
      </div>
    </div>
  )
}

export { LettersUsed }
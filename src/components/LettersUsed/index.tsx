import { Letter } from "../Letter"
import style from "./style.module.css"

function LettersUsed() {
  return(
    <div className={style.lettersUsed}>
      <h5>Letras Ultilizadas</h5>

      <Letter value={"A"} />
    </div>
  )
}

export { LettersUsed }
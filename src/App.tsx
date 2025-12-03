import styles from "./app.module.css";

import { Header } from "./components/Header";
import { Tip } from "./components/Tip";
import { Letter } from "./components/Letter";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { LettersUsed } from "./components/LettersUsed";

export default function App() {

  function handleRestartGame() {
    alert("Reiniciando o jogo...");
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={5} max={10} onRestart={handleRestartGame} />
        
        <Tip tip="dica de Teste ;) !" />

        <div className={styles.word}>
          <Letter value="T" />
          <Letter value="E" />
          <Letter value="S" />
          <Letter value="T" />
          <Letter value="E" />
          <Letter value="" />
        </div>

        <h4>Palpite</h4>

        <div className={styles.guess}>
          <Input maxLength={1} autoFocus placeholder="?" />
          <Button title="Confirmar" />
        </div>

        <div>
          <LettersUsed />
        </div>
      </main>
    </div>
  );
} 
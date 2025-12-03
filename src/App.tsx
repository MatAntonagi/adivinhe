import styles from "./app.module.css";

import { Header } from "./components/Header";
import { Tip } from "./components/Tip";
import { Letter } from "./components/Letter";

export default function App() {

  function handleRestartGame() {
    alert("Reiniciando o jogo...");
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={5} max={10} onRestart={handleRestartGame} />
        
        <Tip tip="dica de Teste ;) !" />

        <Letter value="T" />
        <Letter value="E" />
        <Letter value="S" />
        <Letter value="T" />
        <Letter value="E" />
        <Letter value="" />
      </main>
    </div>
  );
} 
import styles from "./app.module.css";
import { useState, useEffect } from "react";
import { WORDS, Challenge } from "./database/words";

import { Header } from "./components/Header";
import { Tip } from "./components/Tip";
import { Letter } from "./components/Letter";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { LettersUsed, LettersUsedProps } from "./components/LettersUsed";

export default function App() {
  const [letter, setLetter] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [lettersUsed, setLettersUsed] = useState<LettersUsedProps[]>([]);
  const [challenge, setChallenge] = useState<Challenge | null>(null);

  function handleRestartGame() {
    alert("Reiniciando o jogo...");
  }

  function startGame() {
    const index = Math.floor(Math.random() * WORDS.length);
    const randomWord = WORDS[index];
    setChallenge(randomWord);
    setAttempts(0);
    setLetter("");
    setLettersUsed([]);
  }

  function handleConfirm() {
    if (!challenge) {
      return 
    }

    if (!letter.trim()) { 
      return alert("Por favor, insira uma letra válida.");
    }

    const value = letter.toUpperCase();

    const exists = lettersUsed.find((used) => used.value.toUpperCase() === value);

    if(exists) { 
      alert(`Você já usou essa letra ${value}`)
    }

    setLettersUsed((prevState) => [...prevState, { value, correct: false }])

    setLetter("");
  }

  useEffect(() => {
    startGame();
  }, []);

  if (!challenge) {
    return 
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={attempts} max={10} onRestart={handleRestartGame} />
        
        <Tip tip="dica de Teste ;) !" />

        <div className={styles.word}>
          {challenge.word.split("").map(() => (
            <Letter value=""/>
            ))}
        </div>

        <h4>Palpite</h4>

        <div className={styles.guess}>
          <Input 
          maxLength={1} 
          autoFocus 
          placeholder="?" 
          value={letter}
          onChange={e => setLetter(e.target.value)} />

          <Button title="Confirmar" onClick={handleConfirm} />
        </div>

        <div>
          <LettersUsed data={lettersUsed} />
        </div>
      </main>
    </div>
  );
} 
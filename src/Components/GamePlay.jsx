import TotalScore from "./TotalScore"
import NumberSelector from "./NumberSelector"
import styled from "styled-components"
import RollDice from "./RollDice"
import { useState } from "react"
import {Button, OutlineButton} from "../styled/Button"
import Rules from "./Rules"

function GamePlay() {
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState();
  const [showRules, setShowRules] = useState(false)

  const genRandomNum = () => {
    let num = Math.floor(Math.random() * 6 + 1);
    return num;
  }

  const roleDice = () => {

    if(!selectedNumber) {
      setError("You have not selected any number.");
      return;
    }

    const randNum = genRandomNum();
    setCurrentDice(randNum);


    if (selectedNumber === randNum) {
      setScore((prevScore) => prevScore + randNum);
    }
    else {
      setScore((prevScore) => prevScore - 2);
    }
    setSelectedNumber(undefined)
  }

  const resetScore = ()=> {
    setScore(0);
  }


  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector error={error} setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
      </div>

      <RollDice roleDice={roleDice} currentDice={currentDice} />
    <div className="btns">
      <OutlineButton onClick={resetScore}>Rest Score </OutlineButton>
      <Button onClick={()=> setShowRules((prev)=> !prev)}>{ showRules ? "Hide" : "Show"} Rules</Button>

     {showRules && <Rules />}
    </div>
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.main`
padding: 60px;
.top_section {
  display: flex;
  justify-content: space-between;
  align-items: end;
}

.btns {
  gap: 10px;
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
`
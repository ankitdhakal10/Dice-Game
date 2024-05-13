import styled from "styled-components"
import { useState } from "react"


function RollDice({ currentDice, roleDice }) {



  return (
   <DiceContainer>
    <div onClick={roleDice} className="dice">
    <img src={`/public/images/dice/dice_${currentDice}.png`} alt="#" />
    </div>
    <p>
    Click on Dice to Roll
    </p>
   </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
`
import styled from "styled-components"
import { Button } from "../styled/Button"

function StartGame({toggle}) {
  return (
    <Container>
      <img src="/public/images/dices.png" alt="dices" />

      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
  height: 100vh;
  max-width: 1182px;
  display: flex;
  align-items: center;
  margin: 0 auto;

  .content {
    h1 {
      font-size: 96px;
    }
  }
`

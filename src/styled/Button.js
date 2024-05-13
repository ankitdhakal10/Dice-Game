import styled from "styled-components"

export const Button = styled.button`
padding: 10px 18px;
border-radius: 5px;
border: 1px solid transparent;
background: #000000;
color: white;
min-width: 220px;
font-size: 16px;
cursor: pointer;
transition: background-color 0.2s linear, color 0.2s linear, font-weight 0.2s;

&:hover {
  background-color: #ffff;
  color: #000000;
  border: 1px solid #000000;
  font-weight: 700;
}
`;


export const OutlineButton = styled(Button)`
  background: white;
  color: black;
  border: 1px solid black;

&:hover {
  background-color: black;
  color: white;
  border: 1px solid white;
  font-weight: 700;
}
  `
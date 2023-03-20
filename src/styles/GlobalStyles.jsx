import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
        list-style: none;
        text-decoration: none;
        box-sizing: border-box;
        font-family: 'JetBrains Mono', monospace;
    }

    body{
        min-height: 100vh;
        width: 100%;
        padding: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow-x: hidden;
        background-image: linear-gradient(to top, #1c1726, #412144, #722256, #a71b57, #d71e47);
    
        @media (max-width: 500px){
          padding: 0px;
        }  
    }
`;

export const Container = styled.main`
  max-width: 500px;
  min-height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  border-radius: 0.5rem;
  background-color: #131019b3;

  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;

  h1 {
    text-align: center;
    font-size: 3rem;
    font-weight: 800;
    color: #fa1e4e;
  }

  @media (max-width: 500px) {
    width: 100vw;
    min-height: 100vh;
    border-radius: 0;
  }
`;

export const Display = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  width: 100%;
  font-size: 1rem;
  font-weight: 500;
  padding: 1rem;
  border-radius: 5px;
  border: solid 3px #8c7db0;
  background-color: #8c7db0;
  color: #131019;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;

  ::placeholder {
    color: #131019;
  }
`;

export const BtnAdd = styled.button`
  font-size: 1rem;
  font-weight: 700;
  padding: 1rem;
  cursor: pointer;
  border-radius: 5px;
  color: #fa1e4e;
  background-color: #2d253d;
  border: solid 3px #fa1e4e;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;

  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
    font-weight: 500;
  }
`;

export const Tarefas = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Tarefa = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem 0;
  color: #fa1e4e;
  gap: 2rem;


  p {
    width: 100%;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 5px;
    padding: 1rem;
    background-color: #2d253d;
    border: solid 2px #fa1e4e;
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fa1e4e;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;

    &:hover {
      transform: scale(1.2);
    }
  }

  i {
    font-size: 2rem;
    padding: 0.6rem;
    color: #2d253d;
  }
`;

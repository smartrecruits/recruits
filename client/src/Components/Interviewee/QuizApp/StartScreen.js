import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #a245b5;
  background-image: url('https://www.transparenttextures.com/patterns/criss-cross-2x.png');
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const Description = styled.p`
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1.5rem;
  background-color: #ec407a;
  color: #fff;
  border-radius: 1rem;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #d81b60;
  }
`;

function StartScreen({ onStart }) {
  return (
    <Wrapper>
      <Title>Welcome to the Quiz App!</Title>
      <Description>Click the button below to start the quiz.</Description>
      <Button onClick={onStart}>Start Quiz</Button>
    </Wrapper>
  );
}

export default StartScreen;

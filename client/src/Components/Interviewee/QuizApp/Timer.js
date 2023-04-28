import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from'react';

const TimerContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1rem;
`;

const TimerText = styled.span`
  font-size: 1.2rem;
  margin-right: 0.5rem;
`;

const Timer = ({ time }) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    let interval = null;
    if (time > 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [time]);

  useEffect(() => {
    if (seconds === 60) {
      setSeconds(0);
      setMinutes((minutes) => minutes + 1);
    }
  }, [seconds]);

  return (
    <TimerContainer>
      <TimerText>Time:</TimerText>
      <div>
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </div>
    </TimerContainer>
  );
};

export default Timer
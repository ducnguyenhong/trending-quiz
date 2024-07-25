'use client';

import { Box, Text } from '@chakra-ui/react';
import { memo, useEffect, useState } from 'react';

interface TimeLeft {
  minutes: number;
  seconds: number;
}

const Timer: React.FC = () => {
  const calculateTimeLeft = (endTime: number) => {
    const difference = endTime - new Date().getTime();
    let timeLeft: TimeLeft = { minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ minutes: 5, seconds: 0 });
  const [endTime] = useState<number>(new Date().getTime() + 5 * 60 * 1000);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(endTime));
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  return (
    <Box>
      <Text fontWeight={600}>Thời gian còn lại:</Text>

      <Text
        fontSize={40}
        fontWeight={700}
        mt={3}
        color={timeLeft.minutes === 0 && timeLeft.seconds <= 30 ? 'red' : '#38a169'}
      >
        {timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}
        {' : '}
        {timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}
      </Text>
    </Box>
  );
};

export default memo(Timer);

import { Flex } from '@chakra-ui/react';
import { NextPage } from 'next';
import QuestionItem from './_component/question-item';
import QuestionMap from './_component/question-map';
import Timer from './_component/timer';

const QuizDetail: NextPage = () => {
  return (
    <Flex w="full" mt={5}>
      <Flex flex={2 / 3}>
        <QuestionItem />
      </Flex>

      <Flex flex={1 / 3} direction="column" gap={20}>
        <QuestionMap />

        <Timer />
      </Flex>
    </Flex>
  );
};

export default QuizDetail;

import { Answer } from '@/types/question.type';
import { QUESTION_LIST } from '@/utils/const';
import { Box, Flex, Grid, Text } from '@chakra-ui/react';
import { memo, useCallback, useState } from 'react';
import { useRecoilState } from 'recoil';
import AnswerItem from './answer-item';
import { questionAnswerAtom } from './recoil';

const QuestionItem: React.FC = () => {
  const item = QUESTION_LIST[0];
  const { question, answers, id } = item;
  const correctAnswer = answers.find((i) => !!i.isCorrect);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean>(false);
  const [incorrectAnswer, setIncorrectAnswer] = useState<Answer | undefined>();
  const [questionAnswer, setQuestionAnswer] = useRecoilState(questionAnswerAtom);
  const isDone = !!questionAnswer.find((i) => i.questionId === id);

  const onAnswerSelect = useCallback(
    (answer: Answer, isCorrect: boolean, answerIndex: number) => {
      setIsAnswerCorrect(isCorrect);
      setShowResult(true);
      setIncorrectAnswer(isCorrect ? undefined : answer);
      setQuestionAnswer((prev) => [
        ...prev,
        { questionId: id, isCorrectAnswer: isCorrect, answeredIndex: answerIndex }
      ]);
    },
    [id, setQuestionAnswer]
  );

  return (
    <Box w="70%" mx="auto">
      <Text fontWeight={700} fontSize={18}>
        Câu hỏi số 1
      </Text>

      <Flex direction="column" bgColor="#f8eafa" px={6} py={5} borderRadius={15} mt={5} border="1px solid #eac1f0">
        <Box fontSize={15} lineHeight="23px" dangerouslySetInnerHTML={{ __html: question }} />
      </Flex>

      <Flex w="full" mt={12}>
        <Grid templateColumns="repeat(2, 1fr)" w="full" gap={10}>
          {answers.map((ans, andIdx) => {
            return (
              <AnswerItem
                key={andIdx}
                questionId={id}
                index={andIdx}
                item={ans}
                onAnswerSelect={onAnswerSelect}
                isDone={isDone}
              />
            );
          })}
        </Grid>
      </Flex>

      {showResult && (
        <Box mt={10}>
          {isAnswerCorrect ? (
            <Text color="green" fontSize={20} fontWeight={700}>
              Chính xác!
            </Text>
          ) : (
            <Text color="red" fontSize={20} fontWeight={700}>
              Sai rồi!
            </Text>
          )}

          <Box mt={3}>
            {isAnswerCorrect ? (
              <Text fontWeight={500}>{correctAnswer?.explain}</Text>
            ) : (
              <Text fontWeight={500}>{incorrectAnswer?.explain}</Text>
            )}
            {!isAnswerCorrect && (
              <Text mt={4} color="green" fontWeight={500}>
                Đáp án đúng: {correctAnswer?.explain}
              </Text>
            )}
          </Box>
        </Box>
      )}

      {/* <Flex mt={16} justify="center">
        <Button colorScheme="green" px={16} py={6}>
          Trả lời
        </Button>
      </Flex> */}
    </Box>
  );
};

export default memo(QuestionItem);

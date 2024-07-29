import { QUESTION_LIST } from '@/utils/const';
import { Box, Flex, Grid, Text } from '@chakra-ui/react';
import { memo } from 'react';
import AnswerItem from './answer-item';

const QuestionItem: React.FC = () => {
  const item = QUESTION_LIST[0];
  const { question, answers } = item;

  return (
    <Box w="70%" mx="auto">
      <Text fontWeight={700} fontSize={18}>
        Câu hỏi số 1
      </Text>

      <Flex direction="column" bgColor="#f8eafa" px={8} py={6} borderRadius={15} mt={5}>
        <Box fontSize={15} dangerouslySetInnerHTML={{ __html: question }} />
      </Flex>

      <Flex w="full" mt={12}>
        <Grid templateColumns="repeat(2, 1fr)" w="full" gap={10}>
          {answers.map((ans, andIdx) => {
            return <AnswerItem key={andIdx} index={andIdx} item={ans} />;
          })}
        </Grid>
      </Flex>

      {/* <Flex mt={16} justify="center">
        <Button colorScheme="green" px={16} py={6}>
          Trả lời
        </Button>
      </Flex> */}
    </Box>
  );
};

export default memo(QuestionItem);

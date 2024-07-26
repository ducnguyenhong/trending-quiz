import { QUESTION_LIST } from '@/utils/const';
import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import { memo } from 'react';

const QuestionItem: React.FC = () => {
  const item = QUESTION_LIST[0];
  const { question, answers } = item;

  return (
    <Box w="70%" mx="auto">
      <Text fontWeight={600}>Câu hỏi số 1</Text>

      <Flex direction="column" bgColor="#f7f7f8" px={8} py={6} borderRadius={3} mt={5}>
        <Box dangerouslySetInnerHTML={{ __html: question }} />
      </Flex>

      <Flex w="full" mt={16}>
        <Grid templateColumns="repeat(2, 1fr)" w="full" gap={8}>
          {answers.map((ans, andIdx) => {
            const { content, isCorrect, explain } = ans;

            return (
              <GridItem key={andIdx} border="1px solid #e6e6e6" px={4} py={6} borderRadius={3} cursor="pointer">
                <Box dangerouslySetInnerHTML={{ __html: content }} />
              </GridItem>
            );
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

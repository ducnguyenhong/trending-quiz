import { Box, Button, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import { memo } from 'react';

const QuestionItem: React.FC = () => {
  return (
    <Box w="70%" mx="auto">
      <Text fontWeight={600}>Câu hỏi số 1</Text>

      <Flex align="center" justify="center" direction="column" bgColor="#f5f5f5" px={5} py={10} borderRadius={3} mt={5}>
        <Text fontWeight={600}>Đoạn thơ sau đây nhắc tới cầu thủ nào?</Text>
        <Text mt={5} fontStyle="italic">
          {'"'}6 múi nhìn quá là ưng
          <br />
          Chụp đăng phây búc quá chừng ngợi ca
          <br />
          Một mình chống lại FIFA
          <br />
          Tấm gương liêm khiết như là Bao Công{'"'}
        </Text>
      </Flex>

      <Flex w="full" mt={16}>
        <Grid templateColumns="repeat(2, 1fr)" w="full" gap={8}>
          <GridItem border="1px solid #e6e6e6" px={4} py={4} borderRadius={3} cursor="pointer">
            <Text>A. anh Thảo</Text>
          </GridItem>
          <GridItem border="1px solid #e6e6e6" px={4} py={4} borderRadius={3} cursor="pointer">
            <Text>B. anh Liêm</Text>
          </GridItem>
          <GridItem border="1px solid #e6e6e6" px={4} py={4} borderRadius={3} cursor="pointer">
            <Text>C. anh Long</Text>
          </GridItem>
          <GridItem border="1px solid #e6e6e6" px={4} py={4} borderRadius={3} cursor="pointer">
            <Text>D. anh Lực</Text>
          </GridItem>
        </Grid>
      </Flex>

      <Flex mt={16} justify="center">
        <Button colorScheme="green" px={16} py={6}>
          Trả lời
        </Button>
      </Flex>
    </Box>
  );
};

export default memo(QuestionItem);

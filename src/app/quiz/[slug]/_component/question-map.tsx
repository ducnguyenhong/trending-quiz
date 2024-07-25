import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import { memo } from 'react';

const QuestionMap: React.FC = () => {
  return (
    <Box>
      <Text fontWeight={600}>Danh sách câu hỏi</Text>

      <Grid templateColumns="repeat(4, 1fr)" w="full" gap={3} mt={5}>
        {Array.from(Array(10).keys()).map((item) => {
          return (
            <GridItem key={item} border="1px solid #e6e6e6" px={2} py={2} borderRadius={3} cursor="pointer">
              <Text textAlign="center">Câu {item + 1}</Text>
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

export default memo(QuestionMap);

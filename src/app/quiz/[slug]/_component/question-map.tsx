import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import { memo } from 'react';

const QuestionMap: React.FC = () => {
  return (
    <Box>
      <Text fontWeight={600}>Danh sách câu hỏi</Text>

      <Box>
        <Grid templateColumns="repeat(4, 1fr)" w="fit-content" gap={3} mt={5}>
          {Array.from(Array(10).keys()).map((item) => {
            const isActive = item === 0;

            return (
              <GridItem
                key={item}
                border="1px solid"
                w={20}
                py={2}
                borderRadius={3}
                cursor="pointer"
                borderColor={isActive ? 'green' : '#e6e6e6'}
              >
                <Text textAlign="center" color={isActive ? 'green' : '#070707'} fontWeight={isActive ? 600 : 400}>
                  Câu {item + 1}
                </Text>
              </GridItem>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default memo(QuestionMap);

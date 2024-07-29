import { Answer } from '@/types/question.type';
import { Box, Flex, GridItem, Text } from '@chakra-ui/react';
import { memo } from 'react';

interface Props {
  index: number;
  item: Answer;
}

const AnswerItem: React.FC<Props> = (props) => {
  const { index, item } = props;
  const { content, isCorrect, explain } = item;

  return (
    <GridItem border="1px solid #c75fd8" borderRadius={15} cursor="pointer" overflow="hidden" data-group>
      <Flex align="center" flex={1} h="50px">
        <Flex px={5} bgColor="#c75fd8" h="full" direction="column" align="center" justify="center">
          <Text color="#FFF" fontSize={18} fontWeight={600}>
            {['A', 'B', 'C', 'D'][index]}
          </Text>
        </Flex>
        <Flex
          px={4}
          py={4}
          flex={1}
          h="full"
          direction="column"
          align="flex-start"
          justify="center"
          _groupHover={{ bgColor: '#ffe6fe' }}
          transitionDuration="250ms"
        >
          <Box fontWeight={500} dangerouslySetInnerHTML={{ __html: content }} />
        </Flex>
      </Flex>
    </GridItem>
  );
};

export default memo(AnswerItem);

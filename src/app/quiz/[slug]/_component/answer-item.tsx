import { Answer } from '@/types/question.type';
import { Box, Flex, GridItem, Spinner, Text } from '@chakra-ui/react';
import { memo, useState } from 'react';

interface Props {
  index: number;
  item: Answer;
  onAnswerSelect: (answer: Answer, isCorrect: boolean) => void;
}

const AnswerItem: React.FC<Props> = (props) => {
  const { index, item, onAnswerSelect } = props;
  const { content, isCorrect, explain } = item;
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <GridItem
      border="1px solid #c75fd8"
      borderRadius={15}
      cursor="pointer"
      overflow="hidden"
      data-group
      onClick={() => {
        if (loading) {
          return;
        }
        setLoading(true);

        setTimeout(() => {
          setLoading(false);
          onAnswerSelect(item, isCorrect);
        }, 1500);
      }}
    >
      <Flex align="center" flex={1} h="50px">
        <Flex px={5} bgColor="#c75fd8" h="full" direction="column" align="center" justify="center">
          <Text color="#FFF" fontSize={18} fontWeight={600}>
            {['A', 'B', 'C', 'D'][index]}
          </Text>
        </Flex>
        <Flex
          flex={1}
          h="full"
          _groupHover={{ bgColor: '#ffe6fe' }}
          transitionDuration="250ms"
          justify="space-between"
          align="center"
          px={4}
          py={4}
        >
          <Flex direction="column" align="flex-start" justify="center">
            <Box fontWeight={500} fontSize={15} dangerouslySetInnerHTML={{ __html: content }} />
          </Flex>
          {loading && <Spinner size="sm" color="#c75fd8" />}
        </Flex>
      </Flex>
    </GridItem>
  );
};

export default memo(AnswerItem);

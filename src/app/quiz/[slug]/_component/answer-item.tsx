import { Answer } from '@/types/question.type';
import { Box, Flex, GridItem, Spinner, Text } from '@chakra-ui/react';
import { memo, useMemo, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { questionAnswerAtom } from './recoil';

interface Props {
  index: number;
  item: Answer;
  onAnswerSelect: (answer: Answer, isCorrect: boolean, index: number) => void;
  isDone: boolean;
  questionId: string;
}

const AnswerItem: React.FC<Props> = (props) => {
  const { index, item, onAnswerSelect, isDone, questionId } = props;
  const { content, isCorrect, explain } = item;
  const [loading, setLoading] = useState<boolean>(false);
  const questionAnswer = useRecoilValue(questionAnswerAtom);
  const answeredIndex = questionAnswer.find((i) => i.questionId === questionId)?.answeredIndex;

  const answerColor = useMemo(() => {
    if (!isDone) {
      return '#c75fd8';
    }
    if (answeredIndex === index && isCorrect) {
      return 'green';
    }
    if (answeredIndex === index && !isCorrect) {
      return 'red';
    }
    return '#c75fd8';
  }, [answeredIndex, index, isCorrect, isDone]);

  return (
    <GridItem
      border="1px solid"
      borderRadius={15}
      borderColor={answerColor}
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
          onAnswerSelect(item, isCorrect, index);
        }, 1500);
      }}
    >
      <Flex align="center" flex={1} h="50px">
        <Flex px={5} bgColor={answerColor} h="full" direction="column" align="center" justify="center">
          <Text color="#FFF" fontSize={18} fontWeight={600}>
            {['A', 'B', 'C', 'D'][index]}
          </Text>
        </Flex>
        <Flex
          flex={1}
          h="full"
          _groupHover={{ bgColor: '#ffe6fe' }}
          bgColor={loading ? '#ffe6fe' : undefined}
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

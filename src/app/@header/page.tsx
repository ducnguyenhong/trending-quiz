import { Flex } from '@chakra-ui/react';
import { memo } from 'react';

const Header: React.FC = () => {
  return (
    <Flex w="full" px={4} py={6} borderBottom="1px solid #e6e6e6" h="70px">
      <Flex>aaa</Flex>
    </Flex>
  );
};

export default memo(Header);

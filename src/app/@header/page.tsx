import IconChevronRight from '@/icons/chevron-right';
import { Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';

const Header: React.FC = () => {
  return (
    <Flex w="full" px={5} borderBottom="1px solid #e6e6e6" h="65px">
      <Flex gap={3} align="center">
        <Link href="/">
          <Image src="https://cdn-icons-png.flaticon.com/128/10740/10740590.png" alt="home" width={28} height={28} />
        </Link>

        <IconChevronRight w="16px" h="16px" color="#999999" />

        <Text fontSize={14} fontWeight={600} mt="-2px">
          Hot Trend
        </Text>
      </Flex>
    </Flex>
  );
};

export default memo(Header);

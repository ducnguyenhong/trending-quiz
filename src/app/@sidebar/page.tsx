import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';

const Sidebar = () => {
  const MENU_LIST = [
    {
      title: 'Quiz',
      routes: [
        {
          title: 'Hot trend',
          icon: '/images/hot-trend.svg',
          route: '/hot-trend'
        },
        {
          title: 'Quiz tuần này',
          icon: '/images/calendar-outline.svg',
          route: '/week'
        }
      ]
    },
    {
      title: 'Bảng xếp hạng',
      routes: [
        {
          title: 'Hot trend',
          icon: '/images/hot-trend.svg',
          route: '/hot-trend2'
        },
        {
          title: 'Quiz tuần này',
          icon: '/images/calendar-outline.svg',
          route: '/week'
        }
      ]
    }
  ];

  return (
    <Box w="280px" px={4} py={6} borderRight="1px solid #e6e6e6" minH="100vh">
      <Text as="h1" fontWeight={700} fontSize={22}>
        Trending Quiz
      </Text>

      <Flex direction="column" mt={6} gap={10}>
        {MENU_LIST.map((menu) => {
          const { title, routes } = menu;

          return (
            <Flex key={title} direction="column" gap={2}>
              <Text fontSize={15} color="#828282" px={3}>
                {title}
              </Text>

              <Flex direction="column" gap={1}>
                {routes.map((item) => {
                  const { route, title, icon } = item;
                  const isActive = route === '/hot-trend';

                  return (
                    <Link href={route} key={route}>
                      <Flex
                        align="center"
                        gap={2.5}
                        px={3}
                        bgColor={isActive ? '#eaf2ff' : '#FFF'}
                        borderRadius={12}
                        py={2.5}
                      >
                        <Image src={icon} alt={title} width={24} height={24} />
                        <Text fontSize={16} fontWeight={isActive ? 700 : 500}>
                          {title}
                        </Text>
                      </Flex>
                    </Link>
                  );
                })}
              </Flex>
            </Flex>
          );
        })}
      </Flex>
    </Box>
  );
};

export default memo(Sidebar);

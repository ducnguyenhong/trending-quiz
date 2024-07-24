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
          icon: 'https://cdn-icons-png.flaticon.com/128/10473/10473357.png',
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
      title: 'Chủ đề',
      routes: [
        {
          title: 'Bóng đá',
          icon: 'https://cdn-icons-png.flaticon.com/128/1540/1540454.png',
          route: '/hot-trend3'
        },
        {
          title: 'Lịch ra mắt',
          icon: 'https://cdn-icons-png.flaticon.com/128/668/668278.png',
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
          title: 'Lịch ra mắt',
          icon: '/images/calendar-outline.svg',
          route: '/week'
        }
      ]
    }
  ];

  return (
    <Box w="350px" px={4} py={6} borderRight="1px solid #e6e6e6" minH="100vh">
      <Flex align="center" gap={3} pl={1}>
        <Image src="/images/logo.png" width={45} height={45} alt="logo" />
        <Text as="h1" fontWeight={700} fontSize={22}>
          Trending Quiz
        </Text>
      </Flex>

      <Flex direction="column" mt={10} gap={10}>
        {MENU_LIST.map((menu) => {
          const { title, routes } = menu;

          return (
            <Flex key={title} direction="column" gap={2}>
              <Text fontSize={15} color="#828282" px={3}>
                {title}
              </Text>

              <Flex direction="column">
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

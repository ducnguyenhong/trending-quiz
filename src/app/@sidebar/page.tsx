import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';
import { MENU_LIST } from './_component/menu.data';
import UserInfo from './_component/user-info';

const Sidebar: React.FC = () => {
  return (
    <Box w="350px" p={4} borderRight="1px solid #e6e6e6" h="100vh">
      <Flex direction="column" justify="space-between" h="full">
        <Box>
          <Flex align="center" gap={3} pl={1}>
            <Image src="/images/logo.png" width={30} height={30} alt="logo" />
            <Text as="h1" fontWeight={700} fontSize={19} mt="3px">
              Trending Quiz
            </Text>
          </Flex>

          <Flex direction="column" mt={8} gap={8}>
            {MENU_LIST.map((menu) => {
              const { title, routes } = menu;

              return (
                <Flex key={title} direction="column" gap={1}>
                  <Text fontSize={13} color="#828282" px={3}>
                    {title}
                  </Text>

                  <Flex direction="column" gap={1}>
                    {routes.map((item) => {
                      const { route, title, icon } = item;
                      const isActive = route === '/';

                      return (
                        <Link href={route} key={route}>
                          <Flex
                            align="center"
                            gap={2.5}
                            px={3}
                            bgColor={isActive ? '#ffd1fd' : '#FFF'}
                            borderRadius={12}
                            py={2}
                            _hover={{ bgColor: '#ffd1fd' }}
                            transitionDuration="200ms"
                          >
                            <Image src={icon} alt={title} width={18} height={18} />
                            <Text fontSize={14} fontWeight={isActive ? 700 : 500}>
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

        <Flex>
          <UserInfo />
        </Flex>
      </Flex>
    </Box>
  );
};

export default memo(Sidebar);

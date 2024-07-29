import { AspectRatio, Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import dayjs from 'dayjs';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <Flex direction="column" w="full">
      <Text as="h1" fontSize={22} fontWeight={700} textAlign="center" mt={5}>
        Các bộ câu hỏi đang top trending hiện nay
      </Text>

      <Grid templateColumns="repeat(4, 1fr)" gap={10} mt={10} borderRadius={10}>
        {[1].map((item) => {
          return (
            <GridItem key={item} borderRadius={10} overflow="hidden" border="1px solid #e6e6e6">
              <Link href={`/quiz/abc`}>
                <Box>
                  <AspectRatio ratio={16 / 9}>
                    <Image
                      src="https://image.winudf.com/v2/image1/Y29tLm1vbXN0dWRpby5mb290YmFsbENoaWJpX3NjcmVlbl8wXzE1NTk3NzYzODJfMDQy/screen-0.jpg?fakeurl=1&type=.jpg"
                      alt="hot trend"
                      style={{ objectFit: 'cover' }}
                      fill
                    />
                  </AspectRatio>

                  <Box px={5} py={4} bgColor="#ffeffe">
                    <Text noOfLines={3} fontWeight={600}>
                      Ai sợ thì đi về! Phong cách, phong cách...
                    </Text>

                    <Text textAlign="right" fontSize={13} color="#707070" mt={2}>
                      {dayjs().format('DD/MM/YYYY')}
                    </Text>
                  </Box>
                </Box>
              </Link>
            </GridItem>
          );
        })}
      </Grid>
    </Flex>
  );
};

export default Home;

'use client';

import IconChevronRight from '@/icons/chevron-right';
import {
  Box,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import Image from 'next/image';
import { memo } from 'react';

const UserInfo: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        onClick={onOpen}
        border="1px solid #e6e6e6"
        bgColor="#f5f6f8"
        borderRadius={20}
        w="full"
        px={4}
        py={3}
        align="center"
        gap={3}
        cursor="pointer"
        transitionDuration="250ms"
        _hover={{ bgColor: '#f0f1f5' }}
      >
        <Flex flex={1} align="center" gap={2.5}>
          <Image src="https://cdn-icons-png.flaticon.com/128/3899/3899618.png" alt="user" width={35} height={35} />

          <Box mt="-2px">
            <Text fontWeight={600} fontSize={14}>
              Khách
            </Text>
            <Text fontWeight={400} fontSize={13} color="#828282">
              Đăng nhập ngay
            </Text>
          </Box>
        </Flex>

        <IconChevronRight w="22px" h="22px" color="#828282" />
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} size="3xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Đăng nhập vào Trending Quiz</ModalHeader>
          <ModalCloseButton />
          <ModalBody pt={10} pb={20}>
            <Text textAlign="center">Tính năng này sẽ được ra mắt ở phiên bản tiếp theo!</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default memo(UserInfo);

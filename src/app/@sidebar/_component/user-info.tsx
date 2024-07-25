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
        <Flex flex={1} align="center" gap={3}>
          <Image src="https://cdn-icons-png.flaticon.com/128/3899/3899618.png" alt="user" width={38} height={38} />

          <Box>
            <Text fontWeight={600} fontSize={15}>
              Khách
            </Text>
            <Text fontWeight={400} fontSize={14} color="#828282">
              Đăng nhập ngay
            </Text>
          </Box>
        </Flex>

        <IconChevronRight w="24px" h="24px" color="#828282" />
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} size="3xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Đăng nhập vào Trending Quiz</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={10}>aaaaaaaaaaa</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default memo(UserInfo);

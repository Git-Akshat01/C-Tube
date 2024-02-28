import {
  Box,
  Stack,
  Heading,
  VStack,
  HStack,
  Button,
  Input,
  Text,
} from "@chakra-ui/react";
import { AiOutlineSend } from "react-icons/ai";
import React from "react";

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} minH={"40"} p={"16"} color={"white"}>
      <Stack direction={["column", "row"]}>
        <VStack alignItems={"stretch"} w={"full"}>
          <Heading
            size={"md"}
            textTransform={"uppercase"}
            textAlign={["center", "left"]}
          >
            Subscribe to get Updates
          </Heading>
          <HStack borderBottom={"2px solid white"} py={"2"}>
            <Input
              type="email"
              placeholder="Type your Email Here...."
              border={"none"}
              borderRadius={"none"}
              outline={"none"}
              focusBorderColor="none"
            />
            <Button
              p={"0"}
              colorScheme={"purple"}
              variant={"ghost"}
              borderRadius={"0 20px 20px 0"}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={"full"}
          borderLeft={["none", "1px solid white"]}
          borderRight={["none", "1px solid white"]}
        >
          <Heading>C Tube</Heading>
          <Text>All Rights Reserved</Text>
        </VStack>
        <VStack w={"full"}>
          <Heading size={"md"} textTransform={"uppercase"}>
            Socail Media
          </Heading>
          <Button variant={"link"} colorScheme={"white"}>
            <a
              href="https://www.linkedin.com/in/akshat-tiwari-18a5a2192/"
              target="blank"
            >
              LinkedIn
            </a>
          </Button>
          <Button variant={"link"} colorScheme={"white"}>
            <a href="https://youtube.com/@Akshat_79" target="blank">
              Youtube
            </a>
          </Button>
          <Button variant={"link"} colorScheme={"white"}>
            <a href="https://www.instagram.com/akshat.tiwari.7/" target="blank">
              Instagram
            </a>
          </Button>
          <Button variant={"link"} colorScheme={"white"}>
            <a href="https://github.com/Git-Akshat01" target="blank">
              Github
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;

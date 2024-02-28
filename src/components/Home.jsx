import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container, Box, Image, Heading, Stack, Text } from "@chakra-ui/react";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";

const headingOptions = {
  pos: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
  textTransform: "uppercase",
  p: "4",
  size: "4xl",
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={"container.xl"} maxH={"100vh"} p="16">
        <Heading
          textTransform={"uppercase"}
          py={"2"}
          w={"fit-content"}
          borderBottom={"2px solid black"}
          m={"auto"}
        >
          Services
        </Heading>
        <Stack
          h={"full"}
          p={"4"}
          alignItems={"center"}
          direction={["column", "row"]}
        >
            <Image src={img5} h={["40", "400"]} filter={'hue-rotate(-130deg)'} />
            <Text letterSpacing={"widest"} lineHeight={"190%"} p={['4', '16']} textAlign={"center"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit magni asperiores iusto, modi et corrupti! Cumque eveniet rerum et, doloribus, incidunt ipsam laboriosam eaque voluptate, quidem beatae consequuntur? Quos deleniti ad soluta dicta iure numquam quia commodi illo obcaecati. Necessitatibus odit nobis asperiores soluta quo officiis eveniet sint in dolor temporibus, iste repellat natus, ullam quaerat vitae assumenda at enim vel ex voluptatem voluptatum molestiae iusto voluptates omnis. Illo, vero. Ex numquam ratione voluptas necessitatibus porro cupiditate, rerum et pariatur itaque, reiciendis quos in! Fugiat sunt earum nam error modi nostrum, suscipit nulla voluptates in, sint ab omnis ipsam.
            </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w="full" h={"100vh"}>
      <Image src={img1} h="full" w={"full"} objectFit={"cover"} />
      <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
        Watch The Future
      </Heading>
    </Box>
    <Box w="full" h={"100vh"}>
      <Image src={img2} h="full" w={"full"} objectFit={"cover"} />
      <Heading bgColor={"blackAlpha.900"} color={"white"} {...headingOptions}>
        Future is Gaming
      </Heading>
    </Box>
    <Box w="full" h={"100vh"}>
      <Image src={img3} h="full" w={"full"} objectFit={"cover"} />
      <Heading bgColor={"blackAlpha.900"} color={"white"} {...headingOptions}>
        Gaming on Console
      </Heading>
    </Box>
    <Box w="full" h={"100vh"}>
      <Image src={img4} h="full" w={"full"} objectFit={"cover"} />
      <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
        Night Life is Cool
      </Heading>
    </Box>
  </Carousel>
);
export default Home;

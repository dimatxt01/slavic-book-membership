import {Box, Container, Flex, Heading, HStack, Image, Text, VStack,} from "@chakra-ui/react";

import ReviewCard from "./review-card";

import EmblaCarousel from "./EmblaCarousel";
import {EmblaOptionsType} from "embla-carousel";

const OPTIONS: EmblaOptionsType = { dragFree: false, loop: true };

type Review = {
  text: string;
  name: string;
  image: string;
  position: string;
};

const reviews: Review[] = [
  {
    text: "Каждая коробка — это удивительное разнообразие книг! Мы получаем не только сказки, но и познавательные энциклопедии и приключенческие истории. Это настоящий кладезь!",
    name: "Марина Петрова",
    image: "/assets/testimonial1.png",
    position: "Мама троих детей",
  },
  {
    text: "Щоразу ми з дитиною в захваті від непередбачуваності та тепла, з яким підбирають книги. Це не просто література — це ключ до фантазії і нових знань.",
    name: "Ірина Коваль",
    image: "/assets/testimonial2.png",
    position: "Літературознавиця",
  },
  {
    text: "We’ve built a wonderful library for our children without any effort! My husband, who grew up in Russia, loves how these books bring his culture to life. The expertly curated selection arrives each month, filled with delightful surprises that inspire both fun and learning!",
    name: "Sophia Grant",
    image: "/assets/testimonial3.png",
    position: "Graphic Designer and Book Lover",
  },
];

export default function SocialProof() {
  return (
    <Box
      bg="white"
      w="100%"
      mt="-32px"
      pb="32px"
      position="relative"
      overflow={"clip"}
    >
      <Image
        src="/assets/alphabet-bg.webp"
        width="100%"
        maxW="1550px"
        height="100%"
        objectFit="contain"
        alt="importance-bg"
        position="absolute"
        top="0"
        left="50%"
        transform={"translateX(-50%)"}
      />
      <Container
        paddingY="72px"
        display={"flex"}
        alignItems={"center"}
        gap="80px"
        flexDir={"column"}
        maxW="1320px"
      >
        <HStack position="relative">
          <Image
            src="/assets/planet.png"
            width={{ base: "90px", md: "168.5px" }}
            height={{ base: "90px", md: "168.5px" }}
            objectFit={"cover"}
            alt="planet"
            position={{ base: "absolute", md: "relative" }}
            left="0"
            top="-58px"
            zIndex={0}
          />
          <Image
            src="/assets/pencil-blocks.webp"
            width="168.5px"
            height="168.5px"
            objectFit={"cover"}
            alt="pencil blocks"
            position="absolute"
            top="64px"
            left="100%"
          />
          <VStack gap={{ base: "20px", md: "24px" }}>
            <Heading
              as="h2"
              fontSize={{ base: "24px", md: "48px" }}
              fontWeight={700}
              maxW="770px"
              textAlign="center"
              lineHeight={"120%"}
              zIndex={1}
            >
              Trusted reviews from Families like your
            </Heading>
            <Text fontSize={{ base: "14px", md: "18px" }} lineHeight="150%">
              Over 800 Russian Books shipped !
            </Text>
          </VStack>
        </HStack>
        {/* Desktop */}
        <HStack
          alignItems={"flex-start"}
          justifyContent={"center"}
          gap="32px"
          w="100%"
          display={{ base: "none", md: "flex" }}
          flexWrap={"wrap"}
        >
          <Flex flexShrink={0} flexDir={"column"} gap="32px">
            {reviews.slice(0, 2).map((item, index) => (
              <ReviewCard
                name={item.name}
                text={item.text}
                image={item.image}
                position={item.position}
                key={index}
              />
            ))}
          </Flex>
          <Flex flexShrink={0} flexDir={"column"} gap="32px">
            {reviews.slice(2, 4).map((item, index) => (
              <ReviewCard
                name={item.name}
                text={item.text}
                image={item.image}
                position={item.position}
                key={index}
              />
            ))}
          </Flex>
          <Flex flexShrink={0} flexDir={"column"} gap="32px">
            {reviews.slice(4, 6).map((item, index) => (
              <ReviewCard
                name={item.name}
                text={item.text}
                image={item.image}
                position={item.position}
                key={index}
              />
            ))}
          </Flex>
        </HStack>

        {/* Mobile */}
        <Box display={{ base: "block", md: "none" }}>
          <EmblaCarousel
            slides={reviews.map((item, index) => (
              <ReviewCard
                name={item.name}
                text={item.text}
                image={item.image}
                position={item.position}
                key={index}
                fullWidth
              />
            ))}
            options={OPTIONS}
          />
        </Box>
      </Container>
    </Box>
  );
}

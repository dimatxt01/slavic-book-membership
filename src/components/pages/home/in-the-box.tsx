import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import Book from "@/icons/book";
import Collection from "@/icons/collection";
import Phone from "@/icons/phone";
import Truck from "@/icons/truck";
import Return from "@/icons/return";
import Cancel from "@/icons/cancel";
import { FaArrowRight } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

import { useModalStore } from "@/store/modal";

function Feature({ children }: { children: React.ReactNode }) {
  return (
    <Flex
      gap="24px"
      alignItems="center"
      fontSize={{ base: "16px", md: "24px" }}
      lineHeight="150%"
      textTransform={"capitalize"}
    >
      {children}
    </Flex>
  );
}

export default function InTheBox() {
  const { setIsOpen, setButtonId } = useModalStore();
  return (
    <Box w="100%" py={{ md: "64px", base: "48px" }} position={"relative"}>
      <Container
        display={"flex"}
        flexDir={"column"}
        gap={{ md: "80px", base: "24px" }}
        maxW="1320px"
      >
        <VStack gap={{ base: "12px" }}>
          {/*<Text*/}
          {/*  fontSize={{ base: "14px", md: "16px" }}*/}
          {/*  fontWeight={"600"}*/}
          {/*  lineHeight={"150%"}*/}
          {/*>*/}
          {/*  Tagline*/}
          {/*</Text>*/}
          <HStack justify={"flex-start"}>
            <Flex
              justifyContent={"flex-start"}
              w={"100%"}
              maxW={"700px"}
              flexDir={"column"}
              gap={{ md: "24px", base: "12px" }}
              zIndex={5}
            >
              <Heading
                as="h3"
                fontSize={{ base: "24px", md: "48px" }}
                fontWeight={700}
                lineHeight={"150%"}
                textAlign={"center"}
              >
                What&apos;s In The Box?
              </Heading>
              <Text
                fontSize={{ base: "14px", md: "18px" }}
                fontWeight={"400"}
                lineHeight={"150%"}
                textAlign={"center"}
              >
                Our personalized Slavic book collection offers age-appropriate,
                engaging titles that nurture curiosity, language development,
                and a love for learning. Each curated box includes:
              </Text>
            </Flex>
            <Image
              position={"absolute"}
              right={{ md: "92px", base: "10px" }}
              top={{ md: "40px", base: "130px" }}
              src={"/assets/rainbow.webp"}
              width={{ md: "207px", base: "45px" }}
              height={{ md: "185px", base: "45px" }}
              alt="rainbow"
              transform={{ md: "rotate(0deg)", base: "rotate(-15deg)" }}
              objectFit={"contain"}
              zIndex={0}
            />
          </HStack>
        </VStack>
        <Grid
          templateColumns={{ md: "repeat(2, 1fr)", base: "repeat(1, 1fr)" }}
          gap={{ md: "80px", base: "24px" }}
          position="relative"
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image
            src="/assets/butterfly.webp"
            position="absolute"
            left="-12px"
            top="-12px"
            transform={"translate(-50%, -50%)"}
            width="83px"
            height="89px"
            objectFit="cover"
            display={{ base: "none", md: "block" }}
            alt="butterfly"
          />
          <Image
            src={"/assets/kid-1.jpg"}
            alt="kid"
            height={{ md: "auto", base: "305px" }}
            width={{ md: "auto", base: "100%" }}
            rounded="24px"
          />
          <VStack
            alignItems="flex-start"
            gap={"32px"}
            py={{ md: "32px", base: "8px" }}
            justifyContent={"space-between"}
          >
            <VStack alignItems="flex-start" gap={{ base: "16px", md: "24px" }}>
              {/*<Feature>*/}
              {/*  <Car /> An original collection of 7-10 playthings*/}
              {/*</Feature>*/}
              <Feature>
                <Book /> 2 to 3 Slavic-language Books you and they will enjoy
                reading
              </Feature>
              <Feature>
                <Collection /> A creative activity guide with fun, interactive
                ideas for family bonding
              </Feature>
              <Feature>
                <Phone /> Access to exclusive reading tips and expert advice to
                foster early literacy
              </Feature>
            </VStack>
            <VStack alignItems="flex-start" gap={{ base: "16px", md: "24px" }}>
              <Heading
                as="h3"
                fontSize={{ base: "16px", md: "24px" }}
                fontWeight="500"
                lineHeight="150%"
                mb={"8px"}
              >
                Along with these, we offer
              </Heading>
              <Feature>
                <Truck /> Free shipping
              </Feature>
              <Feature>
                <Return /> Easy Returns
              </Feature>
              <Feature>
                <Cancel /> Cancel Or Skip Any Time
              </Feature>
            </VStack>
            <Button
              width={{ base: "100%", md: "auto" }}
              onClick={() => {
                setIsOpen(true);
                setButtonId("In the box button");
              }}
            >
              Start Getting Books Now <FaArrowRight />
            </Button>
          </VStack>
        </Grid>
      </Container>
    </Box>
  );
}

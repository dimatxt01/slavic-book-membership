import {
  Box,
  Container,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import { BsChevronRight } from "react-icons/bs";
import ArrorwRight from "./arrow-right";
import { useModalStore } from "@/store/modal";

export default function Hero() {
  const { setIsOpen, setButtonId } = useModalStore();
  return (
    <>
      <Container
        padding="32px 16px 32px 16px"
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap="32px"
        maxW="1320px"
      >
        <VStack gap="4" position="relative">
          <Image
            src="/assets/cloud.webp"
            position="absolute"
            top={{ base: "100%", md: "-16px" }}
            left={{ base: "0px", md: "100%" }}
            width={{ base: "32px", md: "122px" }}
            height={{ base: "32px", md: "74px" }}
            objectFit={"contain"}
            className="cloud2"
            alt="cloud"
          />
          <Image
            src="/assets/sun.png"
            position="absolute"
            top={{ base: "-10px", md: "-16px" }}
            right={{ base: "100%", md: "100%" }}
            width={{ base: "40px", md: "150px" }}
            height={{ base: "40px", md: "150px" }}
            transform={{ base: "translateX(100%)", md: "translateX(-50%)" }}
            objectFit={"contain"}
            alt="sun"
          />
          <Image
            src="/assets/cloud.webp"
            position="absolute"
            top={{ base: "0", md: "100%" }}
            right={{ base: "24px", md: "100%" }}
            width={{ base: "32px", md: "122px" }}
            height={{ base: "32px", md: "74px" }}
            objectFit={"contain"}
            className="cloud2"
            alt="cloud"
          />
          <Image
            src="/assets/static-cloud.png"
            position="absolute"
            top={{ base: "102px", md: "100%" }}
            right={{ base: "24px", md: "-200px" }}
            width={{ base: "36px", md: "180px" }}
            height={{ base: "6px", md: "32px" }}
            objectFit={"contain"}
            alt="cloud"
          />
          {/*<Text*/}
          {/*  fontWeight={"700"}*/}
          {/*  lineHeight="150%"*/}
          {/*  fontSize={{ base: "14px", md: "16px" }}*/}
          {/*>*/}
          {/*  Tagline*/}
          {/*</Text>*/}
          <Heading
            as="h1"
            fontSize={{ base: "24px", md: "48px" }}
            fontWeight={700}
            maxW="944px"
            textAlign="center"
            lineHeight={"120%"}
          >
            Get Best Slavic Books for kids Every Month!
          </Heading>
          <Text
            as="h2"
            fontSize={{ base: "14px", md: "18px" }}
            lineHeight={"150%"}
            textAlign={"center"}
            maxW="768px"
            width="100%"
            marginTop="8px"
          >
            Get the top 1% Russian Books For Kids (2-9 years old) Every Month —{" "}
            <span style={{ fontStyle: "italic" }}>
              Curated by child education experts.
            </span>
          </Text>
        </VStack>
        <HStack position="relative">
          <Box
            display={{ base: "none", md: "block" }}
            position="absolute"
            left="-16px"
            top="100%"
            transform="translate(-100%, -50%)"
          >
            <ArrorwRight />
          </Box>
          <Button
            onClick={() => {
              setIsOpen(true);
              setButtonId("Main Button");
            }}
          >
            Subscribe Now
          </Button>
          <Button visual="ghost">
            Learn More <BsChevronRight />
          </Button>
        </HStack>
      </Container>
      <Box position="relative" pb={{ base: "32px", md: 0 }}>
        <Image
          src="/assets/astranaut.webp"
          position="absolute"
          top={{ md: "50%", base: "50%" }}
          right={{ md: "20%", base: "32px" }}
          width={{ md: "auto", base: "57px" }}
          height={{ md: "auto", base: "54px" }}
          objectFit={"cover"}
          alt="astranaut"
        />
        <Image
          src="/assets/cloud.webp"
          position="absolute"
          top={{ base: 0, md: "40%" }}
          left={{ base: "24px", md: "20%" }}
          width={{ base: "32px", md: "122px" }}
          height={{ base: "32px", md: "74px" }}
          objectFit={"contain"}
          className="cloud"
          alt="cloud"
        />
        <Image
          src="/assets/cloud.webp"
          position="absolute"
          top={{ base: 0, md: "40%" }}
          right={{ base: "48px", md: "20%" }}
          width={{ base: "32px", md: "122px" }}
          height={{ base: "32px", md: "74px" }}
          objectFit={"contain"}
          transform="scaleX(-1)"
          className="cloud1"
          alt="cloud"
        />
        <Image
          src="/assets/ff.webp"
          alt="hero-image"
          position="relative"
          // w="100%"
          // height={{ base: "200px", md: "100%" }}
        />
      </Box>
    </>
  );
}

import {Box, Container, Grid, Heading, Image, Text, VStack,} from "@chakra-ui/react";

export default function Importance() {
  return (
    <Box
      bg="white"
      w="100%"
      py={{ md: "112px", base: "48px" }}
      position="relative"
      overflow="clip"
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
      <Image
        src="/assets/plane.png"
        width={{ md: "400px", base: "250px" }}
        height={{ md: "auto", base: "40px" }}
        left={{ md: "0", base: "-140px" }}
        top={{ md: "42px", base: "60px" }}
        position="absolute"
        objectFit="contain"
        alt="plane"
      />
      <Container
        display={"flex"}
        flexDir={"column"}
        gap={{ md: "80px", base: "24px" }}
        alignItems="center"
        maxW="1320px"
      >
        <VStack gap="24px" position={"relative"}>
          <Image
            src="/assets/planet-2.png"
            position="absolute"
            alt="planet"
            // left="100%"
            // top="0"
            left={{ md: "100%", base: "85%" }}
            top={{ md: "0", base: "-20px" }}
            transform={"translateY(-50%)"}
            width={{ md: "168px", base: "60px" }}
            height={{ md: "168px", base: "60px" }}
            objectFit={"cover"}
          />
          <Heading
            as="h3"
            fontSize={{ base: "24px", md: "48px" }}
            fontWeight={700}
            lineHeight={"150%"}
            textAlign={"center"}
          >
            Why It's Important?
          </Heading>
          <Text
              fontSize={{ base: "14px", md: "18px" }}
              fontWeight={"400"}
              lineHeight={"150%"}
              textAlign={"center"}
              maxW="836px"
          >
            Invest in your child's brightest future — <b>90% of brain development</b> happens by age 5. Quality <b>reading materials</b> enhance <b>cognitive growth</b>, <b>language skills</b>, and <b>cultural awareness</b>.
          </Text>
        </VStack>
        <Grid
          templateColumns={{ sm: "repeat(2, 1fr)", base: "repeat(1, 1fr)" }}
          gap={"12px"}
          position="relative"
        >
          <Image
            src="/assets/importance-1.jpg"
            width="100%"
            height="100%"
            objectFit="cover"
            rounded={{ sm: "24px", base: "16px" }}
            alt="importance-1"
          />
          <Image
            position={"absolute"}
            left={"100%"}
            bottom={"0"}
            transform="translateX(20px)"
            src={"/assets/rainbow.webp"}
            width={"207px"}
            height={"185px"}
            alt="rainbow"
          />
          <Grid
            templateColumns="repeat(2, 1fr)"
            templateRows={{ sm: "repeat(3, 1fr)", base: "repeat(2, 1fr)" }}
            gap="12px"
          >
            <Image
              src="/assets/importance-2.webp"
              width="100%"
              height="100%"
              objectFit="cover"
              rounded={{ sm: "24px", base: "16px" }}
              alt="importance-2"
            />
            <Image
              src="/assets/importance-3.webp"
              width="100%"
              height="100%"
              objectFit="cover"
              rounded={{ sm: "24px", base: "16px" }}
              alt="importance-3"
            />
            <Image
              src="/assets/importance-4.jpg"
              width="100%"
              height="100%"
              objectFit="cover"
              gridColumn="span 2"
              gridRow={{ sm: "span 2", base: "span 1" }}
              rounded={{ sm: "24px", base: "16px" }}
              alt="importance-4"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

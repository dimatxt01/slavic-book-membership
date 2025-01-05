import {Button} from "@/components/ui/button";
import {Box, Container, Flex, Grid, Heading, Text, VStack,} from "@chakra-ui/react";
import {FaArrowRight} from "react-icons/fa6";
import {useModalStore} from "@/store/modal";

function Step({
  count,
  children,
}: {
  count: number;
  children: React.ReactNode;
}) {
  return (
    <VStack alignItems={{ base: "flex-start", md: "center" }}>
      <Heading
        position="relative"
        mt={{ md: "14px", base: 0 }}
        ms={{ base: "22px", md: 0 }}
        fontSize={{ md: "32px", base: "16px" }}
        fontWeight={700}
        lineHeight="140%"
        textAlign={{ base: "left", md: "center" }}
      >
        Step 0{count}
        <Box
          position="absolute"
          w="24px"
          h="24px"
          bg={"#000"}
          rounded="full"
          left={{ base: "-32px", md: "50%" }}
          top={{ base: "50%", md: "-16px" }}
          transform={{ base: "translateY(-50%)", md: "translate(-50%, -50%)" }}
          border="4px solid #fdf4e6"
        />
      </Heading>
      <Text
        fontSize={{ md: "20px", base: "16px" }}
        lineHeight="150%"
        textAlign={{ base: "left", md: "center" }}
        ms={{ base: "22px", md: 0 }}
      >
        {children}
      </Text>
    </VStack>
  );
}

export default function HowItWorks() {
  const { setIsOpen, setButtonId } = useModalStore();
  return (
    <Box
      w="100%"
      pt={{ md: "112px", base: "48px" }}
      pb={{ md: "148px", base: "48px" }}
      position={"relative"}
    >
      <Container display={"flex"} flexDir={"column"} gap="80px" maxW="1320px">
        <VStack gap="16px">
          {/*<Text*/}
          {/*  fontWeight={"700"}*/}
          {/*  lineHeight="150%"*/}
          {/*  fontSize={{ base: "14px", md: "16px" }}*/}
          {/*>*/}
          {/*  Tagline*/}
          {/*</Text>*/}

          <Flex
            justifyContent={"flex-start"}
            w={"100%"}
            maxW={"618px"}
            flexDir={"column"}
            gap={"24px"}
          >
            <Heading
              as="h3"
              fontSize={{ base: "24px", md: "48px" }}
              fontWeight={700}
              maxW="944px"
              textAlign="center"
              lineHeight={"120%"}
            >
              How it Works
            </Heading>
            <Text
              fontSize={{ base: "14px", md: "18px" }}
              lineHeight={"150%"}
              textAlign={"center"}
              maxW="768px"
              width="100%"
              marginTop="8px"
            >
              Explore how we deliver joy to your doorstep every month.
              Understand the magic behind our personalized recommendations.
            </Text>
          </Flex>
          <Button
            width={{ base: "100%", md: "auto" }}
            onClick={() => {
              setIsOpen(true);
              setButtonId('How it works')
            }}
          >
            Start Getting Books Now <FaArrowRight />
          </Button>
        </VStack>
        <Box width="100%" position={"relative"}>
          <Box
            width="100%"
            height="3px"
            bg="black"
            display={{ base: "none", md: "block" }}
          />
          <Box
            width="3px"
            height="100%"
            bg="black"
            display={{ base: "block", md: "none" }}
            position="absolute"
            left="0"
            right="0"
            mx={"32px"}
          />
          <Grid
            templateColumns={{ md: "repeat(3, 1fr)", base: "repeat(1, 1fr)" }}
            gap="12px"
            mx={{ base: "32px", md: "0" }}
          >
            <Step count={1}>Tell us your child&apos; age</Step>
            <Step count={2}>
              Receive two or three curated hardcover books monthly.
            </Step>
            <Step count={3}>
              As your child grows, books advance in difficulty, and your
              feedback improves future selections.
            </Step>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

import {Button} from "@/components/ui/button";
import {Box, Container, Grid, Heading, HStack, Image, Text, VStack,} from "@chakra-ui/react";
import ArrorwRight from "./arrow-right";
import {useCallback, useState} from "react";
import {BsChevronDown} from "react-icons/bs";

function AgeCard({
                     image,
                     tag,
                     title,
                     // description,
                 }: {
    image: string;
    tag: string;
    title: string;
    // description: string;
}) {
    return (
        <Box
            rounded="24px"
            display={"flex"}
            flexDir={"column"}
            border="1px solid black"
            bg="white"
        >
            <Image
                src={image}
                width="100%"
                height="100%"
                objectFit={"cover"}
                roundedTop="24px"
                maxH="233px"
                minH="233px"
                alt={title}
            />
            <Box padding="32px">
                <Text fontWeight={700} lineHeight="150%" mb="8px">
                    {tag}
                </Text>
                <Heading
                    as="h5"
                    fontSize="24px"
                    fontWeight="600"
                    lineHeight={"130%"}
                    mb="24px"
                    font={'inherit'}
                >
                    {title}
                </Heading>
                {/*<Text lineHeight={"150%"}>{description}</Text>*/}
            </Box>
        </Box>
    );
}

const ageGroups = ["2-5 Years", "6-9 Years"];

export default function ExploreByAge() {
    const [selectedTab, setSelectedTab] = useState(0);
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = useCallback(() => {
        setShowDropdown((prev) => !prev);
    }, []);

    return (
        <Container
            display={"flex"}
            flexDir={"column"}
            gap={{md: "64px", base: "24px"}}
            alignItems="center"
            w="100%"
            py="64px"
            mt="-32px"
            maxW="1320px"
        >
            <VStack gap={{base: "12px", md: "24px"}}>
                {/*<Text*/}
                {/*    fontSize={{base: "14px", md: "16px"}}*/}
                {/*    fontWeight={"600"}*/}
                {/*    lineHeight={"150%"}*/}
                {/*>*/}
                {/*    Category*/}
                {/*</Text>*/}
                <Heading
                    as="h3"
                    fontWeight={"700"}
                    lineHeight={"150%"}
                    textAlign={"center"}
                    fontSize={{base: "24px", md: "48px"}}
                >
                    Explore by Kids Age
                </Heading>
            </VStack>

            {/* Desktop */}
            <HStack
                bg="#333"
                p="24px"
                borderRadius={"full"}
                position="relative"
                display={{base: "none", md: "flex"}}
            >
                {ageGroups.map((item, index) => (
                    <Button
                        key={index}
                        visual={selectedTab === index ? "solid" : "dashed"}
                        onClick={() => setSelectedTab(index)}
                    >
                        {item}
                    </Button>
                ))}
                <Box
                    position="absolute"
                    left="100%"
                    bottom="100%"
                    transform="scaleX(-1)"
                    rotate="-45deg"
                >
                    <ArrorwRight/>
                </Box>
            </HStack>

            {/* Mobile */}
            <Box
                display={{base: "block", md: "none"} }
                width="100%"
                position="relative"
            >
                <Button
                    width="100%"
                    justifyContent={"space-between"}
                    onClick={toggleDropdown}
                >
                    {ageGroups[selectedTab]} <BsChevronDown/>
                </Button>
                {showDropdown && (
                    <Box
                        position="absolute"
                        bottom="-10px"
                        left="0"
                        width="100%"
                        transform="translateY(100%)"
                        bg="white"
                        rounded="24px"
                        p="12px 16px"
                        border="2px solid #A46804"
                        display={"flex"}
                        flexDir={"column"}
                        gap="8px"
                        alignItems={"flex-start"}
                        boxShadow="0px 1px 27.1px 3px rgba(164, 104, 4, 0.15)"
                    >
                        {ageGroups.map((item, index) => (
                            <Button
                                key={index}
                                onClick={() => {
                                    setSelectedTab(index);
                                    setShowDropdown(false);
                                }}
                                visual="ghost"
                                w="full"
                                justifyContent={"left"}
                                bg={selectedTab === index ? "#FED711" : "white"}
                            >
                                {item}
                            </Button>
                        ))}
                    </Box>
                )}
            </Box>
            {(selectedTab === 1 ?
                <Grid
                    templateColumns={{md: "repeat(3, 1fr)", base: "repeat(1, 1fr)"}}
                    gap={{base: "16px", md: "32px"}}
                >
                    <AgeCard
                        image="/assets/age-box-1.jpg"
                        tag="Early Literacy Starter Kit for Little Learners"
                        title="Encourage a love for reading early on with a personalized collection of age-appropriate, engaging board books."
                        // description="Encourage a love for reading early on with a personalized collection of age-appropriate, engaging board books perfect for sensory exploration and bonding moments."
                    />
                    <AgeCard
                        image="/assets/age-box-2.jpg"
                        tag="Discover and Explore: A Personalized Library"
                        title="Fuel curiosity and imagination with a selection of books tailored to young explorers"
                        // description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
                    <AgeCard
                        image="/assets/age-box-3.jpg"
                        tag="Growing Minds, Personalized Book Sets"
                        title="Spark creativity and learning with customizable libraries that grow with your child"
                        // description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
                </Grid> :
                <Grid
                    templateColumns={{md: "repeat(3, 1fr)", base: "repeat(1, 1fr)"}}
                    gap={{base: "16px", md: "32px"}}
                >
                    <AgeCard
                        image="/assets/age-box-1.jpg"
                        tag="Early Literacy Starter Kit for Little Learners"
                        title="Encourage a love for reading early on with a personalized collection of age-appropriate, engaging board books."
                        // description="Encourage a love for reading early on with a personalized collection of age-appropriate, engaging board books perfect for sensory exploration and bonding moments."
                    />
                    <AgeCard
                        image="/assets/age-box-2.jpg"
                        tag="Discover and Explore: A Personalized Library"
                        title="Fuel curiosity and imagination with a selection of books tailored to young explorers"
                        // description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
                    <AgeCard
                        image="/assets/age-box-3.jpg"
                        tag="Growing Minds, Personalized Book Sets"
                        title="Spark creativity and learning with customizable libraries that grow with your child"
                        // description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
                </Grid>)}

        </Container>
    );
}

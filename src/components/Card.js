import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
      <VStack
        bg="whitesmoke"
        w="100%"
        color="black"
        borderRadius="lg"
        align="stretch"
        spacing={4}
        _hover={{
          boxShadow: "lg",
          textDecoration: "none",
        }} >
        <Image
          src={imageSrc}
          alt={title}
          boxSize='400px'
          />
        <VStack align="start" px={4} py={2}>
          <Heading as='h6' size='md' color='black' textAlign={['left']}>
            {title}
          </Heading>
          <Text color='grey' align="center" fontSize="sm">{description}</Text>
        </VStack>
        <HStack px={4} pb={4} justify="space-between" w="20%">
          <Text color='black' fontSize="sm">See more<FontAwesomeIcon icon={faArrowRight} size="1x" />
          </Text>
        </HStack>
      </VStack>
  );
};

export default Card;

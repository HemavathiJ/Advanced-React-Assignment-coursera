import React from "react";
import { Avatar, Heading, VStack, Image } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
      {/* <Image
        src="https://i.pravatar.cc/150?img=7"
        alt="profile"
        borderRadius='full'
        boxSize='100px' /> */}
      <Avatar size='lg' name='Avatar' src='https://i.pravatar.cc/150?img=7' />
      <Heading as='h6' size='xs' fontSize='xs'>
        {greeting}
      </Heading>
      <Heading as='h3' size='lg'>
        {bio1}
      </Heading>
      <Heading as='h4' size='lg'>
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;

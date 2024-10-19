'use client'
import { Box, Spacer, Button, Flex, Heading, Input, Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import AboutPage from './about';
import ContactPage from "./contact";
const IndexPage = () => ( 
  <Box>
    <title>Amelia (Mimi) Yu's Personal Portfolio</title>
    <html lang="en"></html>
      <Heading as='h1' m={5} mt={1}>
        Amelia (Mimi) Yu
      </Heading>
      <Tabs m={5} mt={1}>
        <TabList>
          <Tab>About</Tab>
          <Tab>Contact Me</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <AboutPage/>
          </TabPanel>
          <TabPanel>
            <ContactPage />
          </TabPanel>
        </TabPanels>
      </Tabs>
  </Box>
);

export default IndexPage;

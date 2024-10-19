import { UnorderedList, ListItem, Grid, GridItem, Image, Heading, Text } from '@chakra-ui/react';
const AboutPage = () => {
    return (
        <Grid
            h='200px'
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(4, 1fr)'
            gap={4}
            >
            <GridItem colSpan={1} me='5'>
                <Image borderRadius='full' src='/images/mimi.png' alt='An Image of Mimi Yu, an Asian person with short black hair, smiling' />
            </GridItem>
            <GridItem colSpan={3}>
                <Heading size='xl'>
                    About Me
                </Heading>
                <Text fontSize='2xl'>
                    Amelia (Mimi) Yu is an undergraduate Computer Science and Political Science student. 
                </Text>
                <Text fontSize='2xl'>
                    They have a passion for the intersection of technology and social justice.
                </Text>
                <br />
                <Heading fontSize='2xl'>Involvement:</Heading>
                <UnorderedList fontSize='xl'>
                    <ListItem>News Director of NUTV (May 2024 - Present)</ListItem>
                    <ListItem>Treasurer of the Feminist Student Organization (Janurary 2024 - Present)</ListItem>
                    <ListItem>Coalition Coordinator of the Feminist Student Organization (Janurary 2022 - December 2023)</ListItem>
                </UnorderedList>
                <br />
                <Heading fontSize='2xl'>Experience:</Heading>
                <UnorderedList fontSize='xl'>
                    <ListItem>Software Engineering Co-op at Alnylam Pharmaceuticals (Janurary 2024 - June 2024)</ListItem>
                </UnorderedList>
            </GridItem>
        </Grid>
    );
};

export default AboutPage;
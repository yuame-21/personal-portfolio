import {UnorderedList, ListItem, Box, Heading} from "@chakra-ui/react";

const ContactPage = () => {
    return (
        <Box>
            <Heading>
                Contact Me
            </Heading>
            <UnorderedList>
                <ListItem>
                    Email: yu.ame@northeastern.edu
                </ListItem>
                <ListItem>
                    LinkedIn: <a href='https://www.linkedin.com/in/amelia-mimi-yu/'>https://www.linkedin.com/in/amelia-mimi-yu/</a>
                </ListItem>
                <ListItem>
                    GitHub: <a href='https://github.com/yuame-21'>https://github.com/yuame-21</a>
                </ListItem>
            </UnorderedList>

        </Box>
    );
};

export default ContactPage;
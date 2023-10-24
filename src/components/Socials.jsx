import { DownloadIcon, Icon } from "@chakra-ui/icons";
import { Box, Button, Center, Flex, HStack, Link } from "@chakra-ui/react";
import { BsLinkedin, BsGithub } from 'react-icons/bs';

export default function Socials() {
    return (
        <Flex justifyContent={"center"}>
            <HStack>
                <Box>
                    <Link href="https://www.linkedin.com/in/christian-omar-valdes/" isExternal>
                        <Icon as={BsLinkedin} boxSize={12} color="green.300"></Icon>
                    </Link>
                </Box>
                <Box>
                    <Link href="https://github.com/chrisvlds" isExternal>
                        <Icon as={BsGithub} boxSize={12} color="green.300"></Icon>
                    </Link>
                </Box>
            </HStack>
        </Flex>
    )
}

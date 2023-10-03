import { DownloadIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Flex, HStack, Link } from "@chakra-ui/react";
import { BsLinkedin, BsGithub } from 'react-icons/bs';

export default function Socials() {
    return (
        <Flex justifyContent={"center"}>
            <HStack>
                <Box>
                    <Link href="https://www.linkedin.com/in/christian-valdes-15b5a7263/" isExternal>
                        <Button variant="ghost" leftIcon={<BsLinkedin size={40} />} color="green.300"></Button>
                    </Link>
                </Box>
                <Box>
                    <Link href="https://github.com/chrisvlds" isExternal>
                        <Button variant="ghost" leftIcon={<BsGithub size={40} />} color="green.300"></Button>
                    </Link>
                </Box>
                <Box>
                    <Link href="./data/WebsiteResume.pdf" download="./data/WebsiteResume.pdf">
                        <Button variant="ghost" leftIcon={<DownloadIcon boxSize={10} color="green.300" />} ></Button>
                    </Link>
                </Box>
            </HStack>
        </Flex>
    )
}

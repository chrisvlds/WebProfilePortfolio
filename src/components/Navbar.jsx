import { AtSignIcon, CalendarIcon, EditIcon, HamburgerIcon, Icon, StarIcon } from "@chakra-ui/icons";
import { Box, Center, Flex, HStack, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <Flex >
            <HStack gap={10}>
                <Box fontSize="1.2em" color="white">
                    <NavLink to="/">
                        <Icon as={StarIcon} color="white" verticalAlign={-1} />
                        &nbsp;Profile
                    </NavLink>
                </Box>
                <Box fontSize="1.2em" color="white">
                    <NavLink to="/projects">
                        <Icon as={CalendarIcon} color="white" verticalAlign={-1} />
                        &nbsp;Projects
                    </NavLink>
                </Box>
            </HStack>
        </Flex>
    )
}

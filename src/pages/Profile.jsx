import { Avatar, Box, SimpleGrid, Text} from "@chakra-ui/react";

export default function Profile() {
  return (
    <SimpleGrid p="10px" spacing={10} minChildWidth="450px">
      <Box>
        <Avatar size='3xl' name='Christian Valdes' src="/img/me.PNG" />
      </Box>
      <Box>
        <Text>Description of M</Text>
      </Box>
      <Box>
        <Text>dfjslkjflkdsdsfaaaaaaaaaaaaaaaaadfssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</Text>
      </Box>
      
    </SimpleGrid>
  )
}
import { AspectRatio, Box, Image, List, ListIcon, ListItem, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Link } from "@chakra-ui/react";
import {
  ChatIcon,
  CheckCircleIcon,
  EmailIcon,
  StarIcon,
  WarningIcon
} from '@chakra-ui/icons'

export default function Projects() {
  return (
    <Tabs mt="40px" p="20px" colorScheme="green" variant="enclosed" minHeight="100vh">
      <TabList>
        <Tab _selected={{ color: 'white', bg: 'green.300' }}>Movie Selling Site</Tab>
        <Tab _selected={{ color: 'white', bg: 'green.300' }}>Squat Counter</Tab>
        <Tab _selected={{ color: 'white', bg: 'green.300' }}>Internship/Job Tracker</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <Box>
            <Link href="https://moviemvc-christianvaldes.azurewebsites.net/" isExternal>
              <Text>
                Website Link
              </Text>
            </Link>
          </Box>
          <AspectRatio maxW='560' ratio={4 / 3}>
            <Image src='/dist/img/MovieSellingSite.png' alt='naruto' />
          </AspectRatio>

        </TabPanel>
        <TabPanel>
          <Box>
            <Link href="https://huggingface.co/spaces/chrisvlds/MLProjectV3" isExternal>
              <Text>
                Website Link
              </Text>
            </Link>
          </Box>
          <AspectRatio maxW="560px" ratio={1}>
            <Box
              as="iframe"
              title="naruto"
              src="https://www.youtube.com/embed/MK3o_pjoxuo?si=rsaSbVZh6ltlzC4T"
              allowFullScreen
            />
          </AspectRatio>

        </TabPanel>
        <TabPanel>
          <AspectRatio maxW="560px" ratio={1}>
            <Box
              as="iframe"
              title="naruto"
              src="https://www.youtube.com/embed/30BFfqW9haI?si=ukd0-szt4FihFliu"
              allowFullScreen
            />
          </AspectRatio>

        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

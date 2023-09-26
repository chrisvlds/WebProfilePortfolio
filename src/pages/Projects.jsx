import { List, ListIcon, ListItem, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import {
  ChatIcon,
  CheckCircleIcon,
  EmailIcon,
  StarIcon,
  WarningIcon
} from '@chakra-ui/icons'

export default function Projects() {
  return (
    <Tabs mt="40px" p="20px" colorScheme="green" variant="enclosed">
      <TabList>
        <Tab _selected={{ color: 'white', bg: 'green.400' }}>Project 1</Tab>
        <Tab _selected={{ color: 'white', bg: 'green.400' }}>Project 2</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          
        </TabPanel>
        <TabPanel>
          
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

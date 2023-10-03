import { Icon } from "@chakra-ui/icons";
import { Avatar, Flex, Grid, GridItem, Link, List, ListIcon, ListItem, Text, useClipboard, useToast } from "@chakra-ui/react";
import { FaHatCowboy } from 'react-icons/fa';
import { GiWeightLiftingUp } from 'react-icons/gi';
import { PiSoccerBallFill } from 'react-icons/pi';

export default function Profile() {
  const { onCopy } = useClipboard("christian-valdes56@outlook.com");
  const toast = useToast();

  const showToast = () => {
    toast({
      title: 'Copied to Clipboard',
      duration: 5000,
      isClosable: true,
      status: 'success',
      position: 'top'
    })
  }

  const bothEvents = () => {
    showToast();
    onCopy();
  }

  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="grey.300">
      <GridItem
        colSpan={{ base: 6, lg: 2, xl: 2 }}
        p={{ base: '40px', lg: '30px', xl: '20px' }}
        minHeight={'100vh'}
      >
        <Flex justifyContent="center">
          <List p="20px">
            <ListItem>
              <Avatar size={{ base: '3xl' }} name='Christian Valdes' src="/img/profile.png" />
            </ListItem>
            <ListItem paddingTop="40px" paddingLeft='15px' paddingBottom='10px'>
              <Text as='u' color="grey" fontSize='sm'>
                Work &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </Text>
            </ListItem>
            <ListItem fontSize='xl' as='b' paddingLeft='15px'>
              <Text as="span" color="green.400">
                Invoice
              </Text>
              <Text as="span" color="blue.400">
                Cloud
              </Text>
            </ListItem>
            <ListItem color="grey" paddingLeft='15px' paddingBottom='10px'>
              <Text>
                1655 FM802 STE 101 <br></br>
                Brownsville, TX 78526
              </Text>
            </ListItem>
            <ListItem paddingTop="15px" fontSize='xl' as='b' paddingLeft='15px'>
              <Text as="span" color="orange.400">
                UT
              </Text>
              <Text as="span" color="grey">
                RGV
              </Text>
            </ListItem>
            <ListItem paddingLeft='15px'>
              <Text color="grey">
                1201 W University Dr <br></br>
                Edinburg, TX 78539
              </Text>
            </ListItem>
            <ListItem paddingTop="40px" paddingLeft='15px'>
              <Text as='u' color="grey" fontSize='sm'>
                Personal Info &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </Text>
            </ListItem>
            <ListItem paddingLeft='15px' paddingTop="10px" lineHeight="5px">
              <Text>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<ListIcon as={FaHatCowboy} color="brown" />
              </Text>
              <Text as="span" color="grey">
                Located:&nbsp;
              </Text>
              <Text as="span">
                Texas
              </Text>
            </ListItem>
            <ListItem paddingLeft='15px' paddingTop="14px">
              <Text as="span" color="grey">
                Favorite Cookie:
              </Text>
              <Text as="span" color="blue.400">
                &nbsp;Chips Ahoy
              </Text>
              <Text as="span" color="red.400">
                !
              </Text>
            </ListItem>
            <ListItem paddingLeft='15px' paddingTop="5px">
              <Text as="span" color="grey">
                Split:
              </Text>
              <Text as="span">
                &nbsp;PPL <Icon as={GiWeightLiftingUp} />
              </Text>
            </ListItem>
            <ListItem paddingLeft='15px' paddingTop="5px">
              <Text as="span" color="grey">
                Team:
              </Text>
              <Text as="span" color="blue.700">
                &nbsp;Real
              </Text>
              <Text as="span" color="yellow.700">
                &nbsp;Madrid <Icon color="black" verticalAlign={-1} as={PiSoccerBallFill} />
              </Text>
            </ListItem>
            <ListItem paddingLeft='15px' paddingTop="5px">
              <Text as="span" color="grey" >
                Age:
              </Text>
              <Text as="span" color="green.700">
                &nbsp;22
              </Text>
            </ListItem>
          </List>
        </Flex>

      </GridItem>
      <GridItem
        colSpan={{ base: 6, lg: 4, xl: 4 }}
      >
        <List p="40px">
          <ListItem>
            <Text as='b' fontSize='6xl' color="green.700">
              Christian O. Valdes
            </Text>
            <Text color="grey">
              Part-Time Software Engineer | Research Assistant
            </Text>
            <Text as="span" color="grey" fontSize="sm">
              Email:{' '}
              <Link color='teal.500' onClick={bothEvents}>
                christian-valdes56@outlook.com
              </Link>
            </Text>
            <Text as="span" color="grey" fontSize="sm">
              &nbsp;| Phone: (956)715-6509
            </Text>
          </ListItem>
          <ListItem paddingTop="50px">

          </ListItem>
          <ListItem>
            <Text as='b' fontSize='2xl' color="green.400">
              Music
            </Text>
          </ListItem>
          <ListItem>
            <Text as='b' fontSize='2xl' color="green.400">
              Podcasts
            </Text>
          </ListItem>
          <ListItem>
            <Text as='b' fontSize='2xl' color="green.400">
              Anime
            </Text>
          </ListItem>
        </List>
      </GridItem>
    </Grid>
  )
}
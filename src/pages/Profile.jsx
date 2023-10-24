import { Icon } from "@chakra-ui/icons";
import { Avatar, Box, Card, CardBody, Flex, Grid, GridItem, HStack, Heading, Image, Link, List, ListIcon, ListItem, SimpleGrid, Stack, Text, Wrap, WrapItem, useClipboard, useToast } from "@chakra-ui/react";
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
          <List p="40px">
            <ListItem>
              <Avatar size='3xl' name='Christian Valdes' src="/img/ProfilePicture.png" />
            </ListItem>
            <ListItem paddingTop="40px" paddingLeft='30px' paddingBottom='10px'>
              <Text as='u' color="grey" fontSize='sm'>
                Work &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </Text>
            </ListItem>
            <ListItem fontSize='xl' as='b' paddingLeft='30px'>
              <Text as="span" color="green.400">
                Invoice
              </Text>
              <Text as="span" color="blue.400">
                Cloud
              </Text>
            </ListItem>
            <ListItem color="grey" paddingLeft='30px' paddingBottom='10px'>
              <Text>
                1655 FM802 STE 101 <br></br>
                Brownsville, TX 78526
              </Text>
            </ListItem>
            <ListItem paddingTop="15px" fontSize='xl' as='b' paddingLeft='30px'>
              <Text as="span" color="orange.400">
                UT
              </Text>
              <Text as="span" color="grey">
                RGV
              </Text>
            </ListItem>
            <ListItem paddingLeft='30px'>
              <Text color="grey">
                1201 W University Dr <br></br>
                Edinburg, TX 78539
              </Text>
            </ListItem>
            <ListItem paddingTop="40px" paddingLeft='30px'>
              <Text as='u' color="grey" fontSize='sm'>
                Personal Info &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </Text>
            </ListItem>
            <ListItem paddingLeft='30px' paddingTop="10px" lineHeight="5px">
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
            <ListItem paddingLeft='30px' paddingTop="14px">
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
            <ListItem paddingLeft='30px' paddingTop="5px">
              <Text as="span" color="grey">
                Split:
              </Text>
              <Text as="span">
                &nbsp;PPL <Icon as={GiWeightLiftingUp} />
              </Text>
            </ListItem>
            <ListItem paddingLeft='30px' paddingTop="5px">
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
            <ListItem paddingLeft='30px' paddingTop="5px">
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
          <ListItem paddingTop="10px">
            <Wrap>
              <WrapItem paddingLeft="30px">
                <Card maxW='200px'>
                  <CardBody bg="green.100">
                    <Image src="/dist/img/BeachHouseRoughSong.jpg" alt='Beach House - Rough Song' />
                    <Stack mt='2' spacing='1'>
                      <Heading size="md" textColor="green.700">Beach House</Heading>
                      <Link href="https://www.youtube.com/watch?v=kTqwzjzQo54&ab_channel=SubPop" isExternal>
                        <Text textColor="grey">
                          Rough Song
                        </Text>
                      </Link>
                    </Stack>
                  </CardBody>
                </Card>
              </WrapItem>
              <WrapItem paddingLeft="30px">
                <Card maxW='200px'>
                  <CardBody bg="green.100">
                    <Image src="/dist/img/TheTemperTrapSweetDisposition.png" alt='The Temper Trap - Sweet Disposition' />
                    <Stack mt='2' spacing='1'>
                      <Heading size="md" textColor="green.700">The Temper Trap</Heading>
                      <Link href="https://www.youtube.com/watch?v=vN7HQrgakZU&ab_channel=TheTemperTraptv" isExternal>
                        <Text textColor="grey">
                          Sweet Disposition
                        </Text>
                      </Link>
                    </Stack>
                  </CardBody>
                </Card>
              </WrapItem>
              <WrapItem paddingLeft="30px">
                <Card maxW='200px'>
                  <CardBody bg="green.100">
                    <Image src="/dist/img/ZoeHielo.jpg" alt='Zoe - Hielo' />
                    <Stack mt='2' spacing='1'>
                      <Heading size="md" textColor="green.700">Zoe</Heading>
                      <Link href="https://www.youtube.com/watch?v=lZHyGdYwynM&ab_channel=ZoeVEVO" isExternal>
                        <Text textColor="grey">
                          Hielo
                        </Text>
                      </Link>
                    </Stack>
                  </CardBody>
                </Card>
              </WrapItem>
              <WrapItem paddingLeft="30px">
                <Card maxW='200px'>
                  <CardBody bg="green.100">
                    <Image src="/dist/img/JasmineRodgersShapingUpToBe.jpg" alt='Jasmine Rodgers - Shaping Up To Be' />
                    <Stack mt='2' spacing='1'>
                      <Heading size="md" textColor="green.700">Jasmine Rodgers</Heading>
                      <Link href="https://www.youtube.com/watch?v=uLk6bL57Ls4&ab_channel=JasmineRodgers-Topic" isExternal>
                        <Text textColor="grey">
                          Shaping Up To Be
                        </Text>
                      </Link>
                    </Stack>
                  </CardBody>
                </Card>
              </WrapItem>
              <WrapItem paddingLeft="30px">
                <Card maxW='200px'>
                  <CardBody bg="green.100">
                    <Image src="/dist/img/NewConstellationsHotBlooded.jpg" alt='New Constellations - Hot Blooded' />
                    <Stack mt='2' spacing='1'>
                      <Heading size="sm" textColor="green.700">New Constellations</Heading>
                      <Link href="https://www.youtube.com/watch?v=9uIAB_GNmGw&ab_channel=NewConstellations" isExternal>
                        <Text textColor="grey">
                          Hot Blooded
                        </Text>
                      </Link>
                    </Stack>
                  </CardBody>
                </Card>
              </WrapItem>
            </Wrap>
          </ListItem>

          <ListItem paddingTop="30px">
            <Text as='b' fontSize='2xl' color="green.400">
              Anime
            </Text>
          </ListItem>
          <ListItem paddingTop="10px">
            <Wrap>
              <WrapItem paddingLeft="30px">
                <Card maxW='200px'>
                  <CardBody bg="green.100">
                    <Image src="/dist/img/JujutsuKaisen.jpg" alt='Jujutsu Kaisen' />
                    <Stack mt='2' spacing='1'>
                      <Link href="https://www.crunchyroll.com/series/GRDV0019R/jujutsu-kaisen" isExternal>
                        <Heading size="md" textColor="green.700">Jujutsu Kaisen</Heading>
                      </Link>
                      <Text textColor="grey">
                        Gege Akutami
                      </Text>
                    </Stack>
                  </CardBody>
                </Card>
              </WrapItem>
              <WrapItem paddingLeft="30px">
                <Card maxW='200px'>
                  <CardBody bg="green.100">
                    <Image src="/dist/img/DemonSlayer.jpg" alt='Demon Slayer' />
                    <Stack mt='2' spacing='1'>
                      <Link href="https://www.crunchyroll.com/series/GY5P48XEY/demon-slayer-kimetsu-no-yaiba" isExternal>
                        <Heading size="md" textColor="green.700">Demon Slayer</Heading>
                      </Link>
                      <Text textColor="grey">
                        Koyoharu Gotouge
                      </Text>
                    </Stack>
                  </CardBody>
                </Card>
              </WrapItem>
              <WrapItem paddingLeft="30px">
                <Card maxW='200px'>
                  <CardBody bg="green.100">
                    <Image src="/dist/img/HunterXHunter.jpg" alt='HunterXHunter' />
                    <Stack mt='2' spacing='1'>
                      <Link href="https://www.crunchyroll.com/es/series/GY3VKX1MR/hunter-x-hunter" isExternal>
                        <Heading size="md" textColor="green.700">HunterXHunter</Heading>
                      </Link>
                      <Text textColor="grey">
                        Yoshihiro Togashi
                      </Text>
                    </Stack>
                  </CardBody>
                </Card>
              </WrapItem>
              <WrapItem paddingLeft="30px">
                <Card maxW='200px'>
                  <CardBody bg="green.100">
                    <Image src="/dist/img/AOT.jpg" alt='Attack On Titan' />
                    <Stack mt='2' spacing='1'>
                      <Link href="https://www.crunchyroll.com/series/GR751KNZY/attack-on-titan" isExternal>
                        <Heading size="md" textColor="green.700">Attack On Titan</Heading>
                      </Link>
                      <Text textColor="grey">
                        Hajime Isayama
                      </Text>
                    </Stack>
                  </CardBody>
                </Card>
              </WrapItem>
              <WrapItem paddingLeft="30px">
                <Card maxW='200px'>
                  <CardBody bg="green.100">
                    <Image src="/dist/img/OnePunchMan.jpg" alt='One-Punch Man' />
                    <Stack mt='2' spacing='1'>
                      <Link href="https://www.crunchyroll.com/series/G63K98PZ6/one-punch-man" isExternal>
                        <Heading size="sm" textColor="green.700">One-Punch Man</Heading>
                      </Link>
                      <Text textColor="grey">
                        Yasuker Murata
                      </Text>
                    </Stack>
                  </CardBody>
                </Card>
              </WrapItem>
            </Wrap>
          </ListItem>
        </List>
      </GridItem>
    </Grid>
  )
}
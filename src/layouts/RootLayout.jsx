import { Outlet } from "react-router-dom"
import Socials from "../components/Socials"
import { Grid, GridItem } from "@chakra-ui/react"
import Navbar from "../components/Navbar"

export default function RootLayout() {
  return (
    <Grid
      templateRows="repeat(14, 1fr, 50px)"
      templateColumns="repeat(6, 1fr)"
    >
      <GridItem
        rowSpan={1}
        colSpan={6}
        bg="green.300"
        p='20px'
      >
        <Navbar />
      </GridItem>
      <GridItem 
        rowSpan={12} 
        colSpan={6}
      >
        <Outlet />
      </GridItem>
      <GridItem 
        rowSpan={1} 
        colSpan={6} 
        bg="grey.200"
        minHeight={"70px"}
      >
        <Socials />
      </GridItem>
    </Grid>
  )
}

import { Box, Container, Flex, Heading, Text, VStack, Grid, GridItem, Image, Link, Button } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">ElectroShop</Heading>
        <Flex>
          <Link href="#" p={2}>Home</Link>
          <Link href="#" p={2}>Products</Link>
          <Link href="#" p={2}>About Us</Link>
          <Link href="#" p={2}>Contact Us</Link>
        </Flex>
      </Flex>

      {/* Hero Section */}
      <Box bg="blue.700" color="white" p={10} textAlign="center" my={10}>
        <Heading as="h2" size="xl" mb={4}>Featured Product: Ultra HD 4K TV</Heading>
        <Text fontSize="lg" mb={6}>Experience the best quality and features with our latest Ultra HD 4K TV. Limited time offer!</Text>
        <Button colorScheme="teal" size="lg">Shop Now</Button>
      </Box>

      {/* Product Grid */}
      <Heading as="h3" size="lg" mb={6} textAlign="center">Our Products</Heading>
      <Grid templateColumns="repeat(auto-fit, minmax(240px, 1fr))" gap={6}>
        <GridItem>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/240" alt="Product 1" />
            <Box p={4}>
              <Heading as="h4" size="md">Product 1</Heading>
              <Text mt={2}>$299.99</Text>
            </Box>
          </Box>
        </GridItem>
        <GridItem>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/240" alt="Product 2" />
            <Box p={4}>
              <Heading as="h4" size="md">Product 2</Heading>
              <Text mt={2}>$199.99</Text>
            </Box>
          </Box>
        </GridItem>
        <GridItem>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/240" alt="Product 3" />
            <Box p={4}>
              <Heading as="h4" size="md">Product 3</Heading>
              <Text mt={2}>$99.99</Text>
            </Box>
          </Box>
        </GridItem>
        <GridItem>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/240" alt="Product 4" />
            <Box p={4}>
              <Heading as="h4" size="md">Product 4</Heading>
              <Text mt={2}>$49.99</Text>
            </Box>
          </Box>
        </GridItem>
      </Grid>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" p={4} mt={10}>
        <Flex justifyContent="space-between" alignItems="center">
          <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
          <Flex>
            <Link href="#" p={2}><FaFacebook /></Link>
            <Link href="#" p={2}><FaTwitter /></Link>
            <Link href="#" p={2}><FaInstagram /></Link>
          </Flex>
        </Flex>
        <Flex justifyContent="center" mt={2}>
          <Link href="#" p={2}>Terms of Service</Link>
          <Link href="#" p={2}>Privacy Policy</Link>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;
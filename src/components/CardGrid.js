import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import TotalCO2 from './TotalCO2';

const CardGrid = () => {
  return (
    <SimpleGrid
      spacing={4}
      templateColumns='repeat(auto-fill, minmax(200px, 1fr))'
    >
      <Card borderWidth={2} borderColor='blackAlpha.900'>
        <CardHeader display='grid' placeItems='center'>
          <TotalCO2 />
          <Heading size='md'>Network/API</Heading>
          <Text size='sm'>Subtitle</Text>
        </CardHeader>
        <CardBody></CardBody>
        <CardFooter>
          <Button>View here</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <Heading size='md'> Customer dashboard</Heading>
        </CardHeader>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
        <CardFooter>
          <Button>View here</Button>
        </CardFooter>
      </Card>
    </SimpleGrid>
  );
};

export default CardGrid;

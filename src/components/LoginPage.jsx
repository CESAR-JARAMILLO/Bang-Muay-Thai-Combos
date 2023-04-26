import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Card,
  CardHeader,
  CardBody,
  Center
} from '@chakra-ui/react';

const LoginPage = ({ setIsAuthenticated }) => {
  const [password, setPassword] = useState('');
  const history = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    if (password === 'systems') {
      localStorage.setItem('isAuthenticated', 'true');
      setIsAuthenticated(true);
      history('/');
    } else {
      alert('Incorrect password');
    }
  };

  return (
    <Flex bg="blue.700" height="100vh" alignItems="center" justifyContent="center">
      <Box w="md" py={8}>
        <Card borderWidth="1px" borderRadius="lg" overflow="hidden">
          <CardHeader bg="blue.600" borderBottomWidth="1px">
            <Heading size='md' color="white">STC Member Login</Heading>
          </CardHeader>
          <CardBody>
            <form onSubmit={handleLogin}>
              <FormControl>
                <FormLabel>Password:</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  mb="2"
                />
              </FormControl>
              <Button type="submit" colorScheme="blue" w="full">
                Login
              </Button>
            </form>
          </CardBody>
        </Card>
      </Box>
    </Flex>
  );
};

export default LoginPage;

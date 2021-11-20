import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Flex, Heading, Text, VStack, Link } from "@chakra-ui/layout";
import { Link as BaseLink, useNavigate } from "react-router-dom";
import { Container } from "@chakra-ui/react";
import { useState } from "react";
import { handleSignIn } from "../../utils/firebaseAuth";

const Login: React.FC = () => {
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  };

  const signInHandler = async () => {
    setIsLoading(true);
    try {
      await handleSignIn(emailValue, passwordValue);
      setIsLoading(false);
      navigate(-1);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Container
      mt={8}
      centerContent
      display="flex"
      alignItems="center"
      justifyContent="center"
      heigh="100vh"
    >
      <VStack maxH="100%">
        <Heading as="h2">Login</Heading>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Email"
            type="email"
            value={emailValue}
            onChange={handleEmailChange}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            placeholder="Password"
            type="password"
            value={passwordValue}
            onChange={handlePasswordChange}
          />
        </FormControl>
        <Text>
          Don't have an account?
          <Link as={BaseLink} to="/signup" color="blue" fontWeight="500" ml={4}>
            Sign up here
          </Link>
        </Text>
        <Button
          width="100%"
          bg="blue.400"
          mr={4}
          color="white"
          onClick={signInHandler}
          isLoading={isLoading}
          loadingText="Logging you in"
        >
          Log in
        </Button>
      </VStack>
    </Container>
  );
};

export default Login;

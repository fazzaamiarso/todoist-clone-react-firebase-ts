import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
  Text,
  Flex,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { AuthContext } from "../../store/AuthProvider";
import {
  handleSignIn,
  handleSignOut,
  handleSignUp,
} from "../../utils/firebaseAuth";

const AuthPage: React.FC = () => {
  const { user } = useContext(AuthContext);

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  };

  const signUpHandler = () => {
    handleSignUp(emailValue, passwordValue);
    alert("signedUp");
  };
  const signInHandler = () => {
    handleSignIn(emailValue, passwordValue);
  };
  const signOutHandler = () => {
    handleSignOut();
  };

  return (
    <Container maxW="100%" centerContent>
      <Heading as="h1">Auth Page</Heading>
      <VStack maxH="100%" spacing={4}>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Email"
            type="email"
            value={emailValue}
            onChange={handleEmailChange}
            required
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            placeholder="Password"
            type="password"
            value={passwordValue}
            onChange={handlePasswordChange}
            required
          />
        </FormControl>
        <Flex justifyContent="space-evenly">
          <Button
            width="100%"
            bg="blue.400"
            mr={4}
            color="white"
            onClick={signInHandler}
          >
            Log in
          </Button>
          <Button
            width="100%"
            bg="blue.400"
            color="white"
            onClick={signUpHandler}
          >
            Sign Up
          </Button>
        </Flex>
        <Button
          width="100%"
          bg="blue.400"
          color="white"
          onClick={signOutHandler}
        >
          Sign Out
        </Button>
      </VStack>
      <VStack>
        <Heading>User</Heading>
        <Text>{user!! && user.email}</Text>
        <Text>{user!! && user.uid}</Text>
      </VStack>
    </Container>
  );
};

export default AuthPage;

import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Heading, Text, VStack, Link } from "@chakra-ui/layout";
import { Link as BaseLink, useNavigate } from "react-router-dom";
import { Container } from "@chakra-ui/react";
import { useState } from "react";
import { handleSignUp } from "../../utils/firebaseAuth";
import { setDoc, doc } from "@firebase/firestore";
import { firestore } from "../../utils/firebase";
import PageHelmet from "../PageHelmet";

const Signup: React.FC = () => {
  let navigate = useNavigate();
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  };

  const signUpHandler = async () => {
    try {
      const newUser = await handleSignUp(emailValue, passwordValue);
      await setDoc(doc(firestore, "users", newUser.user.uid), {
        email: newUser.user.email,
        name: newUser.user.displayName,
        id: newUser.user.uid,
      });
      navigate("/app/inbox", { replace: true });
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <PageHelmet title="Todoist Clone Firebase" />
      <Container
        mt={8}
        centerContent
        display="flex"
        alignItems="center"
        justifyContent="center"
        heigh="100vh"
      >
        <VStack maxH="100%">
          <Heading as="h2">Signup</Heading>
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
            Already have an account?
            <Link
              as={BaseLink}
              to="/login"
              color="blue"
              fontWeight="500"
              ml={4}
            >
              Login here
            </Link>
          </Text>
          <Button
            width="100%"
            bg="blue.400"
            mr={4}
            color="white"
            onClick={signUpHandler}
          >
            Signup
          </Button>
        </VStack>
      </Container>
    </>
  );
};

export default Signup;

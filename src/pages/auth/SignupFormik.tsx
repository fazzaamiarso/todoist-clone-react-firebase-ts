import { Button } from "@chakra-ui/button";
import { Heading, Text, VStack, Link } from "@chakra-ui/layout";
import { Link as BaseLink, useNavigate } from "react-router-dom";
import { Container, useToast } from "@chakra-ui/react";
import { handleSignUp } from "../../utils/firebaseAuth";
import PageHelmet from "../PageHelmet";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputField from "../../Formik/InputField";
import { addNewUser } from "../../utils/firestore";

interface SignupValues {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

const validationSchema = Yup.object({
  password: Yup.string()
    .min(6, "Password at least 6 characters")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  firstName: Yup.string().max(15).required("Required"),
  lastName: Yup.string().max(15).required("Required"),
});

const SignupFormik: React.FC = () => {
  const toast = useToast();
  let navigate = useNavigate();

  const initialValues: SignupValues = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };
  const signUpHandler = async ({
    email,
    password,
    firstName,
    lastName,
  }: SignupValues) => {
    try {
      const newUser = await handleSignUp(email, password);
      if (!newUser.user.isAnonymous) {
        await addNewUser(newUser.user.uid, {
          email,
          firstName,
          lastName,
          id: newUser.user.uid,
        });
      }
      navigate("/app/inbox", { replace: true });
      toast({
        description: `Welcome aboard ${firstName}!`,
        status: "info",
        duration: 9000,
        isClosable: true,
      });
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <PageHelmet title="Todoist Clone Firebase" />
      <Container
        centerContent
        display="flex"
        alignItems="center"
        justifyContent="center"
        heigh="100vh"
      >
        <Heading as="h2">Signup</Heading>
        <Formik
          initialValues={initialValues}
          onSubmit={signUpHandler}
          validationSchema={validationSchema}
        >
          {(props) => (
            <VStack as={Form} spacing={4}>
              <InputField
                name="firstName"
                label="First Name"
                placeholder="John"
                type="text"
              />
              <InputField
                name="lastName"
                label="Last Name"
                placeholder="Doe"
                type="text"
              />
              <InputField
                name="email"
                label="Email"
                placeholder="example@email.com"
                type="email"
              />
              <InputField
                name="password"
                label="Password"
                placeholder=""
                type="password"
              />
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
              <VStack w="full" pt={4}>
                <Button
                  type="submit"
                  isLoading={props.isSubmitting}
                  isFullWidth
                  colorScheme="blue"
                >
                  Signup
                </Button>
              </VStack>
              <Text fontSize="xs" position="fixed" bottom="4">
                Todoist Clone by Fazza Amiarso{" "}
              </Text>
            </VStack>
          )}
        </Formik>
      </Container>
    </>
  );
};

export default SignupFormik;

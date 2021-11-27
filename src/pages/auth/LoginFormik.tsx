import { Button } from "@chakra-ui/button";
import { Flex, Heading, Text, VStack, Link } from "@chakra-ui/layout";
import { Link as BaseLink, useNavigate } from "react-router-dom";
import { Container } from "@chakra-ui/react";
import { handleSignAnonymously, handleSignIn } from "../../utils/firebaseAuth";
import PageHelmet from "../PageHelmet";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputField from "../../Formik/InputField";

interface MyFormValues {
  email: string;
  password: string;
}

const validationSchema = Yup.object({
  password: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
});

const LoginFormik: React.FC = () => {
  let navigate = useNavigate();

  const initialValues: MyFormValues = {
    email: "",
    password: "",
  };

  const signInHandler = async ({ email, password }: MyFormValues) => {
    try {
      await handleSignIn(email, password);
      navigate("/app/inbox", { replace: true });
    } catch (err) {
      alert(err);
    }
  };
  const anonymousHandler = async () => {
    try {
      await handleSignAnonymously();
      navigate("/app/inbox", { replace: true });
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
        <Heading as="h2">Login</Heading>
        <Formik
          initialValues={initialValues}
          onSubmit={signInHandler}
          validationSchema={validationSchema}
        >
          {(props) => (
            <VStack as={Form}>
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
              <Text pb={4}>
                Don't have an account?
                <Link
                  as={BaseLink}
                  to="/signup"
                  color="blue"
                  fontWeight="500"
                  ml={4}
                >
                  Sign up here
                </Link>
              </Text>
              <VStack w="full">
                <Button
                  type="submit"
                  isLoading={props.isSubmitting}
                  isFullWidth
                  colorScheme="blue"
                >
                  Log in
                </Button>
                <Text fontWeight="bold">OR</Text>
                <Button
                  isLoading={props.isSubmitting}
                  isFullWidth
                  onClick={anonymousHandler}
                  variant="outline"
                >
                  Log in Anonymously
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

export default LoginFormik;

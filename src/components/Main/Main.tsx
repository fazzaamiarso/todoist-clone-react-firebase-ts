import { Container, Heading } from "@chakra-ui/layout";
import { VStack } from "@chakra-ui/react";
import { ReactNode, useContext } from "react";
import { TodoContext } from "../../store/TodoProvider";

interface Props {
  children: ReactNode;
  projectName: string;
}

const Main: React.FC<Props> = ({ children, projectName }) => {
  return (
    <Container centerContent mx="auto" maxW="md" mt="3rem">
      <Heading as="h2">{projectName}</Heading>
      <VStack as="ul">{children}</VStack>
    </Container>
  );
};

export default Main;

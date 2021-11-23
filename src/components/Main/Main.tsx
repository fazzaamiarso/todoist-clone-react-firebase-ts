import { Container, Heading } from "@chakra-ui/layout";
import { VStack } from "@chakra-ui/react";
import { ReactNode, useContext } from "react";
import MainHeader from "./MainHeader";

interface Props {
  children: ReactNode;
  projectName: string;
  projectId: string;
}

const Main: React.FC<Props> = ({ children, projectName, projectId }) => {
  return (
    <Container centerContent mx="auto" maxW="md" mt="3rem">
      <MainHeader projectName={projectName} projectId={projectId} />
      <VStack as="ul">{children}</VStack>
    </Container>
  );
};

export default Main;

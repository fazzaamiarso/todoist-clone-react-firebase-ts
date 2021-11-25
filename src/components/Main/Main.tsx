import { Container, Heading } from "@chakra-ui/layout";
import { VStack } from "@chakra-ui/react";
import { ReactNode, useContext } from "react";
import TaskForm from "../Task/TaskForm";
import MainHeader from "./MainHeader";

interface Props {
  children: ReactNode;
  projectName: string;
  projectId: string;
}

const Main: React.FC<Props> = ({ children, projectName, projectId }) => {
  return (
    <Container maxW="3xl" w="85%" mt="5.5rem">
      <MainHeader projectName={projectName} projectId={projectId} />
      <VStack as="ul" alignItems="flex-start">
        {children}
      </VStack>
      <TaskForm />
    </Container>
  );
};

export default Main;

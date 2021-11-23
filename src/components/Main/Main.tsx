import { Container, Heading } from "@chakra-ui/layout";
import { VStack } from "@chakra-ui/react";
import { ReactNode, useContext } from "react";
import PopoverSchedule from "../Shared/Popover/PopoverSchedule";
import TaskForm from "../Task/TaskForm";
import MainHeader from "./MainHeader";

interface Props {
  children: ReactNode;
  projectName: string;
  projectId: string;
}

const Main: React.FC<Props> = ({ children, projectName, projectId }) => {
  return (
    <Container maxW="3xl" w="full" mt="3rem">
      <MainHeader projectName={projectName} projectId={projectId} />
      <VStack as="ul" alignItems="flex-start">
        {children}
      </VStack>
      <TaskForm />
    </Container>
  );
};

export default Main;

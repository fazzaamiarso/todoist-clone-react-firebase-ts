import { Container, Heading } from "@chakra-ui/layout";
import { useContext } from "react";
import { TodoContext } from "../../store/TodoProvider";

const Main: React.FC = () => {
  const { tasks } = useContext(TodoContext);
  return (
    <Container centerContent mx="auto" maxW="md" mt="3rem">
      <Heading as="h2">Welcome</Heading>
      <Container>
        {tasks.map((task) => {
          return <p>{task.taskName}</p>;
        })}
      </Container>
    </Container>
  );
};

export default Main;

import { Button } from "@chakra-ui/button";
import { Box, HStack } from "@chakra-ui/layout";
import { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { TodoContext } from "../../store/TodoProvider";

interface Props {
  id: string;
  projectName: string;
}

const ProjectItem: React.FC<Props> = ({ id, projectName }) => {
  const { tasks } = useContext(TodoContext);
  const tasksCount = tasks
    .filter((task) => task.projectId === id)
    .reduce((totalCount) => totalCount + 1, 0);
  return (
    <HStack as="li">
      <Button
        as={NavLink}
        to={`/projects/${id}`}
        variant="ghost"
        color="black"
        width="full"
        justifyContent="flex-start"
      >
        {projectName}
        <Box as="span" ml="auto">
          {tasksCount}
        </Box>
      </Button>
    </HStack>
  );
};

export default ProjectItem;

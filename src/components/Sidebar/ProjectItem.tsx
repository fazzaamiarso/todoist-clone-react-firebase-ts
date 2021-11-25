import { Button } from "@chakra-ui/button";
import { Box, HStack, Text } from "@chakra-ui/layout";
import { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { TodoContext } from "../../store/TodoProvider";

interface Props {
  id: string;
  projectName: string;
  projectColor: string;
}

const ProjectItem: React.FC<Props> = ({ id, projectName, projectColor }) => {
  const { tasks } = useContext(TodoContext);
  const tasksCount = tasks
    .filter((task) => task.projectId === id)
    .reduce((totalCount) => totalCount + 1, 0);
  return (
    <HStack as="li" mb={1}>
      <Button
        as={NavLink}
        to={`/projects/${id}`}
        variant="ghost"
        color="black"
        width="full"
        justifyContent="flex-start"
      >
        <Box w="10px" h="10px" bg={projectColor} borderRadius="50%" mr={4} />
        <Text isTruncated maxW="15ch">
          {projectName}
        </Text>
        <Box as="span" ml="auto" color="gray.400" fontSize="sm">
          {tasksCount}
        </Box>
      </Button>
    </HStack>
  );
};

export default ProjectItem;

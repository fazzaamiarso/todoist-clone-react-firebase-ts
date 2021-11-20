import { Button } from "@chakra-ui/button";
import { Box, HStack } from "@chakra-ui/layout";
import { NavLink, useParams } from "react-router-dom";

const ProjectItem: React.FC = () => {
  return (
    <HStack as="li">
      <Button
        as={NavLink}
        to={`/projects/something`}
        variant="ghost"
        color="black"
        width="full"
        justifyContent="flex-start"
      >
        Welcome
        <Box as="span" ml="auto">
          8
        </Box>
      </Button>
    </HStack>
  );
};

export default ProjectItem;

import { Link, VStack } from "@chakra-ui/layout";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import ProjectAccordion from "./ProjectAccordion";
import { Button } from "@chakra-ui/button";

interface Props {
  isDrawerOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC = () => {
  return (
    <Container>
      <VStack>
        <Button
          as={NavLink}
          to="/app/inbox"
          variant="ghost"
          width="full"
          justifyContent="flex-start"
        >
          Inbox
        </Button>
        <Button
          as={NavLink}
          to="/app/today"
          variant="ghost"
          width="full"
          justifyContent="flex-start"
        >
          Today
        </Button>
        <Button
          as={NavLink}
          to="/app/upcoming"
          variant="ghost"
          width="full"
          justifyContent="flex-start"
        >
          Upcoming
        </Button>
      </VStack>
      <VStack>
        <ProjectAccordion />
      </VStack>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 300px;
  background-color: rgba(0, 0, 0, 0.1);
  padding-top: 5rem;

  .active {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export default Sidebar;

import { Link, VStack } from "@chakra-ui/layout";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import ProjectAccordion from "./ProjectAccordion";
import { Button } from "@chakra-ui/button";

interface Props {
  isOpen: boolean;
}

const Sidebar: React.FC<Props> = ({ isOpen }) => {
  return (
    <Container isOpen={isOpen}>
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

const Container = styled.div<{ isOpen: boolean }>`
  height: 100vh;
  width: ${({ isOpen }) => (isOpen ? "300px" : "0")};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  background-color: rgba(0, 0, 0, 0.1);
  padding-top: 5rem;

  .active {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export default Sidebar;

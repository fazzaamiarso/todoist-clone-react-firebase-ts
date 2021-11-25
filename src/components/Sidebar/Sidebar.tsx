import { Link, VStack } from "@chakra-ui/layout";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import ProjectAccordion from "./ProjectAccordion";
import { Button } from "@chakra-ui/button";
import { FaCalendarAlt, FaCalendarDay, FaInbox } from "react-icons/fa";

interface Props {
  isOpen: boolean;
}

const Sidebar: React.FC<Props> = ({ isOpen }) => {
  return (
    <>
      {isOpen && <MobileOverlay />}
      <Container isOpen={isOpen}>
        <VStack pl={4}>
          <Button
            leftIcon={<FaInbox />}
            fontSize="sm"
            as={NavLink}
            to="/app/inbox"
            variant="ghost"
            width="full"
            justifyContent="flex-start"
          >
            Inbox
          </Button>
          <Button
            leftIcon={<FaCalendarDay />}
            fontSize="sm"
            as={NavLink}
            to="/app/today"
            variant="ghost"
            width="full"
            justifyContent="flex-start"
          >
            Today
          </Button>
          <Button
            leftIcon={<FaCalendarAlt />}
            fontSize="sm"
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
    </>
  );
};

const Container = styled.div<{ isOpen: boolean }>`
  height: 100vh;
  width: ${({ isOpen }) => (isOpen ? "300px" : "0")};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  background-color: #fafaf2;
  padding-top: 5rem;
  .active {
    background-color: rgba(0, 0, 0, 0.05);
  }

  @media screen and (max-width: 769px) {
    position: absolute;
    z-index: 10;
  }
`;

const MobileOverlay = styled.div`
  @media screen and (max-width: 769px) {
    position: fixed;
    inset: 0;
    z-index: 8;
    background-color: rgba(0, 0, 0, 0.25);
  }
`;

export default Sidebar;

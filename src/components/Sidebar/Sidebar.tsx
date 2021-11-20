import { Link, VStack } from "@chakra-ui/layout";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

interface Props {
  isDrawerOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC = () => {
  return (
    <Container>
      <VStack>
        <Link as={NavLink} to="/app/inbox">
          Inbox
        </Link>
        <Link as={NavLink} to="/app/today">
          Today
        </Link>
        <Link as={NavLink} to="/app/upcoming">
          Upcoming
        </Link>
      </VStack>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 300px;
  background-color: red;
  padding-top: 5rem;

  .active {
    color: white;
  }
`;

export default Sidebar;

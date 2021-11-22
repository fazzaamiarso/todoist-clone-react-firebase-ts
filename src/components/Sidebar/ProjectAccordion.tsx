import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { AuthContext } from "../../store/AuthProvider";
import ProjectModal from "../Shared/ProjectModal";
import ProjectItem from "./ProjectItem";

const ProjectAccordion: React.FC = () => {
  const { user } = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <ProjectModal isOpen={isOpen} onClose={onClose} />
      <Accordion allowToggle w="full">
        <AccordionItem>
          <h2>
            <AccordionButton as="div">
              <AccordionIcon />
              <Box flex="1" textAlign="left">
                Projects
              </Box>
              <IconButton
                icon={<FaPlus />}
                aria-label="plus"
                variant="ghost"
                color="gray.400"
                onClick={onOpen}
              />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} as="ul">
            <ProjectItem />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default ProjectAccordion;

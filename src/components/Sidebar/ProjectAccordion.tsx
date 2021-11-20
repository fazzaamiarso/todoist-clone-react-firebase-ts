import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  IconButton,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import ProjectItem from "./ProjectItem";

const ProjectAccordion: React.FC = () => {
  return (
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
            />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <ProjectItem />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default ProjectAccordion;

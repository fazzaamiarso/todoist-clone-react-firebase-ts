import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  IconButton,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { TodoContext } from "../../store/TodoProvider";
import ProjectModal from "../Project/ProjectModal";
import ProjectItem from "./ProjectItem";

const ProjectAccordion: React.FC = () => {
  const { projects } = useContext(TodoContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isNoProjects = projects.length === 0;

  return (
    <>
      <ProjectModal isOpen={isOpen} onClose={onClose} />
      <Accordion allowToggle w="full" mt={4}>
        <AccordionItem>
          <h2>
            <AccordionButton as="div">
              <AccordionIcon mr="2" />
              <Box flex="1" textAlign="left" fontWeight="bold">
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
            {isNoProjects ? (
              <Text size={"sm"}>You have no project</Text>
            ) : (
              projects.map((project) => {
                return (
                  <ProjectItem
                    key={project.id}
                    id={project.id}
                    projectName={project.name}
                    projectColor={project.color}
                  />
                );
              })
            )}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default ProjectAccordion;

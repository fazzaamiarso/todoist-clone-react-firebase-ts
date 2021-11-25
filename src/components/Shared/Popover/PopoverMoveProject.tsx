import { FaCalendar, FaEllipsisH, FaInbox } from "react-icons/fa";
import React, { useContext, useState } from "react";
import PopoverItem from "./PopoverItem";
import {
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  PopoverBody,
  useDisclosure,
} from "@chakra-ui/react";
import { TodoContext } from "../../../store/TodoProvider";

interface Props {
  projectId: string;
  onSelectProject: (projectId: string) => void;
}

const PopoverMoveProject: React.FC<Props> = ({
  projectId,
  onSelectProject,
}) => {
  const { projects } = useContext(TodoContext);
  const initialProject = projects.find((project) => project.id === projectId);
  const [selectedProjectName, setSelectedProjectName] = useState(
    initialProject?.name ?? ""
  );

  const {
    isOpen,
    onClose: onCloseSelect,
    onToggle: onToggleSelect,
  } = useDisclosure();

  const selectProjectHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    onCloseSelect();
    if (e.target instanceof HTMLButtonElement) {
      setSelectedProjectName(e.target.dataset.name ?? "");
      onSelectProject(e.target.dataset.id ?? "");
    }
  };

  return (
    <Popover isLazy closeOnBlur isOpen={isOpen} onClose={onCloseSelect}>
      <PopoverTrigger>
        <Button
          leftIcon={selectedProjectName === "" ? <FaInbox /> : undefined}
          variant="outline"
          size="sm"
          onClick={onToggleSelect}
        >
          {selectedProjectName === "" ? "Inbox" : selectedProjectName}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        w="max"
        _focus={{ border: "1px", borderColor: "gray.300" }}
        boxShadow="md"
      >
        <PopoverBody display="flex" flexDir="column">
          <Button
            leftIcon={<FaInbox />}
            data-id={""}
            data-name={"Inbox"}
            onClick={selectProjectHandler}
            variant="ghost"
            size="sm"
            justifyContent="flex-start"
          >
            Inbox
          </Button>
          {projects.map((project) => {
            return (
              <Button
                key={`${project.name}${Math.random()}`}
                data-id={project.id}
                data-name={project.name}
                onClick={selectProjectHandler}
                variant="ghost"
                size="sm"
                justifyContent="flex-start"
              >
                {project.name}
              </Button>
            );
          })}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default PopoverMoveProject;

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useParams } from "react-router";
import { TodoContext } from "../../store/TodoProvider";
import ActionButton from "../Shared/ActionButton";
import SelectColor from "./SelectColor";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onUpdateProject: (updatedField: { name: string; color: string }) => void;
  projectId: string;
  projectName: string;
}

const ProjectEdit: React.FC<Props> = ({
  isOpen,
  onClose,
  onUpdateProject,
  projectId,
}) => {
  const { projects } = useContext(TodoContext);
  const currentProject = projects.find((project) => project.id === projectId)!;

  const [projectInput, setProjectInput] = useState(currentProject.name);
  const [color, setColor] = useState(currentProject.color);

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProjectInput(e.target.value);
  };
  const colorChangeHandler = (selectedColor: string) => {
    setColor(selectedColor);
  };

  const updateProject = () => {
    if (
      projectInput === currentProject?.name &&
      color === currentProject?.color
    )
      return;
    onClose();
    onUpdateProject!({ name: projectInput, color });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit project</ModalHeader>

        <ModalBody>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              placeholder="Project name"
              value={projectInput}
              onChange={inputChangeHandler}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Color</FormLabel>
            <SelectColor onSelectColor={colorChangeHandler} color={color} />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <ActionButton btnType="secondary" text="Cancel" onClick={onClose} />
          <ActionButton
            btnType="primary"
            text="Save"
            onClick={updateProject}
            isDisabled={projectInput === ""}
          />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProjectEdit;

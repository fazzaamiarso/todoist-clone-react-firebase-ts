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
import { TodoContext } from "../../store/TodoProvider";
import { createNewProject } from "../../utils/firestore";
import ActionButton from "../Shared/ActionButton";
import SelectColor from "./SelectColor";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onUpdateProject?: (updatedField: { name: string; color: string }) => void;
  projectId?: string;
  isUpdateProject?: boolean;
}

const ProjectModal: React.FC<Props> = ({
  isOpen,
  onClose,
  projectId,
  isUpdateProject,
  onUpdateProject,
}) => {
  const { user, projects } = useContext(TodoContext);
  const currentProject = projects.find((project) => project.id === projectId);
  const isUpdating = isUpdateProject && currentProject!!;

  const [projectInput, setProjectInput] = useState(
    isUpdating ? currentProject.name : ""
  );
  const [color, setColor] = useState(
    isUpdating ? currentProject.color : "gray"
  );

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProjectInput(e.target.value);
  };
  const colorChangeHandler = (selectedColor: string) => {
    setColor(selectedColor);
  };

  const addNewProject = async () => {
    if (projectInput === "") return;

    onClose();
    setProjectInput("");
    try {
      await createNewProject({ name: projectInput, userId: user!.uid, color });
    } catch (error) {
      console.log(error);
    }
  };
  const updateProject = () => {
    if (projectInput === "" && color === currentProject?.color) return;
    onClose();
    onUpdateProject!({ name: projectInput, color });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Project</ModalHeader>

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
            text={isUpdating ? "Save" : "Add"}
            onClick={isUpdating ? updateProject : addNewProject}
            isDisabled={projectInput === ""}
          />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProjectModal;

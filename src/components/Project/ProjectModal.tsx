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
}

const ProjectModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const { user } = useContext(TodoContext);
  const [projectInput, setProjectInput] = useState("");
  const [color, setColor] = useState("gray");

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
            text="Add"
            onClick={addNewProject}
            isDisabled={projectInput === ""}
          />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProjectModal;

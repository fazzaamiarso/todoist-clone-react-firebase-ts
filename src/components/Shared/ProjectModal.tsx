import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Input,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { TodoContext } from "../../store/TodoProvider";
import { createNewProject } from "../../utils/firestore";
import ActionButton from "../Shared/ActionButton";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const { user } = useContext(TodoContext);
  const [projectInput, setProjectInput] = useState("");

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProjectInput(e.target.value);
  };

  const addNewProject = async () => {
    try {
      await createNewProject({ name: projectInput, userId: user!.uid });
    } catch (error) {
      console.log(error);
    }
    setProjectInput("");
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Project</ModalHeader>

        <ModalBody>
          <Input
            placeholder="Project name"
            value={projectInput}
            onChange={inputChangeHandler}
          />
        </ModalBody>

        <ModalFooter>
          <ActionButton btnType="secondary" text="Cancel" onClick={onClose} />
          <ActionButton btnType="primary" text="Add" onClick={addNewProject} />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProjectModal;

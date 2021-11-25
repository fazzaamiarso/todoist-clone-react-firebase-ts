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
  ButtonGroup,
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
        <ModalHeader>{"Add project"}</ModalHeader>

        <ModalBody>
          <FormControl mb={4}>
            <FormLabel>Name</FormLabel>
            <Input
              placeholder="Project name"
              value={projectInput}
              onChange={inputChangeHandler}
              size="sm"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Color</FormLabel>
            <SelectColor onSelectColor={colorChangeHandler} color={color} />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <ButtonGroup spacing={4} mt={4}>
            <ActionButton btnType="secondary" text="Cancel" onClick={onClose} />
            <ActionButton
              btnType="primary"
              text="Add"
              onClick={addNewProject}
              isDisabled={projectInput === ""}
            />
          </ButtonGroup>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProjectModal;

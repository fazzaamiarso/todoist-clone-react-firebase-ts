import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
} from "@chakra-ui/react";
import ActionButton from "../Shared/ActionButton";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const TaskModal: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Task</ModalHeader>

        <ModalBody>
          <Input placeholder="Task name" />
        </ModalBody>

        <ModalFooter>
          <ActionButton btnType="primary" text="Add task" onClick={() => {}} />
          <ActionButton btnType="secondary" text="Cancel" onClick={onClose} />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default TaskModal;

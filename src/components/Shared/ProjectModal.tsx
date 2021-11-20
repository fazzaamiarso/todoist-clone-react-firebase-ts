import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Input,
} from "@chakra-ui/react";
import ActionButton from "../Shared/ActionButton";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Project</ModalHeader>

        <ModalBody>
          <Input placeholder="Project name" />
        </ModalBody>

        <ModalFooter>
          <ActionButton btnType="secondary" text="Cancel" onClick={onClose} />
          <ActionButton btnType="primary" text="Add" onClick={() => {}} />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProjectModal;

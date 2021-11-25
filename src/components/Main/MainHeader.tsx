import { Heading, HStack, Spacer, useDisclosure } from "@chakra-ui/react";
import { updateDoc } from "@firebase/firestore";
import { deleteDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router";
import { firestore } from "../../utils/firebase";
import ProjectModal from "../Project/ProjectModal";
import PopoverProject from "../Shared/Popover/PopoverProject";
import EditableTitle from "./EditableTitle";

interface Props {
  projectName: string;
  projectId: string;
}

const MainHeader: React.FC<Props> = ({ projectName, projectId }) => {
  let navigate = useNavigate();
  const { isOpen: isUpdating, onOpen, onClose } = useDisclosure();

  const updateTitle = async (value: string) => {
    await updateDoc(doc(firestore, "projects", `${projectId}`), {
      name: value,
    });
  };
  const deleteProject = async () => {
    await deleteDoc(doc(firestore, "projects", `${projectId}`));
    navigate("/app/inbox");
  };
  const updateProject = async (updatedField: {
    name: string;
    color: string;
  }) => {
    onClose();
    await updateDoc(doc(firestore, "projects", `${projectId}`), updatedField);
  };

  return (
    <HStack as="header">
      {projectId !== "" && (
        <EditableTitle initialValue={projectName} onChangeTitle={updateTitle} />
      )}
      {projectId === "" && <Heading fontSize="2xl">{projectName}</Heading>}
      <Spacer />
      {projectId !== "" && (
        <PopoverProject onDeleteProject={deleteProject} onOpenEditor={onOpen} />
      )}
      <ProjectModal
        isUpdateProject
        onClose={onClose}
        isOpen={isUpdating}
        projectId={projectId}
        onUpdateProject={updateProject}
      />
    </HStack>
  );
};

export default MainHeader;

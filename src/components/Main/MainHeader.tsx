import { Heading, HStack, Spacer, useDisclosure } from "@chakra-ui/react";
import { updateDoc } from "@firebase/firestore";
import { deleteDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router";
import { firestore } from "../../utils/firebase";
import ProjectEdit from "../Project/ProjectEdit";
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
      {projectId === "" && (
        <Heading fontSize="xl" mb={4}>
          {projectName}
        </Heading>
      )}
      <Spacer />
      {projectId !== "" && (
        <PopoverProject onDeleteProject={deleteProject} onOpenEditor={onOpen} />
      )}
      {projectId !== "" && isUpdating && (
        <ProjectEdit
          isOpen={isUpdating}
          projectId={projectId}
          onClose={onClose}
          onUpdateProject={updateProject}
          projectName={projectName}
        />
      )}
    </HStack>
  );
};

export default MainHeader;

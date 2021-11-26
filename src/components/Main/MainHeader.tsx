import { Heading, HStack, Spacer, useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { deleteProject, updateProject } from "../../utils/firestore";
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
    await updateProject(projectId, {
      name: value,
    });
  };
  const deleteProjectHandler = async () => {
    navigate("/app/inbox");
    await deleteProject(projectId);
  };
  const updateProjectHandler = async (updatedField: {
    name: string;
    color: string;
  }) => {
    onClose();
    await updateProject(projectId, updatedField);
  };

  return (
    <HStack as="header">
      {projectId === "" ? (
        <Heading fontSize="xl" mb={4}>
          {projectName}
        </Heading>
      ) : (
        <EditableTitle initialValue={projectName} onChangeTitle={updateTitle} />
      )}

      <Spacer />
      {projectId !== "" && (
        <PopoverProject
          onDeleteProject={deleteProjectHandler}
          onOpenEditor={onOpen}
          projectName={projectName}
        />
      )}
      {projectId !== "" && isUpdating && (
        <ProjectEdit
          isOpen={isUpdating}
          projectName={projectName}
          projectId={projectId}
          onClose={onClose}
          onUpdateProject={updateProjectHandler}
        />
      )}
    </HStack>
  );
};

export default MainHeader;

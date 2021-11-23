import { HStack } from "@chakra-ui/react";
import { updateDoc } from "@firebase/firestore";
import { doc } from "firebase/firestore";
import { firestore } from "../../utils/firebase";
import EditableTitle from "./EditableTitle";

interface Props {
  projectName: string;
  projectId: string;
}

const MainHeader: React.FC<Props> = ({ projectName, projectId }) => {
  const updateTitle = async (value: string) => {
    await updateDoc(doc(firestore, "projects", `${projectId}`), {
      name: value,
    });
  };

  return (
    <HStack as="header">
      <EditableTitle initialValue={projectName} onChangeTitle={updateTitle} />
    </HStack>
  );
};

export default MainHeader;

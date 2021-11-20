import { useParams } from "react-router";
import Main from "../components/Main/Main";
import ActionButton from "../components/Shared/ActionButton";

const Project: React.FC = () => {
  const { projectId } = useParams();

  return (
    <>
      <Main></Main>
      <ActionButton btnType="primary" text="Add Task" />
      <ActionButton btnType="secondary" text="Cancel" />
      {projectId}
    </>
  );
};

export default Project;

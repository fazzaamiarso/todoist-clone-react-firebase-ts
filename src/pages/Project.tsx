import { useContext } from "react";
import { useParams } from "react-router";
import Main from "../components/Main/Main";
import { TodoContext } from "../store/TodoProvider";

const Project: React.FC = () => {
  const { projectId } = useParams();
  const { projects, tasks } = useContext(TodoContext);

  const projectName =
    projects.find((project) => project.id === projectId)?.name ?? "";

  return (
    <>
      <Main projectName={projectName}>
        {tasks.length === 0
          ? []
          : tasks
              .filter((task) => task.projectId === projectId)
              .map((tasks) => {
                return <p>{tasks.taskName}</p>;
              })}
      </Main>

      {projectId}
    </>
  );
};

export default Project;

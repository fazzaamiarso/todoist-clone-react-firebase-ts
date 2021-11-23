import { useContext } from "react";
import { useParams } from "react-router";
import Main from "../components/Main/Main";
import TaskItem from "../components/Task/TaskItem";
import { TodoContext } from "../store/TodoProvider";

const Project: React.FC = () => {
  const { projectId } = useParams();
  const { projects, tasks } = useContext(TodoContext);

  const projectName =
    projects.find((project) => project.id === projectId)?.name ?? "";
  const filteredTasks = tasks.filter((task) => task.projectId === projectId);
  return (
    <>
      <Main projectName={projectName} projectId={projectId ?? ""}>
        {filteredTasks.length === 0
          ? []
          : filteredTasks.map((task) => {
              return (
                <TaskItem
                  key={task.id}
                  id={task.id}
                  completed={task.completed}
                  taskName={task.taskName}
                />
              );
            })}
      </Main>
    </>
  );
};

export default Project;

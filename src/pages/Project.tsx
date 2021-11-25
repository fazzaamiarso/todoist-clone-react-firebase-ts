import { useContext } from "react";
import { useParams } from "react-router";
import Main from "../components/Main/Main";
import TaskItem from "../components/Task/TaskItem";
import { TodoContext } from "../store/TodoProvider";

const Project: React.FC = () => {
  const { projectId } = useParams();
  const { projects, tasks, showCompletedTasks } = useContext(TodoContext);

  const projectName =
    projects.find((project) => project.id === projectId)?.name ?? "";

  const sortCompletedToBottom = tasks.sort((task1, task2) =>
    task1.completed ? 1 : -1
  );
  const shouldShowCompleted = showCompletedTasks
    ? sortCompletedToBottom
    : sortCompletedToBottom.filter((task) => task.completed === false);

  const filteredTasks = shouldShowCompleted.filter(
    (task) => task.projectId === projectId
  );
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
                  due={task.due}
                />
              );
            })}
      </Main>
    </>
  );
};

export default Project;

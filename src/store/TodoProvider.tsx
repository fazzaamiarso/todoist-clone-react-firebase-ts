import React, { createContext, ReactNode, useEffect, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Project, projectsDbRef, Task, taskDbRef } from "../utils/firestore";
import { onSnapshot, query, where } from "firebase/firestore";

interface TodoInterface {
  user: User | null;
  projects: Project[];
  tasks: Task[];
  showCompletedTasks: boolean;
  toggleCompletedTasks: () => void;
}

export const TodoContext = createContext<TodoInterface>({
  user: null,
  projects: [],
  tasks: [],
  showCompletedTasks: false,
  toggleCompletedTasks: () => {},
});

const TodoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<TodoInterface["user"]>(null);
  const [allProjects, setAllProjects] = useState<TodoInterface["projects"]>([]);
  const [allTasks, setAllTasks] = useState<TodoInterface["tasks"]>([]);
  const [showCompletedTasks, setShowCompletedTasks] =
    useState<TodoInterface["showCompletedTasks"]>(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) return;
    const queriedTasks = query(taskDbRef, where("userId", "==", `${user.uid}`));
    const unsubscribe = onSnapshot(queriedTasks, (snapshot) => {
      const tasks = snapshot.docs.map((doc) => {
        if (!doc.exists) return;
        return { ...doc.data(), id: doc.id };
      });
      setAllTasks(tasks as Task[]);
    });
    return () => unsubscribe();
  }, [user]);

  useEffect(() => {
    if (!user) return;
    const queriedProjects = query(
      projectsDbRef,
      where("userId", "==", `${user.uid}`)
    );
    const unsubscribe = onSnapshot(queriedProjects, (snapshot) => {
      const projects = snapshot.docs.map((doc) => {
        if (!doc.exists) return;
        return { ...doc.data(), id: doc.id };
      });

      setAllProjects(projects.length === 0 ? [] : (projects as Project[]));
    });
    return () => unsubscribe();
  }, [user]);

  const handleToggleCompleted = () => {
    setShowCompletedTasks(!showCompletedTasks);
  };

  const contextValue = {
    user,
    tasks: allTasks,
    projects: allProjects,
    showCompletedTasks,
    toggleCompletedTasks: handleToggleCompleted,
  };

  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};

export default TodoProvider;

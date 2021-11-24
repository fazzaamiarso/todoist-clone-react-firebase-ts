import { addDoc, collection, serverTimestamp } from "@firebase/firestore";
import { firestore } from "./firebase";

export const taskDbRef = collection(firestore, "tasks");
export const projectsDbRef = collection(firestore, "projects");
export const usersDbRef = collection(firestore, "users");

export interface Project {
  name: string;
  userId: string;
  id: string;
}

export interface Task {
  taskName: string;
  id: string;
  projectId: string | null;
  userId: string;
  completed: boolean;
  due: string;
}

export const createNewTask = async ({
  taskName,
  projectId,
  userId,
  due,
}: Omit<Task, "completed" | "id">) => {
  await addDoc(taskDbRef, {
    taskName,
    projectId,
    userId,
    due,
    timestamp: serverTimestamp(),
  });
};

export const createNewProject = async ({
  name,
  userId,
}: Omit<Project, "id">) => {
  await addDoc(projectsDbRef, {
    name,
    userId,
    timestamp: serverTimestamp(),
  });
};

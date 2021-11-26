import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
} from "@firebase/firestore";
import { deleteDoc, doc } from "firebase/firestore";
import { firestore } from "./firebase";

export const taskDbRef = collection(firestore, "tasks");
export const projectsDbRef = collection(firestore, "projects");
export const usersDbRef = collection(firestore, "users");

export interface Project {
  name: string;
  userId: string;
  color: string;
  id: string;
}

export interface Task {
  taskName: string;
  id: string;
  projectId: string;
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
    completed: false,
    timestamp: serverTimestamp(),
  });
};
export const updateTask = <T>(
  taskId: string,
  updatedValue: Task extends T ? T : never
) => {
  return updateDoc(doc(firestore, "tasks", taskId), {
    ...updatedValue,
    timestamp: serverTimestamp(),
  });
};
export const deleteTask = (taskId: string) => {
  return deleteDoc(doc(firestore, "tasks", taskId));
};

export const createNewProject = async ({
  name,
  userId,
  color,
}: Omit<Project, "id">) => {
  await addDoc(projectsDbRef, {
    name,
    userId,
    color,
    timestamp: serverTimestamp(),
  });
};

export const updateProject = <T>(
  projectId: string,
  updatedValue: Project extends T ? T : never
) => {
  return updateDoc(doc(firestore, "projects", projectId), {
    ...updatedValue,
    timestamp: serverTimestamp(),
  });
};

export const deleteProject = (projectId: string) => {
  return deleteDoc(doc(firestore, "projects", projectId));
};

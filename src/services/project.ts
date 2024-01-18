import {IProject} from "@/types/types";

export const addNewProject = async (payload: IProject) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/projects`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  return await response.json();
}

export const allProject = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/projects`,
    {next: {revalidate: 0}}
  );
  return await response.json();
}

export const getProject = async (id: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/projects/${id}`
  );
  return await response.json();
};

export const editProject = async (id: string, updatedProject: IProject) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/projects/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedProject),
  });
  return await response.json();
};

export const deleteProject = async (id: string) => {
  return await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/projects/${id}`, {
    method: 'DELETE',
  });
}
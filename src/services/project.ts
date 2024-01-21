import {IProject} from "@/types/types";

export const addNewProject = async (payload: IProject) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/projects`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    return await response.json();
  } catch (e) {
    console.log(e)
  }
}

export const allProject = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/projects`,
      {next: {revalidate: 0}}
    );
    return await response.json();
  } catch (e) {
    console.log(e)
  }
}

export const getProject = async (id: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/projects/${id}`
    );
    return await response.json();
  } catch (e) {
    console.log(e)
  }
};

export const editProject = async (id: string, updatedProject: IProject) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/projects/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProject),
    });
    return await response.json();
  } catch (e) {
    console.log(e)
  }
};

export const deleteProject = async (id: string) => {
  try {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/projects/${id}`, {
      method: 'DELETE',
    });
  } catch (e) {
    console.log(e)
  }
}
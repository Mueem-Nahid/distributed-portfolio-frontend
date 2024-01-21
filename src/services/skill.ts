import {ISkill} from "@/types/types";

export const addNewSkill = async (payload: ISkill) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/skills`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  return await response.json();
}

export const allSkill = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/skills`,
      {next: {revalidate: 0}}
    );
    return await response.json();
  } catch (e) {
    console.log(e)
  }
}

export const getSkill = async (id: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/skills/${id}`
    );
    return await response.json();
  } catch (e) {
    console.log(e)
  }
};

export const editSkill = async (id: string, updatedSkill: ISkill) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/skills/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedSkill),
    });
    return await response.json();
  } catch (e) {
    console.log(e)
  }
};

export const deleteSkill = async (id: string) => {
  try {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/skills/${id}`, {
      method: 'DELETE',
    });
  } catch (e) {
    console.log(e)
  }
}
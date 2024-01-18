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
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/skills`,
    { next: { revalidate: 0 } }
  );
  return await response.json();
}

export const deleteSkill = async (id:string) => {
  return await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/skills/${id}`, {
    method: 'DELETE',
  });
}
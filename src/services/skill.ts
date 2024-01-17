import {ISkill} from "@/types/types";

export const addNewSkill = async (payload:ISkill) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/skills`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  return await response.json();
}
"use client";

import Link from "next/link";
import {ISkill} from "@/types/types";
import {deleteSkill} from "@/services/skill";
import React from "react";

type IProps = {
  skill: ISkill
}

const SkillRow = ({skill}: IProps) => {
  const handleDelete = async (id: string) => {
    await deleteSkill(id);
  }

  return (
    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
      <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {skill.name}
      </td>
      <td className="px-6 py-4">
        {skill.description}
      </td>
      <td className="px-6 py-4 flex gap-2">
        <Link href={`skill/${skill._id}`}
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
          <svg className="w-5 h-5 text-blue-800 dark:text-blue-800" aria-hidden="true"
               xmlns="http://www.w3.org/2000/svg"
               fill="currentColor" viewBox="0 0 20 18">
            <path
              d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z"/>
            <path
              d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z"/>
          </svg>
        </Link>
        <button className="text-red-600" onClick={() => handleDelete(skill._id!)}>
          <svg className="w-5 h-5 text-red-800 dark:text-red-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
               fill="currentColor" viewBox="0 0 18 20">
            <path
              d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z"/>
          </svg>
        </button>
      </td>
    </tr>
  )
};

export default SkillRow;
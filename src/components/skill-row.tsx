import Link from "next/link";
import {ISkill} from "@/types/types";

type IProps = {
  skill: ISkill
}

const SkillRow = ({skill}: IProps) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {skill.name}
      </th>
      <td className="px-6 py-4">
        {skill.description}
      </td>
      <td className="px-6 py-4">
        <Link href={`skill/${skill._id}`}
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</Link>
      </td>
    </tr>
  );
};

export default SkillRow;
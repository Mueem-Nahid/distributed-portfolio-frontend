import {allSkill} from "@/services/skill";
import {ISkill} from "@/types/types";
import SkillRow from "@/components/skill-row";

const SkillsPage = async () => {

  const response = await allSkill();
  let skills;

  if (response.success) {
    skills = response.data;
  }

  return (
    <div className="p-4 sm:ml-64">
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Skill name
            </th>
            <th scope="col" className="px-6 py-3">
              Skill description
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
          </thead>
          <tbody>
          {
            skills.length && skills.map((skill: ISkill) => (
              <SkillRow key={skill._id} skill={skill}/>
            ))
          }
          </tbody>
        </table>
        {
          !skills.length && <h1 className="text-xl text-center p-5">No skills available. Add some skills.</h1>
        }
      </div>
    </div>
  );
};

export default SkillsPage;
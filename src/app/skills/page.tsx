import Skills from "@/components/skills";
import {allSkill} from "@/services/skill";

const SkillPage = async () => {
  let skills;
  const response = await allSkill();

  if (response.success) {
    skills = response.data;
  }

  return (
    <section className="flex flex-col items-center px-4">
      <Skills skills={skills}/>
    </section>
  );
};

export default SkillPage;
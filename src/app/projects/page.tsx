import Projects from "@/components/projects";
import {allProject} from "@/services/project";

const ProjectPage = async () => {
  let projects;
  const response = await allProject();

  if (response.success) {
    projects = response.data;
  }

  return (
    <section className="flex flex-col items-center px-4">
      <Projects projects={projects}/>
    </section>
  );
};

export default ProjectPage;
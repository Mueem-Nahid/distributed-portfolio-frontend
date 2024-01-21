import {allProject} from "@/services/project";
import ProjectRow from "@/components/project-row";
import {IProject} from "@/types/types";

const ProjectsPage = async () => {
  let projects;
  try {
    const response = await allProject();

    if (response.success) {
      projects = response.data;
    }
  } catch (e) {
    console.log(e)
  }

  return (
    <div className="p-4 sm:ml-64">
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        {
          projects?.length && projects.length > 0 ?
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Project name
                </th>
                <th scope="col" className="px-6 py-3">
                  Project description
                </th>
                <th scope="col" className="px-6 py-3">
                  Project stack
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
              </thead>
              <tbody>
              {
                projects.map((project: IProject) => (
                  <ProjectRow key={project._id} project={project}/>
                ))
              }
              </tbody>
            </table> :
            <h3 className="text-xl text-center p-5">No projects available. Add some projects.</h3>
        }
      </div>
    </div>
  );
};

export default ProjectsPage;
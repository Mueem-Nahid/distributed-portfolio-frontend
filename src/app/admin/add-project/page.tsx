"use client";

import {useForm} from "react-hook-form";
import {IProject} from "@/types/types";
import {addNewProject} from "@/services/project";
import toast from "react-hot-toast";

const AddProjectPage = () => {
  const {register, handleSubmit, formState: {errors}} = useForm();

  const onSubmit = async (data: IProject) => {
    try {
      const res = await addNewProject(data);
      if (!res.success) {
        return toast.error(res.message);
      }
      toast.success(res.message);
      location.replace("/admin/projects")
    } catch (e) {
      console.log(e)
    }
  };

  return (
    <div>
      {/* @ts-ignore */}
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto">
        <div className="mb-5">
          <label htmlFor="project" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project
            name</label>
          <input type="text" id="name"
                 {...register("name", {required: true})}
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 required/>
        </div>
        <div className="mb-5">
          <label htmlFor="description"
                 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
          <input type="text" id="description"
                 {...register("description", {required: true})}
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 required/>
        </div>
        <button type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
        </button>
      </form>
    </div>
  );
};

export default AddProjectPage;
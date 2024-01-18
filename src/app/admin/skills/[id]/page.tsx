"use client"

import {useForm} from "react-hook-form";
import {ISkill} from "@/types/types";
import {addNewSkill, editSkill, getSkill} from "@/services/skill";
import toast from "react-hot-toast";
import {useEffect, useState} from "react";

const EditSkillPage = ({params}: { params: { id: string } }) => {
  const [skill, setSkill] = useState<ISkill>();

  const {register, handleSubmit, formState: {errors, isDirty}, setValue, getValues } = useForm<ISkill>();

  useEffect(() => {
    const fetchSkill = async () => {
      const response = await getSkill(params.id);
      if (response.success) {
        setSkill(response.data);
        setValue("name", response.data.name);
        setValue("description", response.data.description);
      }
    };
    fetchSkill();
  }, [params.id]);

  const onSubmit = async (data: ISkill) => {
    try {
      const formData = getValues(); // Retrieve current form values
      const isFormDirty = isDirty;
      if (isFormDirty) {
        const res = await editSkill(params.id, formData);
        if (!res.success) {
          return toast.error(res.message);
        }
        toast.success(res.message);
        location.replace("/admin/skills");
      }
    } catch (e) {
      console.log(e)
    }
  };

  return (
    <div>
      {/* @ts-ignore */}
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto">
        <div className="mb-5">
          <label htmlFor="skill" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Skill
            name</label>
          <input type="text" id="name"
                 {...register("name", {required: true})}
                 defaultValue={skill?.name || ''}
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 required/>
        </div>
        <div className="mb-5">
          <label htmlFor="description"
                 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
          <input type="text" id="description"
                 {...register("description", {required: true})}
                 defaultValue={skill?.description || ''}
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

export default EditSkillPage;
"use client";

import {useForm} from "react-hook-form";
import {IProject} from "@/types/types";
import {addNewProject} from "@/services/project";
import toast from "react-hot-toast";
import {useState} from "react";

const AddProjectPage = () => {
  const {register, handleSubmit, formState: {errors}, setValue, getValues} = useForm();
  const [stackItems, setStackItems] = useState<string[]>([]);
  const [val, setVal] = useState('');
  const [stackFieldError, setStackFieldError] = useState('');

  const onSubmit = async (data: IProject) => {
    try {
      const payload = {
        name: data.name,
        description: data.description,
        stack: stackItems
      }
      const res = await addNewProject(payload);
      if (!res.success) {
        return toast.error(res.message);
      }
      toast.success(res.message);
      location.replace("/admin/projects")
    } catch (e) {
      console.log(e)
    }
  };

  const addStackItemNew = () => {
    if (!val) {
      setStackFieldError('Add stack field');
      return;
    }
    setStackItems([...stackItems, val]);
    setVal('');
  }

  const removeItem = (index: number) => {
    const updatedStackItems = [...stackItems];
    updatedStackItems.splice(index, 1);
    setStackItems(updatedStackItems);
  }

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

        <div className="mb-5">
          <label htmlFor="stack"
                 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stack</label>

          {
            stackItems.map((item, index) => (
              <div key={index} className="flex gap-2 my-3">
                <p>{item}</p>
                <button type="button" onClick={() => removeItem(index)}>
                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                       xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M1 1h16"/>
                  </svg>
                </button>
              </div>
            ))
          }
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <input type="text" id="stack"
                     value={val}
                     onChange={(e) => {
                       setStackFieldError('');
                       setVal(e.target.value);
                     }}
                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <button type="button" onClick={addStackItemNew}>
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M9 1v16M1 9h16"/>
                </svg>
              </button>
            </div>
            {
              stackFieldError && <p className="py-2 text-red-600">{stackFieldError}</p>
            }
          </div>
        </div>

        <button type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
        </button>
      </form>
    </div>
  );
};

export default AddProjectPage;
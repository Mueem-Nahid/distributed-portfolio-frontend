"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import {IProject} from "@/types/types";

type IProps = {
  projects: IProject[]
}

export default function Projects({projects} : IProps) {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projects?.length && projects.length > 0 ?  projects.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        )) :
        <p>No projects</p>
        }
      </div>
    </section>
  );
}

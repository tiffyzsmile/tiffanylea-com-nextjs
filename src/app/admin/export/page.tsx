"use client";
import React, { useEffect, useState } from "react";
import { getProjects } from "@/data/getProjects";
import { getProjectsJsonOutput, getTagsJsonOutput } from "@/utils/exportJson";
import { Tag } from "@/API";
import { getTags } from "@/data/getTags";
import { LocalProjectType } from "@/types/project";

const Export = () => {
  const [projects, setProjects] = useState<LocalProjectType[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);

  useEffect(() => {
    getProjects({ authMode: "userPool" }).then((projects) => {
      if (projects) {
        const filteredProjects = projects.filter((project) => project.display);
        setProjects(filteredProjects);
      }
    });
  }, []);

  useEffect(() => {
    getTags({ authMode: "userPool" }).then((tags) => {
      const filteredTags = tags.filter((tag) => tag.display);
      setTags(filteredTags as Tag[]);
    });
  }, []);

  return (
    <div>
      <h1>Build JSON Source Files</h1>

      <p>The API was bad for performance so back to the JSON!</p>
      <p>Copy and paste the json below into respective files. </p>
      <p>Automate this when you have time...</p>
      <br />
      <br />
      <div>
        <h2>Projects</h2>
        <p>This goes to /tiffanylea-com-nextjs/src/data/projects.js</p>
        {projects.length > 0 && (
          <textarea
            defaultValue={JSON.stringify(getProjectsJsonOutput(projects))}
          />
        )}
      </div>
      <div>
        <h2>Tags</h2>
        <p>This goes to /tiffanylea-com-nextjs/src/data/tags.js</p>
        {tags.length > 0 && (
          <textarea defaultValue={JSON.stringify(getTagsJsonOutput(tags))} />
        )}
      </div>
    </div>
  );
};

export default Export;

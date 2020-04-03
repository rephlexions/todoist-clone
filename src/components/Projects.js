import React, { useState } from 'react'
import { useSelectedProjectValue, useProjectsValue } from '../context'

export const Projects = ({ activeValue = null }) => {
  const [active, setActive] = useState(activeValue)
  const { setSelectedProject } = useSelectedProjectValue()
  const { projects } = useProjectsValue()

  return (
    projects &&
    projects.map(project => (
      <li
        key={project.projectId}
        data-testid="project-action"
        data-doc-id={project.projectId}
        className={
          active === project.projectId
            ? 'active sidebar__project'
            : 'sidebar__project'
        }
        onKeyDown={() => {
          setActive(project.projectId)
          setSelectedProject(project.projectId)
        }}
        onClick={() => {
          setActive(project.projectId)
          setSelectedProject(project.projectId)
        }}
      >
        {('Project', JSON.stringify(project))}
      </li>
    ))
  )
}

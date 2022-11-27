import React from 'react'
import { useParams } from "react-router-dom"
import NavBar from '../Components/NavBar/NavBar'
import projectData from '../Data/ProjectData'

function Project(myProjectData) {
    const projectNameFromUrl = useParams().project

    const [displayProject] = projectData.filter(projectObj => 
        {
            return ( "/" + projectNameFromUrl) === (projectObj.linkName)
        })
  return (
    <>
    <NavBar />
    <div className='container'>
        <h1>{displayProject.projectName}</h1>
    </div>
    </>
  )
}

export default Project
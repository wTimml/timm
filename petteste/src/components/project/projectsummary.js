import React from 'react'

const ProjectSummary = ({project}) => {

	return(


		<div className='project-list section'>
			
			<div className='card zdepth-0 project-summary'>
				<div className='card-content grey-text text-darken-3'>
					<span className='card-title'>{project.title}</span>
					<p>Posted by Zurg</p>
					<p className='grey-text'>março 18 2020</p>
				</div>
			</div>
					

		</div>
		)
}

export default ProjectSummary;
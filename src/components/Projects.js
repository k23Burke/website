import React from 'react';
import { connect } from 'react-redux';


export const Projects = () => {
  return (
    <div className="section-container projects">
      <h2>Projects</h2>
      {this.props.projects.map( (project,i) =>
        <div key={i} className="section-container">
          <div className="header-flex">
            <h3>
              <a href={project.get('url')} target="_blank">{project.get('name')}</a>
            </h3>
            <h3>
              <small>{project.get('date')}</small>
            </h3>
          </div>
          <p className='divider-after'>
            {project.get('description')}
            {i == 1
              ?(<span>
                {' The project was featured on '}
                <a href='https://www.youtube.com/watch?v=pUChD3HGAK4' target='_blank'>Fox 5 News </a>
                {'and unfortunately is no longer live.'}
                </span>
              ): null
            }
          </p>
          <p>{project.get('myRole')}</p>
          <ul>
            {project.get('technologies').map( (tech,i) =>
              <li key={i}>{tech}</li>
            )}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Projects;



// function mapStateToProps(state){
//   return {
//     // prop: state.get(''),
//   }
// }


// export default connect(
//   mapStateToProps,
//   {
//     //action creators
//   }
// )(Projects)

// Projects.propTypes = {
//     projects: React.PropTypes.object,
// };
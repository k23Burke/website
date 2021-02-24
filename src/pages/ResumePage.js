import React from 'react'
import { connect } from 'react-redux'
import PureRenderMixin from 'react-addons-pure-render-mixin'
// import { history } from 'react-router-dom'

import Header from '../components/Header'
import Projects from '../components/Projects'
import Education from '../components/Education'
import Jobs from '../components/Jobs'


export class ResumePage extends React.Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  // componentWillMount() {
  //   if (!this.props.main.get('allowed')) { history.push('/') }
  // }

  componentDidMount () {
    document.title = 'Resume Page'
  }

  render () {
    return (
      <div>
        <Header/>
        <Jobs jobs={this.props.main.get('workExperience')} />
        <Projects projects={this.props.main.get('projects')} />
        <Education schools={this.props.main.get('education')} />
      </div>
    )
  }
}

function mapStateToProps (state, props) {
  return {
    main: state.main
  }
};

export default connect(
  mapStateToProps
)(ResumePage)


import React,{Component} from 'react'
import Projectsummary from './projectsummary'
class Projectlist extends Component {
    render(){
    return (
        <div>
       {this.props.projects && this.props.projects.map(project => {
            return(
           <Projectsummary project = {project} key={project.id}/>)
       })}
    </div>)}
}
export default Projectlist



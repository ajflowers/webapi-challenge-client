import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

const ProjectList = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:9000/api/projects")
            .then(res => {
                console.log(res.data);
                setProjects(res.data);
            })
            .catch(err=>console.log(err));

    },[])

    return(
        <div className="project-list">
            {projects.map(project =>
                <>
                <h3>{project.name}</h3>
                <p>{project.description} - <Link to={`/actions/${project.id}`}>see actions</Link> </p>                
                </>
            )}

        </div>
    )
}

export default ProjectList
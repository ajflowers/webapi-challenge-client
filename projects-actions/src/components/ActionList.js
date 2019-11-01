import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ActionList = props => {
    const [actions, setActions] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:9000/api/projects/${props.match.params.id}/actions`)
            .then(res => {
                console.log(res.data);
                setActions(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    },[])

    return(
        <div className="action-list">
            {actions.map(action => 
            <>
                <h3>{action.description}</h3>
                <p><b>Notes: </b> {action.notes}</p>
                <p><b>Completed: </b> {action.completed ? 'True' : 'False'}</p>
            </>)}
        </div>
    )
}

export default ActionList
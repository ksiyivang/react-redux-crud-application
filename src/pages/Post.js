
import React from 'react';
import { connect } from 'react-redux';
function Post(props) {
    return (
        <div>
            <h2>{props.post.title}</h2>
            <p>{props.post.message}</p>
            <button
                onClick={() => props.dispatch({
                    type: 'EDIT_POST',
                    id: props.post.id
                })}
            >edit</button>
            <button
                onClick={() => props.dispatch({
                    type: 'DELETE_POST',
                    id: props.post.id
                })}>delete</button>
        </div>
    );
}

export default connect()(Post);


import React from 'react';
import { connect } from 'react-redux';
import EditComponent from './EditComponent';
import Post from './Post';

function AllPost(props) {
    return (
        <div>
            <h1>All Post Redux</h1>
            {props.posts.map((post) =>
                <div>
                    {post.editing ? <EditComponent post={post} key={post.id} /> : <Post key={post.id} post={post} />}
                </div>

            )}
        </div>
    );
}

const mapStatetoProps = (state) => {
    return {
        posts: state
    }
}
export default connect(mapStatetoProps)(AllPost);

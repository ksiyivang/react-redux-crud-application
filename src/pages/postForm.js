
// import React, { useRef } from "react";
// import { connect } from "react-redux";

// function PostForm(props) {


//     const result = useRef();
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // input1.current.focus();
//         // input2.current.focus();
//         const title = result.getTitle.value;
//         const message = result.getMessage.value;
//         const data = {
//             id: new Date(),
//             title,
//             message
//         }

//         props.dispatch({
//             type: 'ADD_POST',
//             data
//         });

//         result.getTitle.Value = "";
//         result.getMessage.Value = "";
//         if (data) {
//             console.log(data)
//         }
//     }
//     return (
//         <div>
//             <h1>Create Post Redux</h1>
//             <form >
//                 <input type="text"
//                     // ref={input1}
//                     placeholder="Enter post title" required />
//                 <br /><br />
//                 <textarea cols="30" rows="5"
//                     // ref={input2}
//                     placeholder="Enter post" required />
//                 <br /><br />

//                 <button onClick={(e) => handleSubmit(e)}>Post</button>
//             </form>
//         </div>
//     );
// }

// export default connect()(PostForm);

import React, { Component } from 'react'
import { connect } from 'react-redux'

class PostForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const message = this.getMessage.value;
        const data = {
            id: new Date(),
            title,
            message,
            editing: false
        }
        this.props.dispatch({
            type: 'ADD_POST',
            data
        })
        this.getTitle.value = "";
        this.getMessage.value = "";
    }

    render() {
        return (
            <div className="post-container">
                <h1 className="post_heading">Create Post</h1>
                <form className="form" onSubmit={this.handleSubmit}>
                    <input type="text" ref={(input) => this.getTitle = input} placeholder="Enter post title" required />
                    <br /><br />
                    <textarea cols="30" ref={(input) => this.getMessage = input} rows="5" placeholder="Enter post" required />
                    <br /><br />
                    <button>Post</button>
                </form>
            </div>
        )
    }
}

export default connect()(PostForm)

import React from 'react';

export default function CreateComment(props){
    return <React.Fragment>
        <form className="comment-form" method="POST" data-id="post.id">
            <div className="flex align-center">
                <img className="comment-pic img-circle mr-2" src="https://picsum.photos/30/30" alt="Comment Avatar"/>
                <input type="hidden" value="post.id"/>
                <input className="form-control comment-box" type="text" placeholder="Write a comment..." name="comment" style={{"height":"30px"}} auto-complete="off"/>
            </div>
        </form>
    </React.Fragment>
}
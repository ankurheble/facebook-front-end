import React from 'react'

export default function Comment(props){
    return <React.Fragment>
        <li className="list-group-item no-border">
            <div className="flex">
                <img className="comment-pic img-circle" src="https://picsum.photos/30/30" alt="Comment Avatar"/>
                <div className="flex column ml-2">
                    <div className="flex mb-0 ml-2 comment-content">
                        <p className="mr-2 text-primary">user.name</p>
                        <p>{props.comment.content}</p>
                    </div>
                    <div className="ml-2 flex">
                        <span className="text-warning mr-2 text-sm" id={`likes-${props.comment.id}`}>{props.comment.likes} Likes </span>
                        <a className="text-sm no-underline like-btn" href="#" data-id={props.comment.id} data-resource-type="comment" > Like</a>
                        <p className="text-sm ml-2 text-muted">{props.comment.createdAt}</p>
                    </div>
                </div>
            </div>
        </li>
    </React.Fragment>;
}
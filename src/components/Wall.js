import React from 'react';
import CreatePost from './CreatePost';
import Post from './Post';

export default function Wall(props){
    return <React.Fragment>
        <CreatePost/>
        <div className="posts">
            <Post />
        </div>
    </React.Fragment>
}
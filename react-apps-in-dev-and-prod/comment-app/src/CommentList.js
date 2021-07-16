import React, {Component} from 'react';
import Comment from './Comment';

class CommentList extends React.Component {
    render(){
        return (
            <div className="commentList">
                <Comment key={1}/>
                <Comment key={2}/>
                <Comment key={3}/>
                <Comment key={4}/>
            </div>
        )
    }
}

export default CommentList
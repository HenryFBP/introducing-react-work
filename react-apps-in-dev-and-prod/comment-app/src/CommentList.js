import React, { Component } from 'react';
import Comment from './Comment';

class CommentList extends React.Component {
    render() {
        var idx = 0;
        return (
            <div className="commentList">
                {
                    this.props.messages.map(
                        (message) =>
                            <Comment
                                key={idx}
                                message={message}
                                index={idx++}
                                {...this.props} //spread operator, 
                            />
                    )
                }
            </div>
        )
    }
}

export default CommentList
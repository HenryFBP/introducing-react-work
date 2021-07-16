import React, { Component } from 'react';
import message from './message.jpg';
import trash from './trash.jpg';

class Comment extends React.Component {

    deleteComment = () => {
        this.props.deleteComment(this.props.index);
    }

    render() {
        return (

            <table className="comment">
                <tbody>
                    <tr>
                        <td className="photo">
                            <img src={message} />
                        </td>
                        <td className="message">
                            {this.props.message}
                        </td>
                        <td className="delete" onClick={this.deleteComment}>
                            <img src={trash} />
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Comment
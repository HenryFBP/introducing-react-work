import React from 'react';
import CommentList from './CommentList';
import CommentBox from './CommentBox';

class App extends React.Component {

  state = {
    messages: [
      'React seems really cool',
      'I love using components in React',
      'It makes development really easy',
      'It was hard to follow at first but now I love it'
    ]
  }

  render() {
    return (
      <div>
        <CommentBox />
        <CommentList messages={this.state.messages} />
      </div>
    );
  }
}

export default App;
import React from 'react';
import CommentList from './CommentList';
import CommentBox from './CommentBox';

class App extends React.Component {
  render(){
    return (
      <div>
        <CommentBox/>
        <CommentList/>
      </div>
    );
  }
}
  
export default App;
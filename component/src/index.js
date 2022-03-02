import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard> 
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
        </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author='Sam'
          comment='Nice Blog Post!'
          timeAgo='Today at 4:44PM'
          img_avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author='Alex'
          comment='Very Insightful.'
          timeAgo='Today at 5:55PM'
          img_avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author='Jane'
          comment='I learned so much!'
          timeAgo='Today at 6:44PM'
          img_avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
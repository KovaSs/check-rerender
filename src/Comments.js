import React       from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import withCounter from './withCounter';

function CommentsList({ comments }) {
  return (
    <ul>
      <h2>Комментарии в юзере</h2>
      {comments.map(el => <div key={el.id}>{el.title}</div>)}
    </ul>
  );
}

function mapStateToProps(store) {
  return {
    comments: store.user.comments
  };
}

export default compose(withCounter('CommentsList'), connect(mapStateToProps))(CommentsList);

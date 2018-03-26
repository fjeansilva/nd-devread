import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faComments from '@fortawesome/fontawesome-free-solid/faComments';
import UserInfo from '../../../../components/UserInfo';
import Description from '../Description';

const Info = ({ date, username, totalComments, totalScore, description }) => (
  <div>
    <p className="post__info">
      Submited 2 hours ago by <UserInfo username="Jean Silva" /> - <FontAwesomeIcon icon={faComments} /> {totalComments} comment(s)
    </p>
    <p>
      <b>{totalScore} score(s)</b>
    </p>
    <Description text={description} />
  </div>
);

export default Info;
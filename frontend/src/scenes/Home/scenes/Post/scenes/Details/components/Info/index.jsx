import React from 'react';
import PropTypes from 'prop-types';
import TimeAgo from 'timeago-react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faComments from '@fortawesome/fontawesome-free-solid/faComments';
import UserInfo from '../../../../components/UserInfo';
import Description from '../Description';

const Info = ({
  date,
  username,
  totalComments,
  totalScore,
  description,
}) => (
  <div>
    <p className="post__info">
      Submited <TimeAgo datetime={date} live /> by <UserInfo username={username} /> - <FontAwesomeIcon icon={faComments} /> {totalComments} comment(s)
    </p>
    <p>
      <b>{totalScore} score(s)</b>
    </p>
    <Description text={description} />
  </div>
);

Info.propTypes = {
  date: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
  totalScore: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default Info;

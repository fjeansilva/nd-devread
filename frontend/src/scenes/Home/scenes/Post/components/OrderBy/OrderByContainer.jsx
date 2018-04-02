import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import OrderBy from './index';
import setOrderBy from './actions';

const mapStateToProps = state => ({
  order: state.Home.scenes.Post.postsOrderBy,
});

const mapDispatchToProps = dispatch => ({
  setOrderBy: value => dispatch(setOrderBy(value)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OrderBy));

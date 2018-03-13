import React from 'react';
import { connect } from 'react-redux';
import { filterAll, filterCompleted, filterNotCompleted } from '../actions';
import './index.css';

class Filter extends React.Component {

  render() {
    const { dispatch } = this.props;
    return (
      <div className="filter-container">
        <div onClick={() => {
          dispatch(filterAll());
        }}>
          全部
        </div>
        <div onClick={() => {
          dispatch(filterCompleted());
        }}>
          已完成
        </div>
        <div onClick={() => {
          dispatch(filterNotCompleted());
        }}>
          未完成
        </div>
        
      </div>
    );
  }
}

export default connect()(Filter);
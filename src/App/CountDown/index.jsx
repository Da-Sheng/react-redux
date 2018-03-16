import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CountDown extends Component {

  static propTypes = {
    initCount: PropTypes.number.isRequired,
    children: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      count: props.initCount
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      const { count } = this.state;
      const newCount = count - 1;
      if (newCount >= 0) {
        this.setState({ count: newCount });
      } else {
        clearInterval(this.timer);
      }
    }, 1000);
  }

  componentWillUnmount() {
    if (!!this.timer){
      clearInterval(this.timer);
    }
  }

  render() {
    return (this.props.children(this.state.count));
  }
}

export default CountDown;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TextScramble.scss';

class TextScramble extends Component {
  static displayName = 'TextScramble';

  // static propTypes = {
  //   img: PropTypes.string
  // };

  static defaultProps = {};



  render() {
    return (
        <div class="container">
            <div class="wording">
                <span class="a">A</span>
                <span class="text"></span>
            </div>
            <div class="wording">
                <span class="i">I</span>
                <span class="text-second"></span>
            </div>
        </div>
    );
  }
}



export default TextScramble;
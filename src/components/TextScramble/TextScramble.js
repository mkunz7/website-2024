import React, { Component } from 'react';
import TextScramble, { ScrambleTexts } from '@twistezo/react-text-scramble'
import './TextScramble.scss';

class Scramble extends Component {
  static displayName = 'Scramble';
  static defaultProps = {};

  render() {
    const a_scrambleTexts = [
      "ctual,",
      "dversary",
      "mplify",
      "dvanced",
      "ugmented",
      "ndroid",
      "narchy",
      "dam"
    ]

    const i_scrambleTexts = [
      "ntelligence,",
      "nclusion",
      "nfiltration",
      "nformation",
      "nception",
      "nitiative",
      "ntrusion",
      "s Great"
    ]

    return (
        <div class="container">
            <div class="wording">
                <span class="a-heading">A</span>
                <span class="text">        
                  <TextScramble
                    texts={a_scrambleTexts}
                    letterSpeed={5}
                    nextLetterSpeed={150}
                    pauseTime={2000}
                  />
                </span>
            </div>
            <div class="wording">
                <span class="i-heading">I</span>
                <span class="text-second">        
                  <TextScramble
                    texts={i_scrambleTexts}
                    letterSpeed={5}
                    nextLetterSpeed={120}
                    pauseTime={2000}
                  />
                </span>
            </div>
        </div>
    );
  }
}



export default Scramble;
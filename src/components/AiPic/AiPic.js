import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AiPic.scss';

import config from 'aiPicsConfig';

class AiPic extends Component {
  static displayName = 'AiPic';
  static propTypes = {
    pic: PropTypes.string.isRequired
  }
//   static defaultProps = {};

  getPic() {
    // Grab image or placeholder
    const img = `${config[parseInt(this.props.pic)-1].image}`;
    const imgSrc =  img ? require(`../../static/images/ai-pics/${img}`) : 'https://via.placeholder.com/150';
    return imgSrc;
  }

  render() {
    const imgSrc = this.getPic();

    return (
      <div className=''>
          <div className='container'>
              <div className='venue-section'>
                  <img src={imgSrc} className="mad-scientist" alt="mad scientist in lab"/>
                  <i>"{config[parseInt(this.props.pic)-1].prompt}"</i> - generated using {config[parseInt(this.props.pic)-1].engine}
              </div>
          </div>
      </div>
    );
  }
}



export default AiPic;
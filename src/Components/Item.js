import React, {Component} from 'react';
import posed from 'react-pose';

import { ReactComponent as Deco } from '../assets/card-deco2.svg';

const ItemInner = posed.div({
  hoverable: true,
  init: {
    boxShadow: '0px 0px 0px #fff',
    color: '#000'
  },
  hover: {
    boxShadow: ({dynamicShadow}) => dynamicShadow,
    color: ({dynamicColor}) => dynamicColor
  },
  open: {
    opacity: 1,
    scale: 1,
    transition: {
      opacity: { ease: 'easeOut', duration: 300 },
      scale: { type: 'spring', duration: 500 }
    }
  },
  closed: {
    scale: 0.7,
    opacity: 0
  }
})

class Item extends Component {
  render() {
    return (
      <ItemInner
      poseKey={this.props.name}
      className={`item-card ${this.props.cat}-card`}
      dynamicShadow={this.props.dynamicShadow}
      dynamicColor={this.props.dynamicColor}
      >
        <div className="item-header">
          <h5 className="item-name">{this.props.name.replace(/[-]/g, ' ').toUpperCase()}</h5>
          <h6 className={`item-volume ${this.props.cat}-volume`}>{this.props.volume}</h6>
          <hr className={`item-filler ${this.props.cat}-filler`}/>
          <h6 className="item-price">{this.props.price}</h6>
        </div>
        <div className={`item-desc ${this.props.cat}-desc`}>
          <p>{this.props.ingredients===null ? null : this.props.ingredients.join(', ')}</p>
        </div>
        <Deco className={`item-deco ${this.props.cat}-deco`}/>
      </ItemInner>
    )
  }
}

export default Item;

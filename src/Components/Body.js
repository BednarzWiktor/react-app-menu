import React, {Component} from 'react';

import BodyCategory from './BodyCategory';
import Background from '../assets/bg1.jpg'

class Body extends Component {
  state = {
    width: null
  }

  updateDimensions = () => {
    const w = window,
          d = document,
          documentElement = d.documentElement,
          body = d.getElementsByTagName('body')[0],
          width = w.innerWidth || documentElement.clientWidth || body.clientWidth;

    this.setState({width});
  }

  componentWillMount() {
    this.updateDimensions();
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  wideStyle = {
    width: '100%',
    height: '100%',
    backgroundImage: `url(${Background})`
  }

  narrowStyle = {
    width: '100%',
    height: '100%',
    backgroundImage: ''
  }

  render() {
    const cat = this.props.selected[0];
    const subCat = this.props.selected[1];
    return (
      <BodyCategory
        cat={cat}
        subCategories={this.props.subCategories}
        subCat={subCat}
        menuData={this.props.menuData}
        width={this.state.width}
        wideStyle={this.wideStyle}
        narrowStyle={this.narrowStyle}
      />
    );
  }
}

export default Body;

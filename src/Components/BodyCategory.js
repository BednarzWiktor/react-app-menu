import React, {Component} from 'react';
import posed from 'react-pose';

import Item from './Item';

import { ReactComponent as RightSide } from '../assets/card-side-left.svg';
import { ReactComponent as LeftSide } from '../assets/card-side-right.svg';
import { ReactComponent as RightSide2 } from '../assets/card-side-right2.svg';
import { ReactComponent as LeftSide2 } from '../assets/card-side-left2.svg';

const PosedSide = posed.div({
  open: {
    scale: 1,
    opacity: 1,
    transition: {
      scale: {
        type: 'spring',
        duration: 400
      },
      opacity: {
        duration: 400
      }
    }
  },
  closed: {
    scale: 0.5,
    opacity: 0
  }
})

const CategoryWrapper = posed.div({
  open: {
    staggerChildren: 50
  }
})

const OuterTopDeco = posed.object({
  open: {
    opacity: 1,
    transition: {
      opacity: { ease:'anticipate', duration: 1000 },
    }
  },
  closed: {
    opacity: 0,
  }
})

const CategoryGraphic = posed.object({
  open: {
    opacity: .3,
    x: 0,
    transition: {
      opacity: { delay: 300, duration: 1000 },
      x: { type: 'spring', delay: 300, duration: 1000 }
    }
  },
  closed: {
    opacity: 0,
    x: '-100px'
  }
})

const graphics = {
  cocktails: [
    require('../assets/cocktail1.svg'),
    require('../assets/cocktail2.svg'),
    require('../assets/cocktail3.svg'),
    require('../assets/cocktail4.svg')
  ],
  piwo: [
    require('../assets/piwo1.svg'),
    require('../assets/piwo2.svg')
  ],
  wino: [
    require('../assets/wino1.svg'),
    require('../assets/wino1.svg')
  ],
  whiskey: [
    null,
    null,
    null,
    null
  ],
  alkohole: [
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ]
}

const addGraphics = {
  piwo: [
    require('../assets/piwo1a.svg'),
    require('../assets/piwo2a.svg')
  ],
  wino: [
    require('../assets/wino1a.svg'),
    require('../assets/wino1a.svg')
  ]
}

class BodyCategory extends Component {
  render() {
    const setGraphics = this.props.subCategories(this.props.menuData[this.props.cat]).indexOf(this.props.subCat)
    return (
    <div
      className="menu-body-category"
      style={this.props.width<576 ? this.props.narrowStyle : this.props.wideStyle}
    >
      <h4 className="menu-body-title"><strong>{this.props.subCat.replace(/[-]/g, ' ').toUpperCase()}</strong></h4>

      <CategoryWrapper
        pose="open"
        initialPose="closed"
        key={this.props.subCat}
        className={`menu-body-content ${this.props.cat}-body-content`}
      >

        {
          this.props.cat==='whiskey'||this.props.cat==='alkohole' ?
            <OuterTopDeco
              className={`top-deco`}
              data={require('../assets/top-deco.svg')}
            /> : null

        }

        {this.props.menuData[this.props.cat][this.props.subCat].map((item, i) =>{
          if (this.props.cat==='cocktails') {
            return (
              <Item
                key={`${this.props.cat}${i}`}
                cat={this.props.cat}
                width={this.props.width}
                name={item.name}
                price={item.price}
                volume={item.volume}
                ingredients={item.ingredients}
                dynamicShadow={this.props.width<576 ? '0px 0px 0px #fff' : '10px 10px 20px #bfbfbf'}
                dynamicColor={this.props.width<576 ? '#000' : '#BD8951'}
              />
            )
          } else {
            return (
              <Item
                key={`${this.props.cat}${i}`}
                cat={this.props.cat}
                width={this.props.width}
                name={item.name}
                price={item.price}
                volume={item.volume}
                ingredients={item.ingredients}
                dynamicShadow={this.props.width<576 ? '0px 0px 0px #fff' : '0px 0px 0px #fff'}
                dynamicColor={this.props.width<576 ? '#000' : '#BD8951'}
              />
            )
          }
        })}

        <CategoryGraphic
          className={`item-graphic ${this.props.cat}-${this.props.subCat.replace('-&', '')}-graphic`}
          data={graphics[this.props.cat][setGraphics]}
          key={this.props.cat+this.props.subCat}
        />

        {
          this.props.cat==="wino"||this.props.cat==="piwo" ?
          <CategoryGraphic
            className={`item-graphic ${this.props.cat}-${this.props.subCat.replace('-&', '')}-graphic-add`}
            data={addGraphics[this.props.cat][setGraphics]}
            key={this.props.cat+this.props.subCat+'1'}
          /> : null
        }


        <PosedSide
          className={this.props.subCat==='butelka'||this.props.subCat==='czerwone-&-białe' ? 'deco-left-side' : 'deco-sides'}
          key={this.props.cat+this.props.cat}>
          <LeftSide/>
        </PosedSide>

        <PosedSide
          className={this.props.subCat==='butelka'||this.props.subCat==='czerwone-&-białe' ? 'deco-right-side' : 'deco-sides'}
          key={this.props.subCat+this.props.subCat}
        >
          <RightSide />
        </PosedSide>

        <PosedSide
          className={this.props.subCat==='lane'||this.props.subCat==='champagne' ? 'deco-left-side deco-left-side-fix' : 'deco-sides'}
          key={this.props.cat+this.props.cat+'1'}>
          <LeftSide2/>
        </PosedSide>

        <PosedSide
          className={this.props.subCat==='lane'||this.props.subCat==='champagne' ? 'deco-right-side deco-right-side-fix' : 'deco-sides'}
          key={this.props.subCat+this.props.subCat+'1'}
        >
          <RightSide2 />
        </PosedSide>

      </CategoryWrapper>

    </div>
  )}
}

export default BodyCategory;

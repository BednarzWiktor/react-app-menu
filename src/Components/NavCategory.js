import React, {Component} from 'react';
import posed from 'react-pose';

/*
*   Posed elements - animated UI
*/
const TitleContainer = posed.div({
  hoverable: true,
  hover: {
    backgroundColor: '#BD8951',
    transition: {
      type: 'tween',
      duration: 200,
      ease: 'linear'
    }
  },
  hoverEnd: {
    transition: {
      duration: 100
    }
  },
  open: {color: '#000', backgroundColor: '#D5D5D5', afterChildren: true},
  closed: {color: '#fff', backgroundColor: '#BD8951'},
})

const SubCats = posed.ul({
  open: { height: '0'},
  closed: { height: 'auto', color: '#fff', backgroundColor: '#BD8951', staggerChildren: 100 }
});

const SubCat = posed.li({
  open: { opacity: 0 },
  closed: { opacity: 1 }
});

const Decor = posed.div({
  empty: {opacity: 0},
  selected: {opacity: 1}
})

/*
*   Component
*/
class NavCategory extends Component {

  // Toggle header state to determine selected category of NavCategory component
  toggle = () => {
    if(this.props.name===this.props.active) {
      this.props.setActive(null);
    } else{
      this.props.setActive(this.props.name);
    }
  }

  // Toggle css class on selected object
  selectedIndicator = (cat) => {
    const classes = 'title-container';
    if(this.props.selected[0]===cat) {
      return(classes+' menu-selected');
    } else {
      return(classes);
    }
  }

  // Reset the selection UI when clicking outside the activated elementt
  handleClick = (cat) => {
    if(cat!==this.props.active) {
      document.addEventListener('mousedown', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('mousedown', this.handleOutsideClick, false);
    }
    this.toggle();
  }

  handleOutsideClick = (e) => {
   // ignore clicks on the component itself
   if (this.node.contains(e.target)) {
     return;
   }
   this.toggle();
   document.removeEventListener('mousedown', this.handleOutsideClick, false);
 }

 // Reset the app UI after selection
 reset = (cat, subCat) => {
   document.removeEventListener('mousedown', this.handleOutsideClick, false);
   this.props.setSelected(this.props.name, subCat);
   this.toggle();
 }


  render() {
    return (
      <div className="menu-app-nav-cat">
        <TitleContainer ref={node => this.node = node} pose={this.props.name===this.props.active ? 'closed' : 'open'} className={this.selectedIndicator(this.props.name)} >
          <div className="category-container" onClick={() => this.handleClick(this.props.name)}>
            <h5 className="category-title">
              <strong>{this.props.name.toUpperCase()}</strong>
            </h5>
          </div>
          <SubCats pose={this.props.name===this.props.active ? 'closed' : 'open'}>
            {/* Loop through APP Component data and create elements based on response from getter func */}
            {this.props.subCategories(this.props.menuData[this.props.name]).map((subCat, i) =>
              <SubCat key={i} onClick={() => this.reset(this.props.name, subCat)}>
                {subCat.replace(/[-]/g, ' ').toLowerCase()}
              </SubCat>
            )}
          </SubCats>
          <Decor pose={this.props.name===this.props.selected[0] ? 'selected' : 'empty'} className="selection-decor">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="10px" viewBox="0 0 169.21 55.872">
              <path d="M19.084 67.08h168.963l-42.24 73.163-42.242 73.163-42.24-73.163z" transform="matrix(1 0 0 .38119 -18.96 -25.523)" fill="#bd8951" stroke="#ffe" strokeWidth=".247" strokeLinejoin="round"/>
            </svg>
          </Decor>
        </TitleContainer>

      </div>
    );
  }
}

export default NavCategory;

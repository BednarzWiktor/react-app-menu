import React, {Component} from 'react';

import Header from './Header';
import Body from './Body';

const menu = require('./menu.json');

const defaultSelection = () => {
  let result = [];
  for(let cat in menu) {
    result.push(cat)
    for(let subCat in menu[cat]) {
      result.push(subCat)
      return(result);
    }
  }
};

class App extends Component {
  state = {
    data: menu,
    selected: defaultSelection()
  }

  // Create array of categories from database
  getCategories = () => {
    const categories = [];
    for(let key in this.state.data) {
      categories.push(key);
    }
    return categories;
  }

  // Create array of sub-categories from database based on provided category
  getSubCategories = (category) => {
    const subCategories = [];
    for(let sub in category) {
      subCategories.push(sub);
    }
    return subCategories;
  }

  // Update selected state based on provided category and sub-category
  setSelected = (cat, subCat) => {
    this.setState({selected: [cat, subCat]});
  }

  render() {
    return (
      <div className="menu-wrapper">
        <Header
          menuData={this.state.data}
          categories={this.getCategories()}
          subCategories={this.getSubCategories}
          selected={this.state.selected}
          setSelected={this.setSelected}
        />
        <Body
          subCategories={this.getSubCategories}
          menuData={this.state.data}
          selected={this.state.selected}
        />
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';

import NavCategory from './NavCategory';

class Navbar extends Component {
  state = {
    active: null
  }

  // Set active state to selected category name
  setActive = (name) => {
    this.setState({ active: name });
  }

  render() {
    return (
      <nav className="menu-app-nav">
        {this.props.categories.map((category, i) =>
          <NavCategory
            active={this.state.active}
            setActive={this.setActive}
            selected={this.props.selected}
            setSelected={this.props.setSelected}
            menuData={this.props.menuData}
            subCategories={this.props.subCategories}
            name={category}
            key={i}
            id={i}
          />
        )}
      </nav>
    );
  }
}

export default Navbar;

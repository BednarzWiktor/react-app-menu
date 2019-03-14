import React, {Component} from 'react';

import Navbar from './Navbar';

class Header extends Component {
  render() {
    return (
      <header>
        <aside>
          <h6>CO NAS DEFINIUJE</h6>
        </aside>

        <main className="menu-selection">
          <h1 className="test">Menu</h1>
          <Navbar
            menuData={this.props.menuData}
            categories={this.props.categories}
            subCategories={this.props.subCategories}
            selected={this.props.selected}
            setSelected={this.props.setSelected}
          />
        </main>
      </header>
    );
  }
}

export default Header;

import React, { Component } from 'react';

class SideBarSize extends Component {
  handleClick = () => this.props.func('Size');
  render() {
    return (
      <div className='sidebar__size'>
        <div className='sidebar__division-title'>
          <h3>Размер</h3>
          <div className={this.props.hiddenFilters.includes('Size') ? 'opener-up' : 'opener-down'} onClick={this.handleClick}></div>
        </div>
        <ul className={this.props.hiddenFilters.includes('Size') ? 'hidden' : 'sidebar-ul sidebar__size-list-ul'}>
          {this.props.data.map((size, index) =>
            <SizeSideBarListItem
              key={size}
              data={size}
              idx={index}
              hiddenFilters={this.props.hiddenFilters}
              setFilterArrayParam={this.props.setFilterArrayParam}
            />
          )}
        </ul>
      </div>
    );
  };
};

class SizeSideBarListItem extends Component {
  render() {
    const { data, hiddenFilters, setFilterArrayParam } = this.props;
    return (
      <li className={hiddenFilters.includes('Size') ? 'hidden' : 'sidebar-ul-li sidebar__size-list-ul-li'}>
        <label>
          <input type='checkbox'
            onChange={setFilterArrayParam}
            value={+data}
            name='sizes'
            className='checkbox'
          />
          <span className='checkbox-custom'></span>
          <span className='label'>{data}</span>
        </label>
      </li>
    );
  };
};

export default SideBarSize;
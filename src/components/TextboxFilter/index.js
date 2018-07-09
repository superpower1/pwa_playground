import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Form,
  InputGroup,
  InputGroupButtonDropdown,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  Nav,
  NavItem,
  Badge
} from 'reactstrap';

const filterType = [
  "Source",
  "Application",
  "Websites",
  "Host"
]

class TextboxFilter extends Component {

  constructor(props) {
    super(props);
    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.editingFilter = this.editingFilter.bind(this);
    this.submitFilter = this.submitFilter.bind(this);
    this.state = {
      dropdownOpen: false,
      filterType: filterType[0],
      filterText: '',
      appliedFilters: {
      }
    };
  }

  toggleDropDown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  changeFilterType(filterType) {
    this.setState({filterType})
  }

  editingFilter(e) {
    const filterText = e.target.value;
    this.setState({filterText});
  }

  submitFilter(e) {
    e.preventDefault();
    const {appliedFilters, filterText, filterType} = this.state;
    const newFilters = {...appliedFilters, [filterType]: filterText};
    this.setState({appliedFilters: newFilters, filterText: ''});
  }

  deleteFilter(filterType) {
    const {appliedFilters} = this.state;
    const newFilters = {...appliedFilters, [filterType]: ''};
    this.setState({appliedFilters: newFilters});
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.submitFilter}>
          <InputGroup>
            <InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
              <DropdownToggle caret>
               {this.state.filterType}
              </DropdownToggle>
              <DropdownMenu>
                {
                  filterType.map(type => {
                    return <DropdownItem
                      key={type}
                      onClick={()=>this.changeFilterType(type)}
                      >{type}</DropdownItem>
                  })
                }
              </DropdownMenu>
            </InputGroupButtonDropdown>
            <Input placeholder="Filter" onChange={this.editingFilter} value={this.state.filterText}/>
          </InputGroup>
        </Form>
        <div>
          Active Filter:
          <Nav>
            {
              Object.keys(this.state.appliedFilters).map(filterName => {
                const filterText = this.state.appliedFilters[filterName];
                if (!filterText) {
                  return
                }
                return (
                  <NavItem key={filterName}>
                    <Badge color="primary">{filterName}: {filterText}
                      <span onClick={()=>this.deleteFilter(filterName)}>X</span>
                    </Badge>
                  </NavItem>
                )
              })
            }
          </Nav>
          <Button color="link">Clear All Filters</Button>
        </div>
      </div>
    );
  }
}

export default TextboxFilter;

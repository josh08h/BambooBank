import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class BambeuroSelectField extends Component {
  state = {
    value: 1,
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div>
        <SelectField
          floatingLabelText="I want to pay"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <MenuItem value={1} primaryText="B.5" />
          <MenuItem value={2} primaryText="B.10" />
          <MenuItem value={3} primaryText="B.20" />
          <MenuItem value={4} primaryText="B.50" />
          <MenuItem value={5} primaryText="B.100" />
        </SelectField>
      </div>
    );
  }
}
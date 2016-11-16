import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class UsernameSelectField extends Component {
  constructor(props){
    super(props);
    this.initialise();
  }

  initialise(){
    let usernames = this.props.getUsernames();
    firebase.database().ref('users/').on('value', (snapshot)=>{
      this.setState({
        usernames: snapshot.val()
      })
    })
  }

  state = {
    value: 1
  };

  handleChange = (event, index, value) => this.setState({value});

  createSelectItems(){
    let items = [];
    for (var key in this.state.usernames) {
      let email = this.state.usernames[key].email;
      items.push(<MenuItem
                  key={key}
                  value={key}
                  primaryText={email}
                  />)
    }
    return items;
  }

  render() {
    return (
      <div>
        <SelectField
          floatingLabelText="To"
          value={this.state.value}
          onChange={this.handleChange}
        >
        {this.createSelectItems()}
        </SelectField>
      </div>
    );
  }
}
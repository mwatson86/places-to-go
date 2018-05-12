
import * as React from 'react';

import TextField from './fields/text';

import matchToUsers from '../../utils/users';

class Form extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      error: null,
      fields: {
        attendees: null
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(prop, value) {
    this.setState({
      fields: {
        [prop]: value
      }
    });
  }

  handleSubmit(e) {
    const {
      onSubmit
    } = this.props;

    const {
      fields: {
        attendees
      }
    } = this.state;

    const matches = matchToUsers(attendees);

    e.preventDefault();

    if (!matches.length) {
      this.setState({
        error: 'No matching names found'
      });

      return;
    }

    onSubmit(matches);
  }

  render() {
    const {
      error,
      fields: {
        attendees
      }
    } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <p>Please separate the names of the people who would like to attend by comma.</p>

        <TextField
          name="attendees"
          onChange={this.handleChange}
        />

        {error && <p>{error}</p>}

        {!!attendees &&
          <input type="submit" value="submit" />
        }
      </form>
    );
  }
};

export default Form;

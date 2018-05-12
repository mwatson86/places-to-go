
import * as React from 'react';

class CheckboxFields extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const {
      name,
      onChange
    } = this.props;

    const {
      value
    } = e.target;

    this.setState({ value });

    onChange(name, value);
  }

  render() {
    const {
      value
    } = this.state;

    return (
      <input
        type="text"
        value={value}
        onChange={this.handleChange}
        size="50"
      />
    );
  }
};

export default CheckboxFields;

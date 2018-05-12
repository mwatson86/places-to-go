
import React from 'react';
import ReactDOM from 'react-dom';

import Form from './components/form';
import Result from './components/result';

class Root extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      attendees: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(attendees) {
    this.setState({
      attendees
    });
  }

  render() {
    const {
      attendees
    } = this.state;

    const attendeesExist = attendees.length > 0;

    return (
      <div id="test">
        <Form onSubmit={this.handleSubmit} />

        {attendeesExist &&
          <Result attendees={attendees} />
        }

      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));

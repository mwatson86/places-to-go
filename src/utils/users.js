
import users from '../json/users.json';

export default (attendees = '') => {
  const atendeesArr = attendees.split(', ');

  return users.filter(({ name }) => atendeesArr.indexOf(name) !== -1);
};


import matchToUsers from '../../src/utils/users';

describe('match to users', () => {

  it('returns expected users, based on input', () => {

    const input = 'Robert Webb, Gavin Coulson';

    const expected = [
      { name: 'Robert Webb' },
      { name: 'Gavin Coulson' }
    ];

    const users = [
      ...expected,
      { name: 'some other name' }
    ];

    matchToUsers.__Rewire__('users', users);

    const result = matchToUsers(input);

    expect(result).toEqual(expected);

    matchToUsers.__ResetDependency__('users');

  });

});

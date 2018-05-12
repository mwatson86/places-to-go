
import { includedVenues, excludedVenues, __RewireAPI__ } from '../../src/utils/venues';

describe('included venues', () => {

  it('returns arr of included venue names', () => {

    const expected = ['venue3', 'venue4'];

    const venues = [
      { name: 'venue1' },
      { name: 'venue2' },
      { name: 'venue3' },
      { name: 'venue4' }
    ];

    const excluded = {
      venue1: {},
      venue2: {}
    };

    __RewireAPI__.__Rewire__('venues', venues);

    const result = includedVenues(excluded);

    expect(result).toEqual(expected);

    __RewireAPI__.__ResetDependency__('venues');

  });

});

describe('excluded venues', () => {

  it('returns object of excluded venues', () => {

    const venues = [
      {
        name: 'venue1',
        food: ['fish', 'meat'],
        drinks: ['wine', 'beer']
      },
      {
        name: 'venue2',
        food: ['fish'],
        drinks: ['wine']
      },
      {
        name: 'venue3',
        food: ['eggs'],
        drinks: ['coffee']
      }
    ];

    const attendees = [
      {
        name: 'user1',
        wont_eat: ['fish'],
        drinks: ['wine', 'beer']
      },
      {
        name: 'user2',
        wont_eat: ['fish', 'meat'],
        drinks: ['wine', 'beer']
      }
    ];

    const expected = {
      venue1: {
        drinks: ['user1', 'user2'],
        food: ['user2']
      },
      venue2: {
        drinks: ['user1', 'user2'],
        food: ['user1', 'user2']
      }
    };

    __RewireAPI__.__Rewire__('venues', venues);

    const result = excludedVenues(attendees);

    expect(result).toEqual(expected);

    __RewireAPI__.__ResetDependency__('venues');

  });

});

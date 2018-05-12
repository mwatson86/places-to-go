
import * as React from 'react';

import { excludedVenues, includedVenues } from '../utils/venues';

const Result = ({ attendees }) => {

  const excluded = excludedVenues(attendees),
    included = includedVenues(excluded);

  const inclusionsExist = included.length > 0,
    exclusionsExist = Object.keys(excluded).length > 0;

  return (
    <span>

      {inclusionsExist &&
        <span>
          <p>Places to go</p>
          <ul>
            {included.map((value, i) => (
              <li key={`goto-${i}`}>{value}</li>
            ))}
          </ul>
        </span>
      }

      {exclusionsExist &&
        <span>
          <p>Places to avoid</p>
          <ul>
            {Object.keys(excluded).map((venue, i) => (
              <li key={`venue-${i}`}>
                {venue}
                <ul>

                  {!!excluded[venue].food && excluded[venue].food.map(name => (
                    <li>There is nothing for {name} to eat.</li>
                  ))}

                  {!!excluded[venue].drinks && excluded[venue].drinks.map(name => (
                    <li>There is nothing for {name} to drink.</li>
                  ))}

                </ul>
              </li>
            ))}
          </ul>
        </span>
      }

    </span>
  );
};

export default Result;

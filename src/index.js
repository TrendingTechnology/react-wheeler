import React from 'react';

import Wheel from './Wheel';
import Touch from './Touch';

export default ({ event = 'auto', ...props }) => {
  if (event === 'wheel') {
    return <Wheel {...props} />;
  } else if (event === 'touch') {
    return <Touch {...props} />;
  }

  return typeof document !== 'undefined' && 'ontouchstart' in document ? (
    <Touch {...props} />
  ) : (
    <Wheel {...props} />
  );
};

// 6-deeply.js

import { fromJS } from 'immutable';

export function mergeDeeplyElements(page1, page2) {
  const immutablePage1 = fromJS(page1);
  const immutablePage2 = fromJS(page2);
  return immutablePage1.mergeDeep(immutablePage2);
}

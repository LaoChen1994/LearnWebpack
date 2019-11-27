import _ from 'lodash';
import numRef from './ref.json';

export default function numToWord(num) {
  return _.reduce(
    numRef,
    (accum, ref) => {
      return ref.num === num.toString() ? ref.word : accum;
    },
    ''
  );
}

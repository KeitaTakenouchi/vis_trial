var nodes = [
  { id: 1, label: 'AAA\nInit', group: 1 },
  { id: 2, label: 'AAA\nFoo', group: 2 },
  { id: 3, label: 'AAA\nBar', group: 2 },
  { id: 4, label: 'AAA\nBaz', group: 2 },
  { id: 5, label: 'CCC\nOpen', group: 3 },
  { id: 6, label: 'CCC\nClose', group: 3 },
  { id: 7, label: 'BBB\nCommon', group: 4 },

];
// create an array with edges
var edges = [
  { from: 3, to: 7 },
  { from: 2, to: 7 },
  { from: 2, to: 6 },
  { from: 2, to: 5 },
  { from: 1, to: 4 },
  { from: 1, to: 3 },
  { from: 1, to: 2 },

];

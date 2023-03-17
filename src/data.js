module.exports.testData = [
  {
    title: '0-0',
    key: '0-0',
    children: [
      {
        title: '0-0-0',
        key: '0-0-0',
        children: [
          { title: '0-0-0-0', key: '0-0-0-0' },
          { title: '0-0-0-1', key: '0-0-0-1' },
          { title: '0-0-0-2', key: '0-0-0-2' },
        ],
      },
      {
        title: '0-0-1',
        key: '0-0-1',
        children: [
          { title: '0-0-1-0', key: '0-0-1-0' },
          { title: '0-0-1-1', key: '0-0-1-1' },
          { title: '0-0-1-2', key: '0-0-1-2' },
        ],
      },
      {
        title: '0-0-2',
        key: '0-0-2',
      },
    ],
  },
  {
    title: '0-1',
    key: '0-1',
    children: [
      { title: '0-1-0', key: '0-1-0' },
      { title: '0-1-1', key: '0-1-1' },
      { title: '0-1-2', key: '0-1-2' },
    ],
  },
  {
    title: '0-2',
    key: '0-2',
  },
];

module.exports.originArr = [
  { id: 1, parentId: 0 },
  { id: 2, parentId: 1 },
  { id: 6, parentId: 4 },
  { id: 7, parentId: 0 },
  { id: 3, parentId: 7 },
  { id: 8, parentId: 2 },
  { id: 9, parentId: 1 },
];

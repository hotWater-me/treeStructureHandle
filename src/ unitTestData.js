module.exports.objTest = {
  name: 'lucy',
  age: 24,
};

module.exports.testArr = [1, 4, 4, undefined];

module.exports.expecConvert = [
  '0-0-0-0',
  '0-0-0-1',
  '0-0-0-2',
  '0-0-0',
  '0-0',
  '0-0-1-0',
  '0-0-1-1',
  '0-0-1-2',
  '0-0-1',
  '0-0-2',
  '0-1-0',
  '0-1-1',
  '0-1-2',
  '0-1',
  '0-2',
];

module.exports.arrToTreeTest = [
  {
    id: 1,
    parentId: 0,
    children: [
      {
        id: 2,
        parentId: 1,
      },
    ],
  },
  {
    id: 7,
    parentId: 0,
    children: [
      {
        id: 3,
        parentId: 7,
      },
    ],
  },
];
module.exports.getChildNodeTest = {
  title: '0-1',
  key: '0-1',
  children: [
    { title: '0-1-0', key: '0-1-0' },
    { title: '0-1-1', key: '0-1-1' },
    { title: '0-1-2', key: '0-1-2' },
  ],
};

module.exports.insertAttrTest = [
  {
    title: '0-1',
    children: [{ title: '0-1-0' }, { title: '0-1-1' }, { title: '0-1-2' }],
  },
];
module.exports.insertAttr = [
  {
    title: '0-1',
    children: [
      { title: '0-1-0' },
      { title: '0-1-1' },
      { title: '0-1-2', children: [{ title: '0-1-2-0' }] },
    ],
  },
  {
    title: '0-2',
  },
];

module.exports.newInsertAttrTest = [
  {
    title: '0-1',
    key: '666',
    children: [
      { title: '0-1-0', key: '666' },
      { title: '0-1-1', key: '666' },
      { title: '0-1-2', key: '666' },
    ],
  },
];
module.exports.nodePathTest = ['0-1 - 0-1-0', '0-1 - 0-1-1', '0-1 - 0-1-2'];
module.exports.defaultNodePathTest = [
  '0-1 , 0-1-0',
  '0-1 , 0-1-1',
  '0-1 , 0-1-2',
];
module.exports.preNodePathTest = [
  'preFix > 0-1 > 0-1-0',
  'preFix > 0-1 > 0-1-1',
  'preFix > 0-1 > 0-1-2',
];
module.exports.originPathTest = [
  '0-1 , 0-1-0',
  '0-1 , 0-1-1',
  '0-1 , 0-1-2 , 0-1-2-0',
  '0-2',
];
module.exports.downInsertAttrTest = [
  { title: '0-1', id: '0-1', parendId: 'root', key: '666' },
  { title: '0-1-0', key: '666', id: '0-1-0', parendId: '0-1' },
  { title: '0-1-1', key: '666', id: '0-1-1', parendId: '0-1' },
  { title: '0-1-2', key: '666', id: '0-1-2', parendId: '0-1' },
];
module.exports.levelTraversal = [
  {
    title: '0-1',
    children: [
      {
        title: '0-1-0',
      },
      {
        title: '0-1-1',
      },
      {
        title: '0-1-2',
      },
    ],
  },
];
module.exports.levelTraversalTest = {
  0: [
    {
      title: '0-1',
      children: [
        {
          title: '0-1-0',
        },
        {
          title: '0-1-1',
        },
        {
          title: '0-1-2',
        },
      ],
    },
  ],
  1: [
    {
      title: '0-1-0',
    },
    {
      title: '0-1-1',
    },
    {
      title: '0-1-2',
    },
  ],
};
module.exports.newInsertAttrTestOrign = [
  {
    title: '0-1',
    key: '666',
    children: [
      { title: '0-1-0', key: '666' },
      { title: '0-1-1', key: '666' },
      { title: '0-1-2', key: '666' },
    ],
  },
];
module.exports.newInsertAttrTestReplace = [
  {
    title: '0-1',
    key: 'replaceKey',
    children: [
      {
        title: '0-1-0',
        key: 'replaceKey',
      },
      {
        title: '0-1-1',
        key: 'replaceKey',
      },
      {
        title: '0-1-2',
        key: 'replaceKey',
      },
    ],
  },
];

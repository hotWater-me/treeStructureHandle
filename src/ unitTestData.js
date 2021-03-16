module.exports.objTest = {
    name: 'lucy',
    age: 24,
};

module.exports.testArr = [1, 4, 4, undefined];

module.exports.expecConvert = [
    '0-0-0-0', '0-0-0-1',
    '0-0-0-2', '0-0-0',
    '0-0', '0-0-1-0',
    '0-0-1-1', '0-0-1-2',
    '0-0-1', '0-0-2',
    '0-1-0-0', '0-1-0-1',
    '0-1-0-2', '0-1',
    '0-2'
];

module.exports.arrToTreeTest = [
    {
        "id": 1,
        "parentId": 0,
        "children": [
            {
                "id": 2,
                "parentId": 1
            }
        ]
    },
    {
        "id": 7,
        "parentId": 0,
        "children": [
            {
                "id": 3,
                "parentId": 7
            }
        ]
    }
];
module.exports.getChildNodeTest = {
    title: '0-1',
    key: '0-1',
    children: [
        { title: '0-1-0-0', key: '0-1-0-0' },
        { title: '0-1-0-1', key: '0-1-0-1' },
        { title: '0-1-0-2', key: '0-1-0-2' },
    ],
}

module.exports.insertAttrTest = [
    {
        title: '0-1',
        children: [
            { title: '0-1-0-0' },
            { title: '0-1-0-1' },
            { title: '0-1-0-2' },
        ],
    }
];

module.exports.newInsertAttrTest = [
    {
        title: '0-1',
        key:'666',
        children: [
            { title: '0-1-0-0', key:'666' },
            { title: '0-1-0-1', key:'666' },
            { title: '0-1-0-2', key:'666' },
        ],
    }
];
module.exports.nodePathTest =[ '0-1 - 0-1-0-0', '0-1 - 0-1-0-1', '0-1 - 0-1-0-2' ]
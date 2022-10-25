const RecursionHalle = require('./main');
const { testData, originArr } = require('./data');
const {
  objTest,
  testArr,
  expecConvert,
  arrToTreeTest,
  getChildNodeTest,
  insertAttrTest,
  newInsertAttrTest,
  nodePathTest,
  downInsertAttrTest,
  levelTraversal,
  levelTraversalTest,
  defaultNodePathTest,
  preNodePathTest,
  insertAttr,
  originPathTest,
  newInsertAttrTestReplace,
  newInsertAttrTestOrign,
  insertLevelData,
  insertLevelDataTest,
  insertParentRelaTestData,
  insertParentRelaTestDataExpect,
} = require('./ unitTestData');
const { expect } = require('chai');

const RecursionHalles = new RecursionHalle();
const { renameKeys, delUndefined } = RecursionHalles;

describe('Utils', () => {
  it('对象替换键名', () => {
    expect(
      renameKeys(
        {
          name: 'convertName',
          age: 'convertAge',
        },
        objTest,
      ),
    ).to.deep.equal({ convertName: 'lucy', convertAge: 24 });
  });

  it('去重并去除undefined', () => {
    expect(delUndefined(testArr)).to.have.members([1, 4]);
  });
});

describe('treeHaddle', () => {
  it('获取树结构数据某一个键值', () => {
    expect(RecursionHalles.convertData(testData, 'title')).to.have.members(
      expecConvert,
    );
  });

  it('生成树结构数据', () => {
    expect(RecursionHalles.arrToTreeData(originArr)).to.deep.equal(
      arrToTreeTest,
    );
  });

  it('获取节点的子节点 ', () => {
    expect(
      RecursionHalles.getChildNode(testData, 'key', '0-1')['key'],
    ).to.deep.equal(getChildNodeTest);
  });

  it('为节点替换键名', () => {
    // 把里面的titlt替换为id
    const hasReplace = RecursionHalles.replaceKeyName(testData, {
      title: 'id',
    });
    // 获取里面keyName - id的数组集合
    expect(RecursionHalles.convertData(hasReplace, 'id')).to.have.members(
      expecConvert,
    );
    // 替换并保留原先键值对
    const replaceAndSavePre = RecursionHalles.replaceKeyName(
      hasReplace,
      {
        id: 'pre_id',
      },
      true,
    );
    expect(
      RecursionHalles.convertData(replaceAndSavePre, 'id'),
    ).to.have.members(expecConvert);
  });

  it('获得节点的个数', () => {
    expect(RecursionHalles.getnodeCount(testData)).to.be.equal(
      expecConvert.length,
    );
  });

  it('为每个节点插入属性', () => {
    expect(
      RecursionHalles.insertAttr(insertAttrTest, { key: '666' }),
    ).to.deep.equal(newInsertAttrTest);
  });

  it('生成树结构数据路径', () => {
    expect(
      RecursionHalles.nodePath(insertAttrTest, 'title', '-'),
    ).to.have.members(nodePathTest);
    expect(RecursionHalles.nodePath(insertAttrTest, 'title')).to.have.members(
      defaultNodePathTest,
    );
    expect(
      RecursionHalles.nodePath(insertAttrTest, 'title', '>', 'preFix'),
    ).to.have.members(preNodePathTest);
    expect(RecursionHalles.nodePath(insertAttr, 'title')).to.have.members(
      originPathTest,
    );
  });
  it('一维化数据', () => {
    expect(RecursionHalles.downGradeData(testData, 'title').length).to.be.equal(
      expecConvert.length,
    );
    expect(
      RecursionHalles.downGradeData(newInsertAttrTest, 'title'),
    ).to.deep.equal(downInsertAttrTest);
  });
  it('层级遍历', () => {
    expect(RecursionHalles.levelTraversal(levelTraversal)).to.deep.equal(
      levelTraversalTest,
    );
  });
  it('item插入level', () => {
    expect(RecursionHalles.insertLevel(insertLevelData)).to.deep.equal(
      insertLevelDataTest,
    );
  });
  it('修改treeData的键值', () => {
    expect(
      RecursionHalles.replaceDataValue(newInsertAttrTestOrign, {
        key: 'replaceKey',
      }),
    ).to.deep.equal(newInsertAttrTestReplace);
  });
  it('添加parentId及关系路径', () => {
    expect(
      RecursionHalles.insertParentRela(insertParentRelaTestData),
    ).to.deep.equal(insertParentRelaTestDataExpect);
  });
});

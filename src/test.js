const RecursionHalles = require('./main');
const { testData, originArr } = require('./data');
const { expect } = require('chai');
const { renameKeys, delUndefined } = RecursionHalles;


const objTest = {
    name: 'lucy',
    age: 24,
};
const testArr = [1, 4, 4, undefined];
const expecConvert = [
    '0-0-0-0', '0-0-0-1',
    '0-0-0-2', '0-0-0',
    '0-0', '0-0-1-0',
    '0-0-1-1', '0-0-1-2',
    '0-0-1', '0-0-2',
    '0-1-0-0', '0-1-0-1',
    '0-1-0-2', '0-1',
    '0-2'
];

describe('Utils', () => {
    it('对象替换键名', () => {
        expect(renameKeys({
            name: 'convertName',
            age: 'convertAge'
        }, objTest)).to.deep.equal({ convertName: 'lucy', convertAge: 24 });
    });

    it('去重并去除undefined', () => {
        expect(delUndefined(testArr)).to.have.members([1, 4]);
    })
});

describe('treeHaddle', () => {
    it('获取树结构数据某一个键值', () => {
        expect(RecursionHalles.convertData(testData, 'title')).to.have.members(expecConvert);
    });
    
    it('获得节点的个数', () => {
        expect(RecursionHalles.getnodeCount(testData)).to.be.equal(expecConvert.length);
    });

    it('为节点替换键名', () => {
        // 把里面的titlt替换为id
        const hasReplace = RecursionHalles.replaceKeyName(testData, { title: 'id' });
        // 获取里面keyName的数组集合
        expect(RecursionHalles.convertData(hasReplace, 'id')).to.have.members(expecConvert);
    });
    
})

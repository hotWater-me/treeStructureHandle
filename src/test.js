const assert = require('power-assert');
const RecursionHalles = require('./main');
const { testData, originArr } = require('./data');

/**
 * 对象替换键名
 */
const objTest = {
    name: 'lucy',
    age: 24,
};
try {
    assert.deepStrictEqual(RecursionHalles.renameKeys({
        name: 'convertName',
        age: 'convertAge'
    }, objTest), { convertName: 'lucy', convertAge: 24 });
    console.log('对象替换键名 -- Pass')
} catch {
    console.log('对象替换键名 --  Fail');
};

/**
 * 去重并去除undefined
 */
const testArr = [1, 4, 4, undefined];
try {
    assert.deepStrictEqual(RecursionHalles.delUndefined(testArr), [1, 4]);
    console.log('去重并去除undefined -- Pass')
} catch {
    console.log('去重并去除undefined -- Fail');
};

/**
 *数结构数据,return为一个数组,里面的元素键名自选
 */
const expecConvert = [
    '0-0-0-0', '0-0-0-1',
    '0-0-0-2', '0-0-0',
    '0-0', '0-0-1-0',
    '0-0-1-1', '0-0-1-2',
    '0-0-1', '0-0-2',
    '0-1-0-0', '0-1-0-1',
    '0-1-0-2', '0-1',
    '0-2'
]
try {
    assert.deepStrictEqual(RecursionHalles.convertData(testData, 'title'), expecConvert);
    console.log('数结构数据,return为一个数组,里面的元素键名自选 -- Pass')
} catch {
    console.log('数结构数据,return为一个数组,里面的元素键名自选 -- Fail');
};

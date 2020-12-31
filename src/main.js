const { testData } = require('./data')

class RecursionHalle {
    constructor(props) { }

    // 数结构数据,return为一个数组,里面的元素键名自选
    convertData(testData, selEle) {
        let allele = [];
        const logicEquivalent = (data, par) => {
            const childrenMap = data.map((item) => {
                if (item.children) {
                    const curExu = logicEquivalent(item.children, item[selEle]);
                    curExu.push(item[selEle], par);
                    Array.prototype.push.apply(allele, curExu)
                } else {
                    return item[selEle];
                }
            });
            Array.prototype.push.apply(allele, childrenMap)
            return childrenMap;
        };
        logicEquivalent(testData);
        const delUndefined = Array.from(new Set(allele)).filter((ele) => { if (ele) { return true } });
        if (true) {
            return delUndefined;
        }
    }
}

let useFun = new RecursionHalle();


console.log(useFun.convertData(testData, 'text')); // 第二个参数为你想拿到的值

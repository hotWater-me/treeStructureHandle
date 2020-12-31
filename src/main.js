const { testData, originArr } = require('./data')

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
	};

	// 生成树结构数据
	arrToTreeData(arr) {
		let copy = JSON.parse(JSON.stringify(arr));
		let obj = {};
		copy.forEach((item, index) => {
			obj[item.id] = item;
		});
		let res = [];
		copy.forEach(item => {
			if (item.parentId === 0) {
				res.push(item);
			}
			for (var key in obj) {
				if (item.id === obj[key].parentId) {
					// 处理数据children
					if (item.children) {
						item.children.push(obj[key]);
					} else {
						item.children = [obj[key]];
					}
				}
			}
		});
		return res;
	}
}

let useFun = new RecursionHalle();


// console.log(useFun.convertData(testData, 'title')); // 第二个参数为你想拿到的值

console.log(JSON.stringify(useFun.arrToTreeData(originArr), null, 2))

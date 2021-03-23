class RecursionHalle {
	constructor() {
		this.getMatchNode = {};
		this.nodeCountProps = 0;
	}

	delUndefined(inCome) {
		return Array.from(new Set(inCome)).filter((ele) => { if (ele) { return true } })
	}

	// 数结构数据,return为一个数组,里面的元素键名自选
	convertData(testData, selEle) {
		let allele = [];
		const logicEquivalent = (data, par) => {
			const childrenMap = data.map((item) => {
				if (item.children) {
					const curExu = logicEquivalent(item.children, item[selEle]);
					curExu.push(item[selEle], par);
					Array.prototype.push.apply(allele, curExu);
				} else {
					return item[selEle];
				}
			});
			Array.prototype.push.apply(allele, childrenMap)
			return childrenMap;
		};
		logicEquivalent(testData);
		return this.delUndefined(allele);
	};

	// 生成树结构数据
	arrToTreeData(arr) {
		let copy = JSON.parse(JSON.stringify(arr));
		let obj = {};
		copy.forEach((item) => {
			obj[item.id] = item;
		});
		let res = [];
		copy.forEach(item => {
			if (item.parentId === 0) {
				res.push(item);
			}
			for (var key in obj) {
				if (item.id === obj[key].parentId) {
					item.children = [obj[key]];
				}
			}
		});
		return res;
	}
	// 生成路径
	nodePath(originData, keyName, customSymbol) {
		const setData = [];
		const haddlePath = (originData, tempData) => {
			const templateString = (item) => `${tempData} ${customSymbol} ${item.title}`;
			const eachMap = originData.map((item) => {
				if (item.children) {
					haddlePath(item.children, item[keyName]);
					return;
				};
				return templateString(item);
			});
			Array.prototype.push.apply(setData, eachMap);
		}
		haddlePath(originData);
		return this.delUndefined(setData);
	}

	// 获取节点的子节点
	getChildNode(originData, keyName, nodeName) {
		originData.forEach((item) => {
			if (item[keyName] !== nodeName) {
				if (item.children) return this.getChildNode(item.children, keyName, nodeName);
			} else {
				this.getMatchNode[keyName] = item;
			}
		});
		return this.getMatchNode;
	}

	// 为每个节点插入属性
	insertAttr(originData, insertObj) {
		const tempData = originData.map((item) => {
			if (item.children) {
				const childrenElement = this.insertAttr(item.children, insertObj);
				return Object.assign(item, insertObj, { children: childrenElement });
			}
			return Object.assign(item, insertObj);
		});
		return tempData;
	};

	// 为节点替换键名
	renameKeys(keysMap, obj) {
		return Object.keys(obj).reduce((acc, key) => Object.assign(acc, {
			[keysMap[key] || key]: obj[key]
		}), {});
	};
	replaceKeyName(originData, replaceObj) {
		const tempData = originData.map((item) => {
			if (item.children) {
				const childrenElement = this.replaceKeyName(item.children, replaceObj);
				const currentEle = Object.assign(item, { children: childrenElement });
				return this.renameKeys(replaceObj, currentEle);
			}
			return this.renameKeys(replaceObj, item);
		});
		return tempData;
	};

	// 获得节点的个数
	// 计算节点数目
	nodeCount(originData) {
		originData.forEach((ele) => {
			if (ele.children) {
				this.nodeCountProps += ele.children.length;
				this.nodeCount(ele.children);
			}
		});
		return this.nodeCountProps
	}
	getnodeCount(testData) {
		const firstLevel = testData.length;
		return this.nodeCount(testData) + firstLevel
	};

	// 一维化数据
	downGradeData(originData, accTemp = []) {
		return originData.reduce((acc, cur) => {
			if (cur.children) {
				const filterData = Object.keys(cur).filter((item) => item !== 'children');
				const convertData = filterData.reduce((accumulator, currentValue) => {
					accumulator[currentValue] = cur[currentValue];
					return accumulator;
				}, {});
				accTemp.push(convertData)
				return this.downGradeData(cur.children, accTemp);
			}
			acc.push(cur);
			return acc;
		}, accTemp)
	}
}

const RecursionHalles = new RecursionHalle();
module.exports = RecursionHalles;

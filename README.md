### [在线Demo](https://codesandbox.io/s/dark-leaf-mbh31?file=/src/App.js) 参考test.js文件去测试
## 🔨 Usage
```jsx
import RecursionHalle,  { treeRecursionHalle } from 'tree-structure-handle';

treeRecursionHalle.convertData(原数组: uniteObject[],  想获得的键名: string);
```

## ✨ API


  🌈 获取树结构数据某一个键值
*/
convertData(原数组: uniteObject[],  想获得的键名: string);

  🌈 将一维数组转化为树结构类型数据
*/
arrToTreeData(原数组: arrToTreeDataType[])

  🌈 获得树结构类型数据的路径
*/
nodePath(原数组: uniteObject[], 键名: string ,连接符号: string, 前缀: string);


  🌈 获取节点的子节点
*/
getChildNode(原数组: uniteObject[], 键名: string, 键值: string);

 🌈 为每个节点插入属性
*/
insertAttr(原数组: uniteObject[], 要插入的对象: { [key: string]: any })

 🌈 为节点替换键名
*/
replaceKeyName(原数组: uniteObject[], 要替换的对象: { [key: string]: any }, 是否保存当前键值对?: Boolen)

 🌈 获得节点的个数
*/
getnodeCount(原数组: uniteObject[])

 🌈 一维化数据
*/
downGradeData(原数组: uniteObject[],id读取的key: string)

 🌈 层级遍历
*/
levelTraversal(原数组: uniteObject[])

 🌈 层级遍历插入level
*/
insertLevel(原数组: uniteObject[])

 🌈 修改treeData的键值
*/
replaceDataValue(原数组: uniteObject[], 要替换的对象: { [key: string]: any })

 🌈 添加parentId及关系路径
*/
insertParentRela(原数组: uniteObject[])


## ✨ Utils


 🌈 对象替换键名
*/
renameKeys(要替换的键名: { [key: string]: string }, 原数据: { [key: string]: string })

 🌈 去重并去除undefined
*/
delUndefined(原数组: any[])


## ✨ Types  
⚙️ interface uniteObject {
  title: 'string',
  key: 'string',
  children:  uniteObject[]
}
⚙️ interface arrToTreeDataType {
  id: number, parentId: number
}

## ✨ TODO
- 支持链式调用
- 项目重新用ts构建



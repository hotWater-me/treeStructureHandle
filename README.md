/**
  * 获取树结构数据某一个键值
*/
convertData(原数组: uniteObject[],  想获得的键名: string);

/**
  * 将一维数组转化为树结构类型数据
*/
arrToTreeData(原数组: arrToTreeDataType[])

/**
  * 获得树结构类型数据的路径
*/
nodePath(原数组: uniteObject[], 键名: string ,连接符号: string);

/**
  * 获取节点的子节点
*/
getChildNode(原数组: uniteObject[], 键名: string, 键值: string);



Types  
interface uniteObject {
  title: 'string',
  key: 'string',
  children:  uniteObject[]
}
interface arrToTreeDataType {
  id: number, parentId: number
}
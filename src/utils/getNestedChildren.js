export default (arr, parent = null) => {
  let out = []
  for (let i in arr) {
    if (arr[i].parent === parent) {
      !('level' in arr[i]) && (arr[i].level = this.level++);
      let children = this.getNestedChildren(arr, arr[i].id);
      if (children.length) {
        arr[i].children = children;
      }
      out.push(arr[i])
    }
  }
  return out;
}

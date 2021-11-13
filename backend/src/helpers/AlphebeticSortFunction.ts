function alfabethicSort(a: any, b: any, property: any) {
  if (a[property] < b[property]) {
    return -1;
  }
  if (a[property] > b[property]) {
    return 1;
  }
  return 0;
}

export default alfabethicSort;

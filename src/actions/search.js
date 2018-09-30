/**
 * @flow
 *
 * So, this is where my search logic will be placed
 * I m going to separate it out from component
 */

const searchBy = (value: string, searchText: string) => {
  const searchRegExp = new RegExp(searchText, "gi");
  return searchRegExp.test(value);
};

export let searchGroceryByName = (listOfGrocery: Array<any>, searchText: string): Array<any> => {
  return listOfGrocery.filter((item: any, index: number) => {
    if (item) {
      return item.name && searchBy(item.name, searchText);
    }
  });
};

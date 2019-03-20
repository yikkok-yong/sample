/* @flow */
export const UPDATE_BOOKLIST: string = "UPDATE_BOOKLIST";

export const updateBookList = (list: any) => {
  return dispatch => {
    return dispatch({
      type: UPDATE_BOOKLIST,
      booklist: list
    });
  };
};

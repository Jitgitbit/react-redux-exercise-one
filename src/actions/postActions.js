export const deletePost = (id) => {
  return {
    type: 'DELETE_POST',                               // THIS IS AN ACTIONCREATOR !!!
    id: id
  }
}
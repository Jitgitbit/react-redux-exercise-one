export const deletePost = (id) => {
  return {
    type: 'DELETE_POST',                               // THIS IS AN ACTIONCREATOR !!!
    id                       //====>> REMEMBER: if we have property key and value with the same name we can refactor like this !!! old way under here
  }
}
// export const deletePost = (id) => {
//   return {
//     type: 'DELETE_POST',                               // THIS IS AN ACTIONCREATOR !!!
//     id: id
//   }
// }
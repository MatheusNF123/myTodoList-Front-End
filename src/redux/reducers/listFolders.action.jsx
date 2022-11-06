export const actionAddFolder = (payload) => ({type: 'addFolder', payload})
export const actionIsActive = (payload) => ({type: 'isActive', payload})
export const actionDeleteFolder = (id) => ({type: "deleteFolder", payload: {id}})
// permissions-reducer.js
export default (state = {}, action) => {
  switch (action.type) {
    case 'PERMISSIONS_RECEIVED':
      state.permissions = action.payload.permissions;
      return state;
  }
};

export const selectPermissionForProject = (state, { project }) => {
  const permissions = state.permissions;
  return permissions.find(permission => permission.projectId === project.id);
};
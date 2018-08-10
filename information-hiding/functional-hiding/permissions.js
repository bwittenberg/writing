// permissions.js
export const construct = permissionsList => permissionsList;

export const selectPermissionForProject = ({ permissions, project }) => {
  return permissions.find(permission => permission.projectId === project.id);
};

const permissions = [
  { projectId: 1, access: 'edit' },
  { projectId: 2, access: 'view' },
  { projectId: 3, access: 'edit' },
  { projectId: 4, access: 'edit' },
];

const projects = [
  { id: 1, name: 'Project 1' },
  { id: 2, name: 'Project 2' },
  { id: 3, name: 'Project 3' },
  { id: 4, name: 'Project 4' },
];

const getEditableProjects = ({ projects, permissions }) => {
  return projects.filter(project => {
    return permissions.some(permission => {
      return permission.projectId === project.id && permission.access === 'edit';
    });
  });
};

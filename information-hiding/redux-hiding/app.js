// app.js
import { createStore } from 'redux';
import permissionsReducer, { selectPermissionForProject } from './reducer';

const store = createStore(permissionsReducer);
store.dispatch({
  type: 'PERMISSIONS_RECEIVED',
  payload: {
    permissions: [
      { projectId: 1, access: 'edit' },
      { projectId: 2, access: 'view' },
      { projectId: 3, access: 'edit' },
      { projectId: 4, access: 'edit' },
    ]
  }
});

const projectPermission = selectPermissionForProject(store.getState(), { project: { id: 2 }});
console.log(projectPermission); // { projectId: 2, access: "view" }
const initialState = {
  
}

export default function projectsReducer(state = initialState, action) {
  const {project, projects} = action.data
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        ...projects
      };
    case "ADD_PROJECT":
      return {
        ...state,
        ...project
      }
    case "UPDATE_PROJECT":
      return {
        ...state,
        [project.id]: {
          ...projects[project.id],
          project
        }
      }
    case "LOGOUT_USER":
      localStorage.clear()
      return initialState;
    default:
      return state;
    }
  }
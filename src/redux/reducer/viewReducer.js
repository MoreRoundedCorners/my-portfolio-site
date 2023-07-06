// reducers.js
const initialState = {
  aboutInView: false,
  projectInView: false,
  contactInView: false,
};

export default function viewReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_ABOUT_IN_VIEW":
      return {
        ...state,
        aboutInView: action.payload,
      };
    case "SET_PROJECT_IN_VIEW":
      return {
        ...state,
        projectInView: action.payload,
      };
    case "SET_CONTACT_IN_VIEW":
      return {
        ...state,
        contactInView: action.payload,
      };
    default:
      return state;
  }
}

export const setAboutInView = (inView) => ({
  type: "SET_ABOUT_IN_VIEW",
  payload: inView,
});

export const setProjectInView = (inView) => ({
  type: "SET_PROJECT_IN_VIEW",
  payload: inView,
});

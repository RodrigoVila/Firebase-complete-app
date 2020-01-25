const initState = {
  projects: [
    { id: "1", title: "Hola 1", content: "lsadlasdblasdkasldks" },
    { id: "2", title: "Hola 2", content: "lsadlasasdsadasdasdblasdkasldks" },
    { id: "3", title: "Hola 3", content: "lsadlasdblasdkaslddasdasdasd11111ks" }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;

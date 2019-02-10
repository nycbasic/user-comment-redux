export default function(state = null, action) {
  switch (action.type) {
    case "SELECTED_USER":
      console.log(action.type);
      return action.payload;
  }
  return state;
}

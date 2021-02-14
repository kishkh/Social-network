const initialState = {
  ava: 'https://i.pinimg.com/originals/9c/16/87/9c16872f4199e52e9a45292341108f42.jpg',
  wallpaper: 'https://deniliquinchamber.com.au/wp-content/uploads/2017/04/header-image-1.png',
  bio: {
    name: 'Andrew Olefir',
    age: '27',
    placeOfBirth: 'Earth',
    id:0,
  },
  stats: {
    tasks: 41,
    tasksDone: 38,
    tasksFail: 3,
    memories: 15,
    nodes: 22
  }
}

const profileReducer = (state = initialState, action) => {
  return state;
}


export default profileReducer;
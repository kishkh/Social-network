const initialState = {
  users: [],
  currentPage: 1,
  usersCount:  59,
  usersOnPage: 10,
  isProcessing: false
}
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Change-follow':
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.id) {
            return { ...u, followed: !u.followed }
          }
          return u
        })
      }
    case 'Set-users':
      return {...state, users: action.users}
    case 'Set-current-value':
      return {...state, currentPage: action.current}
    case 'Get-users-count':
      return {...state, usersCount: action.users}
    case 'Toggle-preloader':
      return {...state, isProcessing: action.isProcessing}
    default:
      return state;
  }
}

export const setCurrentValueCreator = (current) => {
  return { type: 'Set-current-value', current: current }
}
export const togglePreloaderCreator = (isProcessing) => {
  return { type: 'Toggle-preloader', isProcessing: isProcessing}
}
export const getUsersCountCreator = (users) => {
  return { type: 'Get-users-count', users: users }
}
export const changeFollowCreator = (id) => {
  return { type: 'Change-follow', id: id }
}
export const setUsersCreator = (users) => {
  return { type: 'Set-users', users: users }
}
export default usersReducer;

// [
//   { name: 'Andrew Olefir', id: 0, followed: false, location: { country: 'Ukraine', city: 'Kharkiv' }, ava: 'https://i.pinimg.com/originals/9c/16/87/9c16872f4199e52e9a45292341108f42.jpg' },
//   { name: 'Dasha Goshersonevich', id: 1, followed: true, location: { country: 'USA', city: 'Chicago' }, ava: 'https://avatarko.ru/img/avatar/32/muzyka_obezyana_31037.jpg' },
//   { name: 'Hasha Doszzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz', id: 2, followed: false, location: { country: 'Russia', city: 'Moscow' }, ava: 'https://avatarko.ru/img/avatar/8/muzyka_baraban_7428.jpg' },
//   { name: 'Kasha Pos', id: 3, followed: true, location: { country: 'Ukraine', city: 'Kiev' }, ava: 'https://avatarko.ru/img/avatar/11/muzyka_10561.jpg' },
//   { name: 'Lasha Nos', id: 4, followed: false, location: { country: 'Czech', city: 'Prague' }, ava: 'https://avatarko.ru/img/avatar/17/devushka_naushniki_16819.jpg' },
//   { name: 'Masha Los', id: 5, followed: true, location: { country: 'Country1', city: 'city1' }, ava: 'https://avatarko.ru/img/avatar/33/TMNT_naushniki_Michelangelo_32874.jpg' },
//   { name: 'Nasha Kos', id: 6, followed: false, location: { country: 'Country2', city: 'city2' }, ava: 'https://avatarko.ru/img/avatar/26/Novyj_god_TMNT_25109.jpg' },
//   { name: 'Pasha Bos', id: 7, followed: false, location: { country: 'Country3', city: 'city3' }, ava: 'https://avatarko.ru/img/avatar/6/zhivotnye_kot_5999.jpg' },
//   { name: 'Tasha Ros', id: 8, followed: false, location: { country: 'Country4', city: 'city4' }, ava: 'https://avatarko.ru/img/avatar/31/zhivotnye_nasekomye_muravei_30756.jpg' }
// ]
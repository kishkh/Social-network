import dialogsReducer from './reducers/dialogs-reducer';

const store = {
  _state: {
    profile: {
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
    },
    users: [
      {name: 'Andrew Olefir', id: 0, ava: 'https://i.pinimg.com/originals/9c/16/87/9c16872f4199e52e9a45292341108f42.jpg'},
      {name: 'Dasha Goshersonevich', id:1, ava: 'https://avatarko.ru/img/avatar/32/muzyka_obezyana_31037.jpg'},
      {name: 'Hasha Dos', id:2, ava:'https://avatarko.ru/img/avatar/8/muzyka_baraban_7428.jpg'},
      {name: 'Kasha Pos', id:3, ava:'https://avatarko.ru/img/avatar/11/muzyka_10561.jpg'},
      {name: 'Lasha Nos', id:4, ava:'https://avatarko.ru/img/avatar/17/devushka_naushniki_16819.jpg'},
      {name: 'Masha Los', id:5, ava:'https://avatarko.ru/img/avatar/33/TMNT_naushniki_Michelangelo_32874.jpg'},
      {name: 'Nasha Kos', id:6, ava:'https://avatarko.ru/img/avatar/26/Novyj_god_TMNT_25109.jpg'},
      {name: 'Pasha Bos', id:7, ava:'https://avatarko.ru/img/avatar/6/zhivotnye_kot_5999.jpg'},
      {name: 'Tasha Ros', id:8, ava:'https://avatarko.ru/img/avatar/31/zhivotnye_nasekomye_muravei_30756.jpg'}
    ],
    dialogs: {
      textValue: '',
      dialogsName: [{id:1}, {id:2}, {id:3}, {id:4}, {id:5}, {id:6}, {id:7}, {id:8}, ],
      messagesData: [
        {idName:1, messages:[
          {idMessage:1, idUser:1, message:'Some message 1'},
          {idMessage:2, idUser:1, message:'Some message 2djfndskjnfkjsnkfndkjsnfkjdsnkfjndskfnkdsjnfkndskjfndskjnfkjdsnfkjdsnkfndskfndksjnfkjsdnfkjdsnfkjndskjfnjkdsnfkjdsnfkjndskjfndskjnfkjdsnfkjdsnfkndsjkfndksjnff fdfdsjfdsfdsjnf'},
          {idMessage:3, idUser:0, message:'Some message 3'},
          {idMessage:4, idUser:0, message:'Some aslkmdsalkmdlskamdlsamldkmsalkdmslakmdlksamdlksamdlmsaldmsalkmdlsakmdlksamdlkmadlkmakldmlkamdlkmdalkmdlkamdlkmadklmalkmdlakmdlkmadlkmaldkmaldmlakmldkmalkdmlamdlakmdlkmalkdmalkmdlamdlkamdlkamdlkamdlkmlakmmessage 4'},
          {idMessage:5, idUser:0, message:'Somalskndlsakndklasndlksakldnsaklndlasn ndsalknlknklanslkdnlksand lnalknlknlknda lknlknaln lkanlnlknlk anlkn alkn lnlnlandlknaldnlk anln alkn lknal knl nlna ln laknl anlnlnlkn alkn alknkl nalnlkn lna lkn e message 5'},
          {idMessage:6, idUser:1, message:'Some message 6'},  
        ]
        },
        {idName:2, messages:[
          {idMessage:1, idUser:2, message:'Some message 1'},
          {idMessage:2, idUser:0, message:'Some message 2'},
          {idMessage:3, idUser:2, message:'Somdsa ds s dsdsdads sdadasdada adadad adda dadada adadada dad adad addadad adadada adada dddd ad dad adad aadada de message 3'}, 
          ]
        },
        {idName:3, messages:[
          {idMessage:1, idUser:3, message:'Some message 1'},
          {idMessage:2, idUser:0, message:'Some message 2'},
          {idMessage:3, idUser:0, message:'Some message 3'},
          {idMessage:4, idUser:3, message:'Some message 4'},
          {idMessage:5, idUser:3, message:'Some message 5'},
          {idMessage:6, idUser:0, message:'Some message 6'},
          {idMessage:7, idUser:0, message:'Some message 7'},
          {idMessage:8, idUser:3, message:'Some message 8'},  
          ]
        },
        {idName:4, messages:[
          {idMessage:1, idUser:0, message:'Some message 1'},
          {idMessage:2, idUser:4, message:'Some message 2'},
           
          ]
        },
        {idName:5, messages:[
          {idMessage:1, idUser:5, message:'Some message 1'},
          {idMessage:2, idUser:0, message:'Some message 2'},
          {idMessage:3, idUser:5, message:'Some message 3'},
          {idMessage:4, idUser:0, message:'Some message 4'},
          {idMessage:5, idUser:5, message:'Some message 5'},
          {idMessage:6, idUser:0, message:'Some message 6'},
            
          ]
        },
        {idName:6, messages:[
          {idMessage:1, idUser:6, message:'Some message 1'},
          {idMessage:2, idUser:0, message:'Some message 2'},
          {idMessage:3, idUser:6, message:'Some message 3'},
          {idMessage:4, idUser:0, message:'Some message 4'},
          {idMessage:5, idUser:0, message:'Some message 5'},
          
          ]
        },
        {idName:7, messages:[
          {idMessage:1, idUser:7, message:'Some message 1'}, 
          ]
        },
        {idName:8, messages:[
          {idMessage:1, idUser:8, message:'Some message 1'},
          {idMessage:2, idUser:0, message:'Some message 2'},
          {idMessage:3, idUser:8, message:'Some message 3'},
          {idMessage:4, idUser:0, message:'Some message 4'},
           
          ]
        },
      ]
    },
    tasks: [
      {idTask: 1, task:'Do something 1'},
      {idTask: 2, task:'Do something 2'},
      {idTask: 3, task:'Do something 3'},
      {idTask: 4, task:'Do something 4'},
      {idTask: 5, task:'Do something 5'},
      {idTask: 6, task:'Do something 6'},
    ],
    memories: [
      {idMemory: 1, memory:'My memory 1'},
      {idMemory: 2, memory:'My memory 2'},
      {idMemory: 3, memory:'My memory 3'},
      {idMemory: 4, memory:'My memory 4'},
      
    ],
    nodes: [
      {idNode: 1, node:' Some Node 1'},
      {idNode: 2, node:' Some Node 2'},
      {idNode: 3, node:' Some Node 3'},
      {idNode: 4, node:' Some Node 4'},
      {idNode: 5, node:' Some Node 5'},
    ],
    friends: [{id: 1}, {id: 5}, {id: 3},]
  },
  _callSubscriber() {
    console.log('state changed')
  },

  getState() {
    return this._state;
  },
  subscribe (func) {
    this._callSubscriber = (func);
  },
  
  dispatch(action) {
    dialogsReducer(this._state.dialogs, action);

    this._callSubscriber(this._state);
  },

}


export default store;
window.store = store;
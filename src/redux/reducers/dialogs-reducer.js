const initialState = {
  dialogsName: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 },],
  messagesData: [
    {
      idName: 1, textValue: '', messages: [
        { idMessage: 1, idUser: 1, message: 'Some message 1' },
        { idMessage: 2, idUser: 1, message: 'Some message 2djfndskjnfkjsnkfndkjsnfkjdsnkfjndskfnkdsjnfkndskjfndskjnfkjdsnfkjdsnkfndskfndksjnfkjsdnfkjdsnfkjndskjfnjkdsnfkjdsnfkjndskjfndskjnfkjdsnfkjdsnfkndsjkfndksjnff fdfdsjfdsfdsjnf' },
        { idMessage: 3, idUser: 0, message: 'Some message 3' },
        { idMessage: 4, idUser: 0, message: 'Some aslkmdsalkmdlskamdlsamldkmsalkdmslakmdlksamdlksamdlmsaldmsalkmdlsakmdlksamdlkmadlkmakldmlkamdlkmdalkmdlkamdlkmadklmalkmdlakmdlkmadlkmaldkmaldmlakmldkmalkdmlamdlakmdlkmalkdmalkmdlamdlkamdlkamdlkamdlkmlakmmessage 4' },
        { idMessage: 5, idUser: 0, message: 'Somalskndlsakndklasndlksakldnsaklndlasn ndsalknlknklanslkdnlksand lnalknlknlknda lknlknaln lkanlnlknlk anlkn alkn lnlnlandlknaldnlk anln alkn lknal knl nlna ln laknl anlnlnlkn alkn alknkl nalnlkn lna lkn e message 5' },
        { idMessage: 6, idUser: 1, message: 'Some message 6' },
      ]
    },
    {
      idName: 2, textValue: '', messages: [
        { idMessage: 1, idUser: 2, message: 'Some message 1' },
        { idMessage: 2, idUser: 0, message: 'Some message 2' },
        { idMessage: 3, idUser: 2, message: 'Somdsa ds s dsdsdads sdadasdada adadad adda dadada adadada dad adad addadad adadada adada dddd ad dad adad aadada de message 3' },
      ]
    },
    {
      idName: 3, textValue: '', messages: [
        { idMessage: 1, idUser: 3, message: 'Some message 1' },
        { idMessage: 2, idUser: 0, message: 'Some message 2' },
        { idMessage: 3, idUser: 0, message: 'Some message 3' },
        { idMessage: 4, idUser: 3, message: 'Some message 4' },
        { idMessage: 5, idUser: 3, message: 'Some message 5' },
        { idMessage: 6, idUser: 0, message: 'Some message 6' },
        { idMessage: 7, idUser: 0, message: 'Some message 7' },
        { idMessage: 8, idUser: 3, message: 'Some message 8' },
      ]
    },
    {
      idName: 4, textValue: '', messages: [
        { idMessage: 1, idUser: 0, message: 'Some message 1' },
        { idMessage: 2, idUser: 4, message: 'Some message 2' },

      ]
    },
    {
      idName: 5, textValue: '', messages: [
        { idMessage: 1, idUser: 5, message: 'Some message 1' },
        { idMessage: 2, idUser: 0, message: 'Some message 2' },
        { idMessage: 3, idUser: 5, message: 'Some message 3' },
        { idMessage: 4, idUser: 0, message: 'Some message 4' },
        { idMessage: 5, idUser: 5, message: 'Some message 5' },
        { idMessage: 6, idUser: 0, message: 'Some message 6' },

      ]
    },
    {
      idName: 6, textValue: '', messages: [
        { idMessage: 1, idUser: 6, message: 'Some message 1' },
        { idMessage: 2, idUser: 0, message: 'Some message 2' },
        { idMessage: 3, idUser: 6, message: 'Some message 3' },
        { idMessage: 4, idUser: 0, message: 'Some message 4' },
        { idMessage: 5, idUser: 0, message: 'Some message 5' },

      ]
    },
    {
      idName: 7, textValue: '', messages: [
        { idMessage: 1, idUser: 7, message: 'Some message 1' },
      ]
    },
    {
      idName: 8, textValue: '', messages: [
        { idMessage: 1, idUser: 8, message: 'Some message 1' },
        { idMessage: 2, idUser: 0, message: 'Some message 2' },
        { idMessage: 3, idUser: 8, message: 'Some message 3' },
        { idMessage: 4, idUser: 0, message: 'Some message 4' },

      ]
    },
  ]
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Send-Message':
      return {
        ...state,
        messagesData: state.messagesData.map(m => {
          if (m.idName === action.id && m.textValue !== '') {
            return {
              ...m,
              messages: [...m.messages, { idMessage: m.messages.length + 1, idUser: 0, message: m.textValue }],
              textValue: '',
            }
          }
          return m
        })
      }


    case 'Update-Text-Value':
      return {
        ...state,
        messagesData: state.messagesData.map(m => {
          if (m.idName === action.id) {
            return { ...m, textValue: action.value }
          }
          return m
        })
      }
    default:
      return state;
  }
}

export const sendMessageCreator = (id) => {
  return { type: 'Send-Message', id: id }
}

export const updateTextValueCreator = (value, id) => {
  return { type: 'Update-Text-Value', value: value, id: id }
}

export default dialogsReducer;
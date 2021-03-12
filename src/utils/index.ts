const { showMessage } = require('react-native-flash-message');

const flashError = (message, autoHide = true) => {
  if (typeof message === 'object') {
    message = message?.response?.data?.Mensagem ?? message.message;
  }

  showMessage({
    message: 'Login',
    icon: 'danger',
    duration: 3000,
    autoHide,
    floating: true,
    position: 'top',
    description: message ?? 'Erro desconhecido',
    type: 'danger',
  });
};

const flashSuccess = message => {
  showMessage({
    message: 'Login',
    position: 'top',
    icon: 'success',
    description: message ?? 'Done',
    type: 'success',
  });
};

export { flashError, flashSuccess };

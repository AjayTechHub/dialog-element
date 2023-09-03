const dialogBox = document.querySelector('dialog');

function showModal() {
  console.log('show modal');
  // dialogBox.show();
  dialogBox.showModal();
}

function closeModal() {
  console.log('close modal');
  dialogBox.close();
}

function onSubscribe() {
  console.log('on subscribe');
  const emailField = document.querySelector('form input[type="email"]');
  if (emailField) {
    console.log(emailField.value);
  }

  this.closeModal();
}
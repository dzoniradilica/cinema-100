const showReg = document.querySelector('#showRegistration')! as HTMLSpanElement;
const regForm = document.querySelector(
  '.registration-wrapper'
)! as HTMLDivElement;
const loginForm = document.querySelector('.login-wrapper')! as HTMLDivElement;

showReg.addEventListener('click', () => {
  loginForm.style.opacity = '0';
  loginForm.style.display = 'none';

  regForm.style.opacity = '100';
  regForm.style.transform = '1s ease';
  regForm.style.display = 'block';
});

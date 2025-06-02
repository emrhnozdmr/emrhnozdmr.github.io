const lengthInput = document.querySelector('#length-input'),
  lowercase = document.querySelector('#lowercase'),
  uppercase = document.querySelector('#uppercase'),
  numbers = document.querySelector('#numbers'),
  special = document.querySelector('#special'),
  copyBtn = document.querySelector('.copy-btn'),
  passwordField = document.querySelector('#password'),
  lengthValBox = document.querySelector(".length-val-box"),
  generateBtn = document.querySelector('.generate-btn'),
  checkboxes = [lowercase, uppercase, numbers, special];
let copyBtnTimer;

const mustCheckOne = (e) => {
  const checkedCount = checkboxes.filter(cb => cb.checked).length;
  if (checkedCount === 0) e.currentTarget.checked = true;
}

const generatePassword = () => {
  let password = '', charset = '';
  if (lowercase.checked) charset += 'abcdefghijklmnopqrstuvwxyz';
  if (uppercase.checked) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (numbers.checked) charset += '0123456789';
  if (special.checked) charset += '!@#$%^&*()_+[]{}|;:,.<>?';

  for (let i = 0; i < lengthInput.value; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  passwordField.value = password;
  clearTimeout(copyBtnTimer);
  copyBtn.classList.remove("copied");
}

const copyPassword = () => {
  passwordField.select();
  navigator.clipboard.writeText(passwordField.value);
  copyBtn.classList.add("copied");
  clearTimeout(copyBtnTimer);
  copyBtnTimer = setTimeout(() => copyBtn.classList.remove("copied"), 1000);
}

checkboxes.forEach(checkbox => checkbox.addEventListener('change', mustCheckOne));
lengthInput.addEventListener("input", () => lengthValBox.textContent = lengthInput.value)
copyBtn.addEventListener('click', copyPassword)
generateBtn.addEventListener('click', generatePassword)
window.onload = generatePassword;

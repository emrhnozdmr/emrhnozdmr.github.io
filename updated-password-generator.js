
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

// Checkbox'lardan en az birinin seçili kalmasını zorunlu kılar
const mustCheckOne = (e) => {
  const checkedCount = checkboxes.filter(cb => cb.checked).length;
  if (checkedCount === 0) e.currentTarget.checked = true;
};

// Güvenli rastgele karakter seçimi
const getRandomChar = (charset) => {
  const array = new Uint32Array(1);
  window.crypto.getRandomValues(array);
  return charset.charAt(array[0] % charset.length);
};

// Şifre oluşturur
const generatePassword = () => {
  let password = '', charset = '';
  if (lowercase.checked) charset += 'abcdefghijklmnopqrstuvwxyz';
  if (uppercase.checked) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (numbers.checked) charset += '0123456789';
  if (special.checked) charset += '!@#$%^&*()_+[]{}|;:,.<>?';

  if (!charset) {
    passwordField.value = "Select at least one option!";
    return;
  }

  for (let i = 0; i < lengthInput.value; i++) {
    password += getRandomChar(charset);
  }

  passwordField.value = password;
  clearTimeout(copyBtnTimer);
  copyBtn.classList.remove("copied");
  copyBtn.title = "Copy to clipboard";
};

// Şifreyi panoya kopyalar
const copyPassword = () => {
  passwordField.select();
  navigator.clipboard.writeText(passwordField.value);
  copyBtn.classList.add("copied");
  copyBtn.title = "Copied!";
  clearTimeout(copyBtnTimer);
  copyBtnTimer = setTimeout(() => {
    copyBtn.classList.remove("copied");
    copyBtn.title = "Copy to clipboard";
  }, 1000);
};

// Olay dinleyicileri
checkboxes.forEach(checkbox => checkbox.addEventListener('change', mustCheckOne));
lengthInput.addEventListener("input", () => lengthValBox.textContent = lengthInput.value);
copyBtn.addEventListener('click', copyPassword);
generateBtn.addEventListener('click', generatePassword);

// Sayfa yüklendiğinde otomatik şifre üret
window.onload = generatePassword;

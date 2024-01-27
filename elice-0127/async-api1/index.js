// 자유롭게 코드를 작성하여, 예시 화면이 구현되도록 해 보세요.
async function yoyo(e) {
    e.preventDefault();
  
    const res = await fetch(
      'https://randomuser.me/api/?password=upper,lower,number',
    );
    const data = await res.json();
    const foundData = data.results[0].login.password;
    password.innerHTML = foundData;
  }
  
  const buttonSubmit = document.querySelector('#buttonSubmit');
  const password = document.querySelector('#password');
  buttonSubmit.addEventListener('click', yoyo);
  // ""
  
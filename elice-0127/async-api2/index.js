// 자유롭게 코드를 작성하여, 예시 화면이 구현되도록 해 보세요.

async function dogfound(e) {
    e.preventDefault();
  
    const res = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await res.json();
  
    dogImage.setAttribute('src', data.message);
  }
  
  const dogImage = document.querySelector('#dogImage');
  const bottonSubmit = document.querySelector('#buttonSubmit');
  
  bottonSubmit.addEventListener('click', dogfound);
  
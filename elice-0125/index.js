// 자유롭게 코드를 작성하여, 예시 화면이 구현되도록 해 const
const selectEl = document.getElementById('selectEmployeeCode');
const buttonEl = document.getElementById('buttonSubmit');
const textEl = document.getElementById('employeeEmail');

buttonEl.addEventListener('click', ev => {
  ev.preventDefault();
  const selectEmployeeCode = selectEl.value;

  fetch('employees.json')
    .then(res => res.json())
    .then(data => {
      //1 . selectEmployeeCode 가진 employee찾기
      const targetEmployee = data.Employees.find(employee => {
        return employee.employeeCode == selectEmployeeCode;
      });
      //2. employee email address 가져오기
      const targetEmail = targetEmployee.emailAddress;
      //3. 이 email 주소 textEl innerHTML에 남기기
      textEl.innerHTML = targetEmail;
    })
    .catch(err => {
      console.log(err);
    });
});

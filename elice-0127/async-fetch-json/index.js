// 자유롭게 코드를 작성하여, 예시 화면이 구현되도록 해 보세요.

async function foundmail(e) {
    e.preventDefault();
  
    const selectEmp = selectEl.value;
    const res = await fetch('employees.json');
    const datas = await res.json();
    const foundData = datas.Employees.find(
      Employees => Employees.employeeCode === selectEmp,
    );
    console.log(selectEmp);
    console.log(datas.Employees[0].employeeCode);
    textEl.innerHTML = foundData.emailAddress;
  }
  
  const selectEl = document.getElementById('selectEmployeeCode');
  const buttonEl = document.getElementById('buttonSubmit');
  const textEl = document.getElementById('employeeEmail');
  
  buttonEl.addEventListener('click', foundmail);
  
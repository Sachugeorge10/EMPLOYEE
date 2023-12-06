let username2 = localStorage.getItem("USERNAME");
console.log(username2);

head1.innerHTML = `Welcome ${username2}`;

function logout() {
  localStorage.clear();
  window.location = "./index.html";
}

function addemploye() {
  let empid = document.getElementById("empid").value;
  let ename = document.getElementById("empname").value;
  let eadress = document.getElementById("empadress").value;
  let emedesi = document.getElementById("empdesi").value;
  let eexp = document.getElementById("empexp").value;
  let esalary = document.getElementById("empsalary").value;
  localStorage.setItem("ID", empid);
  localStorage.setItem("NMAE", ename);
  localStorage.setItem("ADRESS", eadress);
  localStorage.setItem("DESIGNATION", emedesi);
  localStorage.setItem("EXPIRENCE", eexp);
  localStorage.setItem("SALARy", esalary);
}

function search() {
  let r = document.getElementById("result");
  let data = document.getElementById("ans").value;
  let copy = localStorage.getItem("ID");
  console.log(copy);

  if (data === copy) {
    document.getElementById(
      "result"
    ).innerHTML = `<div class="card " style="width: 18rem;">
        <div class="card-header">
          Employee details
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Emplyee id ${localStorage.getItem(
            "ID"
          )}</li>
          <li class="list-group-item">Emplyee Name ${localStorage.getItem(
            "NMAE"
          )}</li>
          <li class="list-group-item">Emplyee Address ${localStorage.getItem(
            "ADRESS"
          )}</li>
          <li class="list-group-item">Emplyee Designation ${localStorage.getItem(
            "DESIGNATION"
          )}</li>
          <li class="list-group-item">Emplyee Expirence ${localStorage.getItem(
            "EXPIRENCE"
          )}</li>
          <li class="list-group-item">Emplyee Salary ${localStorage.getItem(
            "SALARy"
          )}</li>
          
        </ul>
      </div>`;
  }
}

let studentsTableBody=document.querySelector("#students-table tbody"),getStudentsButton=document.getElementById("get-students-btn"),studentForm=document.getElementById("add-student-form");function getStudents(){fetch("http://localhost:3000/students").then(t=>t.json()).then(renderStudents).catch(()=>{})}function renderStudents(t){studentsTableBody.innerHTML=makeStudentsMarkup(t)}let makeStudentsMarkup=t=>t.map(t=>`
      <tr>
        <td>${t.id}</td>
        <td>${t.name}</td>
        <td>${t.age}</td>
        <td>${t.course}</td>
        <td>${t.skills.join(", ")}</td>
        <td>${t.email}</td>
        <td>${t.isEnrolled?"Так":"Ні"}</td>
        <td>
          <button class="edit-btn" data-id="${t.id}">\u{420}\u{435}\u{434}\u{430}\u{433}\u{443}\u{432}\u{430}\u{442}\u{438}</button>
          <button class="delete-btn" data-id="${t.id}">\u{412}\u{438}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{438}</button>
        </td>
      </tr>
    `).join("");function addStudent(t){return fetch("http://localhost:3000/students",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json; charset=UTF-8"}})}getStudentsButton.addEventListener("click",getStudents),studentForm.addEventListener("submit",t=>{t.preventDefault(),addStudent({name:form.name.value.trim(),age:Number(form.age.value),course:form.course.value.trim(),skill:form.skill.value.trim(),email:form.email.value.trim(),isEnrolled:form.isEnrolled.checked}).then(()=>{studentForm.reset(),getStudents()}).catch(()=>{})});let editingId=null;function updateStudent(t){fetch(`http://localhost:3000/students/${t}`).then(t=>t.json()).then(({name:e,age:d,course:n,skills:u,email:s,isEnrolled:a})=>{studentForm.name.value=e,studentForm.age.value=d,studentForm.course.value=n,studentForm.skills.value=u.join(", "),studentForm.email.value=s,studentForm.isEnrolled.checked=a,editingId=t})}function updateStudentData(t,e){return fetch(`http://localhost:3000/students/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}function deleteStudent(t){return fetch(`http://localhost:3000/students/${t}`,{method:"DELETE"})}studentForm.addEventListener("submit",t=>{t.preventDefault();let e={name:studentForm.name.value.trim(),age:Number(studentForm.age.value),course:studentForm.course.value.trim(),skills:studentForm.skills.value.replace(/\s*,\s*/g,",").split(","),email:studentForm.email.value.trim(),isEnrolled:studentForm.isEnrolled.checked};editingId?updateStudentData(editingId,e).then(()=>{studentForm.reset(),getStudents()}).catch(()=>{}):addStudent(e).then(()=>{studentForm.reset(),getStudents()}).catch(()=>{})}),studentsTableBody.addEventListener("click",t=>{t.target.classList.contains("edit-btn")&&updateStudent(t.target.dataset.id)}),studentsTableBody.addEventListener("click",t=>{t.target.classList.contains("delete-btn")&&deleteStudent(t.target.dataset.id).then(()=>getStudents()).catch(()=>{})});
//# sourceMappingURL=hm__18_finale.19a199aa.js.map

import { students } from "../data/students.js";
const tblStudentsTbody = document.querySelector("#tblStudents tbody");
const loadData = () => {
  let strHtml = "";
  students.forEach((student, index) => {
    strHtml += `<tr>
        <th scope="row">${index+1}</th>
        <td>${student.name}</td>
        <td class="score">${student.point}</td>
        <td><button class="btn-delete btn btn-danger">🗑️</button></td>
      </tr>`;
  });
  tblStudentsTbody.innerHTML = strHtml;
};
loadData();
/* EVENTS */
document.getElementById("btnShowLowScores").addEventListener("click", ()=>{
  const lastTDs = tblStudentsTbody.querySelectorAll("tr td.score");
  console.log(lastTDs);
  lastTDs.forEach( (td, index)=> {
      if(td.innerText<96){  // notlari 96 dan kucuk olanlari aldik
          //td.style.backgroundColor = "red";
          tblStudentsTbody.querySelector(`tr:nth-child(${index+1})`).style.backgroundColor = "red";
      }
  })
});
document.querySelectorAll(".btn-delete").forEach( (button)=> {  // butun diziyi cagirmak icin once for each kullandik
  button.addEventListener("click", (e)=>{
    e.stopPropagation();// olayın parent lara aktarılmasını engeller.
    const name = e.target.closest("tr").querySelector("td").innerText; // td icine girdik
    const result = confirm(`Are you sure to delete ${name}?`); //isimleri aldik silmek icin name ile
    if(result){
        //silme işlemi
    }
  })
});
 
/* EVENTS */
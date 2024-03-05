
// document.getElementById('search-button').addEventListener('click', graphs_parameters());

// const patientID=document.getElementById('patient-id').value;

// console.log(sessionStorage.getItem("sub_id"));
console.log("hello this is first page");

// WHEN button is pressed for second page it generate api request and at the same time goes to next page

// DATATABLE.HTML
const urlParams = new URLSearchParams(window.location.search);
const patientId = urlParams.get('patient_id');



async function update_diagnose_col() {
    
  try {
    const patientID1=document.getElementById('patient-id').value;
    const response = await fetch(`http://127.0.0.1:5000/patient/?sub_id=${patientID1}`);

    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    
    const table = document.getElementById('patient-details-diagnoses');
    const tbody = table.querySelector('tbody');

    tbody.innerHTML = '';

    data.forEach(row => {
      {
        const tr = document.createElement('tr');

        const tdName = document.createElement('td');
        tdName.textContent = row.name;
        tr.appendChild(tdName);

        const tdAge = document.createElement('td');
        tdAge.textContent = row.age;
        tr.appendChild(tdAge);

        const tdupdated_intime = document.createElement('td');
        tdupdated_intime.textContent = row.updated_intime;
        tr.appendChild(tdupdated_intime);

        const tdupdated_outtime = document.createElement('td');
        tdupdated_outtime.textContent = row.updated_outtime;
        tr.appendChild(tdupdated_outtime);

        tbody.appendChild(tr);
    }
  });
  console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
  
}



// PATIENTJOURNEY
export async function update_column(x) {
  const subId = x; // Replace this with the desired sub_id.
  // const response = await fetch(`../widgets/sample.json`);
  console.log(x);
  try {
   // alert(`http://127.0.0.1:5000/patient/?sub_id=${subId}`)
    const response = await fetch(`http://127.0.0.1:5000/patient/?sub_id=${subId}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  
  const data = await response.json();
  console.log(data);
  const table = document.getElementById('table_id_3');
  const tbody = table.querySelector('tbody');

  tbody.innerHTML = '';


  data.forEach(row => {
    const tr = document.createElement('tr');

    const tdSubjectId = document.createElement('td');
    tdSubjectId.textContent = row.subject_id;
    tr.appendChild(tdSubjectId);

    const tdAnchorAge = document.createElement('td');
    tdAnchorAge.textContent = row.anchor_age;
    tr.appendChild(tdAnchorAge);

    const tdGender = document.createElement('td');
    tdGender.textContent = row.gender;
    tr.appendChild(tdGender);

    const tdDodUpdated = document.createElement('td');
    tdDodUpdated.textContent = row.dod_updated;
    tr.appendChild(tdDodUpdated);

    tbody.appendChild(tr);
});
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
  
}




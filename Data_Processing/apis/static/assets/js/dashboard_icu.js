// document.getElementById('icu-detail').addEventListener('click', icu_careunit(),fetchTotalPatients());
// window.onload = function() {
    
//     icu_careunit()
//   };

export async function fetchTotalPatients(parameters) 

{
    //alert("the icu patient parameters are "+parameters)

  

    const months = {
      "January": "01","February": "02","March": "03","April": "04","May": "05","June": "06","July": "07","August": "08","September": "09","October": "10","November": "11","December": "12"
    };
    const shift = {"00:00:00 - 04:00:00": "00:00:00" , "04:00:00 - 08:00:00" : "04:00:00","08:00:00 - 12:00:00" : "08:00:00" ,"12:00:00 - 16:00:00" : "12:00:00" , "16:00:00 - 20:00:00" :"16:00:00 ","20:00:00 - 00:00:00" : "20:00:00"}
   

    try {
      if (Object.keys(months).includes(parameters[1])){
        var final_parameter= parameters[2].toString()+"-" +months[parameters[1]] +"-"+ parameters[0].toString();
      }
      else{
        var final_parameter= parameters[2].toString()+"-" + parameters[1] +"-"+ parameters[0].toString();
      }
        
        const response = await fetch(`http://127.0.0.1:5000/icu_detail?shift_id=${final_parameter}&shift_time=${shift[parameters[4]]}`);
    
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    if (document.getElementById('local_time')){
    

    }


   
    const totalPatientsH1 = document.getElementById('total-patient-icu-head');
    
    const patient_intake = document.getElementById('patient-intake');
    const patient_outake = document.getElementById('patient-outake');
    const patient_los= document.getElementById('total-los-head');
    const bed_in_icu=document.getElementById("total-bed-icu-head");
    console.log("done with pickers");

    console.log(data[0]["average_los"])
    // // getting element from api
    var los=data[0]["average_los"]
    var intake=data[0]["patient_intake_count"]
    var outake=data[0]["patient_out_count"]
    var total_patient=data[0]["total_icu_patients"]
    var total_bed=100-total_patient
    console.log(los)
      
    // // getting element to html
    totalPatientsH1.textContent=total_patient
    patient_intake.textContent=intake +" Intake"
    patient_outake.textContent=outake +" Dischage "
    patient_los.textContent=los
    bed_in_icu.textContent=total_bed


    // const totalPatientsH1 = document.getElementById('total-patient-icu-head');

  } catch (error) {
    console.error('Error:', error);
  }
}


export async function icu_careunit(parameters){
    
  const months = {
    "January": "01","February": "02","March": "03","April": "04","May": "05","June": "06","July": "07","August": "08","September": "09","October": "10","November": "11","December": "12"
  };
  const shift = {"00:00:00 - 04:00:00": "00:00:00" , "04:00:00 - 08:00:00" : "04:00:00","08:00:00 - 12:00:00" : "08:00:00" ,"12:00:00 - 16:00:00" : "12:00:00" , "16:00:00 - 20:00:00" :"16:00:00 ","20:00:00 - 00:00:00" : "20:00:00"}
   
 
    try {
        

        if (Object.keys(months).includes(parameters[1])){
          var final_parameter= parameters[2].toString()+"-" +months[parameters[1]] +"-"+ parameters[0].toString();
        }
        else{
          var final_parameter= parameters[2].toString()+"-" + parameters[1] +"-"+ parameters[0].toString();
        }
         // const patientID1=document.getElementById('patient-id').value;
         //alert(`http://127.0.0.1:5000/care_unit/?shift_date=${final_parameter}&shift_time=${shift[parameters[4]]}`)
        const response = await fetch(`http://127.0.0.1:5000/care_unit/?shift_date=${final_parameter}&shift_time=${shift[parameters[4]]}`);
    
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        // data=data[0]
        console.log(data)
        //alert(data);
    // getting element from HTML
    const MICU_ = document.getElementById('MICU');
    const MSICU_ = document.getElementById('MSICU');
    const CVICU_ = document.getElementById('CVICU');
    const NI_ = document.getElementById('NI');
    const SICU_ = document.getElementById('SICU');
    const TSICU_ = document.getElementById('TSICU');
    const CCU_ = document.getElementById('CCU');
    const NSISU_ = document.getElementById('NSISU');

    // getting element from api request
    var CVICU=data[0]["Cardiac Vascular Intensive Care Unit (CVICU)"]
    var CCU=data[0]["Coronary Care Unit (CCU)"]
    var MICU=data[0]["Medical Intensive Care Unit (MICU)"]
    var MSICU=data[0]["Medical/Surgical Intensive Care Unit (MICU/SICU)"]
    var NI=data[0]["Neuro Intermediate"]
    var NSISU=data[0]["Neuro Surgical Intensive Care Unit (Neuro SICU)"]
    var SICU=data[0]["Surgical Intensive Care Unit (SICU)"]
    var TSICU=data[0]["Trauma SICU (TSICU)"]

    // changing element text to api request element
    console.log(MSICU)
    MICU_.textContent=MICU
    MSICU_.textContent=MSICU
    CVICU_.textContent=CVICU
    NI_.textContent=NI
    SICU_.textContent=SICU
    TSICU_.textContent=TSICU
    CCU_.textContent=CCU
    NSISU_.textContent=NSISU
    
    // console.log(formattedDate);

    // changing element text to api request element
    
} catch (error) {
    console.error('Error:', error);
  }
}





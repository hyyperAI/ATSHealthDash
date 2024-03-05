// Bar Chart

function d2c_barChart(){
    const barChart = document.getElementById('barChart');
    new Chart(barChart, {
    type: 'line',
        data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12',"13","14","15","16" ,"17","18","19","20","21","22","23","24"],
        datasets: [{
            label: 'Patients',
            data: [21, 18, 15, 10, 22, 26, 15, 23, 19, 20, 16, 13, 19, 15, 12, 18, 20, 21, 30, 24, 18, 21, 19, 14, 24, 18, 16, 26, 19, 18, 26],
            backgroundColor: [
                'rgb(63, 81, 181)',
            ],
            borderColor: [
                'rgb(63, 81, 181)',
            ],
            borderWidth: 1
        }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    });
}d2c_barChart();






export async function graph_prediction(paramters) {
    //alert("fetch function of charts");
    const months = {"January": 1,"February": 2,"March": 3,"April": 4,"May": 5,"June": 6,"July": 7,"August": 8,"September": 9,"October": 10,"November": 11,"December": 12};
    //const martices={"Patient intake":"patient_intake_count" ,"Patient out":"patient_out_count" ,"Total Patient":"total_icu_patients" ,"Average length of stay":"average_los"}
    const martices={"Patient Intake Count":"patient_intake_count" ,"Patient Out Count":"patient_out_count" ,"Total Patients in ICU":"total_icu_patients" ,"Average Length of Stay":"average_los"}
    try {
        const apiUrl = `http://127.0.0.1:5000/daily_agg2?year=${paramters[2]}&metric=${martices[paramters[3]]}&month=${months[paramters[1]]}`;
       

        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        var data = await response.json();
        console.log(data);

       } catch (error) {
        console.error("Error fetching data:", error);
        // Set default data in case of an error
        var data = {
            "present_values": [21, 18, 15, 10, 22, 26, 15, 23, 19, 20, 16, 13, 19, 15, 12, 18, 20, 21, 30, 24, 18, 21, 19, 14, 24, 18, 16, 26, 19, 18, 26],
            "past_values": [34, 17, 17, 9, 28, 15, 21, 28, 27, 17, 12, 23, 16, 20, 21, 11, 16, 24, 20, 14, 22, 14, 20, 27, 13, 15, 18, 20, 15, 20, 16]
        };
        // You can still call your chart function here if needed
       }
}


//  // paramaters should be datetime and metric obj that then api get and work on it 
// const months = {
//     "January": "01","February": "02","March": "03","April": "04","May": "05","June": "06","July": "07","August": "08","September": "09","October": "10","November": "11","December": "12"
//   };
//   const shift = {"00:00:00 - 04:00:00": "00:00:00" , "04:00:00 - 08:00:00" : "04:00:00","08:00:00 - 12:00:00" : "08:00:00" ,"12:00:00 - 16:00:00" : "12:00:00" , "16:00:00 - 20:00:00" :"16:00:00 ","20:00:00 - 00:00:00" : "20:00:00"}
 
//  try{
//    var final_parameter= parameters[2].toString()+"-" + months[parameters[1]] +"-"+ parameters[0].toString()+"T" +shift[09:00:00.000Z]";
//     const apiUrl="http://127.0.0.1:5000/prediction/?date=2008-02-01T09:00:00.000Z"


// Line Chart
function d2c_lineChart(){
    const lineChart = document.getElementById('lineChart');
    new Chart(lineChart, {
        type: 'line',
        data: {
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
            datasets: [{
                label: 'Line',
                data: [20,40,60,80,62,11,36,47,83,45,92,62,53,78,60],
                fill: false,
                borderColor: 'rgb(66, 133, 244)',
                tension: 0.1,
                borderWidth: 2,
            }]
        },
        options: {
            animations: {
                tension: {
                  duration: 1000,
                  easing: 'linear',
                  from: 1,
                  to: 0,
                  loop: true
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}d2c_lineChart();

// Area Chart
function d2c_areaChart(){
    const areaChart = document.getElementById('areaChart');
    new Chart(areaChart, {
        type: 'line',
        data: {
            labels: [1,2,3,4,5,6,7,8],
        datasets: [{
            label: 'Series 1',
            data: [100, 20, 45, 15, 60, 58, 85, 95],
            fill: true,
            borderColor: 'rgba(63, 81, 181)',
            backgroundColor: 'rgba(63, 81, 181, 0.8)',
            borderWidth: 1
        },
        {
            label: 'Series 2',
            data: [30, 80, 82, 56, 58, 5, 80, 100],
            fill: true,
            borderColor: 'rgba(156, 39, 176)',
            backgroundColor: 'rgba(156, 39, 176, 0.6)',
            borderWidth: 1
        }]
        },
        options: {
            animations: {
                tension: {
                  duration: 3000,
                  easing: 'linear',
                  from: 0,
                  to: 1,
                  loop: true
                }
            },
            plugins: {
                filler: {
                    propagate: true
                }
            }
        }
    });
}d2c_areaChart();   


// bubble Chart
function d2c_bubbleChart(){
    const bubbleChart = document.getElementById('bubbleChart');
    new Chart(bubbleChart, {
        type: 'bubble',
        data: {datasets: [{
            label: 'Dataset',
            data: [
                { x: 20, y: 30, r: 15 },
                { x: 40, y: 10, r: 10 },
                { x: 25, y: 50, r: 20 },
                { x: 10, y: 15, r: 8 },
                { x: 60, y: 80, r: 25 },
                { x: 35, y: 70, r: 18 },
                { x: 45, y: 30, r: 12 },
                { x: 15, y: 40, r: 18 },
                { x: 55, y: 20, r: 14 },
                { x: 70, y: 60, r: 22 },
                { x: 30, y: 25, r: 10 },
                { x: 50, y: 45, r: 16 },
                { x: 80, y: 30, r: 12 },
                { x: 25, y: 10, r: 8 },
                { x: 65, y: 45, r: 15 },
                { x: 22, y: 18, r: 7 },
                { x: 48, y: 62, r: 21 },
                { x: 33, y: 27, r: 9 },
                { x: 58, y: 53, r: 17 },
                { x: 75, y: 40, r: 13 }
            ],
            backgroundColor: ['#EF233C', '#FFC107', '#16DB65', '#212A39']
        }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
            }
        },
    });
}d2c_bubbleChart();   

// Doughnut Chart
function d2c_doughnutChart(){
    const doughnutChart = document.getElementById('doughnutChart');
    new Chart(doughnutChart, {
        type: 'doughnut',
        data: {
            labels: [
                'Sales',
                'New User'
            ],
            datasets: [{
                label: 'Dughnut Dataset',
                data: [300, 50],
                backgroundColor: [
                'rgb(66, 133, 244)',
                'rgb(63, 81, 181)'
                ],
                hoverOffset: 4
            }]
        },
        options: {
            animations: {
                tension: {
                  duration: 3000,
                  easing: 'linear',
                  from: 0,
                  to: 1,
                  loop: true
                }
            }
        }
    });
}d2c_doughnutChart();

// Polar Chart
function d2c_polarChart(){
    const polarChart = document.getElementById('polarChart');
    new Chart(polarChart, {
        type: 'polarArea',
        data: {
            labels: [
              'Series 1',
              'Series 2',
              'Series 3',
            ],
            datasets: [{
              label: 'Polar Dataset',
              data: [11, 16, 7],
              backgroundColor: [
                'rgb(255, 193, 7)',
                'rgb(66, 133, 244)',
                'rgb(63, 81, 181)',
              ]
            }]
        },
        maintainAspectRatio: false,
        options: {
            animations: {
                tension: {
                  duration: 3000,
                  easing: 'linear',
                  from: 0,
                  to: 1,
                  loop: true
                }
            },
        }
    });
}d2c_polarChart();
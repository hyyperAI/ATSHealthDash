

$(function () {
    "use strict";

    $(document).ready(async function () {
        // Function to fetch data from the API
        

        // Bar Chart 2
        async function d2c_barChart_2() {
            // Fetch data from the API

            var options = {
                chart: {
                    type: 'line',
                    toolbar: {
                        show: false,
                    },
                },
                series: [{
                        name: 'Income',
                        data: [234,23,23,23,23,],
                    },
                    {
                        name: 'Expense',
                        data: [45,6,65,4,556,46,6],
                    }
                ],
                colors: ['#6F6AF8', '#1C1955'],
                legend: {
                    show: false,
                    position: 'top',
                    horizontalAlign: 'right',
                },
                title: {
                    text: "",
                    align: 'left',
                    margin: 0,
                    offsetX: 0,
                    offsetY: 15,
                    floating: false,
                    style: {
                        fontSize: '18px',
                        fontWeight: 'bold',
                        color: '#263238'
                    },
                },
                plotOptions: {
                    heatmap: {
                        radius: 30,
                    }
                },
                dataLabels: {
                    enabled: false,
                },
                yaxis: {
                    lines: {
                        show: false,
                    }
                },
                xaxis: {
                    categories: ["Jan", "Feb", "Marc", "April", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
                },
                plotOptions: {
                    bar: {
                        borderRadius: 10,
                    },
                }
            }

            var chart = new ApexCharts(document.querySelector("#bar-Chart-2"), options);
            chart.render();
        }

        // Call the function to initialize the chart with data from the API
        await d2c_barChart_2();


    })
})


// Line Chart 2
// PREDICTION CHART
function d2c_lineChart_2(data,y_axis_title,month,year) {
    
    var year2=parseInt(year, 10) - 1
    var options = {
        series: [{
                name: year,
                data: data["present_values"],
            },
            {
                name: year2,
                data: data["past_values"],
            }
        ],
        chart: {
            type: 'line',
            zoom: {
                enabled: true
            },
            toolbar: {
                show: false
            },
        },
        colors: ['#EF233C', '#686699'],
        dataLabels: {
            enabled: false
        },
        markers: {
            size: 2,
        },
        stroke: {
            width: 2,
            curve: 'smooth',
            dashArray: [0, 4]
        },
        legend: {
            show: false
        },
        markers: {
            size: 0,
            hover: {
                sizeOffset: 2
            }
        },
        xaxis: {
            categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12',"13","14","15","16" ,"17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"],
            tickPlacement: 'on',
            title:{
                text:month,
            }
        },
        yaxis: {
            title: {
              text: y_axis_title,
            }},
        grid: {
            borderColor: '#f1f1f1',
        }
    };

    var chart = new ApexCharts(document.querySelector("#dashboard-line-Chart"), options);
    chart.render();
}

  
export async function fetchData(paramters) {
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
        console.log(data["present_values"][0]);

        // Assuming your API response structure contains keys like "session_duration", "total_visits", and "categories"
        d2c_lineChart_2(data, paramters[3], paramters[1], paramters[2]);
    } catch (error) {
        console.error("Error fetching data:", error);
        // Set default data in case of an error
        var data = {
            "present_values": [21, 18, 15, 10, 22, 26, 15, 23, 19, 20, 16, 13, 19, 15, 12, 18, 20, 21, 30, 24, 18, 21, 19, 14, 24, 18, 16, 26, 19, 18, 26],
            "past_values": [34, 17, 17, 9, 28, 15, 21, 28, 27, 17, 12, 23, 16, 20, 21, 11, 16, 24, 20, 14, 22, 14, 20, 27, 13, 15, 18, 20, 15, 20, 16]
        };
        // You can still call your chart function here if needed
        d2c_lineChart_2(data, paramters[3], paramters[1], paramters[2]);
    }
}


// Area Chart
function d2c_areaChart_2() {
    var options = {
        series: [{
                name: 'South',
                data: [30, 80, 82, 56, 58, 130, 80, 90, 64, 27, 94, 100],
            },
            {
                name: 'North',
                data: [100, 20, 45, 15, 60, 5, 85, 95, 5, 34, 80, 105],
            }
        ],
        chart: {
            type: 'area',
            height: 350,
            stacked: true,
            toolbar: {
                show: false,
            }
        },
        colors: ['rgba(103, 58, 183, 0.8)', 'rgba(63, 81, 181, 0.8)'],
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        fill: {
            type: 'gradient',
            gradient: {
                opacityFrom: 0.6,
                opacityTo: 1,
            }
        },
        legend: {
            show: false
        },
        xaxis: {
            type: 'Month',
            categories: ["Jan", "Feb", "Marc", "April", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
        },
    };

    var chart = new ApexCharts(document.querySelector("#dashboard-area-chart"), options);
    chart.render();
}
d2c_areaChart_2();

// Pai Chart 2
function d2c_paiChart_2() {
    var options = {
        series: [82, 18],
        chart: {
            type: 'pie',
        },
        colors: ['#1C1955', '#686699'],
        labels: ["Positive", "Negative"],
        dataLabels: {
            formatter(val, opts) {
                const name = opts.w.globals.labels[opts.seriesIndex]
                return [name, val.toFixed(1) + '%']
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
              legend: {
                show: false
              }
            }
        }],
        legend: {
            position: 'top',
            horizontalAlign: 'left',   
        },
    };

    var chart = new ApexCharts(document.querySelector("#dashboard-pai-Chart"), options);
    chart.render();
}
d2c_paiChart_2();

// ----------------------------------------------------------------
// prediction

function d2c_barChart(prediction_list, datelist){
    Chart.register({
        id: 'verticalLinePlugin',
        afterDraw: function(chart) {
            const ctx = chart.ctx;
            const xAxis = chart.scales['x'];
            const yAxis = chart.scales['y'];
            const index = 6; // the index of the datapoint where you want to draw the vertical line
            const x = xAxis.getPixelForValue(chart.data.labels[index]);
            const yTop = yAxis.top;
            const yBottom = yAxis.bottom;
    
            ctx.save();
            ctx.beginPath();
            ctx.setLineDash([5, 5]); // set the line style to dotted with a dash length of 5
            ctx.moveTo(x, yTop);
            ctx.lineTo(x, yBottom);
            ctx.lineWidth = 2;
            ctx.strokeStyle = '#B80000';
            ctx.stroke();
    
            // draw the dots
            ctx.fillStyle = 'FFE165';
            ctx.beginPath();
            ctx.arc(x, yTop, 3, 0, 2 * Math.PI); // top dot
            ctx.fill();
            ctx.arc(x, yBottom, 3, 0, 2 * Math.PI); // bottom dot
            ctx.fill();
    
            const halfHeight = (yBottom - yTop) / 4;
            ctx.arc(x, yTop + halfHeight, 3, 0, 2 * Math.PI); // middle dots
            
            ctx.arc(x, yTop + halfHeight * 2, 3, 0, 2 * Math.PI); // middle dots
            
    
            ctx.restore();
        }
    });
    
    const lineChart = document.getElementById('barChart');
    if (lineChart.chart) {
        lineChart.chart.destroy();
        
       // alert("there is chart to destroy");
    }
    
    lineChart.chart = new Chart(lineChart, {
    type: 'line',
        data: {
        labels: datelist,
        datasets: [
            {
            label: 'Patients Intake Count',
            data:prediction_list[0],
            fill: false,
                borderColor: '#96BB7C',
                tension: 0.1,
                borderWidth: 2
        },
    {
        label: 'Average Length of Stay',
            data:prediction_list[1],
            fill: false,
                borderColor: '#FF9843',
                tension: 0.1,
                borderWidth: 2
    }]
        },
        options: {
            plugins: {
                verticalLinePlugin: {
                    enabled: true
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                      display: true,
                      text: 'Intake Count / Average Length of Stay (Day)',
                      font:{
                        size:20,

                      }
                    },
                    
                   
                  },
                  x:{
                    ticks: {
                        // For a category axis, the val is the index so the lookup via getLabelForValue is needed
                        callback: function(val, index) {
                          // Hide every 2nd tick label
                          return index % 2 === 0 ? this.getLabelForValue(val) : '';
                        },
                    },
                    title:{
                        display:true,
                        fontSize:24,
                        text:"Date and Shift Times",
                        font:{
                            size:20
                        }

                    }
                  }
                  
                
            }
        }
    });
};


export async function single_prediction(paramters) {
    const months = {"January": 1,"February": 2,"March": 3,"April": 4,"May": 5,"June": 6,"July": 7,"August": 8,"September": 9,"October": 10,"November": 11,"December": 12};
    //const martices={"Patient intake":"patient_intake_count" ,"Patient out":"patient_out_count" ,"Total Patient":"total_icu_patients" ,"Average length of stay":"average_los"}
    const martices={"Patient Intake Count":"patient_intake_count" ,"Patient Out Count":"patient_out_count" ,"Total Patients in ICU":"total_icu_patients" ,"Average Length of Stay":"average_los"}
    
    const shift = {"00:00:00 - 04:00:00": "00:00:00" , "04:00:00 - 08:00:00" : "04:00:00","08:00:00 - 12:00:00" : "08:00:00" ,"12:00:00 - 16:00:00" : "12:00:00" , "16:00:00 - 20:00:00" :"16:00:00 ","20:00:00 - 00:00:00" : "20:00:00"}
   
    try {
        const apiUrl =`http://127.0.0.1:5000/prediction2/?date=${paramters[0]}-${months[paramters[1]]}-${paramters[2]} ${shift[paramters[4]]}`;
        console.log(apiUrl)
        
        
        const response = await fetch(apiUrl);
  
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        var data = await response.json();
        console.log(data[0].patient_intake);

        const patientIntakeList = data[0].patient_intake ? Object.values(data[0].patient_intake) : [];
        console.log("this is new")
        console.log(patientIntakeList);
        // Extract patient_los values
        const patientLosList = data[1].patient_los ? Object.values(data[1].patient_los) : [];
        
        // Combine the arrays
        const combinedList = [patientIntakeList,patientLosList]
        const datelist=data[1].patient_los? Object.keys(data[1].patient_los)  : [];

        console.log(datelist);
 
        
        d2c_barChart(combinedList , datelist);
  
        // Assuming your API response structure contains keys like "session_duration", "total_visits", and "categories"
        //d2c_lineChart_2(data, paramters[3], paramters[1], paramters[2]);
    } catch (error) {
        // Set default data in case of an error
        var combinedList = [
             [1, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2],
             [3.239, 2.952, 3.361, 3.571, 3.315, 3.248, 3.385, 2.832, 3.337, 3.547, 3.469, 3.4]
        ];
        var datelist=['2016/11/30 00:00:00', '2016/11/30 04:00:00', '2016/11/30 08:00:00', '2016/11/30 12:00:00',
         '2016/11/30 16:00:00', '2016/11/30 20:00:00', '2016/12/01 00:00:00', '2016/12/01 04:00:00', '2016/12/01 08:00:00',
          '2016/12/01 12:00:00', '2016/12/01 16:00:00', '2016/12/01 20:00:00']
        
        d2c_barChart(combinedList,datelist);
        // You can still call your chart function here if needed
        //d2c_lineChart_2(data, paramters[3], paramters[1], paramters[2]);
    }
  }
  


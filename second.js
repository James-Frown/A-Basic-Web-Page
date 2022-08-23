var totalUsers = 0;

var currentDay;

function addRange(input, target) {
    totalUsers = input;
    target.innerHTML = input.value;
    input.value = "0";
}

function clearRange(input, target) {
    totalUsers = 0;
    input.value = "0";
    target.innerHTML = input.value;
}

function weeklyOut(outPut2) {
    outPut2.innerHTML = "weekly";
}

function monthlyOut(outPut2) {
    outPut2.innerHTML = "Monthly";
}

function buildChart(userChartVar) {

    switch (new Date().getDay()) {
        case 0:
            currentDay = "Sunday";
            break;
        case 1:
            currentDay = "Monday";
            break;
        case 2:
            currentDay = "Tuesday";
            break;
        case 3:
            currentDay = "Wednesday";
            break;
        case 4:
            currentDay = "Thursday";
            break;
        case 5:
            currentDay = "Friday";
            break;
        case 6:
            currentDay = "Saturday";
            break;
    }

    var xValues = [currentDay];



    var yValues = [];

    for (let i = 0; i <= varX; i++) {
        xValues.push(i);
    }

    for (let m = 0; m <= varY; m++) {
        yValues.push(m);
    }

    var dataValues = randData;

    new Chart(varChart, {
        type: "line",
        data: {
            labels: xValues,
            datasets: [{
                fill: false,
                lineTension: 0,
                backgroundColor: "rgba(0,0,255,1.0)",
                borderColor: "rgba(0,0,255,0.1)",
                data: dataValues
            }]
        },
        options: {
            legend: { display: false },
            scales: {
                yAxes: [{ ticks: { min: yValues[0], max: yValues[yValues.length - 1] } }],
            }
        }
    });

}
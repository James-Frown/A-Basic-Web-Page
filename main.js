let xData = [];

let yData = [];

let randData = [];

function getDay(target) {
    let day;
    switch (new Date().getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
    }
    target.innerHTML = day;
}

function clearData(target) {
    target.innerHTML = "";
    randData = [];
}

function getYRange(input, target) {
    for (let i = 0; i <= input; i++) {
        yData.push(i);
        console.log(yData);
    }
    target.innerHTML = input.value;
    input.value = "0";
    return;
}

function getXRange(input, target) {
    for (let i = 0; i <= input; i++) {
        xData.push(i);
        console.log(xData);
    }
    target.innerHTML = input.value;
    input.value = "0";
    return;
}

function getRandomData(var1, Var2, target) {
    let randNum;
    for (let i = 0; i <= var1; i++) {
        randNum = Math.floor(Math.random() * Var2);
        console.log(randNum);
        if (i === 0) {
            target.innerHTML += randNum;
        } else {
            target.innerHTML += ", " + randNum;
        }
        randData.push(randNum);
        console.log(randData);
    }
    return;
}

function templateGraph(chartVar) {

    var xValues = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

    var yValues = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

    var dataValues = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    new Chart(chartVar, {
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

function popViz(varX, varY, varData, varChart) {

    var xValues = [];

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

function clearViz(varX, varY, chartVar) {
    var xValues = [];

    var yValues = [];

    for (let i = 0; i <= varX; i++) {
        xValues.push(i);
    }

    for (let m = 0; m <= varY; m++) {
        yValues.push(m);
    }

    let dataValues = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    new Chart(chartVar, {
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

    return dataValues;
}
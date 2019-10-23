
var firebaseConfig = {
    apiKey: "AIzaSyCYFsw7BptAwf8WIgWC57EIx5q3M07l5E0",
    authDomain: "project-aaaec.firebaseapp.com",
    databaseURL: "https://project-aaaec.firebaseio.com",
    projectId: "project-aaaec",
    storageBucket: "project-aaaec.appspot.com",
    messagingSenderId: "655950783247"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

$(document).ready(function () {
    var database = firebase.database();
    var ledStatus1, ledStatus2, ledStatus3, timeon1, timeon2, timeon3, timeoff1, timeoff2, timeoff3;
    var d = new Date();
    var month = d.getMonth() + 1;
    var timeLed1 = 0, timeLed2 = 0, timeLed3 = 0;
    var tong1 = 0
    var dem1 = 0, dem2 = 0, dem3 = 0
    var gt = 0

    database.ref().child("chart").child(month).on("value", function (snap) {
        tong1 = snap.val().value
        console.log("value: ", tong1)
    })

    setTimeout(() => { //bat dong bo
        database.ref().child("LED1").on("value", function (snap) {
            ledStatus1 = snap.val().ledStatus1;
            timeon1 = snap.val().timeon1;
            timeoff1 = snap.val().timeoff1;
            d = new Date();
            month = d.getMonth() + 1;

            if (ledStatus1 == 1) {
                $(".lightStatus1").text("The light is on").css("color", "red");
                $(".led1").css("color", "red");
            }
            else {
                $(".lightStatus1").text("The light is off").css("color", "black");
                $(".led1").css("color", "black");
            }

            if (timeoff1 > timeon1 && dem1 === 0) {
                timeLed1 = (timeoff1 - timeon1) / 1000
                console.log("kq1 ", timeLed1);
                dem1 = dem1 + 1
                timeLed1 = 0.1 * 0.001 * (timeLed1 / (3600))
                // Math.ceil(timeLed1)
                tong1 = tong1 + timeLed1
                console.log("TONG BBBB ", tong1)

                firebase.database().ref().child("chart").child(month).child("value").set(tong1)
            }
            else {
                console.log("lonhon")
                timeLed1 = 0
                dem1 = 0
            }
        })

        database.ref().child("LED2").on("value", function (snap) {
            ledStatus2 = snap.val().ledStatus2;
            timeon2 = snap.val().timeon2;
            timeoff2 = snap.val().timeoff2;
            d = new Date();
            month = d.getMonth() + 1;

            if (ledStatus2 == 1) {
                $(".lightStatus2").text("The light is on").css("color", "red");
                $(".led2").css("color", "red");
            }
            else {
                $(".lightStatus2").text("The light is off").css("color", "black");
                $(".led2").css("color", "black");
            }

            if (timeoff2 > timeon2 && dem2 === 0) {
                timeLed2 = (timeoff2 - timeon2) / 1000
                console.log("kq2 ", timeLed2);
                dem2 = dem2 + 1
                timeLed2 = 0.1 * 0.001 * (timeLed2 / (3600))
                // Math.ceil(timeLed2)
                tong1 = tong1 + timeLed2
                console.log("TONG BBBB ", tong1)
                firebase.database().ref().child("chart").child(month).child("value").set(tong1)
            } else {
                console.log("lonhon")
                timeLed2 = 0
                dem2 = 0
            }
        })

        database.ref().child("LED3").on("value", function (snap) {
            ledStatus3 = snap.val().ledStatus3;
            timeon3 = snap.val().timeon3;
            timeoff3 = snap.val().timeoff3;
            d = new Date();
            month = d.getMonth() + 1;

            if (ledStatus3 == 1) {
                $(".lightStatus3").text("The light is on").css("color", "red");
                $(".led3").css("color", "red");
            }
            else {
                $(".lightStatus3").text("The light is off").css("color", "black");
                $(".led3").css("color", "black");
            }

            if (timeoff3 > timeon3 && dem3 === 0) {
                timeLed3 = (timeoff3 - timeon3) / 1000
                dem3 = dem3 + 1
                console.log("kq3 ", timeLed3);
                timeLed3 = 0.1 * 0.001 * (timeLed3 / (3600))
                // Math.ceil(timeLed3)
                tong1 = tong1 + timeLed3
                console.log("TONG BBBB ", tong1)
                firebase.database().ref().child("chart").child(month).child("value").set(tong1)
            } else if (timeoff3 < timeon3) {
                dem3 = 0
            }
        })
    }, 1000);

    $(".lightButton1").click(function () {
        var firebaseRef1 = firebase.database().ref().child("LED1").child("ledStatus1");
        var timeOn1 = firebase.database().ref().child("LED1").child("timeon1");
        var timeOff1 = firebase.database().ref().child("LED1").child("timeoff1");
        d = new Date();
        month = d.getMonth() + 1;

        if (ledStatus1 == 1) {
            firebaseRef1.set(0);
            ledStatus1 = 0;
            timeOff1.set(d.getTime())
        } else {
            firebaseRef1.set(1);
            timeOn1.set(d.getTime())
            ledStatus1 = 1;
        }
    })

    $(".lightButton2").click(function () {
        var firebaseRef2 = firebase.database().ref().child("LED2").child("ledStatus2");
        var timeOn2 = firebase.database().ref().child("LED2").child("timeon2");
        var timeOff2 = firebase.database().ref().child("LED2").child("timeoff2");
        d = new Date();
        month = d.getMonth() + 1;

        if (ledStatus2 == 1) {
            firebaseRef2.set(0);
            ledStatus2 = 0;
            timeOff2.set(d.getTime())
        } else {
            firebaseRef2.set(1);
            ledStatus2 = 1;
            timeOn2.set(d.getTime())
        }
    })

    $(".lightButton3").click(function () {
        var firebaseRef3 = firebase.database().ref().child("LED3").child("ledStatus3");
        var timeOn3 = firebase.database().ref().child("LED3").child("timeon3");
        var timeOff3 = firebase.database().ref().child("LED3").child("timeoff3");
        d = new Date();
        month = d.getMonth() + 1;

        if (ledStatus3 == 1) {
            firebaseRef3.set(0);
            ledStatus3 = 0;
            timeOff3.set(d.getTime())
        } else {
            firebaseRef3.set(1);
            ledStatus3 = 1;
            timeOn3.set(d.getTime())
        }
    })

    //chart
    window.addEventListener("load", getData(genFunction));

    function getData(callbackIN) {
        var ref = firebase.database().ref().child("chart");
        ref.on("value", function (snapshot) {
            callbackIN(snapshot.val())
        });
    }
    tong1 = gt + (tong1 / (3600 * 1000))
    console.log("sd ngoai ", tong1)
    console.log("giatri ngoia ", gt)

    function genFunction(chart) {
        var cdata = [];
        var len = chart.length;

        for (var i = 1; i < len; i++) {
            cdata.push({
                label: chart[i]['label'],
                value: chart[i]['value']
            });
            // if (nameMonth === chart[i]['label']) {
            // }
        }

        var firebaseChart = new FusionCharts({
            type: 'area2d',
            renderAt: 'chart-container',
            width: '90%',
            height: '60%',
            dataFormat: 'json',
            dataSource: {
                "chart": {
                    "caption": "Electricity consumption chart for the month",
                    "subCaptionFontBold": "0",
                    "captionFontSize": "20",
                    "subCaptionFontSize": "17",
                    "captionPadding": "15",
                    "captionFontColor": "#8C8C8C",
                    "baseFontSize": "14",
                    "baseFont": "Barlow",
                    "canvasBgAlpha": "0",
                    "bgColor": "#FFFFFF",
                    "bgAlpha": "100",
                    // "showBorder": "0",
                    "showCanvasBorder": "0",
                    // "showPlotBorder": "0",
                    "showAlternateHGridColor": "0",
                    // "usePlotGradientColor": "0",
                    "paletteColors": "#ce5d49",
                    // "showValues": "0",
                    "divLineAlpha": "5",
                    "showAxisLines": "1",
                    "drawAnchors": "0",
                    "xAxisLineColor": "#8C8C8C",
                    "xAxisLineThickness": "0.7",
                    "xAxisLineAlpha": "50",
                    "yAxisLineColor": "#8C8C8C",
                    "yAxisLineThickness": "0.7",
                    "yAxisLineAlpha": "50",
                    "baseFontColor": "#8C8C8C",
                    "toolTipBgColor": "#FA8D67",
                    "toolTipPadding": "10",
                    "toolTipColor": "#FFFFFF",
                    "toolTipBorderRadius": "3",
                    "toolTipBorderAlpha": "0",
                    "drawCrossLine": "1",
                    "crossLineColor": "#8C8C8C",
                    "crossLineAlpha": "60",
                    "crossLineThickness": "0.7",
                    "alignCaptionWithCanvas": "1"
                },
                "data": cdata
            }
        });
        firebaseChart.render();

    }

})

// var nameMonth = "";
// if (month === 1) {
//     nameMonth = "January";
// }
// if (month === 2) {
//     nameMonth = "February";
// }
// if (month === 3) {
//     nameMonth = "March";
// }
// if (month === 4) {
//     nameMonth = "April";
// }
// if (month === 5) {
//     nameMonth = "May";
// }
// if (month === 6) {
//     nameMonth = "June";
// }
// if (month === 7) {
//     nameMonth = "July";
// }
// if (month === 8) {
//     nameMonth = "August";
// }
// if (month === 9) {
//     nameMonth = "September";
// }
// if (month === 10) {
//     nameMonth = "October";
// }
// if (month === 11) {
//     nameMonth = "November";
// }
// if (month === 12) {
//     nameMonth = "December";
// }


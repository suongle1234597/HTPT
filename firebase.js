// Initialize Firebase
var config = {
    apiKey: "AIzaSyCUGTrY5OD1uBupNIHvCRxEO1NKYVlPtDM",
    authDomain: "fusioncharts-demo.firebaseapp.com",
    databaseURL: "https://fusioncharts-demo.firebaseio.com",
    projectId: "fusioncharts-demo",
    storageBucket: "fusioncharts-demo.appspot.com",
    messagingSenderId: "728123238984"
}

firebase.initializeApp(config);

function getData(callbackIN) {
    var ref = firebase.database().ref("data");
    ref.once('value').then(function (snapshot) {
        callbackIN(snapshot.val())
    });
}

window.addEventListener("load", getData(genFunction));

function genFunction(data) {
    var cdata = [];
    var len = data.length;
    for (var i = 1; i < len; i++) {
        cdata.push({
            label: data[i]['label'],
            value: data[i]['value']
        });
    }

    var firebaseChart = new FusionCharts({
        type: 'area2d',
        renderAt: 'chart-container',
        width: '650',
        height: '400',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Website Visitors Trend",
                "subCaption": "Last 7 Days{br}ACME Inc.",
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
                "showBorder": "0",
                "showCanvasBorder": "0",
                "showPlotBorder": "0",
                "showAlternateHGridColor": "0",
                "usePlotGradientColor": "0",
                "paletteColors": "#6AC1A5",
                "showValues": "0",
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
    })
}

firebaseChart.render();
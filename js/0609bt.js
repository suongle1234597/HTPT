$(document).ready(function () {
    $('.tinh').click(function (e) { 
        e.preventDefault();
        let tien = $(".gia").val();
        let tip = $(".tip option:selected").val();
        let nguoi = $(".nguoi").val();
        console.log(tien);
        console.log(tip);
        console.log(nguoi);
        if(tip === 30) {
            tip = 30;
            console.log(tip);
        }
        else if(tip === 20) {
            tip = 20;
        }
        else if(tip === 15) {
            tip = 15;
        }
        else if(tip === 10) {
            tip = 10;
        }
        else if(tip === 5) {
            tip = 5;
        }
        let tong = 0.00;
        // tong.toFixed(2);
        parseFloat(tong);
        tong = ((tien*(tip/100))/nguoi)*100;
        // tong = tong*100;
        Math.round(tong);
        tong = tong/100;
        parseFloat(tong);
        $(".pay").text(tong);
    });

});
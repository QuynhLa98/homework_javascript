/** Máy tính tiền lương nhân viên tự động
 * Đầu vô: giả sử cho số tiền làm 1 ngày là 100000
 */
var moneyDay = 100000;
// Xử lý sự kiện
var totalBtn = document.getElementById('total');
totalBtn.onclick = function () {
    var luong = document.getElementById('moneyDay').value *1;
    var ngay = document.getElementById('workingDay').value *1;
    // Tính tổng tiền theo công thức: tổng lương = lương * ngày
    var totalBtn = luong * ngay;
    var result = document.getElementById('result');
    // DOM sự kiện ra trở lại thẻ h3 có id "result"
    result.innerHTML = "Tổng tiền là: " + totalBtn;
};

///////////////////////////////////////////////////////////////////////

/**
 * Tính giá trị trung bình
 */
var numberAll = document.getElementById('numberAll');
numberAll.onclick = function () {
    var number1 = parseFloat(document.getElementById('number1').value);
    var number2 = parseFloat(document.getElementById('number2').value);
    var number3 = parseFloat(document.getElementById('number3').value);
    var number4 = parseFloat(document.getElementById('number4').value);
    var number5 = parseFloat(document.getElementById('number5').value);
    // Tính giá trị trung bình theo gợi ý tổng 5 số cộng lại chia 5
    var average = (number1 + number2 + number3 + number4 + number5) / 5;
    var resultTrungBinh = document.getElementById('average');
    // DOM sự kiện ra trở lại thẻ h3 có id "average"
    resultTrungBinh.innerHTML = "Số trung bình là: " + average; 
};

///////////////////////////////////////////////////////////////////////

/**
 * Quy đổi tiền
 */

var dollarUSD = 23500;
var exchangeBtn = document.getElementById('exchange');
exchangeBtn.onclick = function () {
    var dollarInput = document.getElementById('dollar').value;
    var vietnamdong = dollarInput * dollarUSD;

    // Định dạng số tiền sau quy đổi thành định dạng VND
    var formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    });
    var formattedVietnamdong = formatter.format(vietnamdong);

    // Gán giá trị đã định dạng vào phần tử h3 có id "vietnamdong"
    var tienviet = document.getElementById('vietnamdong');
    tienviet.innerHTML = "Thành VND là: " + formattedVietnamdong;
};

///////////////////////////////////////////////////////////////////////

/**
 * Tính diện tích, chu vi hình chữ nhật
 */

document.getElementById("tinh").addEventListener("click", function() {
    // Lấy giá trị chiều dài và chiều rộng từ input
    var height = document.getElementById("height").value;
    var width = document.getElementById("width").value;

    // Chuyển đổi giá trị từ chuỗi sang số
    height = parseFloat(height);
    width = parseFloat(width);

    // Tính diện tích và chu vi
    var dienTich = height * width;
    var chuVi = (height + width) * 2;

    // Hiển thị kết quả
    document.getElementById("answer").innerHTML = "Diện tích: " + dienTich + "<br>Chu vi: " + chuVi;
});

///////////////////////////////////////////////////////////////////////

/**
 * Tính tổng 2 ký số
 */

document.getElementById("totalALl").addEventListener("click", function() {
    // Lấy giá trị từ ô input
    var number = document.getElementById("twoNumber").value;

    // Kiểm tra độ dài của số, phải có 2 chữ số
    if (number.length !== 2) {
        alert("Vui lòng nhập số có 2 chữ số!");
        return;
    }

    // Lấy chữ số hàng đơn vị bằng cách lấy ký tự cuối cùng trong chuỗi số
    var units = parseInt(number.charAt(1));

    // Lấy chữ số hàng chục bằng cách lấy ký tự đầu tiên trong chuỗi số
    var tens = parseInt(number.charAt(0));

    // Tính tổng hai chữ số
    var sum = units + tens;

    // Hiển thị kết quả trên trang web
    document.getElementById("totalNumber").innerText = "Tổng là " + sum;
});

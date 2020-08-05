var now = new Date(); // 현재 날짜와 시간
var firstDate = new Date("2019-12-25"); // 설정 날짜 2019년 12월 25일 설정
var start = firstDate.getTime(); // 기념일의 밀리세컨드를 구한다. 1000분의 1초
var end = now.getTime(); // 오늘의 밀리세컨드
var pass = end - start; // 오늘 - 기념일 -> 경과 시간의 밀리세컨드
var passDay = Math.floor(pass/1000/60/60/24); // 경과 시간의 일

document.querySelector('#passDay').innerHTML = passDay;


// console.log(pass + "ms"); // 밀리세컨드
// console.log(pass/1000 + "초"); // 초
// console.log(pass/1000/60 + "분"); // 분
// console.log(pass/1000/60/60 + "시간"); // 시간
// console.log(pass/1000/60/60/24 + "일"); // 일
// console.log(Math.floor(pass/1000/60/60/24) + "일"); // 소수점 이하를 버림




function calcDay(days) {
    // 전달받은 일(day)을 밀리세컨드로 바꿔야한다. days(일)를 days(밀리세컨드)로 변경

    var days2 = days*1000*60*60*24   // 나누면 일이되고 곱하면 다시 밀리세컨드로 롤백 함
    var passDay2 = start + days2; // 기념일에서 경과일(예, 100일)을 더한 밀리세컨드

    // 밀리세컨드를 Date객체로 다시 만들어주어야 함
    var someDate = new Date(passDay2);
   
    var year = someDate.getFullYear();
    var month = someDate.getMonth();
    var day = someDate.getDate();  // getDay 랑 착각 ㄴㄴ   Day는 요일(주단위) 임
    
    console.log(year + "년" + month + "월" + day + "일");
    document.write(year + "년" + month + "월" + day + "일");

    
}
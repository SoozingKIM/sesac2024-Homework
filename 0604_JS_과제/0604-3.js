/**
 * TODO: 오늘 날짜의 요일을 출력하는 switch문을 사용해서 작성해 보고, switch문을 사용하지 않은 더 간단한 방법도 찾아보세요.
const today = new Date();  today.getDay(); // 요일번호
오늘은 금요일입니다.  (const WEEK_NAMES = '일월화수목금토')
 */

const WEEK_NAMES = "일월화수목금토";
const today = new Date();

// * 방법 1 : switch-case
switch (today.getDay()) {
  case 0:
    console.log("오늘은 일요일입니다.");
    break;
  case 1:
    console.log("오늘은 월요일입니다.");
    break;
  case 2:
    console.log("오늘은 화요일입니다.");
    break;
  case 3:
    console.log("오늘은 수요일입니다.");
    break;
  case 4:
    console.log("오늘은 목요일입니다.");
    break;
  case 5:
    console.log("오늘은 금요일입니다.");
    break;
  case 6:
    console.log("오늘은 토요일입니다.");
    break;
}

// * 방법 2 : 더 간단히
console.log(`오늘은 ${WEEK_NAMES[today.getDay()]}요일입니다.`);

/**
 * TODO: 다음과 같이 올바른 더하기 연산을 하는 addPoints 함수를 작성하시오.
(단, 소숫점 자리수는 긴쪽에 맞춘다)

0.21354 + 0.1   // 0.31354000000000004
0.14 + 0.28     // 0.42000000000000004
0.34 + 0.226    // 0.5660000000000001
function addPoints(a, b) {...}

addPoints(0.21354, 0.1)   // 0.31354
addPoints(0.14, 0.28)     // 0.42
addPoints(0.34, 0.226)    // 0.566
 */

function getPointLength(x) {
  return x?.toString().length;
}

function addPoints(a, b) {
  let aLen = getPointLength(a);
  let bLen = getPointLength(b);
  console.log(+(a + b)?.toFixed(Math.max(aLen, bLen)));
}

addPoints(0.21354, 0.1);
addPoints(0.14, 0.28);
addPoints(0.34, 0.226);

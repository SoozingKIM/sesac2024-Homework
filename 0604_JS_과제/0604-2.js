/**
 * TODO: 1 ~ 10 사이의 정수에 대해 제곱근을 소숫점 3자리까지 출력하시오. 
Math.sqrt() 사용, 무리수만 출력!
2 1.414
…
7 2.646
…
10 3.162
 * 
 */

for (let i = 1; i <= 10; i = i + 1) {
  const root = Math.sqrt(i);
  if (root % 1 === 0) {
    continue;
  }
  console.log(+root.toFixed(3));
}

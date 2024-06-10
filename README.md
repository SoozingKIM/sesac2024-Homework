# sesac2024-Homework

---

## 0604과제

1.  for문을 이용하여 다음과 같이 정확한 숫자를 출력하는 코드를 작성하시오.

> 0.1  
> 0.2  
> 0.3  
> 0.4  
> 0.5  
> 0.6  
> 0.7  
> 0.8  
> 0.9  
> 1

2.  1 ~ 10 사이의 정수에 대해 제곱근을 소숫점 3자리까지 출력하시오. ( Math.sqrt() 사용, 무리수만 출력! )

> 2  
> 1.414  
> …  
> 7 2.646  
> …  
> 10 3.162

3. 오늘 날짜의 요일을 출력하는 switch문을 사용해서 작성해 보고, switch문을 사용하지 않은 더 간단한 방법도 찾아보세요.

> const today = new Date();  
> today.getDay(); // 요일번호  
> 오늘은 금요일입니다.  
> (const WEEK_NAMES = '일월화수목금토')

4. 다음과 같이 올바른 더하기 연산을 하는 addPoints 함수를 작성하시오.
   (단, 소숫점 자리수는 긴쪽에 맞춘다)

> 0.21354 + 0.1 // 0.31354000000000004  
> 0.14 + 0.28 // 0.42000000000000004  
> 0.34 + 0.226 // 0.5660000000000001
>
> function addPoints(a, b) {...}
>
> addPoints(0.21354, 0.1) // 0.31354
> addPoints(0.14, 0.28) // 0.42
> addPoints(0.34, 0.226) // 0.566

## 0608과제

1. user 객체를 받아서 id와 name을 출력하는 함수를 3개의 함수로 작성하시오. (Function signature를 3개 이상으로 표현하기)

2. 다음 user 객체에서 passwd 프로퍼티를 제외한 데이터를 userInfo 라는 변수에 할당하시오.

   > const user = { id: 1, name: "Hong", passwd: "xxx", addr: "Seoul" };

3. 다음 arr에서 3개의 id를 id1, id2, id3로 할당하시오.

   > const arr = [[{id: 1}], [{id:2}, {id: 3}]]
   > 출력결과: 1 2 3

4. 다음과 같이 key를 전달하면 해당 값의 첫 글자를 제외한 문자를 리턴하는 함수를 destructing을 최대한 활용하여 (가),(나),(다) 부분을 작성하시오.

```js
const user = {name: 'Hong', passwd: 'xyz', addr: 'Seoul'};

function getValueExceptInitial(k) {
   const (가) = user;
   const (나) = [...val];
   return (다);
}

console.log(getValueExceptInitial('name')); // 'ong'
console.log(getValueExceptInitial('passwd')); // 'yz'
console.log(getValueExceptInitial('addr')); // 'eoul'
```

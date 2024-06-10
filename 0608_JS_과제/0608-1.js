/**
 * TODO: user 객체를 받아서 id와 name을 출력하는 함수를 3개의 함수로 작성하시오.
(Function signature를 3개 이상으로 표현하기)
 *
 */

function print1(user) {
  console.log(user.id, user.name);
}

function print2({ id, name }) {
  console.log(id, name);
}

function print3({ ...user }) {
  console.log(user.id, user.name);
}

const hong = { id: 1, name: "Hong" };
const lee = { id: 2, name: "Lee" };
const kim = { id: 3, name: "Kim" };

print1(hong);
print2(lee);
print3(kim);

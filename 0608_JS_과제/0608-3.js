/**
 *  TODO: 다음 arr에서 3개의 id를 id1, id2, id3로 할당하시오. 
const arr = [[{id: 1}], [{id:2}, {id: 3}]]
출력결과: 1 2 3
 */

const arr = [[{ id: 1 }], [{ id: 2 }, { id: 3 }]];

const id1 = arr[0][0].id;
const id2 = arr[1][0].id;
const id3 = arr[1][1].id;

console.log(id1, id2, id3);


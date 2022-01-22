// const str=`
// 010-1234-5678
// thesecon@gmail.com
// http://www.omdbapi.com/?apikey=7035c60c&s=frozen
// The quick brown fox jumps over the lazy dog.
// abbccdddd


// let  str=`
// 010-1234-5678
// thesecon@gmail.com
// http://www.omdbapi.com/?apikey=7035c60c&s=frozen
// The quick brown fox jumps over the lazy dog.
// abbccdddd
// `

// const regexp=new RegExp('the','gi');
//RegExp 생성자로 통해 첫번째인수로 표현식,두번째인수로 옵션
//g 플래그 배열로 만들어주는 기능
//i 는 영어의 대문자 소문자를 구분하지 않고 찾겠다.

// const regexp=/the/gi
// const regexp=/fox/gi
// const regexp=/HEROPY/gi
//리터럴방식의 정규표현식

// console.log(str.match(regexp))
// console.log(regexp.test(str));
//정규식.test메소드(찾고싶은문자열) 문자열이있는지 boolean값을반환
// console.log(str.replace(regexp,'AAA')); //replace메소드
//찾은문자열을 두번째인수로 대체
//원복을 바꾸고싶을때는 원본문자열을 let으로 지정
// str=str.replace(regexp,'AAA');
// console.log(str);

// const regexp=/the/gi
//밑에처럼 대체가능
// console.log(str.match(/the/gi));
// console.log(str.match(/\.$/gim));
// \. 이부분은 문자.인문자를 찾아줘
// $달러사인 앞에 문자가 문장이 끝나부분을 찾아달라는의미
//플레그 m을 넣어 모든줄을 검사해준다
//이스케이프 문자 \백슬래시 기호를 통해
//본래의 기능에서 벗어나 상태가 바뀌는문자


// let  str=`
// 010-1234-5678
// thesecon@gmail.coms
// http://www.omdbapi.com/?apikey=7035c60c&s=frozen
// The quick brown fox jumps over the lazy dog.
// abbccdddd
// 동해물과_백두산이 마르고 닳도록
// // `
// console.log(
//   str.match(/h..p/g));
//   //백슬래시가 없는 . 임의의 한문자가 있는지
// console.log(str.match(/fox|dog/));
// // |는 둘중하나라도있으면 출력 g플래그가없다면 하나만출력

// console.log(str.match(/https?/g));
// // ?앞에있는 문자가 있을수도 없을수도있는문자찾기

// console.log(str.match(/\b\w{2,3}\b/g));
// d라는 문자가 2번연속으로 있는 문자찾기
//,가붙으면 2번 이상연속
//,뒤에 숫자를 붙이면 2개이상 해당숫자 이하만큼의 문자
// \w숫자를 포함한 영어 알파벳을 검색
// \b 는 앞에 영역을 표시하는  해당하는자리에문자가있는 것을검색

// console.log(
//   // str.match(/[fox]/g)
//   // str.match(/[0-9]{1,}/g)
//   str.match(/[가-힣]{1,}/g)
//   //f , o ,x문자를 모두 출력
// )

// console.log(
//   str.match(/\bf\w{1,}\b/g)
// )

// console.log(
//   str.match(/\b\d{1,}\b/g)
// )

const h=`  the hello world  !

`
console.log(
  h.replace(/\s/g,'')
  // \s 공백문자를 찾는 표현
  // replace를 통해 두번째인수로 ''공백을줘서 해당 공백문자들을
  //없애는 방법으로 활용
)

const  str=`
010-1234-5678
thesecon@gmail.coms
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbccdddd
동해물과_백두산이 마르고 닳도록
`

console.log(
  // str.match(/(?=\@)/g)
  // str.match(/.{1,}(?=@)/g)
  //이메일의 앞쪽부분만 일치하게 검색
  str.match(/(?<=@).{1,}/g)
  //이메일의 뒷쪽부분만 일치하게 검색
)
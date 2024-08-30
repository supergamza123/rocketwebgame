

//HEAP(메모리 힙)
// 메모리 할당이 일어나는 곳

// Call Stack(호출 스택)
// 실행 중인 함수의 호출를 저장하는 스택(LIFO)
// 코드를 읽어내려 가면서 수행할 작업들을 밑에서부터 하나씩 쌓고 메모리 힙에서 작업 수행에 필요한 것들을 찾아서 작업을 수행하는 공간

// Web APIs
// 브라우저에서 제공하는 API로 setTimeout 과 같은 타이머API, DOM매서드 ,HTTP요청 같은 기능들을 모두 제공
// 실행이 끝나면, 해당 콜백함수는 Task Queue로 넘어감

//Tesk Queue(태스크 큐)

// 비동기적으로 실행된 콜백함수가 보관되는 공간(FIFO)
//setTimeout의 타이머가 끝난 후 실행된느 함수나 이벤트 핸들가 같은 비동기 함수의 콜백함수 등이 대기 하는 공간


//Event Loop(이벤트 루프)

//Call Stack

//Call Stack에서 실행할 콜백함수들을 관리하고 우선 

// 비동기식 처리 모델()

//병렬적으로 태스크를 수행하고 태스크가 종료되지

//---------------------------------------------------------------


/**
 * Synchronous(동기)
 * 요청을 보낸 후 해당 요청의 응답을 받아야 다음 동작을 실행하는 방식
 */
// console.log("1번");
// console.log("2번");
// console.log("3번");

/**
 * Asynchronous(비동기)
 * 요청을 보낸 후 응답과 관계없이 다음 동작을 실행할 수 있는 방식
 * 
 */
// console.log("1번");
// setTimeout(function() {console.log("2번")},3000);
// console.log("3번");

//setTimeout : 일정시간이 지난 후에 함수가 실행되도록 처리하는 역할

// setTimeout([함수 또는 문자열], 지연될 시간);

//claerTimeout() : setTimeout을 취소 시키는 역할
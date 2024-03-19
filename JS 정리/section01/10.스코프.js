// 스코프(Scope)란?
// "범위"
// 변수나 함수에 접근하거나 호출할 수 있는 범위를 말 함

// => 전역(전체 영역) 스코프 / 지역(특정 영역) 스코프
// => 전역 스코프 : 전체 영역에서 접근 가능
// => 지역 스코프 : 특정 영역에서만 접근 가능

// 💡 함수 선언문은 함수 블록 안에서 스코프를 갖는다!
//  => 예외적으로 조건문이나 반복문 안에서는 지역 스코프를 갖지 않는다.(잘 사용하지 않지만)

let a = 1; // 전역 스코프

function funcA() {
    let b = 2; // 지역 스코프 - 함수 내부에서만 접근 가능
    console.log(a);         // 1 출력

    function funcB() {  // 지역 스코프
        console.log("💡함수 선언문");
    }
}

funcA();

if (true) {
    let c = 1;  // 지역 스코프 - 외부 접근 불가능
}

for (let i = 0; i < 10; i++) {  // 반복문의 초기식도 지역 스코프
    let d = 1;  // 지역 스코프  - 외부 접근 불가능
}

funcB();    // 💡funcA의 중첩 함수 funcB에 접근 불가능
// 연산자(Operator)란?

// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자

// 덧셈 연산자 +
// 뺄셈 연산자 -
// 곱셈 연산자 *
// 나눗셈 연산자 /
// 나머지 연산자 %

let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

// 우선 순위가 *, / %가 더 높다.
// 우선 순위가 더 낮은 연산자를 먼저 계산하고 싶다면 소괄호() 한다.
let num6 = (1 + 2) * 10;

// 3. 복합 대입 연산자
let num7 = 10;
num7 += 20;
num7 -= 20;
num7 *= 20;
num7 /= 20;
num7 %= 10;

// 4. 증감 연산자
let num8 = 10;
++num8; // 전위 연산, 해당 라인에서 즉시 연산이 이루어진다.
num8++; // 후위 연산, 해당 라인이 끝나고 다음 라인에서 연산이 이루어진다.

// 5. 논리 연산자
let or = true || false; // 하나만 참이면 참

let and = true && false;    // 둘 다 참이어야 참

let not = !true;    // 부정연산자

// 6. 비교 연산자

let comp1 = 1 === "1";  // 동등 비교 연산자✨ 
let comp2 = 1 !== 2;   // 비동등 비교 연산자(같지 않은지)

let comp3 = 2 > 1;
let comp4 = 2 < 1;

let comp5 = 2 >= 2;
let comp6 = 2 <= 2; 
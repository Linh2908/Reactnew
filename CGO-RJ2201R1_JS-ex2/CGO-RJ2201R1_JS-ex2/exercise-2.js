//Cho các đối tượng sau
const obj = {
  id: 1,
  name: 'Trainer',
  age: 33,
  skills: ['Javascript', 'React', 'NextJS', 'Typescript']
};

const anotherObj = {
  id: 2,
  name: 'Trainee',
  age: 22,
  isFinite: false,
  isBeingTrained: true
};

//1. Hãy clone 2 đối tượng trên bằng tất cả các cách mà bạn biết
// *YOUR CODE HERRE *

//c1 : 
const clone ={...obj};

// c2 :
const clone1 = Object.assign({},obj);



//2. Đoán thử kết quả sau đây, không chạy thử
const copiedObj = obj;
copiedObj.skills = ['React', 'Typescript'];
console.log(obj.skills);
// * YOUR ANSWER HERE *

/** kết quả của phần log này là trả về 1 mảng có 2 phần tử là ['React', 'Typescript] vì copiedObj,  obj cùng trỏ đến 1 vùng nhớ*/


//3. Hãy merge 2 đối tượng đã cho thành 1 đối tượng mới bằng tất cả các cách mà bạn biết
// *YOUR CODE HERRE *

// c1 : 
const newObj = {
  ...obj,
  ...anotherObj
}

//c2 : 
const newObj2 = Object.assign(obj,anotherObj);


//4.  Sử dụng Map trong ES6, hãy tạo ra 1 biến có giá trị như sau:
/*
[
  ["whole numbers": [1 ,2 ,3 ,4]],
  ["Decimal numbers": [1.1, 1.2, 1.3, 1.4]],
  ["negative numbers": [-1, -2, -3, -4]]
]
*/
// *YOUR CODE HERRE *

const demoMap = new Map([
  ["whole numbers", [1 ,2 ,3 ,4]],
  ["Decimal numbers", [1.1, 1.2, 1.3, 1.4]],
  ["negative numbers", [-1, -2, -3, -4]]
]);



//5. Sử dụng Map trong ES6, hãy tạo ra 1 map từ 2 đối tượng đã cho trên
// *YOUR CODE HERRE *

const newMap = new Map(Object.entries(obj), Object.entries(anotherObj))



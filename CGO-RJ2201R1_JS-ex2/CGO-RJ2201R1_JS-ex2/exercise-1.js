//Cho trước 1 mảng các trainee như sau:
const traineeIterator = [
  {
    id: 1,
    firtName: 'A',
    lastName: 'Nguyen',
    className: 'CGO-RJ2201R1',
    grade: 'C'
  },
  {
    id: 2,
    firtName: 'B',
    lastName: 'Tran',
    className: 'CGO-RJ2201R1',
    grade: 'D'
  },
  {
    id: 3,
    firtName: 'C',
    lastName: 'Dinh',
    className: 'CGO-RJ2201R1',
    grade: 'A'
  },
  {
    id: 4,
    firtName: 'D',
    lastName: 'Le',
    className: 'CGO-RJ2201R1',
    grade: 'B'
  },
  {
    id: 5,
    firtName: 'D',
    lastName: 'Hoang',
    className: 'CGO-RJ2201R1',
    grade: 'F'
  },
  {
    id: 6,
    firtName: 'E',
    lastName: 'Pham',
    className: 'CGO-RJ2201R1',
    grade: 'E'
  }
];

//1. Sử dụng forEach(), hãy console.log() ra full name (firstName + lastName) của tất cả các phần từ trong mảng trên
// *YOUR CODE HERRE *

traineeIterator.forEach(student => console.log(student.firtName +" " + student.lastName));

//2. Sử dụng forEach(), hãy console.log() ra điểm số (grade) + full name (trong cùng 1 string, format: D Hoang / F) 
//của tất cả các phần từ trong mảng trên
// *YOUR CODE HERRE *
traineeIterator.forEach(student => console.log(`${student.firtName+ " " + student.lastName} / ${student.grade}`))


//3. Sử dụng map(), hãy tạo ra 1 mảng mới với tên gọi expectedTraineeArray, 
//trong đó các props của từng phần tử được đổi như sau:
// - newId: className-id
// - fullName: firstName lastName
// - rank: grade
//ex: {
//  newId: 'CGO-RJ2201R1-5,
//  fullName: 'D Hoang',
//  rank: 'F'
//}
// *YOUR CODE HERRE *

const expectedTraineeArray = traineeIterator.map(trainee => ({
  newId : trainee.className + "-" + trainee.id,
  fullName : trainee.firtName + " " + trainee.lastName,
  rank : trainee.grade
}))
 console.log(expectedTraineeArray);
//4, Sử dụng map(), hãy tạo ra 1 mảng mới với tên gọi newTraineeArray,
//trong đó các props của từng phần tử được đổi như sau:
// - id: id
// - codeName: [className] - firstName lastName
// - classification: xét điều kiện:
// -> nếu đạt A grade trả về: 'Excellent'
// -> nếu đạt B grade trả về: 'Good'
// -> nếu đạt C grade trả về: 'Medium'
// -> nếu đạt D grade trả về: 'Weak'
// -> nếu đạt E grade trả về: 'Poor'
// -> nếu đạt F grade trả về: 'Disbanded'
// => tip: tạo ra 1 hàm, với đầu vào là grade, trả về giá trị tương ứng, không xét điều kiện trong forEach() body
// *YOUR CODE HERRE *

const appraiseTrainee = (grade) => {
  switch (grade) {
    case "A": return "Excellent";
    case "B" : return "Good";
    case "C" : return "Medium";
    case "D" : return "Weak";
    case "E" : return "Poor";
    case "F" : return "Disbanded";
  }
}

const newTraineeArray = traineeIterator.map(trainee => ({
  id : trainee.id,
  codeName: `[${trainee.className}] - ${trainee.firtName + " " + trainee.lastName}`,
  classification : appraiseTrainee(trainee.grade)
}))


console.log(newTraineeArray);
//5. Lọc ra các trainee với grade dưới B
// *YOUR CODE HERRE *

const newTrainees = traineeIterator.filter(trainee => trainee.grade !== 'A' && trainee.grade !== "B")

console.log(newTrainees);



//6. Lọc ra các trainee với grade trên C, sau đố xét điều kiện sau:
// -> nếu số các trainee với grade trên C >= 50% sĩ số lớp, alert ra "Effective training!"
// -> nếu số các trainee với grade trên C < 30% sĩ số lớp, alert ra "Average training!"
// -> nếu số các trainee với grade trên C = 0, alert ra "Failed training!"
// *YOUR CODE HERRE *
const listTraineeGradeAboveRankC = traineeIterator.filter(trainee => trainee.grade === "A" || trainee.grade === "B");

const percentTraineeGradeAboveRankC = listTraineeGradeAboveRankC.length /traineeIterator.length;
if(percentTraineeGradeAboveRankC >= 0.5) {
  alert("Effective training!");
}else if(percentTraineeGradeAboveRankC > 0.3) {
  alert("Average training!");
}else {
  alert("Failed training!");
}

//7. Tìm ra thành viên có grade A, alert ra tên đầy đủ của thành viên đó
// *YOUR CODE HERRE *

const listTraineeHaveGradeA = traineeIterator.filter(trainee => trainee.grade === "A");

listTraineeHaveGradeA.forEach(trainee => alert(trainee.firtName + " " + trainee.lastName));



//8. Tìm ra thành viên có grade F, alert ra tên đầy đủ của thành viên đó
// *YOUR CODE HERRE *

const listTraineeHaveGradeF = traineeIterator.filter(trainee => trainee.grade === "F");

listTraineeHaveGradeF.forEach(trainee => alert(trainee.firtName + " " + trainee.lastName));


//9. Sử dụng reduce, hãy tạo ra 1 string cấu thành từ điểm số của các thành viên trong mảng đã cho
// *YOUR CODE HERRE *

const grade = traineeIterator.reduce((result, trainee) => result + trainee.grade,"");
console.log(grade);



//10. (optional) Sử dụng reduce, hãy tạo ra 1 hàm tính được giai thừa của 1 số đầu vào. Ex: input 6 => 1*2*3*4*5*6 = 720
// *YOUR CODE HERRE *

const calculatorFactorial = (number) => {
  const newArr = [];
  for(let i =1 ; i<= number; i++) {
    newArr.push(i);
  }
  return newArr.reduce((result, currentValue) => result*currentValue);
}




//11. (optional) Hãy tạo ra 1 mảng mới, sử dụng 1 trong các cấu trúc lặp đã học, trong đó có các phần tử 
// - grade thấp nhất
// - grade cao nhất
// - grade trung bình dạng số, biết các giá trị tương ứng của từng grade như sau: A=1, B=2, ... , F=5
// *YOUR CODE HERRE *
const listTraineeHaveGradeB = traineeIterator.filter(trainee => trainee.grade === "B");
const listTraineeHaveGradeC = traineeIterator.filter(trainee => trainee.grade === "C");
const listTraineeHaveGradeD = traineeIterator.filter(trainee => trainee.grade === "D");
const listTraineeHaveGradeE = traineeIterator.filter(trainee => trainee.grade === "D");

const firstGrade =((listTraineeHaveGradeA.length && listTraineeHaveGradeA[0].grade) || 
(listTraineeHaveGradeB.length && listTraineeHaveGradeB[0].grade) ||  
(listTraineeHaveGradeC.length && listTraineeHaveGradeC[0].grade) || 
(listTraineeHaveGradeD.length && listTraineeHaveGradeD[0].grade) || 
(listTraineeHaveGradeE.length && listTraineeHaveGradeE[0].grade) || 
(listTraineeHaveGradeF.length && listTraineeHaveGradeF[0].grade)
);

const secondGrade = ((listTraineeHaveGradeF.length && listTraineeHaveGradeF[0].grade) || 
(listTraineeHaveGradeE.length && listTraineeHaveGradeE[0].grade) ||
(listTraineeHaveGradeD.length && listTraineeHaveGradeD[0].grade) ||
(listTraineeHaveGradeC.length && listTraineeHaveGradeC[0].grade) ||
(listTraineeHaveGradeB.length && listTraineeHaveGradeB[0].grade) ||
(listTraineeHaveGradeA.length && listTraineeHaveGradeA[0].grade)
)

let num1 = 0, num2 =0;
switch (firstGrade) {
  case "A":
     num1 = 6;
     break;
  case "B":
      num1 = 5;
      break;
  case "C":
    num1 = 4;
    break;
  case "D":
    num1 = 3;
    break;
  case "E":
    num1 = 2;
    break;
  default:
    num1 = 1;
    break;
}

switch (secondGrade) {
  case "A":
    num2 = 6;
    break;
  case "B":
    num2 = 5;
    break;
  case "C":
    num2 = 4;
    break;
  case "D":
    num2 = 3;
    break;
  case "E":
    num2 = 2;
    break;
  default:
    num2 = 1;
    break;
}
const newArrGrade = [ firstGrade, secondGrade, (num1 + num2)/2]

console.log(newArrGrade);
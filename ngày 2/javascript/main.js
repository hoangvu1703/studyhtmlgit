// // // //string
// // // //number 1.5 NaN
// // // //boolean true
// // // //array []
// // // //object {}
// // // //function              function print(){}



// // // // && : AND
// // // // || : OR
// // // //if

// // // // var male = true
// // // // var famele = false
// // // // var train1 =['a','b','c','d','e','f']
// // // // var student = {
// // // //     name: 'hoang',
// // // //     age: 27,
// // // //     salary: 9999
// // // // }
// // // // var fullname = 8

// // // // var x = true
// // // // var y = !x


// // // // var score = 8;
// // // // // if (score < 4){
// // // // //     console.log('tb')
// // // // // } else if (score < 8){
// // // // //     console.log('kha')
// // // // // } else if (score < 9) {
// // // // //     console.log('giỏi');
// // // // // } else if (score > 9) {
// // // // //     console.log('xuất sắc');
// // // // // }
// // // // var score = 8;
// // // // if(score < 4){
// // // //     console.log('tb');
// // // // }

// // // // if(score > 4 && score < 8){
// // // //     console.log('kha');
// // // // }

// // // // if(score >= 8 && score < 9){
// // // //     console.log('gioi');
// // // // }

// // // // if(score >= 9){
// // // //     console.log('xuất sắc');
// // // // }

// // // // var age = 5
// // // // switch(age){
// // // //     case 1:
// // // //         console.log('chào');
// // // //         console.log(1);
// // // //         break;
// // // //     case 5:
// // // //         console.log('phố');
// // // //         console.log(5);
// // // //         break
// // // //     case 10:
// // // //         console.log('cháo');
// // // //         console.log(10);
// // // //         break
// // // //     default:
// // // //         console.log('không có giá trị');
// // // // }

// // // //*FOR
// // // // for(var i = 0; i <= 10; i++){
// // // //     console.log('số thứ tự');
// // // //     console.log(i);
// // // // }
// // // // var arr = ['a','b','c','d','e']

// // // // for(var i = arr.length - 1; i >= 0; i--){
// // // //     console.log(arr[i]);
// // // // }

// // // //*FOR IN 
// // // // var person = {
// // // //     name: 'Hoàng',
// // // //     age: 27,
// // // //     salary: 1000
// // // // };
// // // // for (var key in person){
// // // //     console.log(key + ": " +person[key]);
// // // // }

// // // //FOR OFF
// // // // var arr = ['a','b']
// // // // for(var item of arr){
// // // //     console.log(item);
// // // // }

// // // //break, continue
// // // // for (var i = 0; i<10; i++) {
// // // //     if(i == 3){
// // // //         break;
// // // //     }
// // // //     console.log(i);
// // // // }

// // // // for (var i = 0; i<10; i++) {
// // // //     if(i == 3){
// // // //         continue;
// // // //     }
// // // //     console.log(i);
// // // // }

// // // //Function

// // // function print(name, address){
// // //     console.log('xin chào ' + name);
// // //     console.log(name + 'địa chỉ nhà ' + address);


// // //     return 8888
// // // }


// // // print('hoang ', 'nam vân' )
// // // print('huy ', 'nam định')

// // // function add(number1, number2){
// // //     var sum = number1 + number2;


// // //     return sum
// // // }
// // // var ketqua = add(10,20)
// // // var ketqua2 = add(20, 30)
// // // console.log(ketqua);
// // // console.log(ketqua2);

// // //FUNCTION TINH GIAI THUA

// // // function tinhgiaithua (number){
// // //     var ketqua = 1;
// // //     for (var i = 1; i <= number ; i++){
// // //         ketqua *= i
// // //     }
// // //     return ketqua;
// // // }
// // // var giaithua = tinhgiaithua(4)
// // // console.log(giaithua);


// // //ARRAY METHOD

// // //push

// // var arr = [4,5,2,1,3,8]
// // arr.push(6,7)
// // console.log(arr.length);

// //pop

// var arr = [4,5,2,1,3,8]
// var num = arr.pop()
// console.log(num);

//slice
// var arr = [4,5,2,1,3,8]
// var arrnew = arr.slice(0, 3)
// console.log(arrnew);

//sort
// var arr = [4,5,2,1,3,8]
// arr.sort(function(item1, item2){
//     if(item1 > item2){
//         return 1
//     }
//     if(item1 < item2){
//         return -1
//     }
//     if(item1 == item2){
//         return 0
//     }
// })
// console.log(arr);

// var employ = [{
//     name: "hoang",
//     age: 27
// }, {
//     name: "dũng",
//     age: 29
// }, {
//     name: "trí",
//     age: 30
// }, {
//     name: "hậu",
//     age: 28
// }]
// employ.sort(function(item1, item2){
//     if(item1.age > item2.age){
//         return -1
//     }
//     if(item1.age < item2.age){
//         return 1
//     }
//     if(item1.age == item2.age){
//         return 0
//     }
// })
// console.log(employ);

// var fullname = 'Vũ Huy Hoàng';

// for (let i = 0; i < fullname.length; i++) {
//     var character = fullname.charAt(i)
//     console.log(character);
    
// }



// console.log(Date.now());


// function vogao(gao, nuoc, cb){
//     console.log(gao + nuoc)
//     cb()
// }   


// function naucom(){
//     console.log('naucom');
// }

// var gao = 1
// var nuoc = 2
// vogao(gao, nuoc, naucom)
// var quatrinh1 = setInterval(function(){
//     console.log('xin chao');
// }, 2000);

// clearInterval(quatrinh1)


// setInterval(function(){
//     console.log(new Date());
// },1000)
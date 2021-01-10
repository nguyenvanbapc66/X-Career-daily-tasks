/*
    - 1. Một closure là một inner function. Clousre có 3 scope chain, nó có thể truy
    cập tới các biến được khai báo trên trong nó, truy cập tới các biến được khai báo
    ở outer function và còn có thể truy cập tới biến global 
    - 2. Khác nhau:
        + Var: biến được khai báo bởi var thì có phạm vi là phạm vi hàm số hoặc phạm vi bên ngoài hàm
        số
        + let: Scope của let là: block scope và nếu ra khỏi scope dó thì sẽ không sử dụng được, phạm
        vi của biến sử dụng let là phạm vi khổi, bắt đầu và kết thúc bởi {}
*/
var x = 2,
  fns = [];

(function() {
  var x = 5;

  for (let i = 0; i < x; i++) {
    fns[i] = () => i;
  }
})();

console.log((x * 2) === fns[x * 2]());
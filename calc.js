const OPERATIONS = {
  sum: "+",
  sub: "-",
  div: "/",
  mul: "*"
};

function calculate({a, b, operation }) {
let result = null;
switch (operation) {
  case OPERATIONS.sum:
    result = sum(a, b);
    break;

  case OPERATIONS.sub:
    result = sub(a, b);
    break;

  case OPERATIONS.div:
    result = div(a, b);
    break;

  case OPERATIONS.mul:
    result = mul(a, b);
    break;

  default:
    break;

}


return result;
}

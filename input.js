const inputANOde = document.querySelector('.js-input-a');
const inputBNOde = document.querySelector('.js-input-b');
const selectOperationNode = document.querySelector('.js-select-operation');
const btnResultNOde = document.querySelector('.js-btn-result');
const outputNOde = document.querySelector('.js-output');

btnResultNOde.addEventListener("click",function() {
  const a = Number(inputANOde.value);
  const b = Number(inputBNOde.value);
  const operation = selectOperationNode.value;

  const result = calculate({
    a,
    b,
    operation
  });
console.log(result);

outputNOde.innerHTML = result;

});

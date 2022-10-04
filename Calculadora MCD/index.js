function gdc(){
    element1s = document.getElementById('input1').value;
    element2s = document.getElementById('input2').value;

    element1 = Number(element1s)
    element2 = Number(element2s)

     function calculate (number1, number2){
         var r  =  number1%number2
         if(r === 0 ){
            return number2
         }else{
            return calculate(number2,r)
         } // suma los elementos de la lista
     }
      resultado = calculate(element1,element2)

      document.getElementById('scre').innerHTML=resultado;
}
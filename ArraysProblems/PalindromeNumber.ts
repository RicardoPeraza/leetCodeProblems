function isPalindrome(x: number): boolean {
  

    if (esPalindromo(x)) {
       return true
    } else {
      return false
    }

};

function esPalindromo(numero: number): boolean {
const numeroStr = numero.toString();
const reverso = numeroStr.split('').reverse().join('');
return numeroStr === reverso;
}
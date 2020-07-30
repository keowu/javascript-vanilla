function parimpar(n){
    if ((n%2) === 0){
        return 'PAR';
    }else{
        return 'IMPAR';
    }
}


let res = parimpar(223);

console.log(res);
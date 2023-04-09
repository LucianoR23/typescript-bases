(() => {
    // evitar usar

    let avenger:any = 123;
    let exists;
    let power;

    avenger = 'Dr Strange'

    // console.log(avenger.charAt(6));
    console.log((avenger as string).charAt(5));
    
    avenger = 23.1097;
    // console.log(avenger.toFixed(2));
    console.log(<number>avenger.toFixed(2));
    

})()
(() => {

    const batman:string = 'Batman';
    const linternaVerde:string = "Linterna Verde"
    const volcanNegro:string = `Heroe: Volcan Negro`

    console.log(`I'm ${batman}`);
    console.log(batman[10]?.toUpperCase() || 'No esta presente');
    console.log(batman[4].toUpperCase());
    

})()
(() => {

    type Hero = {
        name: string,
        age?: number,
        powers: string[],
        getName?: () => string,
    }

    let myCustoVariable: (string | number | Hero) = 'Fernando'


})()
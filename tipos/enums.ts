(() => {

    enum AudioLevel {
        min = 1,
        medium = 5,
        max = 10,
    }

    let currentAudio = AudioLevel.medium;
    console.log(currentAudio);

    enum enums {
        a=10,
        b,
        c=9,
        d
    }

    console.log(enums);
    
    

})()
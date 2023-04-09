"use strict";
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 5] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.medium;
    console.log(currentAudio);
    let enums;
    (function (enums) {
        enums[enums["a"] = 10] = "a";
        enums[enums["b"] = 11] = "b";
        enums[enums["c"] = 9] = "c";
        enums[enums["d"] = 10] = "d";
    })(enums || (enums = {}));
    console.log(enums);
})();

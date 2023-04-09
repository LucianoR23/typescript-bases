"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let Poderes;
    (function (Poderes) {
        Poderes[Poderes["aquaman"] = 0] = "aquaman";
        Poderes[Poderes["batman"] = 1] = "batman";
        Poderes[Poderes["flash"] = 5] = "flash";
        Poderes[Poderes["superman"] = 100] = "superman";
    })(Poderes || (Poderes = {}));
    const fuerzaFlash = Poderes.flash;
    const fuerzaSuperman = Poderes.superman;
    const fuerzaBatman = Poderes.batman;
    const fuerzaAquaman = Poderes.aquaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();

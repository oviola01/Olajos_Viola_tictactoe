import Elem from "./Elem.js";
class Jatekter{
    constructor(szuloElem, sorok){
    /* Előállítja a játékot*/
    this.sorok=sorok;
    $(':root').css("--meret",this.sorok);
    for (let i=0;i<(sorok*sorok);i++){
        new Elem(szuloElem);
    };
   
    }
}

export default Jatekter;
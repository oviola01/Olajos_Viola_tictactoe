import Elem from "./Elem.js";
class Jatekter{
    constructor(szuloElem){
    /* Előállítja a játékot*/
    for (let i=0;i<9;i++){
        new Elem(szuloElem);
    };
    let lepes=0;
    let ertek="";
    $(window).on("elemKivalaszt", (event)=>{
        console.log(event.detail);
        lepes++;
        if (lepes%2==0){
            ertek="X";
        } else {
            ertek="O";
        }
        event.detail.setErtek(ertek);
    });

    }
}

export default Jatekter;
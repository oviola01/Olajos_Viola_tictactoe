import TTTModel from "../model/TTTModel.js";
import Jatekter from "../view/Jatekter.js";

class TTTController{
    constructor(){
        new Jatekter($(".jatekter"), 3);
        this.tttModel=new TTTModel();
        
        $(window).on("elemKivalaszt", (event)=>{
            //console.log(event.detail);
            //itt hívom meg a modelt, és megkérem, hogy számoljon, hogy mondja meg, hogy ki következik
            let ertek=this.tttModel.kiKovetkezik();
            event.detail.setErtek(ertek);
        });
    }
}
export default TTTController;
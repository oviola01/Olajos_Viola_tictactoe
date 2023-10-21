import TTTModel from "../model/TTTModel.js";
import InfoView from "../view/InfoView.js";
import Jatekter from "../view/Jatekter.js";

class TTTController{
    constructor(){
        new Jatekter($(".jatekter"), 3);
        this.tttModel=new TTTModel();
        this.infoView=new InfoView($(".info"));
        
        let kezdo=this.tttModel.kezdojatekos();
        this.infoView.setKovJatekos(kezdo);
        
        $(window).on("elemKivalaszt", (event)=>{
            //console.log(event.detail);
            //itt hívom meg a modelt, és megkérem, hogy számoljon, hogy mondja meg, hogy ki következik
            let ertek=this.tttModel.aktualJatekos();
            event.detail.setErtek(ertek);
            let kovetkezo=this.tttModel.koviEmber();
            this.infoView.setKovJatekos(kovetkezo);
        });
    }
}
export default TTTController;
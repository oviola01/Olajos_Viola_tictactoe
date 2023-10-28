class Elem{
    /*megjelenítse az oldalon azt az egyetlen elemet*/ 
    /* this - az osztályon belül az adattagokon végezzük a műveleteket*/

    constructor(szuloElem, index){
        /*beállítja az adattagokat*/
        this.szuloElem =  szuloElem;
        this.#htmlOsszeallit(); /* a this a konkrét osztálypéldányra mutat*/ 
        this.index = index;
        /*megfogjuk / csinálunk egy változót a html elemkhez*/
        this.divElem = this.szuloElem.children("div:last-child"); //azért kell a last-child, mert különben együtt kezeli az összes példányt
        this.pElem = this.divElem.children("p");
        //console.log(this.divElem)
        //console.log(this.pElem)
        this.divElem.on("click", ()=> {
           // this.setErtek("X");
           this.#esemenyTrigger("elemKivalaszt");
        });
    }


    setErtek(ertek){
        this.pElem.html(ertek);
    }

    
    #htmlOsszeallit(){
        let txt = "<div class='elem'><p></p></div>"
        this.szuloElem.append(txt);
    }

    #esemenyTrigger(esemenyNev){
        const ESEMENYEM = new CustomEvent(esemenyNev, {detail:this});
        //detailben a thist, azaz a teljes objektumot adom vissza
        window.dispatchEvent(ESEMENYEM);
    }

}

export default Elem;
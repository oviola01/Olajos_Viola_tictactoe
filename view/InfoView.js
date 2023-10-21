class InfoView{
    constructor(szuloElem){
        this.szuloElem=szuloElem;
    }

    setKovJatekos(jatekos){
        let txt = `<div class="info"><p>A következő játokos a(z) ${jatekos} !</p></div>`;
        this.szuloElem.html(txt);
    }
}
export default InfoView;
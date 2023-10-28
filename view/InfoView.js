class InfoView{
    constructor(szuloElem){
        this.szuloElem=szuloElem;
    }

    setKovJatekos(ertek){
        let txt = `<div class="info"><p>`;
        switch (ertek) {
            case "1":
                txt += "X nyert!"
                break;
            case "2":
                txt += "O nyert!"
                break;
            case "3":
                txt += "Döntetlen!"
                break;
            case "X", "O":
                txt += `A következő játokos a(z) ${ertek} !`;
                break;
        }
        txt += "</p></div>";
        this.szuloElem.html(txt);
    }
}
export default InfoView;
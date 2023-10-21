class TTTModel{
    #lepes;
    #ertek="";

    constructor(){
        this.#lepes=0;
    }

    aktualJatekos(){
        this.#lepes++;
            if (this.#lepes%2==0){
                this.#ertek="X";
            } else {
                this.#ertek="O";
            }
        return this.#ertek;
    }
    koviEmber(){
        let kovi="";
            if (this.#lepes%2==0){
                kovi="O";
            } else {
                kovi="X";
            }
        return kovi;
    }
    kezdojatekos(){
        return "O";
    }
}
export default TTTModel;
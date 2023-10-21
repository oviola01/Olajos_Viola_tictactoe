class TTTModel{
    #lepes;
    #ertek="";
    constructor(){
        this.#lepes=0;
    }

    kiKovetkezik(){
        this.#lepes++;
            if (this.#lepes%2==0){
                this.#ertek="X";
            } else {
                this.#ertek="O";
            }
        return this.#ertek;
    }
}
export default TTTModel;
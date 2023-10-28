class TTTModel{
    #lepes;
    #ertek="";
    #lista=[];

    constructor(){
        this.#lepes=0;
        this.n=3; //itt adom meg a sorok hosszát
        for (let i=0; i<(this.n*this.n); i++) {
                this.#lista.push(".");
        }
    }

    #vizszEll(){
        let szoveg="";
        this.#lista.forEach((elem,i)=>{ /*elem helyett bármit írhatnék, 
        forEach első paramétere mindig az aktuális eleme a listának, a másik paramétere pedig 
        a lista aktuális elemének indexe*/
            szoveg+=elem;
            if (i%this.n==(this.n-1)){ //azért -1, mert 0-ról indul az index, és a 3. elem, azaz a 2. indexű után szeretném
                szoveg+="@"; //speciális karaktert hozzáadva tudom majd vizsgálni, hol érnek véget a sorok
            }
        })
        return szoveg;
    }
    
    //ezt meg kell nézni, amikor van agyam!!!!!!!! Nem működik, és azt sem írja ki, ha az X jön
    #fuggEll(){
        let szoveg="";
        for(let i=0; i < this.n; i++){
            for(let j=0; j < this.n; j++)
                szoveg+=this.#lista[i+j*this.n];
                if (i%this.n==(this.n-1)){
                    szoveg+="@";
                }
        }
        return szoveg;
    }
/*
    #atloEll(){
        let szoveg="";
        this.#lista.forEach((elem,i)=>{
            szoveg+=elem;
            if (i%this.n==(this.n-1)){
                szoveg+="@";
            }
        })
    }
*/
    ell(){
        let szoveg=this.#vizszEll()+this.#fuggEll()/*+this.#atloEll()*/;
        console.log(szoveg);
        if(szoveg.indexOf("XXX")>=0){ /*szövegkezelő függvény, megmondja, hogy
         egy szöveg egy másik szövegben benne van-e, ha -1, akkor nincs benne,
         ha benne van, kiírja annak a karakternek az indexét, ahol az egyezőség kezdődik*/
            return "1"; //X nyert
        } else if(szoveg.indexOf("OOO")>=0){
            return "2"; //O nyert
        } else if(szoveg.indexOf(".") == -1){
            return "3"; //döntetlen
        } else {
            return "kövi";
        }
    }

    aktualJatekos(index){
        this.#lepes++;
            if (this.#lepes%2==0){
                this.#ertek="X";
            } else {
                this.#ertek="O";
            }
        this.#lista[index]=this.#ertek;
        return this.#ertek;
    }

    koviEmber(){
        let kovi=this.ell();
        if (kovi="kövi"){
            if (this.#lepes%2==0){
               kovi="O";
            } else {
                kovi="X";
            }
            return kovi;
        }
}
    kezdojatekos(){
        return "O";
    }
}
export default TTTModel;
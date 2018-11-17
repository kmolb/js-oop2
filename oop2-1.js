class box {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        // cz2
        this.sumThis= ()=>{
            return this.x + this.y + this.z;
        }
        //
    }
 vol(){
    return this.x * this.y * this.z;
 }
}
const home = new box(2, 4, 23);

console.log(home.vol());
// mnozenie bokow
//cz2
console.log(home.sumThis());
// zsumowanie bokow
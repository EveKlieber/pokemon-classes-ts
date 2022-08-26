console.log("hallo welt")   // ts-node index.ts

let greeting:string = "hallo Welt";

const add = (a:number, b:number):number=> { 
  return a + b
}
console.log(greeting) // ts-node index.ts

interface Attack {  // definition für ein Object
  name: string
}

class PokemonTest  {
  private name;
  public attack : Attack;
    public constructor(name:string) {
      this.name = name;
      this.attack = {name: ""}
    }
    public showName() {
     console.log(this.name);
    }
    public changeName(newName:string){
      this.name = newName
      console.log("this is the new name:" + newName);

    }
}

let lilliPokemon = new PokemonTest("Lilly");
lilliPokemon.showName();
lilliPokemon.changeName("Pipi Langstrumpf")
lilliPokemon.attack = {name: "defensivPower" }

let myAttack: Attack = {
  name: "MagicPower"
}
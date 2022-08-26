// export class AttackSkill {

//   private name: string ; damage: number; magic: number;
//   constructor(aName: string, aDamage: number, aMagic: number) {
//     this.name = aName;
//     this.damage = aDamage;
//     this.magic = aMagic;
//   }
// }
interface Attack {  
  name: string;
  damage: number;
  magic: number;
}

export class AttackSkill {
  private name: string ; damage: number; magic: number;
  // constructor(attackObj: Attack) {
  //   this.name = attackObj.name;
  //   this.damage = attackObj.damage;
  //   this.magic = attackObj.magic;
  // }
  constructor({name, damage, magic}: Attack) {  // destructuring löst object auf mit { } und sage was ankommt (values)
    this.name = name;
    this.damage = damage;
    this.magic = magic;
  }
  public showAttackData (): string {

    return `attack name: ${this.name}, attack value for damage: ${this.damage}, attack value for magic: ${this.magic}`
  }
  
}
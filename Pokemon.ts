import { AttackSkill } from "AttackSkill";
export class Pokemon {
  private name: string; 
  private health: number; 
  private magic: number; 
  private skills: AttackSkill[];
  constructor(aName: string) {
    
    this.name = aName;
    this.health = 100;
    this.magic = 100;
    this.skills = [];
  }
  public learnAttackSkill(aAttackSkill: AttackSkill):void {
    this.skills.push(aAttackSkill);
  }
  public showStatus(): string {
    const skillsArray = this.skills.map((aSkill) =>{
      return aSkill.showAttackData ()
    })
    let status = `${this.name} : health=${this.health} \n magic=${this.magic} \n skills=${skillsArray.join("\n" )}` ;
    console.log("status", status,);
    return status;
  }
  public attack(aAttackIndex: number, aPokemon: Pokemon): string {
    let result = `too weak`;
    let usedSkill = this.skills[aAttackIndex];
    if (usedSkill && this.magic >= usedSkill.magic) {
      // enough magic?
      this.magic -= usedSkill.magic; // decrease own magic
      aPokemon.health -= usedSkill.damage; // decrease others health
      result = `success`;
    }
    console.log(result);
    return result;
    }
    increaseMagic(aIncrease: number) {
      return (this.magic += aIncrease);
    }
}


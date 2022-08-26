import { Pokemon } from "./Pokemon";  // named export aus object rausholen daher {}
import { AttackSkill} from "./AttackSkill";

let hillary = new Pokemon("Hillary");
let felix = new Pokemon("Felix");


let lightning = new AttackSkill({name: "litening", damage: 20, magic: 33});
let struggling = new AttackSkill({name: "struggling", damage: 11, magic: 22});
let poisonSeed = new AttackSkill ({name: "poison seed", damage: 77, magic: 25});
let rainAttack = new AttackSkill({name: "heavyRainfall", damage: 0, magic: 80});


hillary.learnAttackSkill(lightning)
hillary.learnAttackSkill(poisonSeed)

felix.learnAttackSkill(struggling)
felix.learnAttackSkill(poisonSeed)

felix.increaseMagic(55)
felix.showStatus()
hillary.showStatus()



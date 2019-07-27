import * as TypeORM from "typeorm";
import BaseType from "../entity/BaseType";
import Unique from "../entity/Unique";

const manager = TypeORM.getManager();

export default Promise.all([
  
  /***********
   * AMULETS *
   ***********/
  
  manager.findOneOrFail(BaseType, {where: {name: "Coral Amulet"}})
  .then(async base_type => Promise.all([
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Araku Tiki", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Ngamahu Tiki", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "The Primordial Chain", base_type: base_type}).execute(),
  ])),
  manager.findOneOrFail(BaseType, {where: {name: "Paua Amulet"}})
  .then(async base_type => Promise.all([
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Sacrificial Heart", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Zerphi's Heart", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Atziri's Foible", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Sidhebreath", base_type: base_type}).execute(),
  ])),
  manager.findOneOrFail(BaseType, {where: {name: "Amber Amulet"}})
  .then(async base_type => Promise.all([
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Xoph's Blood", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Xoph's Heart", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "The Anvil", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Blood of Corruption", base_type: base_type}).execute(),
  ])),
  manager.findOneOrFail(BaseType, {where: {name: "Jade Amulet"}})
  .then(async base_type => Promise.all([
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "The Halcyon", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "The Pandemonius", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Karui Ward", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Karui Charge", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Hyrri's Truth", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Rashkaldor's Patience", base_type: base_type}).execute(),
  ])),
  manager.findOneOrFail(BaseType, {where: {name: "Lapis Amulet"}})
  .then(async base_type => Promise.all([
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Voice of the Storm", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Choir of the Storm", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Stone of Lazhwar", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Tear of Purity", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Marylene's Fallacy", base_type: base_type}).execute(),
  ])),
  manager.findOneOrFail(BaseType, {where: {name: "Gold Amulet"}})
  .then(base_type => Promise.all([
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Bisco's Collar", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "The Ignomon", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "The Effigon", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Perquil's Toe", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "The Ascetic", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Winterheart", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Demigod's Presence", base_type: base_type}).execute(),
  ])),
  manager.findOneOrFail(BaseType, {where: {name: "Agate Amulet"}})
  .then(async base_type => Promise.all([
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Voll's Devotion", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Extractor Mentis", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Shaper's Seed", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "The Aylardex", base_type: base_type}).execute(),
  ])),
  manager.findOneOrFail(BaseType, {where: {name: "Citrine Amulet"}})
  .then(async base_type => Promise.all([
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Eye of Innocence", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Daresso's Salute", base_type: base_type}).execute(),
  ])),
  manager.findOneOrFail(BaseType, {where: {name: "Turquoise Amulet"}})
  .then(async base_type => Promise.all([
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Maligaro's Cruelty", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Warped Timepiece", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Victario's Acuity", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Ungil's Harmony", base_type: base_type}).execute(),
  ])),
  manager.findOneOrFail(BaseType, {where: {name: "Onyx Amulet"}})
  .then(async base_type => Promise.all([
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Astramentis", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Eye of Chayula", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Presence of Chayula", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Aul's Uprising", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Solstice Vigil", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Impresence", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Yoke of Suffering", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Carnage Heart", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Hinekora's Sight", base_type: base_type}).execute(),
  ])),
  manager.findOneOrFail(BaseType, {where: {name: "Marble Amulet"}})
  .then(async base_type => Promise.all([
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Bloodgrip", base_type: base_type}).execute(),
  ])),
  manager.findOneOrFail(BaseType, {where: {name: "Blue Pearl Amulet"}})
  .then(async base_type => Promise.all([
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Gloomfang", base_type: base_type}).execute(),
  ])),
  manager.findOneOrFail(BaseType, {where: {name: "Ruby Amulet"}})
  .then(async base_type => Promise.all([
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Star of Wraeclast", base_type: base_type}).execute(),
  ])),
  manager.findOneOrFail(BaseType, {where: {name: "Jet Amulet"}})
  .then(async base_type => Promise.all([
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Talisman of the Victor", base_type: base_type}).execute(),
  ])),
  manager.findOneOrFail(BaseType, {where: {name: "Black Maw Talisman"}})
  .then(async base_type => Promise.all([
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Night's Hold", base_type: base_type}).execute(),
  ])),
  manager.findOneOrFail(BaseType, {where: {name: "Clutching Talisman"}})
  .then(async base_type => Promise.all([
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Blightwell", base_type: base_type}).execute(),
  ])),
  manager.findOneOrFail(BaseType, {where: {name: "Wereclaw Talisman"}})
  .then(async base_type => Promise.all([
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Rigwald's Curse", base_type: base_type}).execute(),
  ])),
  manager.findOneOrFail(BaseType, {where: {name: "Rotfeather Talisman"}})
  .then(async base_type => Promise.all([
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Natural Hierarchy", base_type: base_type}).execute(),
  ])),
  manager.findOneOrFail(BaseType, {where: {name: "Greatwolf Talisman"}})
  .then(async base_type => Promise.all([
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Eyes of the Greatwolf", base_type: base_type}).execute(),
  ])),
  
  /*********
   * RINGS *
   *********/
  
  manager.findOneOrFail(BaseType, {where: {name: "Coral Ring"}})
  .then(async base_type => Promise.all([
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Kaom's Sign", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Bloodboil", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Sibyl's Lament", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Kaom's Way", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Winterweave", base_type: base_type}).execute(),
  ])),
  manager.findOneOrFail(BaseType, {where: {name: "Iron Ring"}})
  .then(async base_type => Promise.all([
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Blackheart", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Le Heup of All", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Voidheart", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "The Warden's Brand", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Circle of Guilt", base_type: base_type}).execute(),
  ])),
  manager.findOneOrFail(BaseType, {where: {name: "Paua Ring"}})
  .then(async base_type => Promise.all([
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Doedre's Damning", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Perandus Signet", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Praxis", base_type: base_type}).execute(),
  ])),
  manager.findOneOrFail(BaseType, {where: {name: "Unset Ring"}})
  .then(async base_type => Promise.all([
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Malachai's Artifice", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Brinerot Mark", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Mutewind Seal", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Redblade Band", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "The Pariah", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Essence Worm", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Angler's Plait", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "The Hungry Loop", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Mark of Submission", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Vivinsect", base_type: base_type}).execute(),
  ])),
  manager.findOneOrFail(BaseType, {where: {name: "Sapphire Ring"}})
  .then(async base_type => Promise.all([
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Dream Fragments", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Pyre", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Tasalio's Sign", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Snakepit", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Uzaza's Meadow", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Uzaza's Mountain", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Uzaza's Valley", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Precursor's Emblem", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Circle of Fear", base_type: base_type}).execute(),
  ])),
  manager.findOneOrFail(BaseType, {where: {name: "Topaz Ring"}})
  .then(async base_type => Promise.all([
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Kikazaru", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Valako's Sign", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Putembo's Meadow", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Putembo's Valley", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Putembo's Mountain", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Precursor's Emblem", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Circle of Regret", base_type: base_type}).execute(),
  ])),
  manager.findOneOrFail(BaseType, {where: {name: "Ruby Ring"}})
  .then(async base_type => Promise.all([
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Mokou's Embrace", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Ngamahu's Sign", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Emberwake", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Ahkeli's Mountain", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Ahkeli's Valley", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Ahkeli's Meadow", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Precursor's Emblem", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Circle of Anguish", base_type: base_type}).execute(),
  ])),
  manager.findOneOrFail(BaseType, {where: {name: "Diamond Ring"}})
  .then(async base_type => Promise.all([
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Gifts from Above", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Romira's Banquet", base_type: base_type}).execute(),
  ])),
  manager.findOneOrFail(BaseType, {where: {name: "Gold Ring"}})
  .then(async base_type => Promise.all([
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Andvarius", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Ventor's Gamble", base_type: base_type}).execute(),
  ])),
  manager.findOneOrFail(BaseType, {where: {name: "Moonstone Ring"}})
  .then(async base_type => Promise.all([
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Shavronne's Revelation", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Timeclasp", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Heartbound Loop", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Valyrium", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Time Twist", base_type: base_type}).execute(),
  ])),
  manager.findOneOrFail(BaseType, {where: {name: "Two-Stone Ring"}})
  .then(async base_type => Promise.all([
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Berek's Pass", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Berek's Respite", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Berek's Grip", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Rigwald's Crest", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Call of the Brotherhood", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Precursor's Emblem", base_type: base_type}).execute(),
  ])),
  manager.findOneOrFail(BaseType, {where: {name: "Amethyst Ring"}})
  .then(async base_type => Promise.all([
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Death Rush", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Ming's Heart", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Circle of Nostalgia", base_type: base_type}).execute(),
  ])),
  manager.findOneOrFail(BaseType, {where: {name: "Prismatic Ring"}})
  .then(async base_type => Promise.all([
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Thief's Torment", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Lori's Lantern", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "The Taming", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Precursor's Emblem", base_type: base_type}).execute(),
  ])),
  manager.findOneOrFail(BaseType, {where: {name: "Opal Ring"}})
  .then(async base_type => Promise.all([
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Stormfire", base_type: base_type}).execute(),
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Mark of the Shaper", base_type: base_type}).execute(),
  ])),
  manager.findOneOrFail(BaseType, {where: {name: "Steel Ring"}})
  .then(async base_type => Promise.all([
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Mark of the Elder", base_type: base_type}).execute(),
  ])),
  manager.findOneOrFail(BaseType, {where: {name: "Golden Hoop"}})
  .then(async base_type => Promise.all([
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Demigod's Eye", base_type: base_type}).execute(),
  ])),
  manager.findOneOrFail(BaseType, {where: {name: "Jet Ring"}})
  .then(async base_type => Promise.all([
    TypeORM.createQueryBuilder().insert().orIgnore().into(Unique).values({name: "Band of the Victor", base_type: base_type}).execute(),
  ])),
])





















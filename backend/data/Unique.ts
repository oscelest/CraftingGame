import BaseType from "../entity/BaseType";
import Unique from "../entity/Unique";

export default [
  
  //   /***********
  //    * AMULETS *
  //    ***********/
  
  async () => await new Unique("Araku Tiki", await BaseType.findOneByName("Coral Amulet")).save(),
  async () => await new Unique("Ngamahu Tiki", await BaseType.findOneByName("Coral Amulet")).save(),
  async () => await new Unique("The Primordial Chain", await BaseType.findOneByName("Coral Amulet")).save(),
  
  async () => await new Unique("Sacrificial Heart", await BaseType.findOneByName("Paua Amulet")).save(),
  async () => await new Unique("Zerphi's Heart", await BaseType.findOneByName("Paua Amulet")).save(),
  async () => await new Unique("Atziri's Foible", await BaseType.findOneByName("Paua Amulet")).save(),
  async () => await new Unique("Sidhebreath", await BaseType.findOneByName("Paua Amulet")).save(),
  
  async () => await new Unique("Xoph's Blood", await BaseType.findOneByName("Amber Amulet")).save(),
  async () => await new Unique("Xoph's Heart", await BaseType.findOneByName("Amber Amulet")).save(),
  async () => await new Unique("The Anvil", await BaseType.findOneByName("Amber Amulet")).save(),
  async () => await new Unique("Blood of Corruption", await BaseType.findOneByName("Amber Amulet")).save(),
  
  async () => await new Unique("The Halcyon", await BaseType.findOneByName("Jade Amulet")).save(),
  async () => await new Unique("The Pandemonius", await BaseType.findOneByName("Jade Amulet")).save(),
  async () => await new Unique("Karui Ward", await BaseType.findOneByName("Jade Amulet")).save(),
  async () => await new Unique("Karui Charge", await BaseType.findOneByName("Jade Amulet")).save(),
  async () => await new Unique("Hyrri's Truth", await BaseType.findOneByName("Jade Amulet")).save(),
  async () => await new Unique("Rashkaldor's Patience", await BaseType.findOneByName("Jade Amulet")).save(),
  
  async () => await new Unique("Voice of the Storm", await BaseType.findOneByName("Lapis Amulet")).save(),
  async () => await new Unique("Choir of the Storm", await BaseType.findOneByName("Lapis Amulet")).save(),
  async () => await new Unique("Stone of Lazhwar", await BaseType.findOneByName("Lapis Amulet")).save(),
  async () => await new Unique("Tear of Purity", await BaseType.findOneByName("Lapis Amulet")).save(),
  async () => await new Unique("Marylene's Fallacy", await BaseType.findOneByName("Lapis Amulet")).save(),
  
  async () => await new Unique("Bisco's Collar", await BaseType.findOneByName("Gold Amulet")).save(),
  async () => await new Unique("The Ignomon", await BaseType.findOneByName("Gold Amulet")).save(),
  async () => await new Unique("The Effigon", await BaseType.findOneByName("Gold Amulet")).save(),
  async () => await new Unique("Perquil's Toe", await BaseType.findOneByName("Gold Amulet")).save(),
  async () => await new Unique("The Ascetic", await BaseType.findOneByName("Gold Amulet")).save(),
  async () => await new Unique("Winterheart", await BaseType.findOneByName("Gold Amulet")).save(),
  async () => await new Unique("Demigod's Presence", await BaseType.findOneByName("Gold Amulet")).save(),
  
  async () => await new Unique("Voll's Devotion", await BaseType.findOneByName("Agate Amulet")).save(),
  async () => await new Unique("Extractor Mentis", await BaseType.findOneByName("Agate Amulet")).save(),
  async () => await new Unique("Shaper's Seed", await BaseType.findOneByName("Agate Amulet")).save(),
  async () => await new Unique("The Aylardex", await BaseType.findOneByName("Agate Amulet")).save(),
  
  async () => await new Unique("Eye of Innocence", await BaseType.findOneByName("Citrine Amulet")).save(),
  async () => await new Unique("Daresso's Salute", await BaseType.findOneByName("Citrine Amulet")).save(),
  
  async () => await new Unique("Maligaro's Cruelty", await BaseType.findOneByName("Turquoise Amulet")).save(),
  async () => await new Unique("Warped Timepiece", await BaseType.findOneByName("Turquoise Amulet")).save(),
  async () => await new Unique("Victario's Acuity", await BaseType.findOneByName("Turquoise Amulet")).save(),
  async () => await new Unique("Ungil's Harmony", await BaseType.findOneByName("Turquoise Amulet")).save(),
  
  async () => await new Unique("Astramentis", await BaseType.findOneByName("Onyx Amulet")).save(),
  async () => await new Unique("Eye of Chayula", await BaseType.findOneByName("Onyx Amulet")).save(),
  async () => await new Unique("Presence of Chayula", await BaseType.findOneByName("Onyx Amulet")).save(),
  async () => await new Unique("Aul's Uprising", await BaseType.findOneByName("Onyx Amulet")).save(),
  async () => await new Unique("Solstice Vigil", await BaseType.findOneByName("Onyx Amulet")).save(),
  async () => await new Unique("Impresence", await BaseType.findOneByName("Onyx Amulet")).save(),
  async () => await new Unique("Yoke of Suffering", await BaseType.findOneByName("Onyx Amulet")).save(),
  async () => await new Unique("Carnage Heart", await BaseType.findOneByName("Onyx Amulet")).save(),
  async () => await new Unique("Hinekora's Sight", await BaseType.findOneByName("Onyx Amulet")).save(),
  
  async () => await new Unique("Bloodgrip", await BaseType.findOneByName("Marble Amulet")).save(),
  
  async () => await new Unique("Gloomfang", await BaseType.findOneByName("Blue Pearl Amulet")).save(),
  
  async () => await new Unique("Star of Wraeclast", await BaseType.findOneByName("Ruby Amulet")).save(),
  
  async () => await new Unique("Talisman of the Victor", await BaseType.findOneByName("Jet Amulet")).save(),
  
  async () => await new Unique("Night's Hold", await BaseType.findOneByName("Black Maw Talisman")).save(),
  
  async () => await new Unique("Blightwell", await BaseType.findOneByName("Clutching Talisman")).save(),
  
  async () => await new Unique("Rigwald's Curse", await BaseType.findOneByName("Wereclaw Talisman")).save(),
  
  async () => await new Unique("Natural Hierarchy", await BaseType.findOneByName("Rotfeather Talisman")).save(),
  
  async () => await new Unique("Eyes of the Greatwolf", await BaseType.findOneByName("Greatwolf Talisman")).save(),
  
  //   /*********
  //    * RINGS *
  //    *********/
  
  async () => await new Unique("Kaom's Sign", await BaseType.findOneByName("Coral Ring")).save(),
  async () => await new Unique("Bloodboil", await BaseType.findOneByName("Coral Ring")).save(),
  async () => await new Unique("Sibyl's Lament", await BaseType.findOneByName("Coral Ring")).save(),
  async () => await new Unique("Kaom's Way", await BaseType.findOneByName("Coral Ring")).save(),
  async () => await new Unique("Winterweave", await BaseType.findOneByName("Coral Ring")).save(),
  
  async () => await new Unique("Blackheart", await BaseType.findOneByName("Iron Ring")).save(),
  async () => await new Unique("Le Heup of All", await BaseType.findOneByName("Iron Ring")).save(),
  async () => await new Unique("Voidheart", await BaseType.findOneByName("Iron Ring")).save(),
  async () => await new Unique("The Warden's Brand", await BaseType.findOneByName("Iron Ring")).save(),
  async () => await new Unique("Circle of Guilt", await BaseType.findOneByName("Iron Ring")).save(),
  
  async () => await new Unique("Doedre's Damning", await BaseType.findOneByName("Paua Ring")).save(),
  async () => await new Unique("Perandus Signet", await BaseType.findOneByName("Paua Ring")).save(),
  async () => await new Unique("Praxis", await BaseType.findOneByName("Paua Ring")).save(),
  
  async () => await new Unique("Malachai's Artifice", await BaseType.findOneByName("Unset Ring")).save(),
  async () => await new Unique("Brinerot Mark", await BaseType.findOneByName("Unset Ring")).save(),
  async () => await new Unique("Mutewind Seal", await BaseType.findOneByName("Unset Ring")).save(),
  async () => await new Unique("Redblade Band", await BaseType.findOneByName("Unset Ring")).save(),
  async () => await new Unique("The Pariah", await BaseType.findOneByName("Unset Ring")).save(),
  async () => await new Unique("Essence Worm", await BaseType.findOneByName("Unset Ring")).save(),
  async () => await new Unique("Angler's Plait", await BaseType.findOneByName("Unset Ring")).save(),
  async () => await new Unique("The Hungry Loop", await BaseType.findOneByName("Unset Ring")).save(),
  async () => await new Unique("Mark of Submission", await BaseType.findOneByName("Unset Ring")).save(),
  async () => await new Unique("Vivinsect", await BaseType.findOneByName("Unset Ring")).save(),
  
  async () => await new Unique("Dream Fragments", await BaseType.findOneByName("Sapphire Ring")).save(),
  async () => await new Unique("Pyre", await BaseType.findOneByName("Sapphire Ring")).save(),
  async () => await new Unique("Tasalio's Sign", await BaseType.findOneByName("Sapphire Ring")).save(),
  async () => await new Unique("Snakepit", await BaseType.findOneByName("Sapphire Ring")).save(),
  async () => await new Unique("Uzaza's Meadow", await BaseType.findOneByName("Sapphire Ring")).save(),
  async () => await new Unique("Uzaza's Mountain", await BaseType.findOneByName("Sapphire Ring")).save(),
  async () => await new Unique("Uzaza's Valley", await BaseType.findOneByName("Sapphire Ring")).save(),
  async () => await new Unique("Precursor's Emblem", await BaseType.findOneByName("Sapphire Ring")).save(),
  async () => await new Unique("Circle of Fear", await BaseType.findOneByName("Sapphire Ring")).save(),
  
  async () => await new Unique("Kikazaru", await BaseType.findOneByName("Topaz Ring")).save(),
  async () => await new Unique("Valako's Sign", await BaseType.findOneByName("Topaz Ring")).save(),
  async () => await new Unique("Putembo's Meadow", await BaseType.findOneByName("Topaz Ring")).save(),
  async () => await new Unique("Putembo's Valley", await BaseType.findOneByName("Topaz Ring")).save(),
  async () => await new Unique("Putembo's Mountain", await BaseType.findOneByName("Topaz Ring")).save(),
  async () => await new Unique("Precursor's Emblem", await BaseType.findOneByName("Topaz Ring")).save(),
  async () => await new Unique("Circle of Regret", await BaseType.findOneByName("Topaz Ring")).save(),
  
  async () => await new Unique("Mokou's Embrace", await BaseType.findOneByName("Ruby Ring")).save(),
  async () => await new Unique("Ngamahu's Sign", await BaseType.findOneByName("Ruby Ring")).save(),
  async () => await new Unique("Emberwake", await BaseType.findOneByName("Ruby Ring")).save(),
  async () => await new Unique("Ahkeli's Mountain", await BaseType.findOneByName("Ruby Ring")).save(),
  async () => await new Unique("Ahkeli's Valley", await BaseType.findOneByName("Ruby Ring")).save(),
  async () => await new Unique("Ahkeli's Meadow", await BaseType.findOneByName("Ruby Ring")).save(),
  async () => await new Unique("Precursor's Emblem", await BaseType.findOneByName("Ruby Ring")).save(),
  async () => await new Unique("Circle of Anguish", await BaseType.findOneByName("Ruby Ring")).save(),
  
  async () => await new Unique("Gifts from Above", await BaseType.findOneByName("Diamond Ring")).save(),
  async () => await new Unique("Romira's Banquet", await BaseType.findOneByName("Diamond Ring")).save(),
  
  async () => await new Unique("Andvarius", await BaseType.findOneByName("Gold Ring")).save(),
  async () => await new Unique("Ventor's Gamble", await BaseType.findOneByName("Gold Ring")).save(),
  
  async () => await new Unique("Shavronne's Revelation", await BaseType.findOneByName("Moonstone Ring")).save(),
  async () => await new Unique("Timeclasp", await BaseType.findOneByName("Moonstone Ring")).save(),
  async () => await new Unique("Heartbound Loop", await BaseType.findOneByName("Moonstone Ring")).save(),
  async () => await new Unique("Valyrium", await BaseType.findOneByName("Moonstone Ring")).save(),
  async () => await new Unique("Time Twist", await BaseType.findOneByName("Moonstone Ring")).save(),
  
  async () => await new Unique("Berek's Pass", await BaseType.findOneByName("Two-Stone Ring")).save(),
  async () => await new Unique("Berek's Respite", await BaseType.findOneByName("Two-Stone Ring")).save(),
  async () => await new Unique("Berek's Grip", await BaseType.findOneByName("Two-Stone Ring")).save(),
  async () => await new Unique("Rigwald's Crest", await BaseType.findOneByName("Two-Stone Ring")).save(),
  async () => await new Unique("Call of the Brotherhood", await BaseType.findOneByName("Two-Stone Ring")).save(),
  async () => await new Unique("Precursor's Emblem", await BaseType.findOneByName("Two-Stone Ring")).save(),
  
  async () => await new Unique("Death Rush", await BaseType.findOneByName("Amethyst Ring")).save(),
  async () => await new Unique("Ming's Heart", await BaseType.findOneByName("Amethyst Ring")).save(),
  async () => await new Unique("Circle of Nostalgia", await BaseType.findOneByName("Amethyst Ring")).save(),
  
  async () => await new Unique("Thief's Torment", await BaseType.findOneByName("Prismatic Ring")).save(),
  async () => await new Unique("Lori's Lantern", await BaseType.findOneByName("Prismatic Ring")).save(),
  async () => await new Unique("The Taming", await BaseType.findOneByName("Prismatic Ring")).save(),
  async () => await new Unique("Precursor's Emblem", await BaseType.findOneByName("Prismatic Ring")).save(),
  
  async () => await new Unique("Stormfire", await BaseType.findOneByName("Opal Ring")).save(),
  async () => await new Unique("Mark of the Shaper", await BaseType.findOneByName("Opal Ring")).save(),
  
  async () => await new Unique("Mark of the Elder", await BaseType.findOneByName("Steel Ring")).save(),
  
  async () => await new Unique("Demigod's Eye", await BaseType.findOneByName("Golden Hoop")).save(),
  
  async () => await new Unique("Band of the Victor", await BaseType.findOneByName("Jet Ring")).save(),
];

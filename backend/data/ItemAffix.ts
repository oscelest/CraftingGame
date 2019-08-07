import ItemAffix from "../entity/ItemAffix";

export default [] as (() => Promise<ItemAffix>)[];

// import * as _ from "lodash";
// import * as TypeORM from "typeorm";
// import ItemAffix from "../entity/ItemAffix";
// import ItemClass from "../entity/ItemClass";
//
// export default new Promise(async resolve => {
//
//   const manager = TypeORM.getManager();
//   const c = {
//     claws:                     await manager.findOneOrFail(ItemClass, {where: {name: "Claws"}}),
//     daggers:                   await manager.findOneOrFail(ItemClass, {where: {name: "Daggers"}}),
//     wands:                     await manager.findOneOrFail(ItemClass, {where: {name: "Wands"}}),
//     one_hand_swords:           await manager.findOneOrFail(ItemClass, {where: {name: "One Hand Swords"}}),
//     thrusting_one_hand_swords: await manager.findOneOrFail(ItemClass, {where: {name: "Thrusting One Hand Swords"}}),
//     one_hand_axes:             await manager.findOneOrFail(ItemClass, {where: {name: "One Hand Axes"}}),
//     one_hand_maces:            await manager.findOneOrFail(ItemClass, {where: {name: "One Hand Maces"}}),
//     sceptres:                  await manager.findOneOrFail(ItemClass, {where: {name: "Sceptres"}}),
//     bows:                      await manager.findOneOrFail(ItemClass, {where: {name: "Bows"}}),
//     staves:                    await manager.findOneOrFail(ItemClass, {where: {name: "Staves"}}),
//     two_hand_swords:           await manager.findOneOrFail(ItemClass, {where: {name: "Two Hand Swords"}}),
//     two_hand_axes:             await manager.findOneOrFail(ItemClass, {where: {name: "Two Hand Axes"}}),
//     two_hand_maces:            await manager.findOneOrFail(ItemClass, {where: {name: "Two Hand Maces"}}),
//     amulets:                   await manager.findOneOrFail(ItemClass, {where: {name: "Amulets"}}),
//     rings:                     await manager.findOneOrFail(ItemClass, {where: {name: "Rings"}}),
//     belts:                     await manager.findOneOrFail(ItemClass, {where: {name: "Belts"}}),
//     gloves:                    await manager.findOneOrFail(ItemClass, {where: {name: "Gloves"}}),
//     body_armours:              await manager.findOneOrFail(ItemClass, {where: {name: "Body Armours"}}),
//     helmets:                   await manager.findOneOrFail(ItemClass, {where: {name: "Helmets"}}),
//     boots:                     await manager.findOneOrFail(ItemClass, {where: {name: "Boots"}}),
//     shields:                   await manager.findOneOrFail(ItemClass, {where: {name: "Shields"}}),
//     quivers:                   await manager.findOneOrFail(ItemClass, {where: {name: "Quivers"}}),
//     jewel:                     await manager.findOneOrFail(ItemClass, {where: {name: "Jewel"}}),
//     abyss_jewels:              await manager.findOneOrFail(ItemClass, {where: {name: "Abyss Jewel"}}),
//   };
//
//   const all_item_classes = _.values(c) as ItemClass[];
//   const influenced_items = _.values(_.omit(c, ["jewel", "abyss_jewel"])) as ItemClass[];
//
//   await manager.save(new ItemAffix("Subterranean", "Delve Prefix Modifier.", all_item_classes)).catch(e => e);
//   await manager.save(new ItemAffix("of the Underground", "Delve Suffix Modifier.", all_item_classes)).catch(e => e);
//
//   await manager.save(new ItemAffix("Eldrich", "Elder Prefix Modifier", influenced_items)).catch(e => e);
//   await manager.save(new ItemAffix("of the Elder", "Elder Suffix Modifier.", influenced_items)).catch(e => e);
//   await manager.save(new ItemAffix("Shaped", "Shaper Prefix Modifier.", influenced_items)).catch(e => e);
//   await manager.save(new ItemAffix("of the Shaper", "Shaper Suffix Modifier.", influenced_items)).catch(e => e);
//
//   await manager.save(new ItemAffix("Abbot's", "Flat increase of Evasion Rating.; Flat increase of maximum Life.", [c.shields, c.helmets])).catch(e => e);
//   await manager.save(new ItemAffix("Acrobat's", "Flat increase of Evasion Rating.", [c.gloves, c.boots])).catch(e => e);
//   await manager.save(new ItemAffix("Anarchist's", "+2 to Level of Socketed Chaos Gems.", [c.daggers, c.wands, c.staves, c.shields])).catch(e => e);
//   await manager.save(new ItemAffix("Annealed", "Adds Physical Damage to Attacks.", [c.rings])).catch(e => e);
//   await manager.save(new ItemAffix("Athlete's", "Flat increase of maximum Life.", [c.gloves, c.boots, c.amulets])).catch(e => e);
//   await manager.save(new ItemAffix("Atrophying", "% increased Non-Ailment Chaos Damage over Time Multiplier.", [c.wands, c.staves])).catch(e => e);
//   await manager.save(new ItemAffix("Baleful", "Gain % of Physical Damage as Extra Chaos Damage.", [c.daggers, c.wands, c.staves, c.shields])).catch(e => e);
//   await manager.save(new ItemAffix("Blazing", "Flat increase of Energy Shield.", [c.helmets])).catch(e => e);
//   await manager.save(new ItemAffix("Burning", "Adds Fire Damage to Attacks.", [c.gloves])).catch(e => e);
//   await manager.save(new ItemAffix("Carapaced", "Flat increase of Armour.", [c.shields, c.body_armours])).catch(e => e);
//   await manager.save(new ItemAffix("Carbonising", "Adds Fire Damage to Attacks.", [c.claws, c.daggers, c.one_hand_axes, c.one_hand_maces, c.one_hand_swords, c.thrusting_one_hand_swords, c.wands, c.sceptres, c.bows, c.staves, c.two_hand_axes, c.two_hand_maces, c.two_hand_swords])).catch(e => e);
//   await manager.save(new ItemAffix("Cheetah's", "% increased Movement Speed.", [c.boots])).catch(e => e);
//   await manager.save(new ItemAffix("Cherub's", "Flat increase of Evasion Rating; Flat increase of maximum Energy Shield.", [c.helmets])).catch(e => e);
//   await manager.save(new ItemAffix("Consecrated", "Flat increase of Armour.;Flat increase of Energy Shield.", [c.shields, c.body_armours])).catch(e => e);
//   await manager.save(new ItemAffix("Corrosive", "Gain % of Fire Damage as Extra Chaos Damage.", [c.daggers, c.wands, c.sceptres, c.staves, c.shields])).catch(e => e);
//   await manager.save(new ItemAffix("Crackling", "Adds Lightning Damage to Attacks.", [c.gloves, c.quivers])).catch(e => e);
//   await manager.save(new ItemAffix("Cremating", "Adds Fire Damage to Attacks (Amulets) or Spells (Weapons).", [c.daggers, c.wands, c.sceptres, c.staves, c.rings, c.amulets])).catch(e => e);
//   await manager.save(new ItemAffix("Crocodile's", "Flat increase of Armour.;Flat increase of maximum Life.", [c.body_armours])).catch(e => e);
//   await manager.save(new ItemAffix("Crystalising", "Adds Cold Damage to Attacks.", [c.claws, c.daggers, c.one_hand_axes, c.one_hand_maces, c.one_hand_swords, c.thrusting_one_hand_swords, c.wands, c.sceptres, c.bows, c.staves, c.two_hand_axes, c.two_hand_maces, c.two_hand_swords])).catch(e => e);
//   await manager.save(new ItemAffix("Dazzling", "Flat increase of Energy Shield.", [c.belts, c.amulets])).catch(e => e);
//   await manager.save(new ItemAffix("Devastating", "% increased Elemental Damage with Attack Skills.", [c.quivers, c.belts, c.amulets])).catch(e => e);
//   await manager.save(new ItemAffix("Dictator's", "% increased Physical Damage.;Flat increase of Accuracy Rating.", [c.claws, c.daggers, c.one_hand_axes, c.one_hand_maces, c.one_hand_swords, c.thrusting_one_hand_swords, c.wands, c.sceptres, c.bows, c.staves, c.two_hand_axes, c.two_hand_maces, c.two_hand_swords])).catch(e => e);
//   await manager.save(new ItemAffix("Disintegrating", "% increased Non-Ailment Chaos Damage over Time Multiplier.", [c.wands, c.staves])).catch(e => e);
//   await manager.save(new ItemAffix("Durable", "Flat increase of Armour.;Flat increase of Evasion Rating.", [c.helmets])).catch(e => e);
//   await manager.save(new ItemAffix("Eidolon's", "Flat increase of Evasion Rating; Flat increase of maximum Energy Shield.", [c.shields, c.body_armours])).catch(e => e);
//   await manager.save(new ItemAffix("Electrocuting", "Adds Lightning Damage to Attacks (Amulets) or Spells (Weapons).", [c.daggers, c.wands, c.sceptres, c.staves, c.rings, c.amulets])).catch(e => e);
//   await manager.save(new ItemAffix("Emperor's", "% increased Physical Damage.;Flat increase of Accuracy Rating.", [c.claws, c.daggers, c.one_hand_axes, c.one_hand_maces, c.one_hand_swords, c.thrusting_one_hand_swords, c.wands, c.sceptres, c.bows, c.staves, c.two_hand_axes, c.two_hand_maces, c.two_hand_swords])).catch(e => e);
//   await manager.save(new ItemAffix("Entombing", "Adds Cold Damage to Attacks (Amulets) or Spells (Weapons).", [c.daggers, c.wands, c.sceptres, c.staves, c.rings, c.amulets])).catch(e => e);
//   await manager.save(new ItemAffix("Enveloped", "Flat increase of Armour.", [c.belts])).catch(e => e);
//   await manager.save(new ItemAffix("Esh's", "% increased Lightning Damage.", [c.wands, c.sceptres, c.daggers, c.staves])).catch(e => e);
//   await manager.save(new ItemAffix("Exarch's", "Flat increase of Energy Shield.;Flat increase of maximum Life.", [c.body_armours])).catch(e => e);
//   await manager.save(new ItemAffix("Excruciating", "Gain % of Lightning Damage as Extra Chaos Damage.", [c.daggers, c.wands, c.sceptres, c.staves, c.shields])).catch(e => e);
//   await manager.save(new ItemAffix("Fawn's", "Flat increase of Evasion Rating.;Flat increase of maximum Life.", [c.gloves, c.boots])).catch(e => e);
//   await manager.save(new ItemAffix("Fecund", "Flat increase of maximum Life.", [c.quivers, c.helmets, c.belts])).catch(e => e);
//   await manager.save(new ItemAffix("Flaring", "Adds Physical Damage to Attacks.", [c.claws, c.daggers, c.one_hand_axes, c.one_hand_maces, c.one_hand_swords, c.thrusting_one_hand_swords, c.wands, c.sceptres, c.bows, c.staves, c.two_hand_axes, c.two_hand_maces, c.two_hand_swords, c.amulets])).catch(e => e);
//   await manager.save(new ItemAffix("Flawless", "+3 to Level of Socketed Gems.", [c.rings])).catch(e => e);
//   await manager.save(new ItemAffix("Fleet", "Flat increase of Evasion Rating.", [c.helmets])).catch(e => e);
//   await manager.save(new ItemAffix("Flexible", "Flat increase of Armour.;Flat increase of Evasion Rating.", [c.gloves, c.boots])).catch(e => e);
//   await manager.save(new ItemAffix("Fortified", "Flat increase of Armour.", [c.helmets])).catch(e => e);
//   await manager.save(new ItemAffix("Frigid", "Adds Cold Damage to Attacks.", [c.quivers, c.gloves])).catch(e => e);
//   await manager.save(new ItemAffix("Gelid", "% increased Cold Damage over Time Multiplier.", [c.wands, c.sceptres, c.daggers, c.staves])).catch(e => e);
//   await manager.save(new ItemAffix("Hallowed", "Flat increase of Armour.;Flat increase of Energy Shield.", [c.helmets])).catch(e => e);
//   await manager.save(new ItemAffix("Harbinger's", "% increased Elemental Damage.", [c.shields])).catch(e => e);
//   await manager.save(new ItemAffix("Heart-Stopping", "Adds Lightning Damage to Attacks.", [c.claws, c.daggers, c.one_hand_axes, c.one_hand_maces, c.one_hand_swords, c.thrusting_one_hand_swords, c.wands, c.sceptres, c.bows, c.staves, c.two_hand_axes, c.two_hand_maces, c.two_hand_swords])).catch(e => e);
//   await manager.save(new ItemAffix("Heartstopping", "% increased Cold Damage over Time Multiplier.", [c.wands, c.sceptres, c.daggers, c.staves])).catch(e => e);
//   await manager.save(new ItemAffix("Hellion's", "% increased Movement Speed.", [c.boots])).catch(e => e);
//   await manager.save(new ItemAffix("Honed", "Adds Physical Damage to Attacks.", [c.quivers, c.gloves])).catch(e => e);
//   await manager.save(new ItemAffix("Hummingbird's", "% increased Evasion Rating.;% increased Stun and Block Recovery.", [c.shields, c.gloves, c.body_armours, c.boots, c.helmets])).catch(e => e);
//   await manager.save(new ItemAffix("Ibex's", "Flat increase of Evasion Rating.;Flat increase of maximum Life.", [c.body_armours])).catch(e => e);
//   await manager.save(new ItemAffix("Illusion's", "% increased Evasion Rating.", [c.shields, c.body_armours])).catch(e => e);
//   await manager.save(new ItemAffix("Illusory", "% increased Evasion and Energy Shield.", [c.gloves, c.boots, c.helmets])).catch(e => e);
//   await manager.save(new ItemAffix("Impenetrable", "% increased Armour.", [c.shields, c.body_armours])).catch(e => e);
//   await manager.save(new ItemAffix("Impregnable", "% increased Armour.", [c.gloves, c.boots, c.helmets, c.amulets])).catch(e => e);
//   await manager.save(new ItemAffix("Incandescent", "Flat increase of Energy Shield.", [c.shields])).catch(e => e);
//   await manager.save(new ItemAffix("Incorporeal", "% increased Evasion and Energy Shield.", [c.shields, c.body_armours])).catch(e => e);
//   await manager.save(new ItemAffix("Inspired", "% increased Armour and Energy Shield.", [c.gloves, c.boots, c.helmets])).catch(e => e);
//   await manager.save(new ItemAffix("Interpermeated", "% increased Armour and Energy Shield.", [c.shields, c.body_armours])).catch(e => e);
//   await manager.save(new ItemAffix("Lava Caller's", "+2 to Level of Socketed Fire Gems.", [c.daggers, c.wands, c.sceptres, c.staves, c.shields])).catch(e => e);
//   await manager.save(new ItemAffix("Legend's", "% increased Armour and Evasion.", [c.gloves, c.boots, c.helmets])).catch(e => e);
//   await manager.save(new ItemAffix("Lich's", "% increased Spell Damage.;Flat increase of maximum Mana.", [c.daggers, c.wands, c.sceptres, c.staves])).catch(e => e);
//   await manager.save(new ItemAffix("Malicious", "Adds Chaos Damage to Attacks.", [c.claws, c.daggers, c.one_hand_axes, c.one_hand_maces, c.one_hand_swords, c.thrusting_one_hand_swords, c.wands, c.sceptres, c.bows, c.staves, c.two_hand_axes, c.two_hand_maces, c.two_hand_swords])).catch(e => e);
//   await manager.save(new ItemAffix("Mammoth's", "% increased Armour.;% increased Stun and Block Recovery.", [c.boots])).catch(e => e);
//   await manager.save(new ItemAffix("Merciless", "% increased Physical Damage.", [c.claws, c.daggers, c.one_hand_axes, c.one_hand_maces, c.one_hand_swords, c.thrusting_one_hand_swords, c.wands, c.sceptres, c.bows, c.staves, c.two_hand_axes, c.two_hand_maces, c.two_hand_swords])).catch(e => e);
//   await manager.save(new ItemAffix("Mirage's", "% increased Evasion Rating.", [c.gloves, c.boots, c.helmets])).catch(e => e);
//   await manager.save(new ItemAffix("Mortifying", "Gain % of Cold Damage as Extra Chaos Damage.", [c.daggers, c.wands, c.sceptres, c.staves, c.shields])).catch(e => e);
//   await manager.save(new ItemAffix("Nautilus's", "Flat increase of Armour.;Flat increase of maximum Life.", [c.shields, c.helmets])).catch(e => e);
//   await manager.save(new ItemAffix("Necromancer's", "+3 to Level of Socketed Minion Gems.", [c.helmets])).catch(e => e);
//   await manager.save(new ItemAffix("of Arcing", "% increased Lightning Damage.", [c.wands, c.sceptres, c.staves])).catch(e => e);
//   await manager.save(new ItemAffix("of Ashes", "% increased Fire Damage.", [c.wands, c.sceptres, c.staves])).catch(e => e);
//   await manager.save(new ItemAffix("of Bameth", "% increased Chaos Resistance.", [c.quivers, c.shields, c.gloves, c.body_armours, c.boots, c.helmets, c.belts, c.rings, c.amulets])).catch(e => e);
//   await manager.save(new ItemAffix("of Blocking", "% increased Chance to Block.", [c.shields])).catch(e => e);
//   await manager.save(new ItemAffix("of Celebration", "% increased Attack Speed.", [c.claws, c.daggers, c.one_hand_axes, c.one_hand_maces, c.one_hand_swords, c.thrusting_one_hand_swords, c.sceptres, c.staves, c.two_hand_axes, c.two_hand_maces, c.two_hand_swords])).catch(e => e);
//   await manager.save(new ItemAffix("of Destruction", "% increased Global Critical Strike Multiplier.", [c.claws, c.daggers, c.one_hand_axes, c.one_hand_maces, c.one_hand_swords, c.thrusting_one_hand_swords, c.wands, c.sceptres, c.bows, c.staves, c.two_hand_axes, c.two_hand_maces, c.two_hand_swords, c.quivers, c.amulets])).catch(e => e);
//   await manager.save(new ItemAffix("of Discharge", "% increased Lightning Damage.", [c.amulets])).catch(e => e);
//   await manager.save(new ItemAffix("of Ephij", "% increased Lightning Resistance.", [c.quivers, c.shields, c.gloves, c.body_armours, c.boots, c.helmets, c.belts, c.rings, c.amulets])).catch(e => e);
//   await manager.save(new ItemAffix("of Excavation", "% increased Rarity of Items found.", [c.rings, c.amulets])).catch(e => e);
//   await manager.save(new ItemAffix("of Expertise", "% increased Cast Speed.", [c.shields, c.amulets])).catch(e => e);
//   await manager.save(new ItemAffix("of Exuberance", "% of Energy Shield Regenerated per second.", [c.body_armours])).catch(e => e);
//   await manager.save(new ItemAffix("of Finesse", "% increased Attack Speed.", [c.wands, c.sceptres, c.staves])).catch(e => e);
//   await manager.save(new ItemAffix("of Flames", "% increased Fire Damage.", [c.rings])).catch(e => e);
//   await manager.save(new ItemAffix("of Floe", "% increased Cold Damage.", [c.amulets])).catch(e => e);
//   await manager.save(new ItemAffix("of Fog", "% chance to Dodge Attack Hits.", [c.shields, c.body_armours])).catch(e => e);
//   await manager.save(new ItemAffix("of Glaciation", "% increased Cold Damage.", [c.wands, c.sceptres, c.staves])).catch(e => e);
//   await manager.save(new ItemAffix("of Grandmastery", "% increased Attack Speed.", [c.gloves])).catch(e => e);
//   await manager.save(new ItemAffix("of Haast", "% increased Cold Resistance.", [c.quivers, c.shields, c.gloves, c.body_armours, c.boots, c.helmets, c.belts, c.rings, c.amulets])).catch(e => e);
//   await manager.save(new ItemAffix("of Haste", "% increased Attack and Cast Speed.", [c.shields])).catch(e => e);
//   await manager.save(new ItemAffix("of Immolation", "% increased Fire Damage.", [c.amulets])).catch(e => e);
//   await manager.save(new ItemAffix("of Immortality", "% of Life Regenerated per second.", [c.shields])).catch(e => e);
//   await manager.save(new ItemAffix("of Incantations", "% chance to Dodge Spell Hits.", [c.shields])).catch(e => e);
//   await manager.save(new ItemAffix("of Incision", "% increased Critical Strike Chance.", [c.claws, c.daggers, c.one_hand_axes, c.one_hand_maces, c.one_hand_swords, c.thrusting_one_hand_swords, c.wands, c.sceptres, c.bows, c.staves, c.two_hand_axes, c.two_hand_maces, c.two_hand_swords, c.amulets])).catch(e => e);
//   await manager.save(new ItemAffix("of Lioneye", "Flat increase of Accuracy Rating.", [c.wands, c.bows, c.gloves, c.shields])).catch(e => e);
//   await manager.save(new ItemAffix("of Mastery", "% increased Attack Speed.", [c.quivers, c.shields])).catch(e => e);
//   await manager.save(new ItemAffix("of Numbing", "% additional Physical Damage Reduction.", [c.body_armours])).catch(e => e);
//   await manager.save(new ItemAffix("of Overflowing", "% increased Flask Charges gained.", [c.belts])).catch(e => e);
//   await manager.save(new ItemAffix("of Rending", "% increased Critical Strike Chance.", [c.quivers])).catch(e => e); // WHERE IS IT?
//   await manager.save(new ItemAffix("of Renown", "% increased Attack Speed.", [c.wands, c.bows])).catch(e => e);
//   await manager.save(new ItemAffix("of Revitalization", "Flat Life gained on Block.", [c.shields])).catch(e => e);
//   await manager.save(new ItemAffix("of Rime", "% increased Cold Damage.", [c.rings])).catch(e => e);
//   await manager.save(new ItemAffix("of Sanctuary", "% increased Chance to Block Projectile Attack Damage.", [c.shields])).catch(e => e);
//   await manager.save(new ItemAffix("of Skill", "% increased Attack Speed.", [c.rings])).catch(e => e);
//   await manager.save(new ItemAffix("of Talent", "% increased Cast Speed.", [c.rings])).catch(e => e);
//   await manager.save(new ItemAffix("of the Blur", "Flat increase of Dexterity.", [c.gloves])).catch(e => e);
//   await manager.save(new ItemAffix("of the Bulwark", "% increased Chance to Block Spell Damage.", [c.shields])).catch(e => e);
//   await manager.save(new ItemAffix("of the Genius", "Flat increase of Intelligence.", [c.shields, c.gloves, c.body_armours, c.boots, c.rings, c.amulets, c.belts, c.helmets])).catch(e => e);
//   await manager.save(new ItemAffix("of the Gods", "Flat increase of Strength.", [c.shields, c.gloves, c.body_armours, c.boots, c.rings, c.amulets, c.belts, c.helmets])).catch(e => e);
//   await manager.save(new ItemAffix("of the Godslayer", "Flat increase of Strength.", [c.belts])).catch(e => e);
//   await manager.save(new ItemAffix("of the Multiverse", "Flat increase of all Attributes.", [c.amulets])).catch(e => e);
//   await manager.save(new ItemAffix("of the Polymath", "Flat increase of Intelligence.", [c.helmets])).catch(e => e);
//   await manager.save(new ItemAffix("of the Rainbow", "% increased all Resistance.", [c.rings])).catch(e => e);
//   await manager.save(new ItemAffix("of the Ranger", "Flat increase of Accuracy Rating.", [c.claws, c.daggers, c.one_hand_axes, c.one_hand_maces, c.one_hand_swords, c.thrusting_one_hand_swords, c.sceptres, c.staves, c.two_hand_axes, c.two_hand_maces, c.two_hand_swords, c.quivers, c.rings, c.amulets])).catch(e => e);
//   await manager.save(new ItemAffix("of the Span", "% increased all Resistance.", [c.shields, c.amulets])).catch(e => e);
//   await manager.save(new ItemAffix("of the Wind", "Flat increase of Dexterity.", [c.shields, c.gloves, c.body_armours, c.boots, c.rings, c.amulets, c.belts, c.helmets])).catch(e => e);
//   await manager.save(new ItemAffix("of Tzteosh", "% increased Fire Resistance.", [c.quivers, c.shields, c.gloves, c.body_armours, c.boots, c.helmets, c.belts, c.rings, c.amulets])).catch(e => e);
//   await manager.save(new ItemAffix("of Unmaking", "% increased Critical Strike Chance for Spells.", [c.daggers, c.wands, c.sceptres, c.staves])).catch(e => e);
//   await manager.save(new ItemAffix("of Utilisation", "Flat Mana gained on Block.", [c.shields])).catch(e => e);
//   await manager.save(new ItemAffix("of Voltage", "% increased Lightning Damage.", [c.rings])).catch(e => e);
//   await manager.save(new ItemAffix("Overpowering", "% increased Elemental Damage with Attack Skills.", [c.claws, c.daggers, c.one_hand_axes, c.one_hand_maces, c.one_hand_swords, c.thrusting_one_hand_swords, c.wands, c.sceptres, c.bows, c.staves, c.two_hand_axes, c.two_hand_maces, c.two_hand_swords, c.rings])).catch(e => e);
//   await manager.save(new ItemAffix("Paragon's", "+1 to Level of Socketed Gems.", [c.claws, c.daggers, c.one_hand_axes, c.one_hand_maces, c.one_hand_swords, c.thrusting_one_hand_swords, c.wands, c.sceptres, c.bows, c.staves, c.two_hand_axes, c.two_hand_maces, c.two_hand_swords])).catch(e => e);
//   await manager.save(new ItemAffix("Perandus'", "% increased Rarity of Items Found.", [c.rings, c.amulets])).catch(e => e);
//   await manager.save(new ItemAffix("Phased", "Flat increase of Evasion Rating.", [c.shields, c.body_armours])).catch(e => e);
//   await manager.save(new ItemAffix("Predator's", "% increased Attack Damage.", [c.shields])).catch(e => e);
//   await manager.save(new ItemAffix("Prime", "Flat increase of maximum Life.", [c.body_armours])).catch(e => e);
//   await manager.save(new ItemAffix("Prior's", "Flat increase of Evasion Rating.;Flat increase of maximum Life.", [c.gloves, c.boots])).catch(e => e);
//   await manager.save(new ItemAffix("Ram's", "Flat increase of Evasion Rating.;Flat increase of maximum Life.", [c.shields, c.helmets])).catch(e => e);
//   await manager.save(new ItemAffix("Resilient", "Flat increase of Armour.;Flat increase of Evasion Rating.", [c.shields, c.body_armours])).catch(e => e);
//   await manager.save(new ItemAffix("Resplendent", "Flat increase of Energy Shield.", [c.body_armours, c.rings])).catch(e => e);
//   await manager.save(new ItemAffix("Ribbed", "Flat increase of Armour.", [c.gloves, c.boots])).catch(e => e);
//   await manager.save(new ItemAffix("Runic", "% increased Spell Damage.", [c.wands, c.sceptres, c.daggers, c.staves, c.shields])).catch(e => e);
//   await manager.save(new ItemAffix("Sanctified", "Flat increase of Armour.;Flat increase of Energy Shield.", [c.gloves, c.boots])).catch(e => e);
//   await manager.save(new ItemAffix("Seething", "Flat increase of Energy Shield.", [c.boots])).catch(e => e);
//   await manager.save(new ItemAffix("Seraphim's", "% increased Energy Shield.;% increased Stun and Block Recovery.", [c.shields, c.boots, c.gloves, c.body_armours, c.helmets])).catch(e => e);
//   await manager.save(new ItemAffix("Sharpshooter's", "+2 to Level of Socketed Bow Gems.", [c.bows])).catch(e => e);
//   await manager.save(new ItemAffix("Sylph's", "Flat increase of Evasion Rating; Flat increase of maximum Energy Shield..", [c.gloves, c.boots])).catch(e => e);
//   await manager.save(new ItemAffix("Tempest King's", "+2 to Level of Socketed Lightning gems.", [c.wands, c.sceptres, c.daggers, c.staves, c.shields])).catch(e => e);
//   await manager.save(new ItemAffix("Tul's", "% increased Cold Damage.", [c.wands, c.sceptres, c.staves, c.shields])).catch(e => e);
//   await manager.save(new ItemAffix("Tyrannical", "% increased Physical Damage.", [c.claws, c.daggers, c.one_hand_axes, c.one_hand_maces, c.one_hand_swords, c.thrusting_one_hand_swords, c.wands, c.sceptres, c.bows, c.staves, c.two_hand_axes, c.two_hand_maces, c.two_hand_swords])).catch(e => e);
//   await manager.save(new ItemAffix("Unassailable", "% increased Energy Shield.", [c.gloves, c.boots, c.helmets, c.amulets])).catch(e => e);
//   await manager.save(new ItemAffix("Unfailing", "% increased Armour.;% increased Chance to Block.", [c.shields])).catch(e => e);
//   await manager.save(new ItemAffix("Unfaltering", "% increased Energy Shield.", [c.body_armours])).catch(e => e);
//   await manager.save(new ItemAffix("Urchin's", "Flat increase of Armour.;Flat increase of maximum Life.", [c.gloves, c.boots])).catch(e => e);
//   await manager.save(new ItemAffix("Vaporous", "% increased Evasion Rating.", [c.gloves, c.boots, c.rings, c.amulets])).catch(e => e);
//   await manager.save(new ItemAffix("Victor's", "% increased Armour and Evasion.", [c.shields, c.body_armours])).catch(e => e);
//   await manager.save(new ItemAffix("Vigorous", "Flat increase of maximum Life.", [c.shields])).catch(e => e);
//   await manager.save(new ItemAffix("Virile", "Flat increase of maximum Life.", [c.rings])).catch(e => e);
//   await manager.save(new ItemAffix("Weaponmaster's", "+2 to Level of Socketed Melee Gems.", [c.claws, c.daggers, c.one_hand_axes, c.one_hand_maces, c.one_hand_swords, c.thrusting_one_hand_swords, c.sceptres, c.staves, c.two_hand_axes, c.two_hand_maces, c.two_hand_swords])).catch(e => e);
//   await manager.save(new ItemAffix("Winterbringer's", "+2 to Level of Socketed Cold Gems.", [c.daggers, c.wands, c.sceptres, c.staves, c.shields])).catch(e => e);
//   await manager.save(new ItemAffix("Wizard's", "% increased Spell Damage.", [c.amulets])).catch(e => e);
//   await manager.save(new ItemAffix("Xoph's", "% increased Fire Damage.", [c.wands, c.sceptres, c.daggers, c.staves])).catch(e => e);
//
//   resolve([]);
// });
// //   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Subterranean", description: "Delve Prefix Modifier.", item_classes: i}).execute(),
// //
// //   // All Delve items
// //   // manager.find(ItemClass, {
// //   //   where: {
// //   //     name: TypeORM.In([
// //   //
// //   //     ]),
// //   //   },
// //   // })
// //   // .then(async i => Promise.all([
// //   //   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Subterranean", description: "Delve Prefix Modifier.", item_classes: i}).execute(),
// //   //   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of the Underground", description: "Delve Suffix Modifier.", item_classes: i}).execute(),
// //   // ])),
// //   //
// //   // // All Shaper/Elder items
// //   // manager.find(ItemClass, {
// //   //   where: {
// //   //     name: TypeORM.In([
// //   //       "Claws", "Daggers", "Wands", "One Hand Swords", "Thrusting One Hand Swords", "One Hand Axes", "One Hand Maces", "Sceptres", "Bows", "Staves", "Two Hand Swords", "Two Hand Axes", "Two Hand Maces",
// //   //       "Amulets", "Rings", "Belts", "Gloves", "Body Armours", "Helmets", "Shields", "Quivers",
// //   //     ]),
// //   //   },
// //   // })
// //   // .then(async i => Promise.all([
// //   //   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Eldrich", description: "Elder Prefix Modifier", item_classes: i}).execute(),
// //   //   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of the Elder", description: "Elder Suffix Modifier.", item_classes: i}).execute(),
// //   //   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Shaped", description: "Shaper Prefix Modifier.", item_classes: i}).execute(),
// //   //   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of the Shaper", description: "Shaper Suffix Modifier.", item_classes: i}).execute(),
// //   // ])),
// //   //
// //   // // Weapons/Shields
// //   // manager.find(ItemClass, {
// //   //   where: {
// //   //     name: TypeORM.In([
// //   //       "Claws", "Daggers", "Wands", "One Hand Swords", "Thrusting One Hand Swords", "One Hand Axes", "One Hand Maces", "Sceptres", "Bows", "Staves", "Two Hand Swords", "Two Hand Axes", "Two Hand Maces",
// //   //     ]),
// //   //   },
// //   // })
// //   // .then(async i => Promise.all([
// //   //   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Catarina's Veiled", description: "Increased Level of Socketed Support Gems.", item_classes: i}).execute(),
// //   // ])),
// //   //
// //   // // Weapons
// //   // manager.find(ItemClass, {
// //   //   where: {
// //   //     name: TypeORM.In([
// //   //       "Claws", "Daggers", "Wands", "One Hand Swords", "Thrusting One Hand Swords", "One Hand Axes", "One Hand Maces", "Sceptres", "Bows", "Staves", "Two Hand Swords", "Two Hand Axes", "Two Hand Maces",
// //   //     ]),
// //   //   },
// //   // })
// //   // .then(async i => Promise.all([
// //   //   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Emperor's", description: "Local % increased Physical; Flat increase of Accuracy Rating.", item_classes: i}).execute(),
// //   //   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Dictator's", description: "Local % increased Physical; Flat increase of Accuracy Rating.", item_classes: i}).execute(),
// //   //   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Merciless", description: "Local % increased Physical.", item_classes: i}).execute(),
// //   //   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Tyrannical", description: "Local % increased Physical.", item_classes: i}).execute(),
// //   //   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Overpowering", description: "Global % increased Elemental Damage with Attack Skills."}).execute(),
// //   //
// //   //
// //   //   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Flaring", description: "Local flat increase of Physical Damage.", item_classes: i}).execute(),
// //   //   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Carbonising", description: "Local flat increase of Fire Damage.", item_classes: i}).execute(),
// //   //   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Crystalising", description: "Local flat increase of Cold Damage.", item_classes: i}).execute(),
// //   //   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Heart-Stopping", description: "Local flat increase of Lightning Damage.", item_classes: i}).execute(),
// //   //   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Malicious", description: "Local flat increase of Chaos Damage.", item_classes: i}).execute(),
// //   //
// //   //   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Paragon's", description: "+1 to Level of Socketed Gems.", item_classes: i}).execute(),
// //   //   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Incision", description: "Local % increased Critical Strike Chance.", item_classes: i}).execute(),
// //   //   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Destruction", description: "% increased Global Critical Strike Multiplier.", item_classes: i}).execute(),
// //   //
// //   //   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Haku's Veiled", description: "Weapon, Shield - % increased Quality of Socketed Gems.", item_classes: i}).execute(),
// //   //   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Tora's Veiled", description: "Weapon - Adds X to Y Physical Damage; 40% chance to cause Bleeding on Hit.", item_classes: i}).execute(),
// //   //   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Vagan's Veiled", description: "Weapon - Hits can't be evaded.", item_classes: i}).execute(),
// //   //   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "It That Fled's Veiled", description: "Weapon - Increased Spell Damage; Gain % of Non-Chaos Damage as Extra Chaos Damage.", item_classes: i}).execute(),
// //   // ])),
// //   //
// //   // // One Hand Weapons
// //   // manager.find(ItemClass, {where: {name: TypeORM.In(["Claws", "Daggers", "Wands", "One Hand Swords", "Thrusting One Hand Swords", "One Hand Axes", "One Hand Maces", "Sceptres"])}})
// //   // .then(async i => Promise.all([
// //   //   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Celebration", description: "Local % increased Attack Speed.", item_classes: i}).execute(),
// //   //   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of the Ranger", description: "Flat increase of Accuracy Rating.", item_classes: i}).execute(),
// //   // ])),
// //   //
// //   // // Two Hand Weapons
// //   // manager.find(ItemClass, {where: {name: TypeORM.In(["Staves", "Two Hand Swords", "Two Hand Axes", "Two Hand Maces"])}})
// //   // .then(async i => Promise.all([
// //   //
// //   // ])),
// //   //
// //   // // Bows
// //   // manager.find(ItemClass, {where: {name: TypeORM.In(["Bows"])}})
// //   // .then(async i => Promise.all([
// //   //   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Sharpshooter's", description: "+2 to Level of Socketed Bow Gems.", item_classes: i}).execute(),
// //   //   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Renown", description: "Local % increased Attack Speed.", item_classes: i}).execute(),
// //   // ])),
// //
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Emperor's", description: "Local % increased Physical; Flat increase of Accuracy Rating."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Dictator's", description: "Local % increased Physical; Flat increase of Accuracy Rating."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Merciless", description: "Local % increased Physical."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Tyrannical", description: "Local % increased Physical."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Devastating", description: "Global % increased Elemental Damage with Attack Skills."}).execute(),
// //   //
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Impregnable", description: "Global % increased Armour."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Vaporous", description: "Global % increased Evasion Rating."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Unassailable", description: "Global % increased maximum Energy Shield."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Wizard's", description: "% increased Spell Damage."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Perandus'", description: "% increased Rarity of Items found."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Flawless", description: "+3 to Level of Socketed Gems."}).execute(),
// //   //
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Paragon's", description: ""}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Lava Caller's", description: "+2 to Level of Socketed Fire Gems."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Winterbringer's", description: "+2 to Level of Socketed Cold Gems."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Tempest King's", description: "+2 to Level of Socketed Lightning Gems."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Anarchist's", description: "+2 to Level of Socketed Chaos Gems."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Weaponmaster's", description: "+2 to Level of Socketed Melee Gems."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Sharpshooter's", description: "+2 to Level of Socketed Bow Gems."}).execute(),
// //   //
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Athlete's", description: "Flat increase of maximum Life."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Virile", description: "Flat increase of maximum Life."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Fecund", description: "Flat increase of maximum Life."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Dazzling", description: "Flat increase of maximum Energy Shield."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Resplendent", description: "Flat increase of maximum Energy Shield."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Zaffre", description: "Flat increase of maximum Mana."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Ultramarine", description: "Flat increase of maximum Mana."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Enveloped", description: "Flat increase of maximum Armour."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Vaporous", description: "Flat increase of maximum Evasion Rating."}).execute(),
// //   //
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Honed", description: "Local flat increase of Physical Damage."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Annealed", description: "Local flat increase of Physical Damage."}).execute(),
// //   //
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Burning", description: "Local flat increase of Fire Damage."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Carbonising", description: "Local flat increase of Fire Damage."}).execute(),
// //   //
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Frigid", description: "Local flat increase of Cold Damage."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Crystalising", description: "Local flat increase of Cold Damage."}).execute(),
// //   //
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Crackling", description: "Local flat increase of Lightning Damage."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Heart-Stopping", description: "Local flat increase of Lightning Damage."}).execute(),
// //   //
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Malicious", description: "Local flat increase of Chaos Damage."}).execute(),
// //   //
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Cremating", description: "Local flat increase of Fire Damage to Spells."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Entombing", description: "Local flat increase of Cold Damage to Spells."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Electrocuting", description: "Local flat increase of Lightning Damage to Spells."}).execute(),
// //   //
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Atrophying", description: "% increased Non-Ailment Chaos Damage over Time Multiplier."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Disintegrating", description: "% increased Non-Ailment Chaos Damage over Time Multiplier."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Gelid", description: "% increased Cold Damage over Time Multiplier."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Heartstopping", description: "% increased Cold Damage over Time Multiplier."}).execute(),
// //   //
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Runic", description: "% increased Spell Damage."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Xoph's", description: "% increased Fire Damage."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Tul's", description: "% increased Cold Damage."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Esh's", description: "% increased Lightning Damage."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Lich's", description: "% increased Spell Damage; Flat increase of maximum Mana."}).execute(),
// //   //
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Corrosive", description: "Gain % of Fire Damage as Extra Chaos Damage."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Mortifying", description: "Gain % of Cold Damage as Extra Chaos Damage."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Excruciating", description: "Gain % of Lightning Damage as Extra Chaos Damage."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Baleful", description: "Gain % of Physical Damage as Extra Chaos Damage."}).execute(),
// //   //
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of the Genius", description: "Flat increase of Intelligence."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of the Gods", description: "Flat increase of Strength."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of the Godslayer", description: "Flat increase of Strength."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of the Wind", description: "Flat increase of Dexterity."}).execute(),
// //   //
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Skill", description: "Global % increased Attack Speed."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Renown", description: "Local % increased Attack Speed."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Talent", description: "% increased Cast Speed."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Finesse", description: "% increased Cast Speed."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Expertise", description: "% increased Cast Speed."}).execute(),
// //   //
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Nirvana", description: "% increased Mana Regeneration Rate."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Excavation", description: "% increased Rarity of Items found."}).execute(),
// //   //
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Overflowing", description: "% increased Flask Charges gained."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of the Ranger", description: "Flat increase of Accuracy Rating."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Lioneye", description: "Flat increase of Accuracy Rating."}).execute(),
// //   //
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Incision", description: "Local % increased Critical Strike Chance."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Unmaking", description: "% increased Critical Strike Chance for Spells."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Destruction", description: "% increased Global Critical Strike Multiplier."}).execute(),
// //   //
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Tzteosh", description: "% increased Fire Resistance."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Haast", description: "% increased Cold Resistance."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Ephij", description: "% increased Lightning Resistance."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Bameth", description: "% increased Chaos Resistance."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of the Span", description: "% increased Elemental Resistances."}).execute(),
// //   //
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Flames", description: "% increased Fire Damage."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Immolation", description: "% increased Fire Damage."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Ashes", description: "% increased Fire Damage."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Rime", description: "% increased Cold Damage."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Floe", description: "% increased Cold Damage."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Glaciation", description: "% increased Cold Damage."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Voltage", description: "% increased Lightning Damage."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Discharge", description: "% increased Lightning Damage."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Arcing", description: "% increased Lightning Damage."}).execute(),
// //   //
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Subterranean", description: "Delve Prefix Modifier."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of the Underground", description: "Delve Suffix Modifier."}).execute(),
// //   //
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Eldrich", description: "Elder Prefix Modifier"}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of the Elder", description: "Elder Suffix Modifier."}).execute(),
// //   //
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Shaped", description: "Shaper Prefix Modifier."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of the Shaper", description: "Shaper Suffix Modifier."}).execute(),
// //   //
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Veiled", description: "Veiled Prefix Modifier."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Elreon's Veiled", description: "Ring - Flat Reduction to Total Mana Cost of Skills."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Gravicius' Veiled", description: "Body Armour - Gain % of Maximum Life as Extra Maximum Energy Shield."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Guff's Veiled", description: "Gloves - % increased Damage during any Flask Effect."}).execute(),
// //   //
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Korell's Veiled", description: "Helmet - % of Physical Damage from Hits taken as Fire Damage."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Leo's Veiled", description: "Ring, Belt - % increased Damage."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Rin's Veiled", description: "Boots - Cannot be Frozen."}).execute(),
// //
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Vorici's Veiled", description: "Amulet, Gloves - % increased Damage while Leeching."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of the Veil", description: "Veiled Suffix Modifier."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Aisling's Veil", description: "Ring - % increased Chaos Damage; % increased Physical Damage."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Cameria's Veil", description: "Ring - % increased Critical Strike Multiplier if you've Shattered an Enemy Recently; % increased Global Critical Strike Chance."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Hillock's Veil", description: "Body Armour - % increased Attributes."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Janus' Veil", description: "Helmet - % increased Rarity of Items Dropped by Slain Rare or Unique Enemies."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Jorgin's Veil", description: "Amulet - 10% Chance to Trigger Level 18 Summon Spectral Wolf on Kill."}).execute(),
// //   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Riker's Veil", description: "Ring - % increased Fire Damage; % increased Lightning Damage."}).execute(),
// //
// // ]);
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //

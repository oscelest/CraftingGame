import * as _ from "lodash";
import * as TypeORM from "typeorm";
import ItemAffix from "../entity/ItemAffix";
import ItemClass from "../entity/ItemClass";


const manager = TypeORM.getManager();

Promise.all([
  manager.findOneOrFail(ItemClass, {where: {name: "Claws"}}),
  manager.findOneOrFail(ItemClass, {where: {name: "Daggers"}}),
  manager.findOneOrFail(ItemClass, {where: {name: "Wands"}}),
  manager.findOneOrFail(ItemClass, {where: {name: "One Hand Swords"}}),
  manager.findOneOrFail(ItemClass, {where: {name: "Thrusting One Hand Swords"}}),
  manager.findOneOrFail(ItemClass, {where: {name: "One Hand Axes"}}),
  manager.findOneOrFail(ItemClass, {where: {name: "One Hand Maces"}}),
  manager.findOneOrFail(ItemClass, {where: {name: "Sceptres"}}),
  manager.findOneOrFail(ItemClass, {where: {name: "Bows"}}),
  manager.findOneOrFail(ItemClass, {where: {name: "Staves"}}),
  manager.findOneOrFail(ItemClass, {where: {name: "Two Hand Swords"}}),
  manager.findOneOrFail(ItemClass, {where: {name: "Two Hand Axes"}}),
  manager.findOneOrFail(ItemClass, {where: {name: "Two Hand Maces"}}),
  manager.findOneOrFail(ItemClass, {where: {name: "Amulets"}}),
  manager.findOneOrFail(ItemClass, {where: {name: "Rings"}}),
  manager.findOneOrFail(ItemClass, {where: {name: "Belts"}}),
  manager.findOneOrFail(ItemClass, {where: {name: "Gloves"}}),
  manager.findOneOrFail(ItemClass, {where: {name: "Body Armours"}}),
  manager.findOneOrFail(ItemClass, {where: {name: "Helmets"}}),
  manager.findOneOrFail(ItemClass, {where: {name: "Boots"}}),
  manager.findOneOrFail(ItemClass, {where: {name: "Shields"}}),
  manager.findOneOrFail(ItemClass, {where: {name: "Quivers"}}),
  manager.findOneOrFail(ItemClass, {where: {name: "Jewel"}}),
  manager.findOneOrFail(ItemClass, {where: {name: "Abyss Jewel"}}),
])
.then(item_classes => _.reduce(item_classes, (r, v) => _.set(r, _.snakeCase(v.name), v), {}))


export default new Promise(async resolve => {
  
  const manager = TypeORM.getManager();
  const c = {
    claws:                     await manager.findOneOrFail(ItemClass, {where: {name: "Claws"}}),
    daggers:                   await manager.findOneOrFail(ItemClass, {where: {name: "Daggers"}}),
    wands:                     await manager.findOneOrFail(ItemClass, {where: {name: "Wands"}}),
    one_hand_swords:           await manager.findOneOrFail(ItemClass, {where: {name: "One Hand Swords"}}),
    thrusting_one_hand_swords: await manager.findOneOrFail(ItemClass, {where: {name: "Thrusting One Hand Swords"}}),
    one_hand_axes:             await manager.findOneOrFail(ItemClass, {where: {name: "One Hand Axes"}}),
    one_hand_maces:            await manager.findOneOrFail(ItemClass, {where: {name: "One Hand Maces"}}),
    sceptres:                  await manager.findOneOrFail(ItemClass, {where: {name: "Sceptres"}}),
    bows:                      await manager.findOneOrFail(ItemClass, {where: {name: "Bows"}}),
    staves:                    await manager.findOneOrFail(ItemClass, {where: {name: "Staves"}}),
    two_hand_swords:           await manager.findOneOrFail(ItemClass, {where: {name: "Two Hand Swords"}}),
    two_hand_axes:             await manager.findOneOrFail(ItemClass, {where: {name: "Two Hand Axes"}}),
    two_hand_maces:            await manager.findOneOrFail(ItemClass, {where: {name: "Two Hand Maces"}}),
    amulets:                   await manager.findOneOrFail(ItemClass, {where: {name: "Amulets"}}),
    rings:                     await manager.findOneOrFail(ItemClass, {where: {name: "Rings"}}),
    belts:                     await manager.findOneOrFail(ItemClass, {where: {name: "Belts"}}),
    gloves:                    await manager.findOneOrFail(ItemClass, {where: {name: "Gloves"}}),
    body_armours:              await manager.findOneOrFail(ItemClass, {where: {name: "Body Armours"}}),
    helmets:                   await manager.findOneOrFail(ItemClass, {where: {name: "Helmets"}}),
    boots:                     await manager.findOneOrFail(ItemClass, {where: {name: "Boots"}}),
    shields:                   await manager.findOneOrFail(ItemClass, {where: {name: "Shields"}}),
    quivers:                   await manager.findOneOrFail(ItemClass, {where: {name: "Quivers"}}),
    jewel:                     await manager.findOneOrFail(ItemClass, {where: {name: "Jewel"}}),
    abyss_jewels:              await manager.findOneOrFail(ItemClass, {where: {name: "Abyss Jewel"}}),
  };
  
  const all_item_classes = _.values(c) as ItemClass[];
  const influenced_items = _.values(_.omit(c, ["jewel", "abyss_jewel"])) as ItemClass[];
  
  await manager.save(new ItemAffix("Subterranean", "Delve Prefix Modifier.", all_item_classes)).catch(e => e);
  await manager.save(new ItemAffix("of the Underground", "Delve Suffix Modifier.", all_item_classes)).catch(e => e);
  
  await manager.save(new ItemAffix("Eldrich", "Elder Prefix Modifier", influenced_items)).catch(e => e);
  await manager.save(new ItemAffix("of the Elder", "Elder Suffix Modifier.", influenced_items)).catch(e => e);
  await manager.save(new ItemAffix("Shaped", "Shaper Prefix Modifier.", influenced_items)).catch(e => e);
  await manager.save(new ItemAffix("of the Shaper", "Shaper Suffix Modifier.", influenced_items)).catch(e => e);
  
  await manager.save(new ItemAffix("Abbot's", "Shaper Suffix Modifier.", [c.shields, c.helmets])).catch(e => e);
  await manager.save(new ItemAffix("Acrobat's", "Shaper Suffix Modifier.", [c.gloves, c.boots])).catch(e => e);
  await manager.save(new ItemAffix("Anarchist's", "Shaper Suffix Modifier.", [c.daggers, c.wands, c.sceptres, c.staves, c.shields])).catch(e => e);
  await manager.save(new ItemAffix("Annealed", "Shaper Suffix Modifier.", [c.rings])).catch(e => e);
  await manager.save(new ItemAffix("Athlete's", "Shaper Suffix Modifier.", [c.gloves, c.boots, c.amulets])).catch(e => e);
  await manager.save(new ItemAffix("Atrophying", "Shaper Suffix Modifier.", [c.wands, c.staves])).catch(e => e);
  await manager.save(new ItemAffix("Baleful", "Shaper Suffix Modifier.", [c.daggers, c.wands, c.sceptres, c.staves, c.shields])).catch(e => e);
  await manager.save(new ItemAffix("Blazing", "Shaper Suffix Modifier.", [c.helmets])).catch(e => e);
  await manager.save(new ItemAffix("Burning", "Shaper Suffix Modifier.", [c.gloves])).catch(e => e);
  await manager.save(new ItemAffix("Carapaced", "Shaper Suffix Modifier.", [c.shields, c.body_armours])).catch(e => e);
  await manager.save(new ItemAffix("Carbonising", "Shaper Suffix Modifier.", [c.claws, c.daggers, c.one_hand_axes, c.one_hand_maces, c.one_hand_swords, c.thrusting_one_hand_swords, c.wands, c.sceptres, c.bows, c.staves, c.two_hand_axes, c.two_hand_maces, c.two_hand_swords])).catch(e => e);
  await manager.save(new ItemAffix("Cheetah's", "Shaper Suffix Modifier.", [c.boots])).catch(e => e);
  await manager.save(new ItemAffix("Cherub's", "Shaper Suffix Modifier.", [c.helmets])).catch(e => e);
  await manager.save(new ItemAffix("Consecrated", "Shaper Suffix Modifier.", [c.shields, c.body_armours])).catch(e => e);
  await manager.save(new ItemAffix("Corrosive", "Shaper Suffix Modifier.", [c.daggers, c.wands, c.sceptres, c.staves, c.shields])).catch(e => e);
  await manager.save(new ItemAffix("Crackling", "Shaper Suffix Modifier.", [c.gloves, c.quivers])).catch(e => e);
  await manager.save(new ItemAffix("Cremating", "Shaper Suffix Modifier.", [c.daggers, c.wands, c.sceptres, c.staves, c.rings, c.amulets])).catch(e => e);
  await manager.save(new ItemAffix("Crocodile's", "Shaper Suffix Modifier.", [c.body_armours])).catch(e => e);
  await manager.save(new ItemAffix("Crystalising's", "Shaper Suffix Modifier.", [c.claws, c.daggers, c.one_hand_axes, c.one_hand_maces, c.one_hand_swords, c.thrusting_one_hand_swords, c.wands, c.sceptres, c.bows, c.staves, c.two_hand_axes, c.two_hand_maces, c.two_hand_swords])).catch(e => e);
  await manager.save(new ItemAffix("Dazzling", "Shaper Suffix Modifier.", [c.belts])).catch(e => e);
  await manager.save(new ItemAffix("Devastating", "Shaper Suffix Modifier.", [c.quivers, c.belts, c.amulets])).catch(e => e);
  await manager.save(new ItemAffix("Dictator's", "Shaper Suffix Modifier.", [c.claws, c.daggers, c.one_hand_axes, c.one_hand_maces, c.one_hand_swords, c.thrusting_one_hand_swords, c.wands, c.sceptres, c.bows, c.staves, c.two_hand_axes, c.two_hand_maces, c.two_hand_swords])).catch(e => e);
  await manager.save(new ItemAffix("Disintegrating", "Shaper Suffix Modifier.", [c.wands, c.staves])).catch(e => e);
  await manager.save(new ItemAffix("Durable", "Shaper Suffix Modifier.", [c.helmets])).catch(e => e);
  await manager.save(new ItemAffix("Eidolon's", "Shaper Suffix Modifier.", [c.shields, c.body_armours])).catch(e => e);
  await manager.save(new ItemAffix("Electrocuting", "Shaper Suffix Modifier.", [c.daggers, c.wands, c.sceptres, c.staves, c.rings, c.amulets])).catch(e => e);
  await manager.save(new ItemAffix("Emperor's", "Shaper Suffix Modifier.", [c.claws, c.daggers, c.one_hand_axes, c.one_hand_maces, c.one_hand_swords, c.thrusting_one_hand_swords, c.wands, c.sceptres, c.bows, c.staves, c.two_hand_axes, c.two_hand_maces, c.two_hand_swords])).catch(e => e);
  await manager.save(new ItemAffix("Entombing", "Shaper Suffix Modifier.", [c.daggers, c.wands, c.sceptres, c.staves, c.rings, c.amulets])).catch(e => e);
  await manager.save(new ItemAffix("Enveloped", "Shaper Suffix Modifier.", [c.belts])).catch(e => e);
  await manager.save(new ItemAffix("Esh's", "Shaper Suffix Modifier.", [c.wands, c.sceptres, c.daggers, c.staves])).catch(e => e);
  await manager.save(new ItemAffix("Exarch's", "Shaper Suffix Modifier.", [c.body_armours])).catch(e => e);
  await manager.save(new ItemAffix("Excruciating", "Shaper Suffix Modifier.", [c.daggers, c.wands, c.sceptres, c.staves, c.shields])).catch(e => e);
  await manager.save(new ItemAffix("Fawn's", "Shaper Suffix Modifier.", [c.gloves, c.boots])).catch(e => e);
  await manager.save(new ItemAffix("Fecund", "Shaper Suffix Modifier.", [c.quivers, c.helmets, c.belts])).catch(e => e);
  await manager.save(new ItemAffix("Flaring", "Shaper Suffix Modifier.", [c.claws, c.daggers, c.one_hand_axes, c.one_hand_maces, c.one_hand_swords, c.thrusting_one_hand_swords, c.wands, c.sceptres, c.bows, c.staves, c.two_hand_axes, c.two_hand_maces, c.two_hand_swords])).catch(e => e);
  await manager.save(new ItemAffix("Flawless", "Shaper Suffix Modifier.", [c.rings])).catch(e => e);
  await manager.save(new ItemAffix("Fleet", "Shaper Suffix Modifier.", [c.helmets])).catch(e => e);
  await manager.save(new ItemAffix("Flexible", "Shaper Suffix Modifier.", [c.gloves, c.boots])).catch(e => e);
  await manager.save(new ItemAffix("Fortified", "Shaper Suffix Modifier.", [c.helmets])).catch(e => e);
  await manager.save(new ItemAffix("Frigid", "Shaper Suffix Modifier.", [c.quivers, c.gloves])).catch(e => e);
  await manager.save(new ItemAffix("Gelid", "Shaper Suffix Modifier.", [c.wands, c.sceptres, c.daggers, c.staves])).catch(e => e);
  await manager.save(new ItemAffix("Hallowed", "Shaper Suffix Modifier.", [c.helmets])).catch(e => e);
  await manager.save(new ItemAffix("Harbinger's", "Shaper Suffix Modifier.", [c.shields])).catch(e => e);
  await manager.save(new ItemAffix("Heart-Stopping", "Shaper Suffix Modifier.", [c.claws, c.daggers, c.one_hand_axes, c.one_hand_maces, c.one_hand_swords, c.thrusting_one_hand_swords, c.wands, c.sceptres, c.bows, c.staves, c.two_hand_axes, c.two_hand_maces, c.two_hand_swords])).catch(e => e);
  await manager.save(new ItemAffix("Heartstopping", "Shaper Suffix Modifier.", [c.wands, c.sceptres, c.daggers, c.staves])).catch(e => e);
  await manager.save(new ItemAffix("Hellion's", "Shaper Suffix Modifier.", [c.boots])).catch(e => e);
  await manager.save(new ItemAffix("Honed", "Shaper Suffix Modifier.", [c.quivers, c.gloves])).catch(e => e);
  await manager.save(new ItemAffix("Hummingbird's", "Shaper Suffix Modifier.", [c.shields, c.gloves, c.body_armours, c.boots, c.helmets])).catch(e => e);
  await manager.save(new ItemAffix("Ibex's", "Shaper Suffix Modifier.", [c.body_armours])).catch(e => e);
  await manager.save(new ItemAffix("Illusion's", "Shaper Suffix Modifier.", [c.shields, c.body_armours])).catch(e => e);
  await manager.save(new ItemAffix("Illusory", "Shaper Suffix Modifier.", [c.gloves, c.boots, c.helmets])).catch(e => e);
  await manager.save(new ItemAffix("Impenetrable", "Shaper Suffix Modifier.", [c.shields, c.body_armours])).catch(e => e);
  await manager.save(new ItemAffix("Impregnable", "Shaper Suffix Modifier.", [c.gloves, c.boots, c.helmets, c.amulets])).catch(e => e);
  await manager.save(new ItemAffix("Incandescent", "Shaper Suffix Modifier.", [c.shields])).catch(e => e);
  await manager.save(new ItemAffix("Incorporeal", "Shaper Suffix Modifier.", [c.shields, c.body_armours])).catch(e => e);
  await manager.save(new ItemAffix("Inspired", "Shaper Suffix Modifier.", [c.gloves, c.boots, c.helmets])).catch(e => e);
  await manager.save(new ItemAffix("Interpermeated", "Shaper Suffix Modifier.", [c.shields, c.body_armours])).catch(e => e);
  await manager.save(new ItemAffix("Lava Caller's", "Shaper Suffix Modifier.", [c.daggers, c.wands, c.sceptres, c.staves, c.shields])).catch(e => e);
  await manager.save(new ItemAffix("Legend's", "Shaper Suffix Modifier.", [c.gloves, c.boots, c.helmets])).catch(e => e);
  await manager.save(new ItemAffix("Lich's", "Shaper Suffix Modifier.", [c.daggers, c.wands, c.sceptres, c.staves])).catch(e => e);
  await manager.save(new ItemAffix("Malicious", "Shaper Suffix Modifier.", [c.claws, c.daggers, c.one_hand_axes, c.one_hand_maces, c.one_hand_swords, c.thrusting_one_hand_swords, c.wands, c.sceptres, c.bows, c.staves, c.two_hand_axes, c.two_hand_maces, c.two_hand_swords])).catch(e => e);
  await manager.save(new ItemAffix("Merciless", "Shaper Suffix Modifier.", [c.claws, c.daggers, c.one_hand_axes, c.one_hand_maces, c.one_hand_swords, c.thrusting_one_hand_swords, c.wands, c.sceptres, c.bows, c.staves, c.two_hand_axes, c.two_hand_maces, c.two_hand_swords])).catch(e => e);
  await manager.save(new ItemAffix("Mirage's", "Shaper Suffix Modifier.", [c.gloves, c.boots, c.helmets])).catch(e => e);
  await manager.save(new ItemAffix("Mortifying", "Shaper Suffix Modifier.", [c.daggers, c.wands, c.sceptres, c.staves, c.shields])).catch(e => e);
  await manager.save(new ItemAffix("Nautilus'", "Shaper Suffix Modifier.", [c.shields, c.helmets])).catch(e => e);
  await manager.save(new ItemAffix("Necromancer's", "Shaper Suffix Modifier.", [c.helmets])).catch(e => e);
  await manager.save(new ItemAffix("of Arcing", "Shaper Suffix Modifier.", [c.wands, c.sceptres, c.staves])).catch(e => e);
  await manager.save(new ItemAffix("of Ashes", "Shaper Suffix Modifier.", [c.wands, c.sceptres, c.staves])).catch(e => e);
  await manager.save(new ItemAffix("of Bameth", "Shaper Suffix Modifier.", [c.quivers, c.shields, c.gloves, c.body_armours, c.boots, c.helmets, c.belts, c.rings, c.amulets])).catch(e => e);
  await manager.save(new ItemAffix("of Blocking", "Shaper Suffix Modifier.", [c.shields])).catch(e => e);
  await manager.save(new ItemAffix("of Celebration", "Shaper Suffix Modifier.", [c.claws, c.daggers, c.one_hand_axes, c.one_hand_maces, c.one_hand_swords, c.thrusting_one_hand_swords, c.sceptres, c.staves, c.two_hand_axes, c.two_hand_maces, c.two_hand_swords])).catch(e => e);
  await manager.save(new ItemAffix("of Destruction", "Shaper Suffix Modifier.", [c.claws, c.daggers, c.one_hand_axes, c.one_hand_maces, c.one_hand_swords, c.thrusting_one_hand_swords, c.wands, c.sceptres, c.bows, c.staves, c.two_hand_axes, c.two_hand_maces, c.two_hand_swords])).catch(e => e);
  await manager.save(new ItemAffix("of Ephij", "Shaper Suffix Modifier.", [c.quivers, c.shields, c.gloves, c.body_armours, c.boots, c.helmets, c.belts, c.rings, c.amulets])).catch(e => e);
  await manager.save(new ItemAffix("of Excavation", "Shaper Suffix Modifier.", [c.rings, c.amulets])).catch(e => e);
  await manager.save(new ItemAffix("of Exuberance", "Shaper Suffix Modifier.", [c.gloves])).catch(e => e);
  await manager.save(new ItemAffix("of Finesse", "Shaper Suffix Modifier.", [c.wands, c.sceptres, c.staves])).catch(e => e);
  await manager.save(new ItemAffix("of Flames", "Shaper Suffix Modifier.", [c.rings])).catch(e => e);
  await manager.save(new ItemAffix("of Floe", "Shaper Suffix Modifier.", [c.amulets])).catch(e => e);
  await manager.save(new ItemAffix("of Fog", "Shaper Suffix Modifier.", [c.shields, c.body_armours])).catch(e => e);
  await manager.save(new ItemAffix("of Glaciation", "Shaper Suffix Modifier.", [c.wands, c.sceptres, c.staves])).catch(e => e);
  await manager.save(new ItemAffix("of Grandmastery", "Shaper Suffix Modifier.", [c.gloves])).catch(e => e);
  await manager.save(new ItemAffix("of Haast", "Shaper Suffix Modifier.", [c.quivers, c.shields, c.gloves, c.body_armours, c.boots, c.helmets, c.belts, c.rings, c.amulets])).catch(e => e);
  await manager.save(new ItemAffix("of Haste", "Shaper Suffix Modifier.", [c.shields])).catch(e => e);
  await manager.save(new ItemAffix("of Immolation", "Shaper Suffix Modifier.", [c.amulets])).catch(e => e);
  await manager.save(new ItemAffix("of Immortality", "Shaper Suffix Modifier.", [c.shields])).catch(e => e);
  await manager.save(new ItemAffix("of Incantations", "Shaper Suffix Modifier.", [c.shields])).catch(e => e);
  await manager.save(new ItemAffix("of Incision", "Shaper Suffix Modifier.", [c.claws, c.daggers, c.one_hand_axes, c.one_hand_maces, c.one_hand_swords, c.thrusting_one_hand_swords, c.wands, c.sceptres, c.bows, c.staves, c.two_hand_axes, c.two_hand_maces, c.two_hand_swords])).catch(e => e);
  await manager.save(new ItemAffix("of Lioneye", "Shaper Suffix Modifier.", [c.wands, c.bows, c.gloves, c.shields])).catch(e => e);
  await manager.save(new ItemAffix("of Mastery", "Shaper Suffix Modifier.", [c.quivers, c.shields])).catch(e => e);
  await manager.save(new ItemAffix("of Numbing", "Shaper Suffix Modifier.", [c.body_armours])).catch(e => e);
  await manager.save(new ItemAffix("of Overflowing", "Shaper Suffix Modifier.", [c.belts])).catch(e => e);
  await manager.save(new ItemAffix("of Rending", "Shaper Suffix Modifier.", [c.shields])).catch(e => e);
  await manager.save(new ItemAffix("of Renown", "Shaper Suffix Modifier.", [c.wands, c.bows])).catch(e => e);
  await manager.save(new ItemAffix("of Revitalization", "Shaper Suffix Modifier.", [c.shields])).catch(e => e);
  await manager.save(new ItemAffix("of Rime", "Shaper Suffix Modifier.", [c.rings])).catch(e => e);
  await manager.save(new ItemAffix("of Sanctuary", "Shaper Suffix Modifier.", [c.shields])).catch(e => e);
  await manager.save(new ItemAffix("of Skill", "Shaper Suffix Modifier.", [c.rings])).catch(e => e);
  await manager.save(new ItemAffix("of Talent", "Shaper Suffix Modifier.", [c.rings])).catch(e => e);
  await manager.save(new ItemAffix("of the Blur", "Shaper Suffix Modifier.", [c.gloves])).catch(e => e);
  await manager.save(new ItemAffix("of the Bulwark", "Shaper Suffix Modifier.", [c.shields])).catch(e => e);
  await manager.save(new ItemAffix("of the Genius", "Shaper Suffix Modifier.", [c.shields, c.gloves, c.body_armours, c.boots, c.rings, c.amulets, c.belts, c.helmets])).catch(e => e);
  await manager.save(new ItemAffix("of the Gods", "Shaper Suffix Modifier.", [c.shields, c.gloves, c.body_armours, c.boots, c.rings, c.amulets, c.belts, c.helmets])).catch(e => e);
  await manager.save(new ItemAffix("of the Godslayer", "Shaper Suffix Modifier.", [c.belts])).catch(e => e);
  await manager.save(new ItemAffix("of the Polymath", "Shaper Suffix Modifier.", [c.helmets])).catch(e => e);
  await manager.save(new ItemAffix("of the Rainbow", "Shaper Suffix Modifier.", [c.rings])).catch(e => e);
  await manager.save(new ItemAffix("of the Ranger", "Shaper Suffix Modifier.", [c.claws, c.daggers, c.one_hand_axes, c.one_hand_maces, c.one_hand_swords, c.thrusting_one_hand_swords, c.sceptres, c.staves, c.two_hand_axes, c.two_hand_maces, c.two_hand_swords])).catch(e => e);
  await manager.save(new ItemAffix("of the Span", "Shaper Suffix Modifier.", [c.shields, c.rings])).catch(e => e);
  await manager.save(new ItemAffix("of the Wind", "Shaper Suffix Modifier.", [c.shields, c.gloves, c.body_armours, c.boots, c.rings, c.amulets, c.belts, c.helmets])).catch(e => e);
  await manager.save(new ItemAffix("of Tzteosh", "Shaper Suffix Modifier.", [c.quivers, c.shields, c.gloves, c.body_armours, c.boots, c.helmets, c.belts, c.rings, c.amulets])).catch(e => e);
  await manager.save(new ItemAffix("of Unmaking", "Shaper Suffix Modifier.", [c.claws, c.daggers, c.one_hand_axes, c.one_hand_maces, c.one_hand_swords, c.thrusting_one_hand_swords, c.wands, c.sceptres, c.bows, c.staves, c.two_hand_axes, c.two_hand_maces, c.two_hand_swords])).catch(e => e);
  await manager.save(new ItemAffix("of Utilisation", "Shaper Suffix Modifier.", [c.shields])).catch(e => e);
  await manager.save(new ItemAffix("of Voltage", "Shaper Suffix Modifier.", [c.rings])).catch(e => e);
  await manager.save(new ItemAffix("Overpowering", "Shaper Suffix Modifier.", [c.claws, c.daggers, c.one_hand_axes, c.one_hand_maces, c.one_hand_swords, c.thrusting_one_hand_swords, c.wands, c.sceptres, c.bows, c.staves, c.two_hand_axes, c.two_hand_maces, c.two_hand_swords])).catch(e => e);
  await manager.save(new ItemAffix("Paragon's", "Shaper Suffix Modifier.", [c.claws, c.daggers, c.one_hand_axes, c.one_hand_maces, c.one_hand_swords, c.thrusting_one_hand_swords, c.wands, c.sceptres, c.bows, c.staves, c.two_hand_axes, c.two_hand_maces, c.two_hand_swords])).catch(e => e);
  await manager.save(new ItemAffix("Perandus'", "Shaper Suffix Modifier.", [c.rings, c.amulets])).catch(e => e);
  await manager.save(new ItemAffix("Phased", "Shaper Suffix Modifier.", [c.shields, c.body_armours])).catch(e => e);
  await manager.save(new ItemAffix("Predator's", "Shaper Suffix Modifier.", [c.shields])).catch(e => e);
  await manager.save(new ItemAffix("Prime", "Shaper Suffix Modifier.", [c.body_armours])).catch(e => e);
  await manager.save(new ItemAffix("Prior's", "Shaper Suffix Modifier.", [c.gloves, c.boots])).catch(e => e);
  await manager.save(new ItemAffix("Ram's", "Shaper Suffix Modifier.", [c.shields, c.helmets])).catch(e => e);
  await manager.save(new ItemAffix("Resilient", "Shaper Suffix Modifier.", [c.shields, c.body_armours])).catch(e => e);
  await manager.save(new ItemAffix("Resplendent", "Shaper Suffix Modifier.", [c.body_armours])).catch(e => e);
  await manager.save(new ItemAffix("Ribbed", "Shaper Suffix Modifier.", [c.gloves, c.boots])).catch(e => e);
  await manager.save(new ItemAffix("Runic", "Shaper Suffix Modifier.", [c.wands, c.sceptres, c.daggers, c.staves, c.shields])).catch(e => e);
  await manager.save(new ItemAffix("Sanctified", "Shaper Suffix Modifier.", [c.gloves, c.boots])).catch(e => e);
  await manager.save(new ItemAffix("Seething", "Shaper Suffix Modifier.", [c.boots])).catch(e => e);
  await manager.save(new ItemAffix("Seraphim's", "Shaper Suffix Modifier.", [c.shields, c.boots, c.gloves, c.body_armours, c.helmets])).catch(e => e);
  await manager.save(new ItemAffix("Sharpshooter's", "Shaper Suffix Modifier.", [c.bows])).catch(e => e);
  await manager.save(new ItemAffix("Sylph's", "Shaper Suffix Modifier.", [c.gloves, c.boots])).catch(e => e);
  await manager.save(new ItemAffix("Tempest King's", "Shaper Suffix Modifier.", [c.wands, c.sceptres, c.daggers, c.staves, c.shields])).catch(e => e);
  await manager.save(new ItemAffix("Tul's", "Shaper Suffix Modifier.", [c.wands, c.sceptres, c.staves, c.shields])).catch(e => e);
  await manager.save(new ItemAffix("Tyrannical", "Shaper Suffix Modifier.", [c.claws, c.daggers, c.one_hand_axes, c.one_hand_maces, c.one_hand_swords, c.thrusting_one_hand_swords, c.wands, c.sceptres, c.bows, c.staves, c.two_hand_axes, c.two_hand_maces, c.two_hand_swords])).catch(e => e);
  await manager.save(new ItemAffix("Unassailable", "Shaper Suffix Modifier.", [c.gloves, c.boots, c.helmets, c.amulets])).catch(e => e);
  await manager.save(new ItemAffix("Unfailing", "Shaper Suffix Modifier.", [c.shields])).catch(e => e);
  await manager.save(new ItemAffix("Unfaltering", "Shaper Suffix Modifier.", [c.body_armours])).catch(e => e);
  await manager.save(new ItemAffix("Urchin's", "Shaper Suffix Modifier.", [c.rings, c.amulets])).catch(e => e);
  await manager.save(new ItemAffix("Vaporous", "Shaper Suffix Modifier.", [c.gloves, c.boots])).catch(e => e);
  await manager.save(new ItemAffix("Victor's", "Shaper Suffix Modifier.", [c.shields, c.body_armours])).catch(e => e);
  await manager.save(new ItemAffix("Vigorous", "Shaper Suffix Modifier.", [c.shields])).catch(e => e);
  await manager.save(new ItemAffix("Virile", "Shaper Suffix Modifier.", [c.rings])).catch(e => e);
  await manager.save(new ItemAffix("Weaponmaster's", "Shaper Suffix Modifier.", [c.claws, c.daggers, c.one_hand_axes, c.one_hand_maces, c.one_hand_swords, c.thrusting_one_hand_swords, c.sceptres, c.staves, c.two_hand_axes, c.two_hand_maces, c.two_hand_swords])).catch(e => e);
  await manager.save(new ItemAffix("Winterbringer's", "Shaper Suffix Modifier.", [c.daggers, c.wands, c.sceptres, c.staves, c.shields])).catch(e => e);
  await manager.save(new ItemAffix("Wizard's", "Shaper Suffix Modifier.", [c.amulets])).catch(e => e);
  await manager.save(new ItemAffix("Xoph's", "Shaper Suffix Modifier.", [c.wands, c.sceptres, c.daggers, c.staves])).catch(e => e);
  
  resolve([]);
});
//   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Subterranean", description: "Delve Prefix Modifier.", item_classes: i}).execute(),
//
//   // All Delve items
//   // manager.find(ItemClass, {
//   //   where: {
//   //     name: TypeORM.In([
//   //
//   //     ]),
//   //   },
//   // })
//   // .then(async i => Promise.all([
//   //   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Subterranean", description: "Delve Prefix Modifier.", item_classes: i}).execute(),
//   //   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of the Underground", description: "Delve Suffix Modifier.", item_classes: i}).execute(),
//   // ])),
//   //
//   // // All Shaper/Elder items
//   // manager.find(ItemClass, {
//   //   where: {
//   //     name: TypeORM.In([
//   //       "Claws", "Daggers", "Wands", "One Hand Swords", "Thrusting One Hand Swords", "One Hand Axes", "One Hand Maces", "Sceptres", "Bows", "Staves", "Two Hand Swords", "Two Hand Axes", "Two Hand Maces",
//   //       "Amulets", "Rings", "Belts", "Gloves", "Body Armours", "Helmets", "Shields", "Quivers",
//   //     ]),
//   //   },
//   // })
//   // .then(async i => Promise.all([
//   //   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Eldrich", description: "Elder Prefix Modifier", item_classes: i}).execute(),
//   //   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of the Elder", description: "Elder Suffix Modifier.", item_classes: i}).execute(),
//   //   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Shaped", description: "Shaper Prefix Modifier.", item_classes: i}).execute(),
//   //   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of the Shaper", description: "Shaper Suffix Modifier.", item_classes: i}).execute(),
//   // ])),
//   //
//   // // Weapons/Shields
//   // manager.find(ItemClass, {
//   //   where: {
//   //     name: TypeORM.In([
//   //       "Claws", "Daggers", "Wands", "One Hand Swords", "Thrusting One Hand Swords", "One Hand Axes", "One Hand Maces", "Sceptres", "Bows", "Staves", "Two Hand Swords", "Two Hand Axes", "Two Hand Maces",
//   //     ]),
//   //   },
//   // })
//   // .then(async i => Promise.all([
//   //   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Catarina's Veiled", description: "Increased Level of Socketed Support Gems.", item_classes: i}).execute(),
//   // ])),
//   //
//   // // Weapons
//   // manager.find(ItemClass, {
//   //   where: {
//   //     name: TypeORM.In([
//   //       "Claws", "Daggers", "Wands", "One Hand Swords", "Thrusting One Hand Swords", "One Hand Axes", "One Hand Maces", "Sceptres", "Bows", "Staves", "Two Hand Swords", "Two Hand Axes", "Two Hand Maces",
//   //     ]),
//   //   },
//   // })
//   // .then(async i => Promise.all([
//   //   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Emperor's", description: "Local % increased Physical; Flat bonus to Accuracy Rating.", item_classes: i}).execute(),
//   //   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Dictator's", description: "Local % increased Physical; Flat bonus to Accuracy Rating.", item_classes: i}).execute(),
//   //   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Merciless", description: "Local % increased Physical.", item_classes: i}).execute(),
//   //   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Tyrannical", description: "Local % increased Physical.", item_classes: i}).execute(),
//   //   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Overpowering", description: "Global % increased Elemental Damage with Attack Skills."}).execute(),
//   //
//   //
//   //   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Flaring", description: "Local flat bonus to Physical Damage.", item_classes: i}).execute(),
//   //   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Carbonising", description: "Local flat bonus to Fire Damage.", item_classes: i}).execute(),
//   //   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Crystalising", description: "Local flat bonus to Cold Damage.", item_classes: i}).execute(),
//   //   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Heart-Stopping", description: "Local flat bonus to Lightning Damage.", item_classes: i}).execute(),
//   //   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Malicious", description: "Local flat bonus to Chaos Damage.", item_classes: i}).execute(),
//   //
//   //   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Paragon's", description: "+1 to Level of Socketed Gems.", item_classes: i}).execute(),
//   //   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Incision", description: "Local % increased Critical Strike Chance.", item_classes: i}).execute(),
//   //   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Destruction", description: "% increased Global Critical Strike Multiplier.", item_classes: i}).execute(),
//   //
//   //   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Haku's Veiled", description: "Weapon, Shield - % increased Quality of Socketed Gems.", item_classes: i}).execute(),
//   //   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Tora's Veiled", description: "Weapon - Adds X to Y Physical Damage; 40% chance to cause Bleeding on Hit.", item_classes: i}).execute(),
//   //   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Vagan's Veiled", description: "Weapon - Hits can't be evaded.", item_classes: i}).execute(),
//   //   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "It That Fled's Veiled", description: "Weapon - Increased Spell Damage; Gain % of Non-Chaos Damage as Extra Chaos Damage.", item_classes: i}).execute(),
//   // ])),
//   //
//   // // One Hand Weapons
//   // manager.find(ItemClass, {where: {name: TypeORM.In(["Claws", "Daggers", "Wands", "One Hand Swords", "Thrusting One Hand Swords", "One Hand Axes", "One Hand Maces", "Sceptres"])}})
//   // .then(async i => Promise.all([
//   //   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Celebration", description: "Local % increased Attack Speed.", item_classes: i}).execute(),
//   //   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of the Ranger", description: "Flat bonus to Accuracy Rating.", item_classes: i}).execute(),
//   // ])),
//   //
//   // // Two Hand Weapons
//   // manager.find(ItemClass, {where: {name: TypeORM.In(["Staves", "Two Hand Swords", "Two Hand Axes", "Two Hand Maces"])}})
//   // .then(async i => Promise.all([
//   //
//   // ])),
//   //
//   // // Bows
//   // manager.find(ItemClass, {where: {name: TypeORM.In(["Bows"])}})
//   // .then(async i => Promise.all([
//   //   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Sharpshooter's", description: "+2 to Level of Socketed Bow Gems.", item_classes: i}).execute(),
//   //   TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Renown", description: "Local % increased Attack Speed.", item_classes: i}).execute(),
//   // ])),
//  
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Emperor's", description: "Local % increased Physical; Flat bonus to Accuracy Rating."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Dictator's", description: "Local % increased Physical; Flat bonus to Accuracy Rating."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Merciless", description: "Local % increased Physical."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Tyrannical", description: "Local % increased Physical."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Devastating", description: "Global % increased Elemental Damage with Attack Skills."}).execute(),
//   //
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Impregnable", description: "Global % increased Armour."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Vaporous", description: "Global % increased Evasion Rating."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Unassailable", description: "Global % increased maximum Energy Shield."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Wizard's", description: "% increased Spell Damage."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Perandus'", description: "% increased Rarity of Items found."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Flawless", description: "+3 to Level of Socketed Gems."}).execute(),
//   //
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Paragon's", description: ""}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Lava Caller's", description: "+2 to Level of Socketed Fire Gems."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Winterbringer's", description: "+2 to Level of Socketed Cold Gems."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Tempest King's", description: "+2 to Level of Socketed Lightning Gems."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Anarchist's", description: "+2 to Level of Socketed Chaos Gems."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Weaponmaster's", description: "+2 to Level of Socketed Melee Gems."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Sharpshooter's", description: "+2 to Level of Socketed Bow Gems."}).execute(),
//   //
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Athlete's", description: "Flat bonus to maximum Life."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Virile", description: "Flat bonus to maximum Life."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Fecund", description: "Flat bonus to maximum Life."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Dazzling", description: "Flat bonus to maximum Energy Shield."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Resplendent", description: "Flat bonus to maximum Energy Shield."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Zaffre", description: "Flat bonus to maximum Mana."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Ultramarine", description: "Flat bonus to maximum Mana."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Enveloped", description: "Flat bonus to maximum Armour."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Vaporous", description: "Flat bonus to maximum Evasion Rating."}).execute(),
//   //
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Honed", description: "Local flat bonus to Physical Damage."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Annealed", description: "Local flat bonus to Physical Damage."}).execute(),
//   //
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Burning", description: "Local flat bonus to Fire Damage."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Carbonising", description: "Local flat bonus to Fire Damage."}).execute(),
//   //
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Frigid", description: "Local flat bonus to Cold Damage."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Crystalising", description: "Local flat bonus to Cold Damage."}).execute(),
//   //
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Crackling", description: "Local flat bonus to Lightning Damage."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Heart-Stopping", description: "Local flat bonus to Lightning Damage."}).execute(),
//   //
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Malicious", description: "Local flat bonus to Chaos Damage."}).execute(),
//   //
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Cremating", description: "Local flat bonus to Fire Damage to Spells."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Entombing", description: "Local flat bonus to Cold Damage to Spells."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Electrocuting", description: "Local flat bonus to Lightning Damage to Spells."}).execute(),
//   //
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Atrophying", description: "% increased Non-Ailment Chaos Damage over Time Multiplier."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Disintegrating", description: "% increased Non-Ailment Chaos Damage over Time Multiplier."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Gelid", description: "% increased Cold Damage over Time Multiplier."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Heartstopping", description: "% increased Cold Damage over Time Multiplier."}).execute(),
//   //
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Runic", description: "% increased Spell Damage."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Xoph's", description: "% increased Fire Damage."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Tul's", description: "% increased Cold Damage."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Esh's", description: "% increased Lightning Damage."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Lich's", description: "% increased Spell Damage; Flat bonus to maximum Mana."}).execute(),
//   //
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Corrosive", description: "Gain % of Fire Damage as Extra Chaos Damage."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Mortifying", description: "Gain % of Cold Damage as Extra Chaos Damage."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Excruciating", description: "Gain % of Lightning Damage as Extra Chaos Damage."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Baleful", description: "Gain % of Physical Damage as Extra Chaos Damage."}).execute(),
//   //
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of the Genius", description: "Flat bonus to Intelligence."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of the Gods", description: "Flat bonus to Strength."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of the Godslayer", description: "Flat bonus to Strength."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of the Wind", description: "Flat bonus to Dexterity."}).execute(),
//   //
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Skill", description: "Global % increased Attack Speed."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Renown", description: "Local % increased Attack Speed."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Talent", description: "% increased Cast Speed."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Finesse", description: "% increased Cast Speed."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Expertise", description: "% increased Cast Speed."}).execute(),
//   //
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Nirvana", description: "% increased Mana Regeneration Rate."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Excavation", description: "% increased Rarity of Items found."}).execute(),
//   //
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Overflowing", description: "% increased Flask Charges gained."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of the Ranger", description: "Flat bonus to Accuracy Rating."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Lioneye", description: "Flat bonus to Accuracy Rating."}).execute(),
//   //
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Incision", description: "Local % increased Critical Strike Chance."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Unmaking", description: "% increased Critical Strike Chance for Spells."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Destruction", description: "% increased Global Critical Strike Multiplier."}).execute(),
//   //
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Tzteosh", description: "% increased Fire Resistance."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Haast", description: "% increased Cold Resistance."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Ephij", description: "% increased Lightning Resistance."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Bameth", description: "% increased Chaos Resistance."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of the Span", description: "% increased Elemental Resistances."}).execute(),
//   //
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Flames", description: "% increased Fire Damage."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Immolation", description: "% increased Fire Damage."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Ashes", description: "% increased Fire Damage."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Rime", description: "% increased Cold Damage."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Floe", description: "% increased Cold Damage."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Glaciation", description: "% increased Cold Damage."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Voltage", description: "% increased Lightning Damage."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Discharge", description: "% increased Lightning Damage."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Arcing", description: "% increased Lightning Damage."}).execute(),
//   //
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Subterranean", description: "Delve Prefix Modifier."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of the Underground", description: "Delve Suffix Modifier."}).execute(),
//   //
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Eldrich", description: "Elder Prefix Modifier"}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of the Elder", description: "Elder Suffix Modifier."}).execute(),
//   //
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Shaped", description: "Shaper Prefix Modifier."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of the Shaper", description: "Shaper Suffix Modifier."}).execute(),
//   //
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Veiled", description: "Veiled Prefix Modifier."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Elreon's Veiled", description: "Ring - Flat Reduction to Total Mana Cost of Skills."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Gravicius' Veiled", description: "Body Armour - Gain % of Maximum Life as Extra Maximum Energy Shield."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Guff's Veiled", description: "Gloves - % increased Damage during any Flask Effect."}).execute(),
//   //
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Korell's Veiled", description: "Helmet - % of Physical Damage from Hits taken as Fire Damage."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Leo's Veiled", description: "Ring, Belt - % increased Damage."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Rin's Veiled", description: "Boots - Cannot be Frozen."}).execute(),
//  
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "Vorici's Veiled", description: "Amulet, Gloves - % increased Damage while Leeching."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of the Veil", description: "Veiled Suffix Modifier."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Aisling's Veil", description: "Ring - % increased Chaos Damage; % increased Physical Damage."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Cameria's Veil", description: "Ring - % increased Critical Strike Multiplier if you've Shattered an Enemy Recently; % increased Global Critical Strike Chance."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Hillock's Veil", description: "Body Armour - % increased Attributes."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Janus' Veil", description: "Helmet - % increased Rarity of Items Dropped by Slain Rare or Unique Enemies."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Jorgin's Veil", description: "Amulet - 10% Chance to Trigger Level 18 Summon Spectral Wolf on Kill."}).execute(),
//   // TypeORM.createQueryBuilder().insert().orIgnore().into(ItemAffix).values({name: "of Riker's Veil", description: "Ring - % increased Fire Damage; % increased Lightning Damage."}).execute(),
//
// ]);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

import * as TypeORM from "typeorm";
import ItemClass from "../entity/ItemClass";

export default Promise.all([
  TypeORM.createQueryBuilder().insert().orIgnore().into(ItemClass).values({name: "Bows"}).execute(),
  TypeORM.createQueryBuilder().insert().orIgnore().into(ItemClass).values({name: "Claws"}).execute(),
  TypeORM.createQueryBuilder().insert().orIgnore().into(ItemClass).values({name: "Daggers"}).execute(),
  TypeORM.createQueryBuilder().insert().orIgnore().into(ItemClass).values({name: "Fishing Rods"}).execute(),
  TypeORM.createQueryBuilder().insert().orIgnore().into(ItemClass).values({name: "One Hand Axes"}).execute(),
  TypeORM.createQueryBuilder().insert().orIgnore().into(ItemClass).values({name: "One Hand Maces"}).execute(),
  TypeORM.createQueryBuilder().insert().orIgnore().into(ItemClass).values({name: "One Hand Swords"}).execute(),

  TypeORM.createQueryBuilder().insert().orIgnore().into(ItemClass).values({name: "Sceptres"}).execute(),
  TypeORM.createQueryBuilder().insert().orIgnore().into(ItemClass).values({name: "Staves"}).execute(),
  TypeORM.createQueryBuilder().insert().orIgnore().into(ItemClass).values({name: "Thrusting One Hand Swords"}).execute(),
  TypeORM.createQueryBuilder().insert().orIgnore().into(ItemClass).values({name: "Two Hand Axes"}).execute(),
  TypeORM.createQueryBuilder().insert().orIgnore().into(ItemClass).values({name: "Two Hand Maces"}).execute(),
  TypeORM.createQueryBuilder().insert().orIgnore().into(ItemClass).values({name: "Two Hand Swords"}).execute(),
  TypeORM.createQueryBuilder().insert().orIgnore().into(ItemClass).values({name: "Wands"}).execute(),

  TypeORM.createQueryBuilder().insert().orIgnore().into(ItemClass).values({name: "Body Armours"}).execute(),
  TypeORM.createQueryBuilder().insert().orIgnore().into(ItemClass).values({name: "Boots"}).execute(),
  TypeORM.createQueryBuilder().insert().orIgnore().into(ItemClass).values({name: "Gloves"}).execute(),
  TypeORM.createQueryBuilder().insert().orIgnore().into(ItemClass).values({name: "Helmets"}).execute(),
  TypeORM.createQueryBuilder().insert().orIgnore().into(ItemClass).values({name: "Quivers"}).execute(),
  TypeORM.createQueryBuilder().insert().orIgnore().into(ItemClass).values({name: "Shields"}).execute(),
  TypeORM.createQueryBuilder().insert().orIgnore().into(ItemClass).values({name: "Amulets"}).execute(),
  TypeORM.createQueryBuilder().insert().orIgnore().into(ItemClass).values({name: "Rings"}).execute(),
  TypeORM.createQueryBuilder().insert().orIgnore().into(ItemClass).values({name: "Belts"}).execute(),

  TypeORM.createQueryBuilder().insert().orIgnore().into(ItemClass).values({name: "Life Flasks"}).execute(),
  TypeORM.createQueryBuilder().insert().orIgnore().into(ItemClass).values({name: "Mana Flasks"}).execute(),
  TypeORM.createQueryBuilder().insert().orIgnore().into(ItemClass).values({name: "Hybrid Flasks"}).execute(),
  TypeORM.createQueryBuilder().insert().orIgnore().into(ItemClass).values({name: "Utility Flasks"}).execute(),
  TypeORM.createQueryBuilder().insert().orIgnore().into(ItemClass).values({name: "Critical Utility Flasks"}).execute(),

  TypeORM.createQueryBuilder().insert().orIgnore().into(ItemClass).values({name: "Jewel"}).execute(),
  TypeORM.createQueryBuilder().insert().orIgnore().into(ItemClass).values({name: "Abyss Jewel"}).execute(),

  TypeORM.createQueryBuilder().insert().orIgnore().into(ItemClass).values({name: "Active Skill Gems"}).execute(),
  TypeORM.createQueryBuilder().insert().orIgnore().into(ItemClass).values({name: "Support Skill Gems"}).execute(),

  TypeORM.createQueryBuilder().insert().orIgnore().into(ItemClass).values({name: "Stackable Currency"}).execute(),
  TypeORM.createQueryBuilder().insert().orIgnore().into(ItemClass).values({name: "Delve Socketable Currency"}).execute(),

  TypeORM.createQueryBuilder().insert().orIgnore().into(ItemClass).values({name: "Divination Card"}).execute(),
  
  TypeORM.createQueryBuilder().insert().orIgnore().into(ItemClass).values({name: "Incubator"}).execute(),

  TypeORM.createQueryBuilder().insert().orIgnore().into(ItemClass).values({name: "Maps"}).execute(),
  TypeORM.createQueryBuilder().insert().orIgnore().into(ItemClass).values({name: "Map Fragments"}).execute(),
  TypeORM.createQueryBuilder().insert().orIgnore().into(ItemClass).values({name: "Leaguestones"}).execute(),

  TypeORM.createQueryBuilder().insert().orIgnore().into(ItemClass).values({name: "Quest Items"}).execute(),
  TypeORM.createQueryBuilder().insert().orIgnore().into(ItemClass).values({name: "Labyrinth Item"}).execute(),
  TypeORM.createQueryBuilder().insert().orIgnore().into(ItemClass).values({name: "Labyrinth Trinket"}).execute(),
  TypeORM.createQueryBuilder().insert().orIgnore().into(ItemClass).values({name: "Pantheon Soul"}).execute(),
  TypeORM.createQueryBuilder().insert().orIgnore().into(ItemClass).values({name: "Piece"}).execute(),
  TypeORM.createQueryBuilder().insert().orIgnore().into(ItemClass).values({name: "Incursion Item"}).execute(),
])

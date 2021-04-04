// priority: 0

events.listen('recipes', event => {
  /**
   * Removed recipe's
   */

  event.remove({ id: 'charm:glowball' })

  /**
   * New recipe's
   */

  // Minecraft items
  event.shapeless(item.of('minecraft:slime_ball', 1), ['minecraft:milk_bucket', 'minecraft:sugar', 'minecraft:wheat'])
  event.shapeless(item.of('minecraft:blaze_rod', 1), ['minecraft:gold_ingot', 'minecraft:stick', 'minecraft:nether_brick'])
  event.shapeless(item.of('minecraft:leather', 1), ['minecraft:rotten_flesh', 'minecraft:rotten_flesh', 'minecraft:rotten_flesh', 'minecraft:rotten_flesh', 'minecraft:rotten_flesh']) 
  event.shapeless(item.of('minecraft:phantom_membrane', 3), ['minecraft:rotten_flesh', 'minecraft:slime_ball', 'minecraft:leather'])
  event.shapeless(item.of('minecraft:egg', 1), ['minecraft:rotten_flesh', 'minecraft:slime_ball', 'minecraft:bone_meal'])
  event.shaped(item.of('minecraft:porkchop', 2), [ 'RRR', 'RSR', 'RRR' ], { R: 'minecraft:rotten_flesh', S: 'minecraft:sugar' })
  event.shaped(item.of('minecraft:chicken', 2), [ 'RRR', 'RSR', 'RRR' ], { R: 'minecraft:rotten_flesh', S: 'minecraft:melon_seeds' })
  event.shaped(item.of('minecraft:beef', 2), [ 'RRR', 'RSR', 'RRR' ], { R: 'minecraft:rotten_flesh', S: 'minecraft:wheat_seeds' })
	event.shaped(item.of('minecraft:sheep_spawn_egg', 1), [ 'OOO', 'OTO', 'OPO' ], { O: 'minecraft:white_dye', P: 'minecraft:lead', T: 'minecraft:egg' })
  event.shaped(item.of('minecraft:cow_spawn_egg', 1), [ 'OOO', 'OTO', 'OPO' ], { O: 'minecraft:brown_dye', P: 'minecraft:lead', T: 'minecraft:egg' })
  event.shaped(item.of('minecraft:pig_spawn_egg', 1), [ 'OOO', 'OTO', 'OPO' ], { O: 'minecraft:pink_dye', P: 'minecraft:lead', T: 'minecraft:egg' })
  event.shaped(item.of('minecraft:enchanted_golden_apple', 1), [ 'BBB', 'BAB', 'BBB' ], { B: 'minecraft:gold_block', A: 'minecraft:apple' })
  event.shaped(item.of('minecraft:elytra', 1), [ 'MSM', 'M M', 'F F' ], { M: 'minecraft:phantom_membrane', S: 'minecraft:nether_star', F: 'minecraft:feather' })

  /**
   * Recipe overrides
   */
})
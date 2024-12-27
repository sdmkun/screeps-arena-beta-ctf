import { Flag } from 'arena/season_beta/capture_the_flag/basic/prototypes'
import { Creep } from 'game/prototypes'
import { getObjectsByPrototype } from 'game/utils'

export function loop() {
  const game = {
    creeps: getObjectsByPrototype(Creep),
    flags: getObjectsByPrototype(Flag),
  }

  const myCreeps = Object.values(game.creeps).filter((creep) => creep.my)
  const enemyFlag = game.flags.find((flag) => !flag.my)

  if (!enemyFlag) {
    return
  }

  for (var creep of myCreeps) {
    creep.moveTo(enemyFlag)
  }
}

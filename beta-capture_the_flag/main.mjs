import { Flag as l } from "arena/season_beta/capture_the_flag/basic/prototypes";
import { Creep as f } from "game/prototypes";
import { getObjectsByPrototype as m } from "game/utils";
function g() {
  const r = {
    creeps: m(f),
    flags: m(l)
  }, t = Object.values(r.creeps).filter((o) => o.my), e = r.flags.find((o) => !o.my);
  if (console.log("myCreeps", t), console.log("enemyFlag", e), !!e)
    for (var s of t)
      s.moveTo(e);
}
export {
  g as loop
};

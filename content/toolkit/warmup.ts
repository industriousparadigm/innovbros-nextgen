import { WorkItem } from "../types"
import { warmupIntro } from "./warmup/warmup-intro"
import { artistID } from "./warmup/01-artist-id"
import { ballToss } from "./warmup/02-ball-toss"
import { birthline } from "./warmup/03-birthline"
import { dreamVacation } from "./warmup/04-dream-vacation"
import { favItem } from "./warmup/05-fav-item"

export const workItems: WorkItem[] = [
  warmupIntro,
  artistID,
  ballToss,
  birthline,
  dreamVacation,
  favItem,
]

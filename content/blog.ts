import { WorkItem } from "./types"
import { justCook } from "./blogposts/just-cook"
import { creativeChef } from "./blogposts/creative-chef"
import { designMaps } from "./blogposts/design-maps"
import { dooringLife } from "./blogposts/dooring-life"
import { goldenMetrics } from "./blogposts/golden-innov-metrics"
import { handlingThoughts } from "./blogposts/handling-thoughts"
import { marsLatency } from "./blogposts/mars-latency"
import { monotonousCars } from "./blogposts/monotonous-cars"
import { otherSenses } from "./blogposts/other-senses"
import { portableDesk } from "./blogposts/portable-desk"
import { potatoesTelltale } from "./blogposts/potatoes-telltale"
import { retailtainment } from "./blogposts/Retail-tainment"
import { writingAI5Ways } from "./blogposts/writing-AI-5-ways"

export const workItems: WorkItem[] = [
  potatoesTelltale,
  writingAI5Ways,
  creativeChef,
  portableDesk,
  dooringLife,
  designMaps,
  goldenMetrics,
  handlingThoughts,
  marsLatency,
  monotonousCars,
  otherSenses,
  justCook,
  retailtainment,
  
  {
    title: "Money money",
    author: "The Innovation Brothers",
    coverImage: "",
    description: "A collection of some projects we have worked over the years.",
    content: [
      {
        type: "Paragraph",
        text: "IPSUM ipsum and the whales and dolphins. IPSUM ipsum and the whales and dolphins. IPSUM ipsum and the whales and dolphins. IPSUM ipsum and the whales and dolphins. ",
      },
      {
        type: "Paragraph",
        text: "IPSUM ipsum and the whales and dolphins. And that's all folks.",
      },
    ],
  },
]

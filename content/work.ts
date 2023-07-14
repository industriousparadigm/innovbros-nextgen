import { WorkItem } from "./types"
import { Upport15 } from "./blogposts/upport-15"
import { PerDon16 } from "./blogposts/per-don-16"
import { OnFlick16 } from "./blogposts/on-flick-16"
import { Lidless18 } from "./blogposts/lidless-18"
import { DutchReach17 } from "./blogposts/dutch-reach-17"
import { Tuniest18 } from "./blogposts/tuniest-18"

export const workItems: WorkItem[] = [
  Upport15,
  Lidless18,
  DutchReach17,
  OnFlick16,
  PerDon16,
  Tuniest18,
  {
    title: "Warm-up Energisers ebook",
    author: "The Innovation Brothers",
    coverImage: "senses-map.png",
    description:
      "This book brings together a collection of 52 handpicked Warm-up energisers’ tools and methods for better meetings and workshops.",
    content: [
      {
        type: "Paragraph",
        text: "This book brings together a collection of 52 handpicked Warm-up energisers’ tools and methods for better meetings and workshops.",
      },
      {
        type: "Paragraph",
        text: "This book brings together a collection of 52 handpicked Warm-up energisers’ tools and methods for better meetings and workshops.",
      },
      {
        type: "Paragraph",
        text: "This book brings together a collection of 52 handpicked Warm-up energisers’ tools and methods for better meetings and workshops.",
      },
      {
        type: "Paragraph",
        text: "And that's all folks!",
      },
    ],
  },
  {
    title: "Machining Tool-sheet Calculator",
    author: "The Innovation Brothers",
    coverImage: "",
    description:
      "This WebApp is a work-in-progress Calculator that helps in preparing a Tool Sheet for programming and/or operating a Milling Machine.",
    content: [
      {
        type: "Paragraph",
        text: "Gonna do some dirty. ipsum and the whales and dolphins. IPSUM ipsum and the whales and dolphins. ",
      },
      {
        type: "Link",
        text: "Save the pandas!",
        url: "../about"
      },
    ],
  },
]

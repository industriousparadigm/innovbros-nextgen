import { WorkItem } from "./types"
import { justCook } from "./blogposts/just-cook"

export const workItems: WorkItem[] = [
  justCook,
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

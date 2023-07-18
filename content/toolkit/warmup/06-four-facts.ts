import { WorkItem } from "../../types"

export const fourFacts: WorkItem = {
  title: "Four Facts",
  author: "The Innovation Brothers",
  coverImage: "06-four-facts-cover.png",
  description:
    "'Introduce Each Other' to promote people to get to know each other.",
  content: [
    {
      type: "Image",
      image: "06-four-facts.png",
      alt: "Four Facts",
    },
    {
      type: "Link",
      text: "Back to Warm-up Energisers",
      url: "../warmup",
    },
  ],
}

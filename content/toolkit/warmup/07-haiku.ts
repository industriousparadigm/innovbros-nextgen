import { WorkItem } from "../../types"

export const haiku: WorkItem = {
  title: "Haiku",
  author: "The Innovation Brothers",
  coverImage: "07-haiku-cover.png",
  description:
    "'Introduce Each Other' to promote people to get to know each other.",
  content: [
    {
      type: "Image",
      image: "07-haiku.png",
      alt: "Haiku",
    },
    {
      type: "Link",
      text: "Back to Warm-up Energisers",
      url: "../warmup",
    },
  ],
}

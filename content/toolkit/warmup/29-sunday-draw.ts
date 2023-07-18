import { WorkItem } from "../../types"

export const sundaydraw: WorkItem = {
  title: "Sunday Drawing",
  author: "The Innovation Brothers",
  coverImage: "29-sunday-draw-cover.png",
  description:
    "'Encourage Creativity' to boost creative thinking.",
  content: [
    {
      type: "Image",
      image: "29-sunday-draw.png",
      alt: "sundaydraw",
    },
    {
      type: "Link",
      text: "Back to Warm-up Energisers",
      url: "../warmup",
    },
  ],
}

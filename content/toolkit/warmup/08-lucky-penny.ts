import { WorkItem } from "../../types"

export const luckypenny: WorkItem = {
  title: "Lucky Penny",
  author: "The Innovation Brothers",
  coverImage: "08-lucky-penny-cover.png",
  description:
    "'Introduce Each Other' to promote people to get to know each other.",
  content: [
    {
      type: "Image",
      image: "08-lucky-penny.png",
      alt: "Lucky Penny",
    },
    {
      type: "Link",
      text: "Back to Warm-up Energisers",
      url: "../warmup",
    },
  ],
}

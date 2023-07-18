import { WorkItem } from "../../types"

export const toiletpaper: WorkItem = {
  title: "Toilet Paper",
  author: "The Innovation Brothers",
  coverImage: "17-toilet-paper-cover.png",
  description:
    "'Introduce Each Other' to promote people to get to know each other.",
  content: [
    {
      type: "Image",
      image: "17-toilet-paper.png",
      alt: "Toilet paper",
    },
    {
      type: "Link",
      text: "Back to Warm-up Energisers",
      url: "../warmup",
    },
  ],
}

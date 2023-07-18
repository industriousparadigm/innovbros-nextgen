import { WorkItem } from "../types"

export const favItem: WorkItem = {
  title: "Favourite Item",
  author: "The Innovation Brothers",
  coverImage: "05-fav-item-cover.png",
  description:
    "'Introduce Each Other' to promote people to get to know each other.",
  content: [
    {
      type: "Image",
      image: "05-fav-item.png",
      alt: "Favourite Item",
    },
    {
      type: "Link",
      text: "Back to Warm-up Energisers",
      url: "../toolkit/warmup",
    },
  ],
}

import { WorkItem } from "../../types"

export const nickname: WorkItem = {
  title: "Nickname",
  author: "The Innovation Brothers",
  coverImage: "10-nickname-cover.png",
  description:
    "'Introduce Each Other' to promote people to get to know each other.",
  content: [
    {
      type: "Image",
      image: "10-nickname.png",
      alt: "Nick Name",
    },
    {
      type: "Image",
      image: "template-nametags.jpg",
      alt: "Template",
    },
    {
      type: "Link",
      text: "Back to Warm-up Energisers",
      url: "../warmup",
    },
  ],
}

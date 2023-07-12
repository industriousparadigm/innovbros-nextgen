import { WorkItem } from "../types"

export const justCook: WorkItem = {
  title: "So you think you cannot design? Just cook.",
  author: "The Innovation Brothers",
  coverImage: "cook-wok.jpeg",
  description:
    "Cooking is similar to design, from problem definition through idea generation and shipping, but in smaller timeframe.",
  content: [
    {
      type: "Paragraph",
      text: "I've always loved to cook. It all started by helping my grandmother make Sunday lunch. She would teach me and answer my questions about the process: why do we have to marinate the meat overnight or preheat the oven? These taught me how to cook and soon was experimenting with different flavors and seeking the varied cooking methods and styles.",
    },
    {
      type: "Paragraph",
      text: "When I was 8 y-old, there was this situation in which some chips were being fried and, out of the blue, the pan bursts into flames! Now I know it was due to some water on the fries' surface, but at the time I just froze. Gladly my grandmother was right beside me and quickly drowned the fire with a cloth, nonetheless, the house would have burnt to the ground.",
    },
    {
      type: "Image",
      image: "cook-wok.jpeg",
      alt: "A pan with food",
    },
    {
      type: "Paragraph",
      text: "Eventually, I started cooking the family dinners. Sometimes as a sidekick, others as lead or simply flying solo. I enjoyed it so much that I even considered studying to become a professional cook. Still, it is great fun to be in a kitchen and prepare and cook a meal that people enjoy.",
    },
  ],
}

type WorkItem = {
  title: string
  author: string
  coverImage: string // url
  description: string
  content: Block[]
}

type Block = {
  type: "Paragraph" | "Image"
  text?: string
  image?: string // url
  alt?: string
}

export const workItems: WorkItem[] = [
  {
    title: "Projects portfolio",
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
  {
    title: "Warm-up Energisers ebook",
    author: "The Innovation Brothers",
    coverImage: "",
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
        type: "Paragraph",
        text: "Save the pandas!",
      },
    ],
  },
]

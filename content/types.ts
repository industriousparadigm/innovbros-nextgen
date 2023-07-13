export type WorkItem = {
  title: string
  author: string
  coverImage: string // url
  description: string
  content: Block[]
}

export type Block = {
  type: "Paragraph" | "Image"
  text?: string
  image?: string // url
  alt?: string
  link?: string // url
}

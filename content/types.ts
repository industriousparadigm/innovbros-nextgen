export type WorkItem = {
  title: string
  author: string
  coverImage: string // url
  description: string
  content: Block[]
}

export type Block = {
  type: "Paragraph" | "Image" | "Link"
  text?: string
  image?: string // url
  alt?: string
  url?: string // url
}

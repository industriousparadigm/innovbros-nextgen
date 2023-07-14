import { WorkItem } from "../types"

export const marsLatency: WorkItem = {
  title: "Earth/Mars Problem",
  author: "The Innovation Brothers",
  coverImage: "mars-latency.jpg",
  description:
    "Communication latency will impact our multi-planetary exploration.",
  content: [
    {
      type: "Paragraph",
      text: "We are trying to become a multi-planetary species by going to Mars and settling there in the next 100 years. Most focus has been on the propulsion and transportation technology front, with developments and innovations putting us closer to this goal.",
    },
    {
      type: "Paragraph",
      text: "This is a feat similar to the navigation expeditions of the 15th century, pioneered by the Portuguese, and the expeditions to the West of America - an exploration of the unknown.",
    },
    {
      type: "Paragraph",
      text: "A common hurdle of all these cases has been comunications, and with Mars it will be again. Not because we won't be able to get news from our fellow humans on the red planet surface, but because even light takes, in the best situation, four minutes to travel from the red to the blue planet. This will take us back more than a hundred years when posting a letter and waiting for a reply was the best comunication medium.",
    },
    {
      type: "Paragraph",
      text: "This email like communication system will seem inadequate for our high-tech world of instant video conversations anywhere and anytime.",
    },
    {
      type: "Paragraph",
      text: "There might be a solution. In 2015 at the Delft University in the Netherlands, a team of researchers managed to make the entanglement of an atom and separating it in space (https://www.nature.com/articles/nature15759.epdf), putting each entangled atom at 1.3km apart.",
    },
    {
      type: "Paragraph",
      text: "The entanglement is a physical phenomenon where a group of particles cannot be described independently of each other, even when the particles are far apart.",
    },
    {
      type: "Paragraph",
      text: "Theoritically it is possible to use this physical phenomenon to develop a communication system: think quantum computers. However, its practical implementation can take decades.",
    },
    {
      type: "Paragraph",
      text: "Looking forward to the scientific and technological progress that will be added to our collection of knowledge.",
    },
    {
      type: "Link",
      text: "Back to blog"
      url: "../blog"
    },
  ],
}

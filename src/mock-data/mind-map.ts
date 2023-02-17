export const CareerPlaningData = [
  { id: 1, Label: "Career Planning", fill: "Black", branch: "Root" },
  {
    id: 2,
    Label: "Current skills",
    parentId: 1,
    branch: "Right",
    fill: "Blue",
  },
  { id: 3, Label: "Technical skills", parentId: 2, branch: "subRight" },
  { id: 4, Label: "Interpersonal skills", parentId: 2, branch: "subRight" },
  { id: 5, Label: "Language", parentId: 2, branch: "subRight" },
  { id: 9, Label: "Computing", parentId: 3, branch: "subRight" },
  { id: 10, Label: "Chemical engineering", parentId: 3, branch: "subRight" },
  { id: 11, Label: "Verbal communication", parentId: 4, branch: "subRight" },
  { id: 12, Label: "Decision making", parentId: 4, branch: "subRight" },
  { id: 13, Label: "Problem solving", parentId: 4, branch: "subRight" },
  { id: 14, Label: "Negotiating", parentId: 4, branch: "subRight" },
  { id: 15, Label: "English", parentId: 5, branch: "subRight" },
  { id: 16, Label: "Chinese", parentId: 5, branch: "subRight" },
  { id: 22, Label: "Programming", parentId: 9, branch: "subRight" },
  { id: 23, Label: "Database management", parentId: 9, branch: "subRight" },
  { id: 24, Label: "Network and Security", parentId: 9, branch: "subRight" },
  { id: 25, Label: "Software testing", parentId: 9, branch: "subRight" },
  { id: 26, Label: "HAZOP studies", parentId: 10, branch: "subRight" },
  { id: 27, Label: "Refinery operations", parentId: 10, branch: "subRight" },
  { id: 30, Label: "Possibilities", parentId: 1, branch: "Left", fill: "red" },
  {
    id: 31,
    Label: "Preferences",
    parentId: 1,
    branch: "Left",
    fill: "lightGreen",
  },
  { id: 32, Label: "Education", parentId: 1, branch: "Left", fill: "yellow" },
  { id: 17, Label: "Acheive a new position", parentId: 30, branch: "subLeft" },
  {
    id: 18,
    Label: "Improve a current position",
    parentId: 30,
    branch: "subLeft",
  },
  { id: 19, Label: "Look for a new job", parentId: 31, branch: "subLeft" },
  { id: 20, Label: "College", parentId: 32, branch: "subLeft" },
  { id: 21, Label: "University", parentId: 32, branch: "subLeft" },
  { id: 28, Label: "ABC College", parentId: 20, branch: "subLeft" },
  { id: 29, Label: "Hello World University", parentId: 21, branch: "subLeft" },
];

const educ = [
  {
    header: "Saint Jerome Emiliani Institute",
    sub: "Junior High to Senior High (2012 - 2018)",
  },
  {
    header: "Univeristy of Santo Tomas",
    sub: "Bachelor's Degree (2018 - Present)",
  },
];

const workexp = [
  {
    header: "Light Symphony Music School",
    sub: "Piano Instructor",
  },
];

const projects = [
  {
    header: "Urban Orchard Café (Food Ordering System)",
    sub: "Front-end Developer",
  },
  {
    header:
      "Tiger Apparel (Ordering System, Statistics Report Generator and Inventory Management System)",
    sub: "Full-Stack/Lead Developer",
  },
];

const contact = [
  {
    header: "Phone",
    sub: "09676800957",
  },
  {
    header: "Email",
    sub: "pgbalanza@gmail.com",
  },
  {
    header: "Address",
    sub: "B 21 L 1 Macaria Homes, Bacoor City, Cavite",
  },
];

export function getEduc() {
  return educ;
}
export function getWork() {
  return workexp;
}
export function getProject() {
  return projects;
}
export function getContact() {
  return contact;
}

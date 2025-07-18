// Profile Management Project

interface User {
  id: number;
  username: string;
  email: string;
}

interface Author extends User {
  bio: string;
  posts: string[];
}

type Status = "active" | "inactive" | "banned";

const author1: Author = {
  id: 1,
  username: "sheikh saiyam",
  email: "saiyamprogrammer@gmail.com",
  bio: "A Web Developer",
  posts: ["Post 1", "Post 2", "Post 3", "Post 4", "Post 5"],
};

const accountStatus: Status = "active";

// Learned Interface and Type from this project

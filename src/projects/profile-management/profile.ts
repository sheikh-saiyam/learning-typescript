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

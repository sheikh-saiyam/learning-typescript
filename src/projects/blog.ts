// Blog Post Status - Project

enum PostStatus {
  draft = "DRAFT",
  published = "PUBLISHED",
  archived = "ARCHIVED",
}

interface POST {
  title: string;
  content: string;
  status: PostStatus;
}
const post1: POST = {
  title: "Learning typescript enums",
  content:
    "Learning TypeScript Enums: Numeric and string enums and Const enums and Use-cases",
  status: PostStatus.published,
};

const post2: POST = {
  title: "Learning typescript enums.",
  content:
    "Learning TypeScript Enums: Numeric and string enums and Const enums and Use-cases...",
  status: PostStatus.draft,
};

const post3: POST = {
  title: "Learning typescript enums..",
  content:
    "Learning TypeScript Enums: Numeric and string enums and Const enums and Use-cases.....",
  status: PostStatus.archived,
};

console.log({
  status1: post1.status,
  status2: post2.status,
  status3: post3.status,
});

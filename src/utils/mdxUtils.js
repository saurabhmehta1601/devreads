import fs from "fs";
import path from "path";

// POSTS_PATH is useful when you want to get the path to a specific file
export const COURSES_PATH = path.join(process.cwd(), "src", "courses");

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const courseFilePaths = fs
  .readdirSync(COURSES_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));

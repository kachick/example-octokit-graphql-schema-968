import { validate } from "@octokit/graphql-schema";
import { Commit } from "@octokit/graphql-schema";

const errors = validate(`
  {
    viewer {
      login
    }
  }
  `);

console.info(errors);

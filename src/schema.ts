import { makeExecutableSchema } from "graphql-tools";
import { loadSchemaFiles, mergeTypeDefs } from "graphql-toolkit";

import path from "path";

const schema = loadSchemaFiles(path.join(__dirname, "./schemaTypes"));

console.log({ schema });

const merged = mergeTypeDefs(schema, { sort: true });

const executableSchema = makeExecutableSchema({
  typeDefs: merged,
  resolvers: {
    Query: {
      dummy: () => "Hello"
    }
  }
});

export default executableSchema;

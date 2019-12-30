import { makeExecutableSchema } from "graphql-tools";
import { mergeTypeDefs } from "@graphql-toolkit/schema-merging";
import path from "path";

import loadSchemaFiles from "./loadSchemaFiles";

const schema = loadSchemaFiles(path.join(__dirname, "./schemaTypes"));

console.log({ schema });

const merged = mergeTypeDefs(schema);

const executableSchema = makeExecutableSchema({
  typeDefs: merged,
  resolvers: {
    Query: {
      dummy: () => "Hello"
    }
  }
});

export default executableSchema;

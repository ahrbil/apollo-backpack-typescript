import { makeExecutableSchema } from "graphql-tools";
import { mergeTypeDefs } from "@graphql-toolkit/schema-merging";
import { loadSchemaFiles } from "@graphql-toolkit/file-loading";
import path from "path";

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

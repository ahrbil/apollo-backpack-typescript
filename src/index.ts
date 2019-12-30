import express from "express";
import { ApolloServer } from "apollo-server-express";

import schema from "./schema";

const app = express();

const apolloServer = new ApolloServer({
  schema
});

apolloServer.applyMiddleware({ app });

app.listen({ port: 4000 }, () => console.log("server running"));

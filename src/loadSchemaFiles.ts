import glob from "glob";
import fs from "fs";
import path from "path";

const loadSchemaFiles = (dirName: string) => {
  const matchedPaths: string[] = glob.sync(`${dirName}/**/*.+(graphql|gql)`, {
    absolute: true
  });

  if (matchedPaths.length < 1) {
    console.log("NO FILES MATCHED!");
  }

  const typeDefs = matchedPaths.map(filePath => {
    const fullPath = path.relative(process.cwd(), filePath);
    return fs.readFileSync(fullPath, {
      encoding: "utf-8"
    });
  });

  return typeDefs;
};

export default loadSchemaFiles;

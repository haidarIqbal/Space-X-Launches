const express = require("express");
var { graphqlHTTP } = require("express-graphql");
const schema = require("./MyGraphQlSchema");
const cors = require("cors");
const port = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`listening at ${port}`);
});

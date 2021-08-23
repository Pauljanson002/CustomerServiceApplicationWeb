module.exports = {
  "name": "GraphQL - CustomerServiceApp",
  "schemaPath": "schema.graphql",
  "extensions": {
  "endpoints": {
    "Default GraphQL Endpoint": {
      "url": "http://localhost:4000/api",
        "headers": {
        "user-agent": "JS GraphQL"
      },
      "introspect": false
    }
  }
}
}
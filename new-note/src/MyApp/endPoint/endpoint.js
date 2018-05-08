import ApolloClient from "apollo-boost"

const client = new ApolloClient({ uri: "https://us1.prisma.sh/public-firehyena-669/prismadb/dev" })

export { client }
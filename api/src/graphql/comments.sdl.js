export const schema = gql`
  type Comment {
    id: Int!
    name: String!
    body: String!
    Post: Post
    postId: Int
    createdat: DateTime!
  }

  type Query {
    comments: [Comment!]! @skipAuth
  }

  input CreateCommentInput {
    name: String!
    body: String!
    postId: Int
    createdat: DateTime!
  }

  input UpdateCommentInput {
    name: String
    body: String
    postId: Int
    createdat: DateTime
  }

  type Mutation {
    createComment(input: CreateCommentInput!): Comment! @skipAuth
    deleteComment(id: Int!): Comment! @requireAuth
  }
`

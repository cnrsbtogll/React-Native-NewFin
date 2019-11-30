import { 
    GraphQLObjectType,
    GraphQLString,
    GraphQLID
 } from 'graphql'

 export default new GraphQLObjectType({
     name:'ListingInput',
     fields:()=>({
         _id:{type:GraphQLID},
         title:{type:GraphQLString},
         description:{type:GraphQLString}
     })
 })
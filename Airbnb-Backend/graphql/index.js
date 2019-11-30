import { 
    GraphQLObjectType,
    GraphQLSchema
 } from 'graphql'
import mutations from './mutations'
import queries from './queries'

 export default new GraphQLSchema({
     query:new GraphQLSchema({
        name:'Query',
        fields: queries
     }),
    mutations:new GraphQLObjectType({
        name:'Mutation',
        fields:mutations
    })     
 })
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLSchema, GraphQLList, GraphQLBoolean } = require('graphql');
// const { clients, projects } = require('../sampleData');
const Client = require('./../models/Client');
const Project = require('./../models/Project');

// Project Type
const ProjectType = new GraphQLObjectType({
    name: "ProjectType",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        status: { type: GraphQLString },
        client: { type: ClientType, resolve(parent, args) { return Client.findById(parent.id) } },
    })
})

// Client Type
const ClientType = new GraphQLObjectType({
    name: 'Client',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
    })
})

const RootType = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        clients: {
            type: new GraphQLList(ClientType),
            resolve() { return Client.find() }
        },
        client: {
            type: ClientType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) { return Client.findById(args.id) }
        },
        projects: {
            type: new GraphQLList(ProjectType),
            resolve() { return Project.find() }
        },
        project: {
            type: ProjectType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) { return Project.findById(args.id) }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootType
}) 
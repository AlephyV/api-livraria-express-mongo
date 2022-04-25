import mongoose from "mongoose";

mongoose.connect('mongodb://root:root@nodeexpress-shard-00-00.uhouj.mongodb.net:27017,nodeexpress-shard-00-01.uhouj.mongodb.net:27017,nodeexpress-shard-00-02.uhouj.mongodb.net:27017/alura-node?ssl=true&replicaSet=atlas-19x4ro-shard-0&authSource=admin&retryWrites=true&w=majority');

let db = mongoose.connection;

export default db;
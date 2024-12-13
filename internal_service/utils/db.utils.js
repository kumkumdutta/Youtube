// import { MongoClient } from "mongodb";
import * as Packages from '../packages/node.packages.js'

class InternalService {
    #db_name
    constructor(mongourl,db_name) {
        if(!InternalService.instance) {
            this.db_name = db_name;
            this.client = new Packages.MongoClient
            (mongourl, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            this.connection();
            this.get_db_name()
            InternalService.instance = this;
        }
        return InternalService.instance;
    }

    async connection() {
        await this.client.connect();
       
    }

    get_db_name() {
       return this.client.db(this.db_name);
    }

    async find({collection, query,project,optionals}){
        try {
            let skip = 0;
            let limit = 100;
            let sort = {};
            let projection = {};

            if (optionals?.skip) skip = optionals.skip
            if (optionals?.limit) limit = optionals.limit
            if (optionals?.sort) sort = optionals.sort
            if (project) projection = project

            const data = await this.get_db_name().collection(collection).find(query).sort(sort).skip(skip).limit(limit).toArray();
            return data

        } catch (error) {
          console.log(error)  
        }
    }

    async findOne({collection, query,project}){
    
        try {
            const data = await this.get_db_name().collection(collection).findOne(query,{...project});
            return data

        } catch (error) {
          console.log(error)
        }}
        async insertOne({collection,data}){
            try {
                await this.get_db_name().collection(collection).insertOne(data);
            } catch (error) {
                console.log(error);
                
            }
        }

        async insertMany({collection,data}){
            try {
                await this.get_db_name().collection(collection).insertMany(data);
            } catch (error) {
                console.log(error);
                
            }
        }

        async updateOne({collection,query,data}){
            try {
                await this.get_db_name().collection(collection).updateOne(query,data);
            } catch (error) {
                console.log(error);
                
            }
        }

        async updateMany({collection,query,data}){   
            try {
                await this.get_db_name().collection(collection).updateMany(query,data);
            } catch (error) {
                console.log(error);
                
            }
        }

        async deleteOne({collection,query}){
            try {
                await this.get_db_name().collection(collection).deleteOne(query);
            } catch (error) {
                console.log(error);
                
            }
        }

        async deleteMany({collection,query}){
            try {
                await this.get_db_name().collection(collection).deleteMany(query);
            } catch (error) {
                console.log(error);
                
            }
        }

        async aggregate({collection,pipeline}){
            try {
                const data = await this.get_db_name().collection(collection).aggregate(pipeline).toArray();
                return data
            } catch (error) {
                console.log(error);
                
            }
        }
}


export {InternalService}
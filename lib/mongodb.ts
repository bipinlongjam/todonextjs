import { MongoClient } from "mongodb";

let client: MongoClient;
let clientPomise: Promise<MongoClient>

const url = process.env.MONGODB_URL;

// const options: any = {
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// }

if(!url){
    throw new Error('Please add your Mongodb Atlas connection string to .env.local')
}

client = new MongoClient(url);
clientPomise = client.connect();

clientPomise.then(() => console.log('Connected to mongodb Atlas'));

export default clientPomise;
import pymongo
import certifi

ca = certifi.where()
client = pymongo.MongoClient("mongodb+srv://admin:1234@cluster0.m665q1z.mongodb.net/taller2?retryWrites=true&w=majority", tlsCAFile=ca)
db = client.test
print(db)
baseDatos = client["taller2"]
print(baseDatos.list_collection_names())



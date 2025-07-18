# mongo commands

connect:
mongosh "mongodb+srv://mern.parturi.mongodb.net/" --apiVersion 1 --username username
mongosh mongodb+srv://username:passwd@mern.parturi.mongodb.net
mongosh mongodb+srv://username:passwd@mern.parturi.mongodb.net/db_name

show databases
use database ex: use store
show collections
db.collection_name.find() ex: db.product.find()
db.collection_name.find().pretty()
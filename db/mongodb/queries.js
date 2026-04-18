// connect to database
// mongosh db_uri

// switch to database
// use app_db

// get all users
db.users.find({});

// create the users collection
db.createCollection("users");

// insert a new user document
db.users.insertOne({
  name: "Nikhil",
  age: 22,
  email: "nikhil@example.com",
});

// get users older than 20
db.users.find({ age: { $gt: 20 } });

// update age for a specific user id
db.users.updateOne({ id: 5 }, { $set: { age: 50 } });

// delete a specific user by id
db.users.deleteOne({ id: 5 });

// delete all rows from users
db.users.deleteMany({});

// drop the users collection
db.users.drop();

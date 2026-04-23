// connect to database
// mongosh db_uri

// switch to database
// use app_db

// get all users
db.users.find({});

// get all users (only name and age fields)
db.users.find({}, { name: 1, age: 1 });

// create the users collection
db.createCollection("users");

// insert a new user document
db.users.insertOne({
  name: "Nikhil",
  age: 22,
  email: "nikhil@example.com",
});

// get user by id
db.users.find({ _id: ObjectId("64f1a2b3c4d5e6f7890abc12") });

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

// sort users by salary (highest first)
db.users.find().sort({ salary: -1 });

// get first 5 users
db.users.find().limit(5);

// paginate users (skip 10, take next 10)
db.users.find().skip(10).limit(10);

// get user with highest salary
db.users.find().sort({ salary: -1 }).limit(1);

// get user with lowest salary
db.users.find().sort({ salary: 1 }).limit(1);

// get second-highest distinct salary value
db.users.aggregate([
  { $group: { _id: "$salary" } },
  { $sort: { _id: -1 } },
  { $skip: 1 },
  { $limit: 1 },
]);

// count users per age
db.users.aggregate([{ $group: { _id: "$age", count: { $sum: 1 } } }]);

// sum total salary across all users
db.users.aggregate([
  { $group: { _id: null, totalSalary: { $sum: "$salary" } } },
]);

// average salary across all users
db.users.aggregate([{ $group: { _id: null, avgSalary: { $avg: "$salary" } } }]);

// find duplicate emails
db.users.aggregate([
  { $group: { _id: "$email", count: { $sum: 1 } } },
  { $match: { count: { $gt: 1 } } },
]);

// lookup orders for each user (join users -> orders)
db.users.aggregate([
  {
    $lookup: {
      from: "orders",
      localField: "id",
      foreignField: "user_id",
      as: "orders",
    },
  },
]);

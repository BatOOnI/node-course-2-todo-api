//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //destructure


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err){
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false

	// }, (err, result) => {
	// 	if(err) {
	// 		return console.log('unable to insert Todo', err);
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });


	//insert new doc into users (name, age, location)

	// db.collection('Users').insertOne({
	// 	name: 'bart',
	// 	age: 25,
	// 	location: 'UK'
	// },(err, result) => {
	// 	if(err){
	// 		return console.log('unable to connect to MongoDB server');
	// 	}

	// 	console.log(result.ops);
	// });

	db.close();
});
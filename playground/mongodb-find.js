//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //destructure

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err){
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').find({
	// 	_id: new ObjectID('598b02765f5da0147d65a033')
	// }).toArray().then((docs) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined,2));
	// }, (err) => {
	// 	console.log('unable to fetch Todos', err);
	// });

	// db.collection('Todos').find().count().then((count) => {
	// 	console.log(`Todos count: ${count}`);
	// }, (err) => {
	// 	console.log('unable to fetch Todos', err);
	// });

	db.collection('Users').find({
		name: 'Peter'
	}).toArray().then((docs) => {
		console.log(`Znaleziono: `);
		console.log(JSON.stringify(docs, undefined,2));
	}, (err) => {
		console.log('unable to fetch!', err);
	});

	//db.close();
});
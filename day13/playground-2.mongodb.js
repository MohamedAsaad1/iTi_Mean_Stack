// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('FacultySystemDB');

// Create a new document in the collection.


// db.student.find();

// db.student.find({FirstName:"Ahmed"});
// db.student.find({},{FirstName:4,_id:0});

// db.student.find({$or:[{FirstName:"Ahmed"},{LastName:"Ahmed"}]});

// db.student.find({Age:{$lt:221},{Age:1,Faculty:3});

// db.student.find({IsFired:true});

// db.student.find({Age:{$gte:21},Faculty:{$ne:null}},{Age:1,Faculty:3});
// db.student.find({$and:[{Age:{$gte:21}},{Faculty:{$ne:null}}]});

// db.student.find({},{FirstName:3,LastName:3,IsFired:3});

// db.student.update({FirstName:"Ahmed"},{$set:{LastName:"ahmed"}});

// db.student.update({Grades:{Pass:true}},{$set:{weak:1}},{multi:true});
// db.student.update({},{$unset:{weak:1}},{multi:true})


// db.student.remove({IsFired:true});


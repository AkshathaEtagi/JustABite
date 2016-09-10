var express=require('express');
[
]
var app=express();
var port=1334;

app.use('/',express.static(__dirname +'/public'));

app.listen(port, function(){
	console.log("Server up and running!");
});
app.get('/', function(req, res){
	res.sendFile(__dirname+'/public/index.html');
});

app.get('/login',function(req,res){
	res.sendFile(__dirname+'/public/LOGIN PAGE.html');
});

 
app.get('/session',function(req,res){
        console.log('Email : ' + req.query.username);
        console.log('Password : ' + req.query.pwd);
       //res.send('Logged in. Wait for updates');
        var q=req.query.username;
        var s=req.query.pwd;
        MongoClient.connect(url, function(err, db){
        
        if(err){
                console.log('Unable to connect to mongodbserver. Error:', err);

        }
        else{
                console.log('Connected to MongoDB server :D');

                var collection=db.collection('users');
                collection.remove({});
                var user1={username:'akshata', pwd:'akku1'};
                var user2={username:'mamta', pwd:'mummy1'};
                var user3={username:'nandita', pwd:'nandy1'};

                collection.insert([user1, user2, user3], function(err, result){
                        if(err){
                                console.log(err);
                                }
                        else{
                                        console.log('Inserted %d documents into the "users" collection.The documents inserted with "_id" are:', result.length, result);
                                }
                        })
//Get the input from html file(GET))
//then...
//to check if user id and password match
             
                //var passw='nandy1'
                collection.find({username:q}).toArray(function(err, result){
                        if(err){
                                console.log('User doesn\'t exist. Please sign up!');

                        }

                        else {
                                console.log(result);
                                console.log(s);
                                if(result[0].pwd===s){
                                        console.log('Login Success!:D');

                                }


                        }

                
        
        db.close();

        });
        }
});

        res.sendFile(__dirname+'/public/RESTPAGE.html');

});

app.get('/signup',function(req,res){
        res.sendFile(__dirname+'/public/SIGNUP PAGE.html');
});

app.get('/sessiontwo',function(req,res){
        console.log('First Name : ' + req.query.FirstName);
        console.log('Last Name : ' + req.query.LastName);
        console.log('Email : ' + req.query.Email);
        console.log('Password : ' + req.query.Password)
        console.log('Phone Number : ' + req.query.PhoneNumber);
        res.send('Logged in,waiting');
});

app.use(express.static( 'C:\\Users\\soft1\\Desktop\\test\\public'));






var mongodb=require('mongodb');
var MongoClient=mongodb.MongoClient;
var url='mongodb://localhost:27017/testdb';

app.get('/sessionthree',function(req,res){
       console.log('Restaurant : ' + req.query.jname);
       console.log('Option : ' + req.query.optradio);
       res.send("Waiting");


 MongoClient.connect(url, function(err, db){
        if(err){
                console.log('Unable to connect to mongodbserver.Error:', err);
        }
        else{
                console.log('Connected to mongodb server :D');
                var collection=db.collection('restveg');

                console.log(req.query.jname);
                console.log(req.query.optradio);
                var resto={rest:'req.query.jname', opt:'req.query.optradio'};
                collection.insert([resto],function(err, result){
                        if(err){
                                console.log(err);

                        }
                });



        }
 });


});
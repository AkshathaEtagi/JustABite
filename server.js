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
        console.log('Email : ' + req.query.user_name);
        console.log('Password : ' + req.query.pwd);
       //res.send('Logged in. Wait for updates');
        var q=req.query.user_name;
        var s=req.query.pwd;
        MongoClient.connect(url, function(err, db){
        
        if(err){
                console.log('Unable to connect to mongodbserver. Error:', err);

        }
        else{
                console.log('Connected to MongoDB server :D');

                var collection=db.collection('users');
                collection.remove({});
                var user1={user_name:'akshata', pwd:'akku1'};
                var user2={user_name:'mamta', pwd:'mummy1'};
                var user3={user_name:'nandita', pwd:'nandy1'};

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
                collection.find({user_name:q}).toArray(function(err, result){
                        if(err){
                                console.log('User doesn\'t exist. Please sign up!');

                        }

                        else {
                                console.log(result);
                                console.log(s);
                                if(result[0].pwd===s){
                                        console.log('Login Success!:D');
                                        res.sendFile(__dirname+'/public/RESTPAGE.html');
                                    }
                                else{
                                    res.sendFile(__dirname+'/public/LOGIN PAGE.html');
                                }

                        }

                
        
        db.close();

        });
                var collection=db.collection('foods');

                collection.insert([user_name], function(err, result){
                    if(err){
                        console.log(err);
                    }
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
       res.sendFile(__dirname+'/public/FEEDBACKPAGE.html');


 MongoClient.connect(url, function(err, db){
        if(err){
                console.log('Unable to connect to mongodbserver.Error:', err);
        }
        else{
                console.log('Connected to mongodb server :D');
                var collection=db.collection('restveg');

                console.log(req.query.jname);
                console.log(req.query.optradio);
                var resto={rest_name:req.query.jname, veg:req.query.optradio};
                collection.insert([resto],function(err, result){
                        if(err){
                                console.log(err);

                        }
                });
                var collection=db.collection('foods');
                collection.insert([resto], function(err, result){
                    if(err){
                        console.log(err);
                    }
                });




        }
        db.close();
 });

});





app.get('/sessionfour',function(req,res){
       console.log('Cusine : ' + req.query.rname);
       console.log('Name of Dish : '+ req.query.DishName);
       console.log('Spicy Or Sweet : ' + req.query.sname);
       console.log('Cost : ' + req.query.vname);

MongoClient.connect(url, function(err, db){
    if(err){
            console.log(err);
    }
    else{
        var collection=db.collection('foods');


        var food1={
    user_name : "nandita",
    rest_name : "KFC",
    dish_name : "veg rockin",
    review : [6,1,3],
    veg : true
};
var food2={
    user_name : "akshatha",
    rest_name : "KFC",
    dish_name : "paneer zinger",
    review : [6,1,3],
    veg : true
};
var food3={
    user_name : "mamta",
    rest_name : "KFC",
    dish_name : "cold coffee",
    review : [2,10,2],
    veg : true
};
var food4={
    user_name : "nandita",
    rest_name : "KFC",
    dish_name : "popcorn chicken",
    review : [6,1,4],
    veg : false
};
var food5={
    user_name : "nandita",
    rest_name : "KFC",
    dish_name : "Zinger burger",
    review : [6,1,4],
    veg : false
};
var food6={
    user_name : "nandita",
    rest_name : "McDonald's",
    dish_name : "chicken maharaja mac",
    review : [7,1,4],
    veg : false
};
var food7={
    user_name : "nandita",
    rest_name : "McDonald's",
    dish_name : "Choco walnut brownie",
    review : [1,10,4],
    veg : true
};
var food8={
    user_name : "nandita",
    rest_name : "McDonald's",
    dish_name : "french fries",
    review : [5,1,4],
    veg : true
};
var food9={
    user_name : "mamta",
    rest_name : "McDonald's",
    dish_name : "french fries",
    review : [5,1,4],
    veg : true
};
var food10={
    user_name : "mamta",
    rest_name : "McDonald's",
    dish_name : "Chicken Nuggets",
    review : [6,1,4],
    veg : false
};
var food11={
    user_name : "mamta",
    rest_name : "McDonald's",
    dish_name : "coke float",
    review : [2,10,2],
    veg : true
};
var food12={
    user_name : "mamta",
    rest_name : "McDonald's",
    dish_name : "McChicken",
    review : [6,1,4],
    veg : false
};
var food13={
    user_name : "nandita",
    rest_name : "McDonald's",
    dish_name : "Mc aloo tikki",
    review : [6,1,3],
    veg : true
};
collection.insert([food1, food2,food3, food4, food5, food6, food7, food8, food9, food10, food11, food12, food13], function(err, result){
    if(err){
        console.log(err);

    } 
    var food={ dish_name:req.query.DishName, review:[req.query.sname, req.query.rname, req.query.vname]};
    collection.insert([food], function(err, result){
        if(err){
            console.log(err);
        }
    });
});
res.send('Thankyou');
}
   db.close(); 
});
});
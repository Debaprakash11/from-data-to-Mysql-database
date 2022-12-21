var con=require('./connection')
var express =require('express')
var app=express();
var bodyParser =require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.get('/',function(req,res){
res.sendFile(__dirname+'/form.html')
})
app.post('/',function(req,res){
  var Firstname =req.body.Firstname
  var Lastname =req.body.Lastname
  var dob =req.body.dob
  var email =req.body.email
  var fatherLastname =req.body.fatherLastname
  var fatherLastname =req.body.fatherLastname
  var motherFirstname =req.body.motherFirstname
  var motherLastname =req.body.motherLastname
  var Gender =req.body.Gender
  var Nationality =req.body.Nationality
  var Street =req.body.Street
  var City=req.body.City
  var Country =req.body.Country
  var Mobile =req.body.Mobile
  var MobileH =req.body.MobileH

  con.connect(function(error){
    if(error)throw error;
    
    var sql ="INSERT INTO form2(fname, lname, dob, email, ffname, flname, mfname, mlname, gender, nation, street, city, country,mobile,mobileh) VALUES ?";

    var values=[
        [Firstname,Lastname,dob,email,fatherLastname,fatherLastname,motherFirstname,motherLastname,Gender,Nationality,Street,City,Country,Mobile,MobileH]
    ];
    con.query(sql,[values],function(error,result){
        if(error)throw error;
        res.send('Student Data submited sucessfully ');
    })

  })
})
app.listen(5000);
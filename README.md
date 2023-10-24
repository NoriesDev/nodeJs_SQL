# nodeJs_SQL
1.Create a Github Repo for this exercise
2.Create an  instance on ElephantSQL (you have a guide for that)  
3.Create the database
4.Create an Express server with separate routes for:

5.The users:
  GET  /  : To get all the users 
  GET  /:id :  To get one user (with the id) 
  POST / -> To create a new user 
  PUT /:id  :  To edit one user (with the id) 
  DELETE  /:id : To delete one user (with the id)

6.The orders:
GET  /  : To get all the orders 
GET  /:id :  To get one order (with the id) 
POST / -> To create a new order
PUT /:id  :  To edit one order (with the id) 
DELETE  /:id : To delete one order (with the id) 

7.EXTRA (AKA; you can give it a go, but you don’t have to…) If you are finished with these, try to:
Validate all the data coming from the users/orders for the Post/Put routes (help)
 Create a separate module for your pool object (help)
Create a user route that will return all the orders of a user
GET /:id/orders : To get all orders linked to a specific user

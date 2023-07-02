### Application Routes

##### User

POST api/v1/auth/signup <br>
GET api/v1/users<br>
GET api/v1/users/6177a5b87d32123f08d2f5d4 (Single GET) Include an id that is saved in your database<br>
PATCH api/v1/users/6177a5b87d32123f08d2f5d4 (Include an id that is saved in your database)<br>
DELETE api/v1/users/6177a5b87d32123f08d2f5d4 (Include an id that is saved in your database)<br>

##### Cows

POST api/v1/cows<br>
GET api/v1/cows<br>
GET api/v1/cows/6177a5b87d32123f08d2f5d4 (Single GET) Include an id that is saved in your database<br>
PATCH api/v1/cows/6177a5b87d32123f08d2f5d4 (Include an id that is saved in your database)<br>
DELETE api/v1/cows/6177a5b87d32123f08d2f5d4 (Include an id that is saved in your database)<br>

##### Pagination and Filtering routes of Cows

GET api/v1/cows?pag=1&limit=10<br>
GET api/v1/cows?sortBy=price&sortOrder=asc<br>
GET api/v1/cows?location=Chattogram<br>
GET api/v1/cows?searchTerm=Cha<br>

##### Orders

POST api/v1/orders<br>
GET api/v1/orders<br>

Please note that the routes above represent the endpoints available in the application.

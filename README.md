# marketplace
A full-stack web application that demonstrates a marketplace. Implentented using Spring Boot, React and MySQL.


## Features:
- Login Page
- Products Page
- Users and Sellers Pages

### Login Page


Login page is the main page of the application. You can enter your username and password to enter the system. If your username and password match with
the ones on database, you are able to access data according to your role. There are two roles in the system: Admin and end-user. Admin can reach all 
features of the application, meanwhile what an end-user can reach is limited.

<p align="center">
    <img src="https://user-images.githubusercontent.com/66200657/161760576-7910f3dd-e63a-4f3d-b291-7ad95b15062c.png" alt="Main Page">
  <i>Main Page</i>
</p>


### Products Page


Users can add, delete or update products from the products page. There is a search bar that users can search products by their name or price.
Also, products can be sorted by name or price.

<p align="center">
  <img src="https://user-images.githubusercontent.com/66200657/161763289-e356bb1f-ebdd-40f5-a2fa-ddf25f950b74.png" alt="List of products">
  <i>List of products</i><br>
</p>



<p align="center">
  <img src="https://user-images.githubusercontent.com/66200657/161763925-8977433d-89de-4423-b050-80ff4f2b1a2b.png" alt="Product update page for bicycle"><br>
  <i>Product update page for bicycle</i><br>
</p>


#### Adding a new product


Admin can add a new product from Add Product button by typing its name and price. Admin also needs to select the seller of the product from the combobox.
![image](https://user-images.githubusercontent.com/66200657/161763462-3b307ba1-bd65-4aa7-9d40-648e58d4e267.png)


### Users and Sellers Pages
Users Page contains the list of end-users in the database. Admin can search from the list by username using the search box.


![image](https://user-images.githubusercontent.com/66200657/161766587-a5e28926-d04e-43cf-b01b-7e0256ee546b.png)


Sellers Page contains the list of sellers in the database. Admin can search from the list by username using the search box.


![image](https://user-images.githubusercontent.com/66200657/161766841-7765cecc-cb09-4b9c-9888-d9fc386b4470.png)





## Run marketplace locally

### Step 1: clone the project
    git clone https://github.com/iremkrc/marketplace.git
    cd marketplace
    python3 manage.py runserver
    
### Step 2: install needed packages if they are not exist
    cd marketplace
    sudo apt install maven
    mvn package
    cd ../my-app
    sudo apt install npm
    npm install
    
### Step 3: run the project
    npm start

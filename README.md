# Recommender

## About
---
This app allows users to create and remove categories. They can then add and remove items within those categories, and the app will select an item at random. \
\
Great for settling disputes!


Demo video of app: https://www.youtube.com/watch?v=mr9hSQ4EbeU

Built using react/next.js

## How-To
---
### Create the Backend
Install node.js if it's not installed already. Create an empty directory and run ```$npm init```. Set the entry point to app.js.

Run the following:

```$npm install express --save```

```$npm install cors```

Remove anything currently in app.js and replace it with [this.](#)

Create a JSON file called data.json. Inside of it, you can add an empty object ```{}```, or create your own, consisting of String values for your keys (categories), and String arrays for your values (items), like so: ```{"Restaurants": ["Osteria Papavero", "Sals", "Tacqueria Gonzalez"], "Movies": ["Shaun of the Dead", "Hot Fuzz"]}```

Run the command: ```$node app.js``` and the service should now be available at localhost:3000/categories/

### Create the Frontend

Create a new, empty directory. Inside it, run ```npx create-next-app```

Replace the contents of all of the directories you just creted with their respective counterparts in this recommender repo. Note that some don't appear in this repo, and you should leave those alone.

The FINAL step is to create a new file called ```config.json```. In that file, create json object whose key is "baseURL", and whose value is the URL to your backend REST service. If you've been following this guide, you should have the following:
```
{
    "baseURL": "http://localhost:3000/categories"
}
```

Else, use whatever URL points to your server.

Run ```$npm run dev``` and the app should be available at localhost:3001

Note: in some cases, ```npx create-next-app``` may switch to yarn as its default pacakge manager instead of npm. If this happens, just run ```$yarn dev``` instead, and it should do the same thing.

Enjoy!


## API
---

### Get All Data
Method: GET \
Endpoint: /categories/


### Get all items within a specific category
Method: GET \
Endpoint: /categories/categoryToGet

For example, to view all items in a category called "Meals", use /categories/Meals/

### Add category
Method: POST \
Endpoint: /categories/

Request body must be type application/json with the following:

```
{
    name: "categoryToAdd"
}
```

### Remove Category
Method: DELETE\
Endpoint: /categories/

Request body must be type application/json with the following:

```
{
    name: "categoryToDelete"
}
```
### Add Item to Category
Method: PUT\
Endpoint: /categories/\<categoryName>

For example, to add an item to a category called "Restaurants", use /categories/Restaurants/

Request body must be type application/json with the following:

```
{
    name: "itemToAdd",
    action: "add"
}
```

 ### Remove Item from Category
Method: PUT\
Endpoint: /categories/\<categoryName>

For example, to remove an item from a category called "Movies", use /categories/Movies/

Request body must be type application/json with the following:

```
{
    name: "itemToRemove",
    action: "remove"
}
```
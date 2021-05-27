# Recommender

## About
---
This app allows users to create and remove categories. They can then add and remove items within those categories, and the app will select an item at random. \
\
Great for settling disputes!


Demo video of app:

Built using react/next.js

## API
---
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
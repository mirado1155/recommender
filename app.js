const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());

app.use(express.json());

//read in json file
const getJsonFromFile = () => {
    return JSON.parse(fs.readFileSync('data.json').toString());
}

//get all
app.get('/categories/', (req, res) => {
    console.log("getAll");
    res.json(getJsonFromFile());
});

//Get by Category
app.get('/categories/:category', (req, res) => {
    let category = req.params.category;
    console.log("get category: " + category);

    let data = getJsonFromFile()[category];
    console.log(data)
    
    data ? res.json(data) : res.json({"error": "No item with corresponding name :("});
});

//post new category
app.post('/categories/', (req, res) => {

    let data = getJsonFromFile();
    let newCategoryName = req.body.name
    console.log("Posting category: " + newCategoryName + "...");
    data[newCategoryName] = []
    console.log(data)

    fs.writeFileSync('data.json', JSON.stringify(data));

    res.json(data);
});


//update items in category
app.put('/categories/:category', (req, res) => {
    let data = getJsonFromFile();
    let category = req.params.category;
    let item = req.body.name;
    let updateAction = req.body.action;
    let updateMessage = "successful " + updateAction;
    switch (updateAction) {
        case "add":
            data[category].indexOf(item) === -1
                    ? data[category].push(item) 
                    : updateMessage = `The item ${item.toUpperCase()} already exists in ${category}!`;
            break;
        case "remove":
            data[category].includes(item) 
                    ? data[category].splice(data[category].indexOf(item), 1) 
                    : updateMessage = 
                            "Sorry, item does not exist... But you wanted to remove it anyway, so... yay?";
            break;
        default:
            updateMessage = "Sorry, invalid update action";
    }
    
    fs.writeFileSync('data.json', JSON.stringify(data));
    res.json(`{'message': '${updateMessage}'}`);
});

//Delete Category
app.delete('/categories/', (req, res) => {
    let data = getJsonFromFile();
    let name = req.body.name;
    let deleteMessage = "Successful Delete of " + name;
    name in data
            ? delete data[name]
            : deleteMessage = "Sorry, the item you want to delete doesn't exist in the first place. Hooray?";
    fs.writeFileSync('data.json', JSON.stringify(data));
    res.json(`{'message': '${deleteMessage}'}`);
});

//run
app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
  });

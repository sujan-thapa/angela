import express from "express";
import bodyParser from "body-parser";
import pg from "pg";


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "posttodo",
  password: "1234",
  port: 5432,

})
db.connect();


let items = [
  { id: 1, title: "Buy milk" },
  { id: 2, title: "Finish homework" },
];
async function getItems(){
  const result = await db.query("SELECT * FROM items");
  return result.rows;  
}


app.get("/", async (req, res) => {
  // const it = await getItems();
  
  // updating items after fetching items from database
  const items = await getItems(); 

  // console.log(it);
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });
});

app.post("/add", async (req, res) => {
  const item = req.body.newItem;
  
  // without db
  // items.push({ title: item }); 
  try {
    await db.query("INSERT INTO items (titles) VALUES ($1)", [item]);
    res.redirect("/");
    
  } catch (error) {
    console.log(error);
    
  }

  // const query1 = await db.query("INSERT INTO items (titles) VALUES ($1)", [item]);

  
});

app.post("/edit", async (req, res) => {
  
});

app.post("/delete", async (req, res) => {
  const id = req.body.deleteItemId;
  console.log(id);
  try {
    await db.query("DELETE FROM items where id=$1",[id]);
    
  } catch (error) {
    console.log(error);
  }

  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});

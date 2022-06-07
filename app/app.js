const express = require('express')
const app = express()
const router = express.Router();
const port = 3000
app.set('view engine', 'ejs');
app.use(express.static('public'))


router.get('/app', (req, res) => {
    res.render(`pages/index`);
  });
  
app.use("/",router);  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
import posts from "./tuits.js";
let tuits = posts;

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime()+'';
    newTuit.likes = 0;
    newTuit.liked = false
    tuits.push((newTuit));
    res.json(newTuit);
 }
const findTuits  = (req, res) => {
    res.json(tuits);
}
const updateTuit = (req, res) => {
    const updatedTuit = req.body;
    const tid = req.params['tid'];
    tuits = tuits.map( (tuit) =>
        tuit._id === tid ? {...tuit, ...updatedTuit} : tuit
    )
    res.sendStatus(200);
}
const deleteTuit = (req, res) => {
    const tid = req.params['tid'];
    tuits = tuits.filter(tuit => tuit._id != tid)
    res.sendStatus(200);
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}

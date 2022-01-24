module.exports = function(app, db){
    app.post('/notes', (req, res) => {
        // We'll create a note here
        res.send('Hello')
    })
}
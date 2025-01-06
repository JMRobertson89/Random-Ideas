const express = require('express');
const port = 5000;

const app = express();

const ideas = [
    {
        id: 1,
        text: 'A blog that shares current events in tech',
        tag: 'Technology', 
        username: 'MachoMan',
        date: '2024-01-20'
    },
    {
        id: 2,
        text: 'Hot Pineapple Pizza: A thin crust pizza with pineapple, pepperoni, and hot honey drizzle',
        tag: 'Food', 
        username: 'Gandalf',
        date: '2024-02-9'
    },
    {
        id: 1,
        text: 'An app that lets users "duckify" anything in their lives by overlaying random duck images, duck sounds, or duck-inspired captions onto photos, videos, or even everyday text messages.',
        tag: 'Software', 
        username: 'GeraltOfRivia',
        date: '2024-03-15'
    },
]

app.get('/', (req, res) => { 
    res.json({ message: 'Welcome to the RandomIdeas API'});
});

// Get all ideas
app.get('/api/ideas', (req, res) => { 
    res.json({ success: true, data: ideas });
});

// Get a single idea
app.get('/api/ideas/:id', (req, res) => { 
    const idea = ideas.find((idea) => idea.id === +req.params.id);

    if (!idea) {
        res.status(404).json({ success: false, error: 'Resource not found' })
    }

    res.json({ success: true, data: idea })
});


app.listen(port, () => console.log(`Server listening on port ${port}`));
const express = require('express');
const router = express.Router();
const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config();

const url = process.env.MONGODB_URL;
const client = new MongoClient(url);

// GET all contacts
router.get('/', async (req, res) => {
  try {
    const database = client.db('contactsDB');
    const contacts = database.collection('contacts');
    const result = await contacts.find({}).toArray();
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching contacts', error });
  }
});

// GET single contact by ID
router.get('/:id', async (req, res) => {
  try {
    const database = client.db('contactsDB');
    const contacts = database.collection('contacts');
    const contact = await contacts.findOne({ _id: new ObjectId(req.params.id) });
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.json(contact);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching contact', error });
  }
});

module.exports = router;
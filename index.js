const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors')
const { v4: uuidv4 } = require('uuid');
// require('dotenv').config();
const multer = require('multer'); // Add multer to handle image uploads

const app = express();
app.use(express.json(),cors());
// app.use()

// Set up multer to handle file uploads
const storage = multer.memoryStorage(); // Store image data in memory (Buffer)
const upload = multer({ storage: storage });

mongoose.connect('mongodb://localhost:27017/categoryObject');

const CategorySchema = new mongoose.Schema({
    id: { type: String, unique: true, default: () => uuidv4() },
    name: { type: String, required: true, unique: true },
    categoryType: {
        type: String,
        enum: ['Fruits', 'Vegetables', 'Other'],
        required: true
    },
    image: { type: Buffer, required: true } // Store image as binary data (Buffer)
});

const Category = mongoose.model('Category', CategorySchema);

// POST route to create a new category (including image upload)
app.post('/category', upload.single('image'), async (req, res) => {
    try {
        const { name, categoryType } = req.body; // Read the name and categoryType from the request body
        const image = req.file ? req.file.buffer : null; // Get the image from the upload (Buffer)

        if (!image) {
            return res.status(400).json({ error: 'Image is required' });
        }

        const newCategory = new Category({ name, categoryType, image });
        await newCategory.save();
        res.status(201).json(newCategory); // Respond with the created category
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// GET route to get all categories
// GET route to get all categories with the image as base64
app.get('/category', async (req, res) => {
    try {
        const categoryList = await Category.find(); // Get all categories
        
        // Convert the image buffer to a base64 string for each category
        const categoryListWithImages = categoryList.map(category => {
            const categoryCopy = category.toObject();
            categoryCopy.image = categoryCopy.image.toString('base64'); // Convert buffer to base64
            return categoryCopy;
        });
        
        res.status(200).json(categoryListWithImages); // Respond with the list of categories 
        // setTimeout(() => {
        // }, 5000);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.get('/category/:id', async (req, res) => {
    try {
        // Use an object with the query filter { id: req.params.id }
        let categoryDetails = await Category.findOne({ id: req.params.id });
        categoryDetails = categoryDetails.toObject();
        categoryDetails.image = categoryDetails.image.toString('base64'); // Convert buffer to base64
        if (!categoryDetails) {
            return res.status(404).json({ error: 'Category not found' });
        }
        res.status(200).send(categoryDetails);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});

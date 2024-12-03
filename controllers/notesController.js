import db from "../database.js";

// Get all notes
export const getAllNotes = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM notes");
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single note by ID
export const getNoteById = async (req, res) => {};

// Create a new note
export const createNote = async (req, res) => {};

// Update a note
export const updateNote = async (req, res) => {};

// Delete a note
export const deleteNote = async (req, res) => {};

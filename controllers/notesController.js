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
export const getNoteById = async (req, res) => {
  const { id } = req.params;

  try {
    const [rows] = await db.query("SELECT * FROM notes WHERE id = ?", [id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: `Note with ID ${id} not found` });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new note
export const createNote = async (req, res) => {
  const { title, note } = req.body;

  try {
    await db.query(
      "INSERT INTO notes (title, datetime, note) VALUES (?, NOW(), ?)",
      [title, note]
    );
    res.status(201).json({ message: "Note created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a note
export const updateNote = async (req, res) => {
  const { id } = req.params;
  const { title, datetime, note } = req.body;

  try {
    // array untuk simpan query UPDATE dan parameter nilai
    const fields = [];
    const values = [];

    // untuk pengecekan field yang akan diupdate
    if (title !== undefined) {
      fields.push("title = ?");
      values.push(title);
    }
    if (datetime !== undefined) {
      fields.push("datetime = ?");
      values.push(datetime);
    }
    if (note !== undefined) {
      fields.push("note = ?");
      values.push(note);
    }

    // kalau tidak ada field yang diupdate
    if (fields.length === 0) {
      return res.status(400).json({ message: "No fields to update provided" });
    }

    // gabung field untuk query UPDATE
    const sql = `UPDATE notes SET ${fields.join(", ")} WHERE id = ?`;
    values.push(id); // tambah ID jadi parameter terakhir

    // jalankan query UPDATE
    const [result] = await db.query(sql, values);

    // cek ada row yang terupdate atau tidak
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json({ message: "Note updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a note
export const deleteNote = async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await db.query("DELETE FROM notes WHERE id = ?", [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

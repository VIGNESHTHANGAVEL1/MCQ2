const db = require('../db');

exports.getQuestionsByTopic = async (req, res) => {
  try {
    const topic = req.params.topic;
    const [rows] = await db.query('SELECT * FROM questions WHERE topic=?', [topic]);
    res.json(rows);
  } catch (err) {
    console.error('DB error:', err); // <--- add this
    res.status(500).json({ error: err.message });
  }
};


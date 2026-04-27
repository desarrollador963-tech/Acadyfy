const syllabusModel = require("../models/syllabus.model");

exports.getSyllabus = (req, res) => {
    res.json(syllabusModel.getAll());
};

exports.createSyllabus = (req, res) => {
    const { nombre, objetivos, metodologia } = req.body;

    if (!nombre || !objetivos) {
        return res.status(400).json({ error: "Campos obligatorios faltantes" });
    }

    const syllabus = syllabusModel.create(req.body);
    res.status(201).json(syllabus);
};
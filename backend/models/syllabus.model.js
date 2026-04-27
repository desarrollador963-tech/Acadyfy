let syllabusList = [];

module.exports = {
    getAll: () => syllabusList,

    create: (data) => {
        const newSyllabus = {
            id: Date.now(),
            ...data,
            status: "borrador",
            createdAt: new Date()
        };
        syllabusList.push(newSyllabus);
        return newSyllabus;
    }
};
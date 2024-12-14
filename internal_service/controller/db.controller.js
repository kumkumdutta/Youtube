const find = async (req, res) => {
    let collection = req.query.collection;
    let filterdata = req.body;
    try {
        if (filterdata.project) {
            project = filterdata.project;
            delete filterdata.project;
        }
        if (filterdata.sort) {
            sort = filterdata.sort;
            delete filterdata.sort;
        }
        if (filterdata.limit) {
            limit = filterdata.limit;
            delete filterdata.limit;
        }
        if (filterdata.skip) {
            skip = filterdata.skip;
            delete filterdata.skip;
        }
        let data = await global.db_service.find({ collection, query: filterdata, project, optionals: { skip, limit, sort } });
        res.send(data);
    } catch (error) {
        res.status(500).send({ status: false, data: "Internal server error" });
    }
}

const findOne = async (req, res) => {
    let collection = req.query.collection;
    let filterdata = req.body;
    try {
        let data = await global.db_service.findOne({ collection, query: filterdata, project: { ...filterdata } });
        res.send(data);
    } catch (error) {
        res.status(500).send({ status: false, data: "Internal server error" });
    }
}

const insertOne = async (req, res) => {
    let collection = req.query.collection;
    let data = req.body;
    try {
        await global.db_service.insertOne({ collection, data });
        res.send({ status: true, data: "Data inserted successfully" });
    } catch (error) {
        res.status(500).send({ status: false, data: "Internal server error" });
    }
}

const insertMany = async (req, res) => {
    let collection = req.query.collection;
    let data = req.body;
    try {
        await global.db_service.insertMany({ collection, data });
        res.send({ status: true, data: "Data inserted successfully" });
    } catch (error) {
        res.status(500).send({ status: false, data: "Internal server error" });
    }
}

const updateOne = async (req, res) => {
    let collection = req.query.collection;
    let query = req.body.query;
    let data = req.body.data;
    try {
        await global.db_service.updateOne({ collection, query, data });
        res.send({ status: true, data: "Data updated successfully" });
    } catch (error) {
        res.status(500).send({ status: false, data: "Internal server error" });
    }
}

const updateMany = async (req, res) => {
    let collection = req.query.collection;
    let query = req.body.query;
    let data = req.body.data;
    try {
        await global.db_service.updateMany({ collection, query, data });
        res.send({ status: true, data: "Data updated successfully" });
    } catch (error) {
        res.status(500).send({ status: false, data: "Internal server error" });
    }
}

const deleteOne = async (req, res) => {
    let collection = req.query.collection;
    let query = req.body.query;
    try {
        await global.db_service.deleteOne({ collection, query });
        res.send({ status: true, data: "Data deleted successfully" });
    } catch (error) {
        res.status(500).send({ status: false, data: "Internal server error" });
    }
}

const deleteMany = async (req, res) => {
    let collection = req.query.collection;
    let query = req.body.query;
    try {
        await global.db_service.deleteMany({ collection, query });
        res.send({ status: true, data: "Data deleted successfully" });
    } catch (error) {
        res.status(500).send({ status: false, data: "Internal server error" });
    }
}

const aggregate = async (req, res) => {
    let collection = req.query.collection;
    let pipeline = req.body;
    try {
        let data = await global.db_service.aggregate({ collection, pipeline });
        res.send(data);
    } catch (error) {
        res.status(500).send({ status: false, data: "Internal server error" });
    }
}

export {
    find,
    findOne,
    insertOne,
    insertMany,
    updateOne,
    updateMany,
    deleteOne,
    deleteMany,
    aggregate
}
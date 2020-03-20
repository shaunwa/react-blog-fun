const withDB = async (operations) => {
    try {
        const client = await MongoClient.connect(
            'mongodb://localhost:27017',
            { useNewUrlParser: true, useUnifiedTopology: true }
        );

        const db = client.db('react-blog-db');

        await operations(db);

        client.close();
    } catch (e) {
        operations(null);
    }
}

export default withDB;
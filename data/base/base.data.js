class Data {
    constructor(db, ModelClass) {
        this.db = db;
        this.ModelClass = ModelClass;
        this.collectionName = this._getCollectionName();
        this.collection = this.db.collection(this.collectionName);
    }

    getAll() {
        return this.collection.find({})
            .toArray();
    }

    create(model) {
        if (!this._isModelValid(model)) {
            return Promise.reject('Model is Invalid!');
        }
        return this.collection.insert(model);
    }

    _getCollectionName() {
        return `${this.ModelClass.name.toLowerCase()}s`;
    }

    _isModelValid(model) {
        return true;
    }
}

module.exports = Data;

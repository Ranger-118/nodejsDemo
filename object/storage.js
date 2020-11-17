const uuid = require('uuid')

let item = {
    id: 'aca8221f-1f73-438a-b915-79f94dda6d8c',
    name: 'Henry'
}

let list = {
    id: '020fea14-fe88-4ed2-8d03-3e1e773de735',
    items: [
        item
    ]
}

let storage = {
    id: 'a77c5ac8-f328-49bc-b439-280c0935fd53',
    data: [
        list
    ],
    timeStamp: new Date().getTime()
}


module.exports = {
    getList: async function(id) {
        return storage.data.find(dataList => dataList.id == id)
    },

    addList: async function(list) {
        try {
            list.id = uuid.v4()
            storage.data.push(list)
            return true
        } catch (error) {
            return false
        }
    },

    updateList: async function(list) {
        try {
            let dataList = storage.data.find(dataList => dataList.id == list.id)
            dataList.items = list.items
            return true
        } catch (error) {
            return false
        }
    },

    deleteList: async function(id) {
        try {
            storage.data = storage.data.filter(item => item.id != id)
            return true
        } catch (error) {
            return false
        }
    },

    ///
    getItem: async function(listId, itemId) {
        const list = storage.data.find(dataList => dataList.id == listId)
        if (!list) return null
        return list.items.find(listItem => listItem.id == itemId)
    },

    addItem: async function(listId, item) {
        try {
            const list = storage.data.find(dataList => dataList.id == listId)
            if (!list) return false
            item.id = uuid.v4()
            list.items.push(item)
            return true
        } catch (error) {
            return false
        }
    },

    updateItem: async function(listId, item) {
        try {
            const list = storage.data.find(dataList => dataList.id == listId)
            if (!list) return false
            let listItem = list.items.find(listItem => listItem.id == item.id)
            if (!listItem) return false
            listItem = item
            return true
        } catch (error) {
            return false
        }
    },

    deleteItem: async function(listId, itemId) {
        try {
            let list = storage.data.find(dataList => dataList.id == listId)
            if (!list) return false
            list.items = list.items.filter(listItem => listItem.id == itemId)
            return true
        } catch (error) {
            return false
        }
    },

    ///
    syncData: async function(incomingStorage) {
        try {
            if (incomingStorage.timeStamp > storage.timeStamp) {
                storage = incomingStorage
            }
            return true
        } catch (error) {
            return false
        }
    },

    getData: async function() {
        try {
            return storage
        } catch (error) {
            return null
        }
    }
}
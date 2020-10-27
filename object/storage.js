let item = {
    id: 1,
    name: 'Henry'
}

let list = {
    id: 1,
    items: [
        item
    ]
}

let data = [
    list
]


module.exports = {
    getList: async function(id) {
        return data.find(dataList => dataList.id == id)
    },

    addList: async function(list) {
        try {
            data.push(list)
            return true
        } catch (error) {
            return false
        }
    },

    updateList: async function(list) {
        try {
            let dataList = data.find(dataList => dataList.id == list.id)
            dataList.items = list.items
            return true
        } catch (error) {
            return false
        }
    },

    deleteList: async function(id) {
        try {
            data = data.filter(item => item.id != id)
            return true
        } catch (error) {
            return false
        }
    },

    ///
    getItem: async function(listId, itemId) {
        const list = data.find(dataList => dataList.id == listId)
        if (!list) return null
        return list.items.find(listItem => listItem.id == itemId)
    },

    addItem: async function(listId, item) {
        try {
            const list = data.find(dataList => dataList.id == listId)
            if (!list) return false
            list.items.push(item)
            return true
        } catch (error) {
            return false;
        }
    },

    updateItem: async function(listId, item) {
        try {
            const list = data.find(dataList => dataList.id == listId)
            if (!list) return false
            let listItem = list.items.find(listItem => listItem.id == item.id)
            if (!listItem) return false
            listItem = item
            return true
        } catch (error) {
            return false;
        }
    },

    deleteItem: async function(listId, itemId) {
        try {
            let list = data.find(dataList => dataList.id == listId)
            if (!list) return false
            list.items = list.items.filter(listItem => listItem.id == itemId)
            return true
        } catch (error) {
            return false;
        }
    }
}
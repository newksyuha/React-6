const storeChats = {
    chats: [
        {title: 'Винсент и Джулс', id: 'ch_1', messageList: ['mes_1', 'mes_2','mes_3', 'mes_4', 'mes_5']},
        {title: 'Золотые часы', id: 'ch_2', messageList: ['mes_6', 'mes_7', 'mes_8', 'mes_9']},
        {title: 'Винсент Вега и жена Марселласа Уоллеса', id: 'ch_3', messageList: ['mes_10', 'mes_11', 'mes_12', 'mes_13']},
        {title: 'empty chat', id: 'ch_4', messageList: []},
    ]
}

export default (store = storeChats, action) => {
    switch (action.type) {
        default:
            return store;
    }
}
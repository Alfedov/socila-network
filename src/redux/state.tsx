export type PostType = {
    id: string
    message: string
    likesCount: number
};
export type DialogType = {
    id: string
    name: string
};
export type MessageType = {
    id: string
    message: string
};
// export type postsPropsType = {
//     posts: PostType[]
// };
// export type messagesPropsType = {
//     messages: MessageType[]
// };
// export type dialogsPropsType = {
//     dialogs: DialogType[]
// };

export type StateType = {
    posts: PostType[]
    dialogs: DialogType[]
    messages: MessageType[]
}

export let state: StateType = {
    posts: [
        {id: "1", message: "Hello everyone!", likesCount: 15},
        {id: "2", message: "Hi!", likesCount: 3},
        {id: "3", message: "Anybody here?", likesCount: 6},
        {id: "4", message: "Great", likesCount: 75},
        {id: "5", message: "Favorite", likesCount: 6453},
        {id: "6", message: "There is new table", likesCount: 5},
        {id: "7", message: "Congratulated", likesCount: 45},
        {id: "8", message: "Wow", likesCount: 55},
        {id: "9", message: "Here we go!", likesCount: 34356}
    ],
    dialogs: [
        {id: "1", name: "Michail"},
        {id: "2", name: "Sveta"},
        {id: "3", name: "Dana"},
        {id: "4", name: "Lex"},
        {id: "5", name: "Eva"},
        {id: "6", name: "Max"},
        {id: "7", name: "Andrew"},
    ],
    messages: [
        {id: "1", message: "hello"},
        {id: "2", message: "Hi"},
        {id: "3", message: "Aloha"},
        {id: "4", message: "gutten morgen"},
        {id: "5", message: "Привет!"},
        {id: "6", message: "Доброе утро"},
        {id: "7", message: "Спасибо)"},
    ]
}

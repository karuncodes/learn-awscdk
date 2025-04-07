type MyEvent = {
    username: string;
}
exports.handler = async (event: MyEvent) => {

    if (!event.username) {
        throw Error("Username cannot be empty")
    }

    return "Welcome " + event.username
}
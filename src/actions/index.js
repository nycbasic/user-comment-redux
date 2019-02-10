export function selectUser(users) {
    return {
        type: 'SELECTED_USER',
        payload: users
    }
}
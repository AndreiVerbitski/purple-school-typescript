import {IUsers} from './interfaceUser'
async function reqUsers() {

    try {
        const res: Response = await fetch('https://dummyjson.com/users', {
            method: 'GET',
        })
        if (!res.ok) {
            const err = await res.text()
            throw new Error(err)
        }
        const resJson: IUsers = await res.json()
        if (!isUsers(resJson)) {
            throw new Error('Этот объект не соответствует интерфейсу IUsers')
        }
    } catch (e) {
        console.log(e)
    }
}

function isUsers(obj: IUsers): obj is IUsers {
    return (obj as IUsers).users[0].ssn !== undefined
}

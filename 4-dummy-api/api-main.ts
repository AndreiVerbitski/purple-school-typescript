import {IUsers} from './interfaceUser'
async function reqUsers(): Promise<IUsers | void> {

    try {
        const res: Response = await fetch('https://dummyjson.com/users', {
            method: 'GET',
        })
        if (!res.ok) {
            const err = await res.text()
            throw new Error(err)
        }
        const resJson: IUsers = await res.json()

        if (isUsers(resJson)) {
            return resJson
        }

    } catch (e) {
        console.log(e)
    }
}

function isUsers(obj: IUsers): obj is IUsers {
    return (obj as IUsers).users[0].ssn !== undefined
}

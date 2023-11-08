import dotenv from 'dotenv'
import { mapToLinks } from '../utils/hateos/linksMapper.js'

dotenv.config()
const USERS_PATH = process.env.USERS_PATH

const toUserResponse = (user) => {
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        links: mapToLinks(`${USERS_PATH} / ${user.id}`)
    }
}

export { toUserResponse }
import axios from 'axios'
import { Cocktail } from '../store'

const baseUrl = 'http://localhost:3003/api/drinks'

export const getAll = async () => {
    const res = await axios.get(baseUrl)
    return res.data
}

export const create = async (obj: Cocktail) => {
    const res = await axios.post(baseUrl, obj)
    return res.data
}

export const update = async (id: string, obj: Cocktail) => {
    const res = await axios.put(`${baseUrl}/${id}`)
    return res.data
}
import { createStore } from 'redux'

export interface Cocktail {
    title: string
    artist: string
    vendor: string
    rating: number
    id: number
}

const initialState: Cocktail[] = [
    {
        title: 'Anelis',
        artist: 'Mari Mesquita',
        vendor: 'Empório Iracema',
        rating: 4,
        id: 1
    },
    {
        title: 'Dandara',
        artist: 'Adriana Pino',
        vendor: 'Empório Iracema',
        rating: 5,
        id: 2
    },
    {
        title: 'Cecília',
        artist: 'Giovanna Marvin',
        vendor: 'Empório Iracema',
        rating: 4,
        id: 3
    },
    {
        title: 'Elena',
        artist: 'Lais Ladrine',
        vendor: 'Empório Iracema',
        rating: 5,
        id: 4
    },
    {
        title: 'Elza',
        artist: 'Ana Negra',
        vendor: 'Empório Iracema',
        rating: 5,
        id: 5
    },
]

const ratingReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case 'NEW_DRINK':
            return [...state, action.payload]
        default:
            return state
    }
}

const store = createStore(ratingReducer)

export default store
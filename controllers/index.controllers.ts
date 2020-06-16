import { Response } from 'https://deno.land/x/oak/mod.ts'


interface Movie {
    id: string,
    name: string

}


const movies: Movie[] = [{

    id: "1",
    name: "In time"

}]



export const getMovie = ({response}: {response: Response}) => {

    response.body = {
        message: 'Good query yeaah',
        movies
    }

}



export const getMovies = () => {}
export const createMovie = () => {}
export const deleteMovie = () => {}
export const updateMovie = () => {}

import { Movie } from './movie';

export class MovieCart {
    constructor(public movie: Movie, public quantity: number, public total: number) { }

    getTotalPrice(): number {
        return this.quantity * this.movie.price;
    }

}
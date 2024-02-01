interface Film {
    title: string;
    releaseYear: number;
    rating: number;
    awards: string[];
}

interface Category {
    name: string;
    films: Film[];
}

interface MatchFilter {
    filter: string;
}

interface RangeFilter {
    filter: number;
    filterTo: number;
}

interface ValueSearchFilter {
    values: string[];
}

type Filters = {
    matchFilter?: MatchFilter;
    rangeFilter?: RangeFilter;
    valueSearchFilter?: ValueSearchFilter;
};

class FilmsList {
    private films: Film[];
    private filters: Filters;

    constructor(films: Film[]) {
        this.films = films;
        this.filters = {};
    }

    applyFilters(filters: Filters): void {
        this.filters = filters;
    }

    applyCategoryFilter(filter: string): void {
        this.filters.matchFilter = { filter };
    }

    applyYearRatingFilter(filter: RangeFilter): void {
        this.filters.rangeFilter = filter;
    }

    applyAwardsFilter(filter: ValueSearchFilter): void {
        this.filters.valueSearchFilter = filter;
    }

    getFilteredFilms(): Film[] {
        return this.films.filter(film => {
            const { matchFilter, rangeFilter, valueSearchFilter } = this.filters;

            if (matchFilter) {
                const { filter } = matchFilter;
                if (!film.title.toLowerCase().includes(filter.toLowerCase())) {
                    return false;
                }
            }

            if (rangeFilter) {
                const { filter, filterTo } = rangeFilter;
                if (film.releaseYear < filter || film.releaseYear > filterTo) {
                    return false;
                }
            }

            if (valueSearchFilter) {
                const { values } = valueSearchFilter;
                if (!values.some(value => film.awards.includes(value))) {
                    return false;
                }
            }

            return true;
        });
    }
}

// Test

const films: Film[] = [
    {
        title: "Film 1",
        releaseYear: 2020,
        rating: 8.5,
        awards: ["Oscar", "Golden Globes"]
    },
    {
        title: "Film 2",
        releaseYear: 2019,
        rating: 7.8,
        awards: ["Golden Globes"]
    },
    {
        title: "Film 3",
        releaseYear: 2022,
        rating: 9.0,
        awards: ["Oscar"]
    },
    {
        title: "Film 4",
        releaseYear: 2015,
        rating: 6.5,
        awards: []
    },
 ];


const filmsList = new FilmsList(films);

filmsList.applyCategoryFilter("Film 1"); // по названию
filmsList.applyAwardsFilter({ values: ["Oscar"] }); // награда
filmsList.applyYearRatingFilter({ filter: 2000, filterTo: 2022 }); // год и рейтинг


const filteredFilms = filmsList.getFilteredFilms();
console.log(filteredFilms);

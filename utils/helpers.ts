import { CUISINEFILTERS, DIETFILTERS, DISHFILTERS, HEALTHFILTERS, MEALFILTERS } from "../static"

class Helpers {

    static constructQueryParams(values: number[]): string {
        var query = ''
        if (values[0] < 0) {
            query += `&diet=${DIETFILTERS[values[0]].title}`
        }
        if (values[1] < 0) {
            query += `&health=${HEALTHFILTERS[values[1]].title}`
        }
        if (values[2] < 0) {
            query += `&cuisineType=${CUISINEFILTERS[values[2]].title}`
        }
        if (values[3] < 0) {
            query += `&mealType=${MEALFILTERS[values[3]].title}`
        }
        if (values[4] < 0) {
            query += `&dishType=${DISHFILTERS[values[4]].title}`
        }
        return query
    }
}

export default Helpers
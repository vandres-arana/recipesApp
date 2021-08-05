import { CUISINEFILTERS, DIETFILTERS, DISHFILTERS, HEALTHFILTERS, MEALFILTERS } from "../static"

class Helpers {

    static constructQueryParams(values: number[]): string {
        var query = ''
        if (values[0] > -1) {
            query += `&diet=${DIETFILTERS[values[0]].title}`
        }
        if (values[1] > -1) {
            query += `&health=${HEALTHFILTERS[values[1]].title}`
        }
        if (values[2] > -1) {
            query += `&cuisineType=${CUISINEFILTERS[values[2]].title}`
        }
        if (values[3] > -1) {
            query += `&mealType=${MEALFILTERS[values[3]].title}`
        }
        if (values[4] > -1) {
            query += `&dishType=${DISHFILTERS[values[4]].title}`
        }
        return query
    }
}

export default Helpers
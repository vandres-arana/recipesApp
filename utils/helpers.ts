import { FilterData } from "../models"
import { CUISINEFILTERS, DIETFILTERS, DISHFILTERS, HEALTHFILTERS, MEALFILTERS } from "../static"

class Helpers {

    static constructQueryParams(values: FilterData[]): string {
        var query = ''
        console.log(values)
        if (values[0].id > -1) {
            query += `&diet=${DIETFILTERS[values[0].id].title}`
        }
        if (values[1].id > -1) {
            query += `&health=${HEALTHFILTERS[values[1].id].title}`
        }
        if (values[2].id > -1) {
            query += `&cuisineType=${CUISINEFILTERS[values[2].id].title}`
        }
        if (values[3].id > -1) {
            query += `&mealType=${MEALFILTERS[values[3].id].title}`
        }
        if (values[4].id > -1) {
            query += `&dishType=${DISHFILTERS[values[4].id].title}`
        }
        return query
    }
}

export default Helpers
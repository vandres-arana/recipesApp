import FilterData from "./filterData";

export default interface SearchFilters {
    search: string,
    filters: FilterData[],
}
import { API } from "../constant/api"
import { objectToUrlQuery } from "../utils/queryUrl"



const pageService = {
    getPage(filter) {
        const key = objectToUrlQuery(filter)
        return fetch(`${API}/product?${key}`).then(res => res.json())
    }
}



export default pageService
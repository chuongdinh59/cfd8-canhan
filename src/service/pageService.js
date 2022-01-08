import { API } from "../constant/api"



const pageService = {
    getPage(index) {
        return fetch(`${API}/product?page=${index}`).then(res => res.json())
    }
}



export default pageService
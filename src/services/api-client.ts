import axios from "axios";
export interface FetchResponse<T>{
   count: number;
   results: T[];
}
 export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
 key: "c89fe5dd798c4712aa8af83ad37ff7c6"
    }
})
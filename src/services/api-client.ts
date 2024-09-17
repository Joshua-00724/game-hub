import axios from "axios";

 export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
 key: "c89fe5dd798c4712aa8af83ad37ff7c6"
    }
})
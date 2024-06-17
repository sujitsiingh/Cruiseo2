import axios from "axios"

class EnquiryApiService{
    constructor(){
        this.api=String(import.meta.env.VITE_BACKEND_API)
    }

    async enquiryRes(id){
        try {
            let res=await axios.get(`${this.api}/enquiry/${id}`)
            return {data:res.data,status:true}
        } catch (error) {
            return {status:false}
        }
    }
}

const enquiryApiService=new EnquiryApiService()
export default enquiryApiService
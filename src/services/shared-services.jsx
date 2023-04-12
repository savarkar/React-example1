class sharedService{
    static getAllCourses() {
      throw new Error('Method not implemented.');
    }

    constructor(httpClient){
        this.httpClient = httpClient;
    }

    async register(data){
        try {
            const response = await this.httpClient.post("http://13.233.223.217:2020/students/registration", data)
        return response.json()    

        }catch(error){
            console.error(error)
            throw error
        }
    }
    async login(data){
        try {
            const response = await this.httpClient.post("http://13.233.223.217:2020/students/login", data)
        return response.json()    
        }
        catch(error){
            console.error(error)
            throw error
        }
    }
    async getAllCourses(){
        try {
            const response = await this.httpClient.get("http://13.233.223.217:2020/courses/getAllCourses");
        return response.json()    

        }catch(error){
            console.error(error)
            throw error
        }
    }
    async studentSubscription(data){
        try {
            const response = await this.httpClient.post("http://13.233.223.217:2020/student_subscriptions/createSubscription", data);
        return response.json()    

        }catch(error){
            console.error(error)
            throw error
        }
    }
}

export default sharedService;
class sharedService{
    static getAllCourses() {
      throw new Error('Method not implemented.');
    }

    constructor(httpClient){
        this.httpClient = httpClient;
    }

    async register(data){
        try {
            const response = await this.httpClient.post("http://13.233.223.217:2020/api/v1/students/registration", data)
        return response.json()    

        }catch(error){
            console.error(error)
            throw error
        }
    }
    async login(data){
        try {
            const response = await this.httpClient.post("http://13.233.223.217:2020/api/v1/students/login", data)
        return response.json()    
        }
        catch(error){
            console.error(error)
            throw error
        }
    }
    async getAllCourses(){
        try {
            const response = await this.httpClient.get("http://13.233.223.217:2020/api/v1/courses/getAllCourses");
        return response.json()    

        }catch(error){
            console.error(error)
            throw error
        }
    }
    async GET(url){
        try {
            const response = await this.httpClient.get(url);
        return response.json()    

        }catch(error){
            console.error(error)
            throw error
        }
    }
    async POST(url, data){
        try {
        //     const response = await this.httpClient.post(url, data, {
        //         headers: {
        //             'Content-type': 'application/json'
        //         }	
        //     });
        // return response.json()  
        const response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
  
          const resp = await response.json();  
          return resp;
        }catch(error){
            console.error(error)
            throw error
        }
    }
    async studentSubscription(data){
        try {
            const response = await this.httpClient.post("http://13.233.223.217:2020/api/v1/student_subscriptions/createSubscription", data);
        return response.json()    

        }catch(error){
            console.error(error)
            throw error
        }
    }
}

export default sharedService;
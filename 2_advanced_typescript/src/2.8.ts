{
   // Promise
   const createPromise = ():Promise<Something> =>{
    return new Promise<Something>((resolve, reject)=>{
        const data: Something = {something: "Something"};
        if (data){
            resolve(data);
        }else{
            reject("failed to load data")
        }
    })
   }

   interface Something {
    something: "Something";
   }
   
   // calling createPromise function
   const showData = async(): Promise<Something> => {
    const data: Something = await createPromise();
    return data;
   }
   showData();


   type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
   }
   const getTodo = async(): Promise<Todo> => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        return data
   }
   getTodo()
}
{
    // Map Type
    type X = {
        A: "1",
        B:"2",
        C:"3",
        D:"4"
    }
    
    type Y = {
        [key in keyof X]: number;
    }
}
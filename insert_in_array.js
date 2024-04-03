let data =[60,30,10,67,40];

const insert_value = (data,index,value)=>{
    const length = data.length
    for(i = length-1;i>=0;i--){
        // console.log(data[i])
        // console.log(i)
        if(i>=index){
            data[i+1] = data[i]
            console.log(data)
        }
        if(i==index){
            data[i] = value
            console.log(data)
        }
    }

}

const index = 3
const value = 15
insert_value(data,index,value)
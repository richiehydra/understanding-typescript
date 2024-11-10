//Spliting code -> 1) namespae 2)import/export

namespace doOperationAddMul{
    export let add=(num1:number,num2:number)=>{
      return num1+num2;
    }
    export  let sub=(num1:number,num2:number)=>{
      return num1-num2;
    }
  }

  namespace doesPrintName{
    export let print=()=>{
       return "Hii Keshav";
    }
  }
  export default { doOperationAddMul, doesPrintName }


  
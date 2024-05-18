import {ethers} from "ethers"
import { SiEthereum } from "react-icons/si";
import { parseEther } from "ethers";
import { useState } from "react";


export default function Donate({state}){

    
    console.log('State:', state);
    console.log('Contract:', state.contract);

    const buyItem = async(event)=>{
        event.preventDefault();
        const {contract}=state;
        const name = document.querySelector("#name").value;
        const message = document.querySelector("#message").value;
        const amountValue = document.querySelector("#amount").value;
     
        const amount = {value:parseEther(amountValue.toString())}
        //const amount = {value:parseEther("5.5")}
        const transaction = await contract.buyItem(name,message,amount)
        await transaction.wait();
        alert("Transaction is successul");
        window.location.reload();
      }
  

    return(
        <div className=" flex justify-center">

            <form onSubmit={buyItem}>

            <div className="mx-auto my-4">
                <input type="text" required="required" id="name" placeholder="Name" />
            </div>

            <div  className="mx-auto my-4">
                <input type="text" required="required" id="message" placeholder="Message"/>
            </div>
            
            <div  className="mx-auto my-4">
                <select name="amount" id="amount">
                <option value="1">1 ETH</option>
                <option value="2">2 ETH</option>
                <option value="5">5 ETH</option>
                </select>
            </div>

            <div  className="mx-auto my-4">
                <button 
                
          class="text-white  bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 mb-2">
                    Donate
                </button>
            </div>



            </form>

        </div>
    )
    
}
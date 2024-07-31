import {ethers} from "ethers"
import { SiEthereum } from "react-icons/si";
import { parseEther } from "ethers";
import { useState } from "react";


export default function Donate({state}){

    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [amount, setAmount] = useState(1)

    
    console.log('State:', state);
    console.log('Contract:', state.contract);

    const donate = async(event)=>{
        event.preventDefault();
        const {contract}=state;
        
        try{
          
            const transaction = await contract.buyItem(name, message, { 
                value: ethers.parseEther(amount)
             });
            
            await transaction.wait()
            alert("Thank you for the donation")
            window.location.reload()

        }catch(error){
            console.error("Transaction error:", error);
      
            alert("Failed")
        }

    }
  

    return(
        <div className=" flex justify-center">

            <form onSubmit={donate}>

            <div className="mx-auto my-4">
                <input type="text" required="required" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name" />
            </div>

            <div  className="mx-auto my-4">
                <input type="text" required="required" 
                 value={message}
                 onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"/>
            </div>
            
            <div  className="mx-auto my-4">
                <select name="amount" value={amount}
                onChange={(e) => setAmount(e.target.value)}
                >
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
/*

     <input type="text"
                            placeholder="Enter amount"
                            class="bg-gray-50  border border-gray-300 
                            text-gray-900 text-sm rounded-lg 
                            focus:ring-blue-500 focus:border-blue-500 
                            block h-[55px] w-[215px] md:w-[240px] p-2.5 
                            dark:bg-gray-700 dark:border-gray-600 
                            dark:placeholder-gray-400 dark:text-white 
                            dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={deposit}
                            onChange = {(e) => setDeposit(e.target.value)}
                            
                            />
                           <button 
                                class="text-white 
                                
                                bg-teal-400
                                dark:bg-violet-400
                                h-[50px] focus:ring-4 
                                focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 
                                font-medium rounded-lg text-sm px-5 py-4 text-center 
                                me-2 mb-2 w-[210px] md:w-[240px] mt-4 md:mt-0 "
                                 onClick={handleDeposit}> Deposit
                            </button>  
*/
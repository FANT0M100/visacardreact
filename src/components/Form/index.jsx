

const UserForm = ({ cardNumberHandler, cardHolderHandler, cardMMHandler, cardYYHandler, cardCVVHandler, cardViewHandler }) => {
           
        return (
          <form className="w-3/4 bg-white shadow-lg rounded-2xl flex flex-col">
            <div className="flex flex-col px-16 py-4">
                <label htmlFor="cardNumber" className="uppercase text-sm mb-2 text-gray-500 font-medium">Card Number</label>
                <input onChange={(e) => cardNumberHandler(e.target.value)}
                className="border border-gray-500 rounded-lg focus:outline-none px-4 py-2" 
                type="text" 
                name="cardNumber" 
                id="cardNumber"/>
            </div>
            <div className="flex flex-col px-16 py-4">
                <label htmlFor="cardHolder" className="uppercase text-sm mb-2 text-gray-500 font-medium">Card Name</label>
                <input onChange={(e) => cardHolderHandler(e.target.value)}
                className="border border-gray-500 rounded-lg focus:outline-none px-4 py-2" 
                type="text" 
                name="cardHolder" 
                id="cardHolder"/>
            </div>
            <div className="flex justify-between px-16 py-4">
                <div className="w-1/4 flex flex-col">
                    <label htmlFor="cardMM" className="uppercase text-sm mb-2 text-gray-500 font-medium">Expiration MM</label>
                    <input onChange={(e) => cardMMHandler(e.target.value)}
                    className="border border-gray-500 rounded-lg focus:outline-none px-4 py-2" 
                    type="text" 
                    name="cardMM" 
                    id="cardMM"/>
                </div>
                <div className="w-1/4 flex flex-col">
                    <label htmlFor="cardYY" className="uppercase text-sm mb-2 text-gray-500 font-medium">Expiration YY</label>
                    <input onChange={(e) => cardYYHandler(e.target.value)}
                    className="border border-gray-500 rounded-lg focus:outline-none px-4 py-2" 
                    type="text" 
                    name="cardYY" 
                    id="cardYY"/>
                </div>
                <div className="w-1/4 flex flex-col">
                    <label htmlFor="cardSVV" className="uppercase text-sm mb-2 text-gray-500 font-medium">CVV</label>
                    <input onChange={(e) => cardCVVHandler(e.target.value)}
                     onFocus={() => cardViewHandler('Back')}
                     onBlur={() => cardViewHandler('Front')}
                     className="border border-gray-500 rounded-lg focus:outline-none px-4 py-2" 
                     type="text" 
                     name="cardSVV" 
                     id="cardSVV"/>
                </div>
            </div>
            <div className="flex justify-center items-center px-16 py-4">
                <button type="submit" className="bg-sky-700 rounded-xl text-white uppercase px-24 py-2 hover:bg-sky-600">Submit</button>
            </div>
         </form>
        );
    };
    
    export default UserForm;
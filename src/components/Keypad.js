// Code Keypad Component Here

function Keypad (){
    function handlechange () {
        console.log("Entering password...")
    }
    return (
        <div>
            <input
             type="password" 
            name="INPUT"
            placeholder="Enter password"
            onChange={handlechange} 
            />
        </div>
    )
}

export default Keypad;
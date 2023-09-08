

function Login() {
    return (
        <div className="bg-[#1D1D42] h-screen flex ">
            <div className="w-[480px] h-[580px] bg-[#141432] rounded-md m-auto flex">
                <form action="" className=" text-white  w-[60%] m-auto">
                  
                    <h1 className="text-4xl font-semibold text-center">Log in</h1><br/>
                    <label htmlFor="email">Email Address</label><br />
                    <input type="email" name="email" className="bg-[#1D1D42] w-full h-[50px] mb-3" required/><br />
                    <label htmlFor="password">Password</label><br />
                    <input type="password" name="password" id="password" className="bg-[#1D1D42] w-full h-[50px] mb-3" required/>
                    <button className="w-full bg-[#2D74FF] text-center h-[45px] rounded-md mt-2">Log in</button>
                    
                </form>

            </div>
        </div>
    );
}

export default Login;
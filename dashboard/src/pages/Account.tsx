import { ChangeEvent, useState } from "react";

type Input = {
  firstName: string;
  lastName: string;
  email: string;
  hostel: string;
  phone: string;
  password: string;
};

const Account = () => {
  const [isSignup, setIsSignup] = useState<boolean>(true);

  const [userInput, setUserInput] = useState<Input>({
    firstName: "",
    lastName: "",
    email: "",
    hostel: "",
    phone: "",
    password: "",
  });

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-row justify-start items-center w-[100vw] h-[100vh]">
      <div className="hidden md:block w-[50%] bg-purple-700 h-[inherit]"></div>
      <div className="w-[100%] md:w-[50%] h-[inherit] flex justify-center items-center">
        <div className="bg-white w-[90%] md:w-[80%] shadow p-2 md:p-3">
          <div className="flex flex-row items-center w-[100%]">
            <div
              className={`w-[100%] text-center py-4 px-2 cursor-pointer ${isSignup && "shadow"
                }`}
              onClick={() => setIsSignup(true)}
            >
              SIGN UP
            </div>
            <div
              className={`w-[100%] text-center py-4 px-2 cursor-pointer ${!isSignup && "shadow"
                }`}
              onClick={() => setIsSignup(false)}
            >
              SIGN IN
            </div>
          </div>
          {isSignup ? (
            <div className="px-4 py-2 flex flex-col mt-2 ">
              <div className="w-[100%] flex gap-2 items-center justify-between mt-2">
                <input
                  type="text"
                  className="border w-[45%] p-1 border-gray-700 rounded"
                  name="firstName"
                  placeholder="First Name"
                  onChange={handleInput}
                />
                <input
                  type="text"
                  className="border w-[45%] p-1 border-gray-700 rounded"
                  name="lastName"
                  placeholder="Last Name"
                  onChange={handleInput}
                />
              </div>
              <input
                type="text"
                className="border p-1 border-gray-700 rounded mt-5"
                name="email"
                placeholder="Email"
                onChange={handleInput}
              />
              <input
                type="text"
                className="border p-1 border-gray-700 rounded mt-5"
                name="hostel"
                placeholder="Hostel"
                onChange={handleInput}
              />
              <input
                type="text"
                className="border p-1 border-gray-700 rounded mt-5"
                name="phone"
                placeholder="Phone No."
                onChange={handleInput}
              />
              <input
                type="text"
                className="border p-1 border-gray-700 rounded mt-5"
                name="password"
                placeholder="Password"
                onChange={handleInput}
              />
              <button onClick={() => console.log(userInput)} className="mt-5 bg-black text-white font-bold p-2 rounded"
              >Register</button>
            </div>
          ) : (
            <><div className="px-4 py-2 flex flex-col mt-2 ">

              <input
                type="text"
                className="border p-1 border-gray-700 rounded mt-5"
                name="email"
                placeholder="Email"
                onChange={handleInput}
              />
              <input
                type="text"
                className="border p-1 border-gray-700 rounded mt-5"
                name="password"
                placeholder="Password"
                onChange={handleInput}
              />
              <button onClick={() => console.log(userInput)} className="mt-5 bg-black text-white font-bold p-2 rounded"
              >Login</button>
            </div></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Account;

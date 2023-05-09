import React, { useState } from "react";
import { Reveal, Slide } from "react-awesome-reveal";

const Question1 = ({
  setCurrentQuest,
}: {
  setCurrentQuest: (val?: any) => void;
}) => (
  <Slide direction="down" className="flex items-center justify-center flex-1">
    <div className="">
      <h2 className="font-[600] text-[18px] mb-[20px]">
        What business problem do you need help with?
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setCurrentQuest((prev: number) => prev + 1);
        }}
      >
        <input
          type="text"
          required
          placeholder="Enter an answer"
          className="outline-none  border-b-[2px] border-b-gray-400 w-[50vw]"
        />
      </form>
    </div>
  </Slide>
);
const Question2 = ({
  setCurrentQuest,
}: {
  setCurrentQuest: (val?: any) => void;
}) => {
  const [showLabel, setShowLabel] = useState(false);
  //   const [active, setActive] = useState<any>();
  document.addEventListener("click", () => {
    let active = document.activeElement?.id;

    if (active === "emailInput") {
      setShowLabel(true);
    } else {
      setShowLabel(false);
    }
  });
  return (
    <Slide direction="up" className="flex items-center justify-center flex-1">
      <div className="max-w-[50vw]">
        <h2 className="font-[600] text-[18px] mb-[20px] text-gray-700">
          Ok, we got that covered. But just so that we don't lose you incase you
          get disconnected or prefer to come back later, lets get to know you.{" "}
        </h2>
        <form
          onSubmit={(e) => {
            setCurrentQuest((prev: any) => prev + 1);
            e.preventDefault();
          }}
        >
          {/* <label className="block">
                  <span>Username</span>
                  <input
                    type="text"
                    placeholder="Enter a username"
                    className="block mt-2 outline-none text-gray-600 border-b-[2px] border-b-gray-400 w-[50vw]"
                  />
                </label> */}

          <label className="block mt-4">
            {showLabel && (
              <Slide direction="up">
                <span>Email</span>
              </Slide>
            )}
            <input
              id="emailInput"
              onFocus={() => setShowLabel(true)}
              type="text"
              placeholder="Enter your email"
              className="block outline-none text-gray-600 border-b-[2px] border-b-gray-400 w-[50vw]"
            />
          </label>
        </form>
      </div>
    </Slide>
  );
};

const Question3 = ({
  setCurrentQuest,
}: {
  setCurrentQuest: (val?: any) => void;
}) => {
  return (
    <Slide
      delay={500}
      triggerOnce={false}
      direction="down"
      className="flex items-center justify-center flex-1"
    >
      <Reveal
        onVisibilityChange={(e) => {
          console.log(e);
        }}
      >
        <div className="max-w-[50vw] flex flex-col">
          <h2 className="font-[600] text-[18px] mb-[20px] text-gray-700">
            Thank you for that. <br /> <br />
            Here are some MARKETING resources for you
          </h2>
          <a
            href="/sample.pdf"
            download
            onClick={() => setCurrentQuest((prev: number) => prev + 1)}
            className="mt-[20px] bg-gray-300 w-fit self-end h-[45px] text-[#fff] flex items-center  px-5 rounded-[10px]"
          >
            Download
          </a>
        </div>
      </Reveal>
    </Slide>
  );
};
const Question4 = ({
  setCurrentQuest,
}: {
  setCurrentQuest: (val?: any) => void;
}) => {
  //   const [active, setActive] = useState<any>();
  return (
    <Slide direction="up" className="flex items-center justify-center flex-1">
      <div className="max-w-[50vw] flex flex-col">
        <h2 className="font-[600] text-[18px] mb-[20px] text-gray-700">
          You could also join our Accountability to Profits group if you are
          interested in overcoming this problem and boosting sales to make huge
          profit
        </h2>
        <button
          // href="/sample.pdf"
          // download
          onClick={() => setCurrentQuest((prev: number) => prev + 1)}
          className="mt-[20px] bg-gray-300 active:bg-gray-100 w-fit self-end h-[45px] text-[#fff] p-1 px-5 rounded-[10px]"
        >
          Join Now
        </button>
      </div>
    </Slide>
  );
};
const Question5 = ({
  setCurrentQuest,
}: {
  setCurrentQuest: (val?: any) => void;
}) => {
  //   const [active, setActive] = useState<any>();
  return (
    <Slide direction="down" className="flex items-center justify-center flex-1">
      <div className="max-w-[50vw] flex flex-col">
        <h2 className="font-[600] text-[18px] mb-[20px] text-gray-700">
          Other resources to solve your MARKETING problem Take our
          business/entrepreneurship course Visit our business discounted
          marketplace
        </h2>
        <button
          // href="/sample.pdf"
          // download
          onClick={() => setCurrentQuest((prev: number) => prev + 1)}
          className=" mt-[20px] bg-gray-300 active:bg-gray-100 w-fit self-end h-[45px] text-[#fff] p-1 px-5 rounded-[10px]"
        >
          Join Now
        </button>
      </div>
    </Slide>
  );
};

function Home() {
  const [currentQuest, setCurrentQuest] = useState(1);

  return (
    <div className="bg-[#fff] min-h-[100vh] w-[100%] flex text-gray-700">
      <div className="p-4">
        {" "}
        <h4 className="text-[30px] font-[900] animated-underline">SBH</h4>
      </div>
      {/* <div className=""> */}
      {currentQuest === 1 ? (
        <Slide
          direction="down"
          className="flex items-center justify-center flex-1"
        >
          <Question1 setCurrentQuest={setCurrentQuest} />
        </Slide>
      ) : currentQuest === 2 ? (
        <Question2 setCurrentQuest={setCurrentQuest} />
      ) : currentQuest === 3 ? (
        <Question3 setCurrentQuest={setCurrentQuest} />
      ) : currentQuest === 4 ? (
        <Question4 setCurrentQuest={setCurrentQuest} />
      ) : (
        <Question5 setCurrentQuest={setCurrentQuest} />
      )}
      {/* <Fade delay={500}>
        </Fade> */}
      {/* </div> */}
    </div>
  );
}

export default Home;

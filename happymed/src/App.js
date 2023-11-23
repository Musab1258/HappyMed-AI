import Nav from './components/shared/nav/Nav';
import Hundred from "./images/landingpage/100percent.svg";
import TwentyFour from "./images/landingpage/24hrs.svg";
import User from "./images/landingpage/user.svg";
import Chatbot from "./images/landingpage/Chatbot.svg";
import Chat1 from "./images/landingpage/chat1.svg";
import Chat2 from "./images/landingpage/chat2.svg";
import Chat3 from "./images/landingpage/chat3.svg";


function App() {
  return (
    <div>
      <Nav />
      <div className='bg-[#007D6D] flex pt-40 text-[#FFFFFF] m-auto'>
        <div className='text-[#FFFFFF] w-[40%] m-auto'>
          <p className='text-7xl mb-10'>Elevate Your Health Awarness with HappyMed Ai</p>
          <p className='text-2xl mb-10'>Ask a question, and recieve quick  Our AI-powered chatbot is here to guide you through understand your symptoms, provide valuable insights, and help you make informed decisions about your health </p>
          <button className="bg-[#AEDB67] px-2 py-1 text-[#FFFFFF] text-2xl font-medium rounded-2xl w-80">Get Started</button>
        </div>
        <div className='w-[40%] m-auto'>
          <img src={Hundred} alt="Hundred percent" />
          <img src={User} alt="Female user" className='rounded-l-3xl' />
          <img src={TwentyFour} alt="Twenty-four hours" />
        </div>
      </div>

      <div className='bg-[#007D6D] flex pt-40 text-[#FFFFFF] m-auto'>
        <div className='text-[#FFFFFF] w-[40%] m-auto'>
          <p className='text-7xl mb-10'>How HappyMed AI works</p>
          <p className='text-2xl mb-10'>Take a short (3 min) symptom assessment. The information you give is safe and won’t be shared.</p>
          <div className="bg-[#AEDB67] px-2 py-1 text-[#FFFFFF] text-2xl font-medium rounded-2xl w-80">
            <div>
              <img />
              <p>Introduction</p>
            </div>
            <div>
              <img />
              <p>Interaction</p>
            </div>
            <div>
              <img />
              <p>Quick response</p>
            </div>
          </div>
        </div>
        <div className='w-[40%] m-auto'>
          <img src={Chatbot} alt="Chatbot Screenshot" className='rounded-l-3xl' />
          <img src={Chat1} alt="First Chat" />
          <img src={Chat2} alt="Second Chat" />
          <img src={Chat3} alt="Third Chat" />
        </div>
      </div>
    </div>
  );
}

export default App;

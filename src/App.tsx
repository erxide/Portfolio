import CircularText from "./componants/CircularText"
import DecryptedText from "./componants/DecryptedText"
import Icon from "./componants/Icon"
import Iridescence from "./componants/Iridescence"
import GlassIcons from './componants/GlassIcons'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


function App() {

  const items = [
    { icon: <FaGithub />, color: 'github', label: 'github', url:"https://github.erwansinck.com"},
    { icon: <FaLinkedin />, color: 'linkedin', label: 'linkedin', url:"https://linkedin.erwansinck.com" },
    { icon: <FaSquareXTwitter />, color: 'x', label: 'x', url:"https://x.erwansinck.com" },
  ];


  return (
    <div className="w-full h-screen min-h-screen relative">
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <Iridescence
          color={[0.30, 0.30, 0.30]}
          mouseReact={false}
          amplitude={0.1}
          speed={0.2}
        />
      </div>
      <div className="absolute top-25 left-[50%] text-white transform translate-x-[-50%]">
        <CircularText
          text="CACADESQUIDGAME*"
          onHover="slowDown"
          spinDuration={20}
          className="custom-class"
        />
      </div>
      <div className="absolute top-33.5 left-[50%] transform translate-x-[-50%]">
        <Icon/>
      </div>
      <div className="absolute top-90 text-[30px] left-[50%] transform translate-x-[-50%] w-max flex flex-col text-white">
      <DecryptedText 
        text="Hi, I'm Erwan SINCK,"
        animateOn="view"
        revealDirection="center"
        speed={100}
        maxIterations={20}
      />
      <DecryptedText 
        text="a French DevOps engineer"
        animateOn="view"
        revealDirection="center"
        speed={100}
        maxIterations={20}
      />
      <DecryptedText 
        text="from Bordeaux,"
        animateOn="view"
        revealDirection="center"
        speed={100}
        maxIterations={20}
      />
      <DecryptedText 
        text="and currently working"
        animateOn="view"
        revealDirection="center"
        speed={100}
        maxIterations={20}
      />
      <DecryptedText 
        text="with Uncove."
        animateOn="view"
        revealDirection="center"
        speed={100}
        maxIterations={20}
      />
      </div>

      <div className="absolute text-white left-[50%] transform translate-x-[-50%] top-150">
        <GlassIcons items={items} className="custom-class"/>
      </div>

    </div>
  )
}

export default App

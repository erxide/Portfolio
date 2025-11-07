import CircularText from "./componants/CircularText"
import DecryptedText from "./componants/DecryptedText"
import Icon from "./componants/Icon"
import Iridescence from "./componants/Iridescence"
import GlassIcons from './componants/GlassIcons'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { useState } from "react";


function App() {

  const items = [
    { icon: <FaGithub />, color: 'github', label: 'github', url:"https://github.erwansinck.com"},
    { icon: <FaLinkedin />, color: 'linkedin', label: 'linkedin', url:"https://linkedin.erwansinck.com" },
    { icon: <FaSquareXTwitter />, color: 'x', label: 'x', url:"https://x.erwansinck.com" },
  ];

  const [visible, setVisible] = useState<boolean>(false)


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

     
      <Dialog header="Mentions Légales erwansinck.com" visible={visible} style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }} className="bg-gray-300 p-6 rounded-2xl">
          <h1 className="mt-5 mb-2">1. Éditeur du Site</h1>
          <p>Nom du propriétaire : Erwan SINCK</p>
          <p>Email : <a href="mailto:erwan.sinck@ynov.com">erwan.sinck@ynov.com</a></p>
          <p>Site web : <a href="https://erwansinck.com">https://erwansinck.com</a></p>
          <p>Date de publication : 2025</p>

          <h1 className="mt-5 mb-2">2. Hébergement</h1>
          <p>Ce site est hébergé sur un nœud appartenant à l'éditeur, avec un reverse proxy cloudflare</p>

          <h1 className="mt-5 mb-2">3. Technologies utilisées</h1>
          <p>Ce site est développé en React</p>
          <p>Hébergé via Docker, avec un reverse proxy cloudflare</p>

          <h1 className="mt-5 mb-2">4. Licence et Utilisation du Contenu</h1>
          <p>Sauf mention contraire, l’ensemble des contenus présents sur ce site (textes, images, graphismes, logo, icônes, etc.) sont mis à disposition sous la Licence MIT.</p>
          <p>Cela signifie que toute personne est libre de :</p>
          <p>- Copier, modifier et redistribuer le contenu du site, même à des fins commerciales,</p>
          <p>- Sans obligation de mentionner l’auteur,</p>
          <p>- Sans nécessiter d’autorisation préalable.</p>
          <p>L’utilisateur reconnaît toutefois que le contenu est fourni "tel quel", sans garantie de mise à jour ou de support. L’éditeur du site décline toute responsabilité quant à l’utilisation faite du contenu mis à disposition.</p>
          
          <h1 className="mt-5 mb-2">5. Cookies</h1>
          <p>Ce site n'utilise pas de cookies.</p>

          <h1 className="mt-5 mb-2">6. Responsabilité</h1>
          <p>L'éditeur du site met tout en œuvre pour assurer l'exactitude des informations publiées, mais ne saurait être tenu responsable des erreurs ou omissions. L'utilisation des informations disponibles sur ce site se fait sous la responsabilité exclusive de l'utilisateur.</p>

          <h1 className="mt-5 mb-2">7. Données personnelles</h1>
          <p>Ce site ne collecte aucune donnée personnelle à des fins commerciales. Pour toute question ou demande relative aux données personnelles, vous pouvez contacter l'éditeur à l'adresse mentionnée ci-dessus.</p>

          <h1 className="mt-5 mb-2">8. Droit applicable</h1>
          <p>Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.</p>

      </Dialog>
      <Button 
        label="Mentions Légales" 
        className="fixed top-3 left-3 text-black px-3 "
        onClick={() => setVisible(true)}
      />


    </div>
  )
}

export default App
import './Skill.css';
import { FaCss3Alt, FaHtml5, FaReact, FaNode, FaAngular, FaGitAlt, FaMortarPestle  } from "react-icons/fa";
import { SiMicrosoftsqlserver, SiMicrosoftazure, SiTypescript } from "react-icons/si";
import GoBackTopPage from '../common/GoBackTopPage';
import  { useState } from 'react';
import { Modal } from '../common/Modal';
import { levelToStar } from '../common/commonMethod'
import { VscAzureDevops } from "react-icons/vsc";
import { TbBrandVscode } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa";

const skills = [
  {
    name: 'Language',
    contents:[
      { name: 'JavaScript', level: 4, icon: IoLogoJavascript },
      { name: 'TypeScript', level: 3 , icon: SiTypescript }, 
      { name: 'Java', level: 2 , icon: FaJava },
    ],
  },
  {
    name: 'Client',
    contents:[
      { name: 'HTML', level: 4, icon: FaHtml5 },
      { name: 'CSS', level: 4 , icon: FaCss3Alt }, 
      { name: 'React', level: 4 , icon: FaReact },
      { name: 'Angular', level: 3, icon: FaAngular },
    ],
  },
  { name: 'Server', contents: [{ name: 'Node.js', level: 4, icon: FaNode }]},
  { name: 'Database', contents: [{ name: 'SQL Server', level: 4, icon: SiMicrosoftsqlserver }]},
  { name: 'Cloud', contents: [{ name: 'Azure', level: 4, icon: SiMicrosoftazure }]},
  { name: 'Tools', contents: [
    { name: 'Git', level: null, icon: FaGitAlt },
    { name: 'Azure DevOps', level: null, icon: VscAzureDevops },
    { name: 'VS Code', level: null, icon: TbBrandVscode },
  ]},
]

function Skill() {
  const [show, setShow] = useState(false);

  const openModal = () => {
    setShow(true)
  }

  return (
    <div>
      <div className='goBack'><GoBackTopPage /></div>
      <div className='skills'>
        {skills.map((skill) =>
          <>
            <h1>-{skill.name}-</h1>
            <div className='skillType'>{skill.contents.map((content) => 
              <div>
              <button onClick={openModal} className='skill'>
                <content.icon size={60}/><br/> {content.name} {levelToStar(content.level)}</button>
                <Modal show={show} setShow={setShow}/></div>
            )}</div>
          </>
        )}
      </div>
    </div>
  );
}

export default Skill;
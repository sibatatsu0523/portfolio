import './Skill.css';
import { FaCss3Alt, FaHtml5, FaReact, FaNode, FaAngular  } from "react-icons/fa";
import { SiMicrosoftsqlserver, SiMicrosoftazure } from "react-icons/si";


const skills = { 
    clients: [
      { name: 'HTML', level: 4, icon: FaHtml5 },
      { name: 'CSS', level: 4 , icon: FaCss3Alt }, 
      { name: 'React', level: 4 , icon: FaReact },
      { name: 'Angular', level: 4, icon: FaAngular },
    ],
    servers: [{ name: 'Node.js', level: 4, icon: FaNode },],
    databases: [{ name: 'SQL Server', level: 4, icon: SiMicrosoftsqlserver },],
    clouds: [{ name: 'Azure', level: 4, icon: SiMicrosoftazure },]
  }

function levelToStar(num :number): any {
  let stars = '';
  for (let i=0; i<num; i++) { 
    stars = stars.concat('★')
  }

  for (let i=0; i<5-num; i++) { 
    stars = stars.concat('☆')
  }
  return stars;
}

function Skill() {
  return (
    <div>
      
      <div className='header'>
      </div >
      <div className='skills'>
      <h1>SKILL</h1>
        <h2>Client</h2>
        <div className='type'>
          {skills.clients.map((client) =>
            (<div className='skill'><client.icon size={75}/><br/> {client.name} {levelToStar(client.level)}</div>))
          }
        </div>

        <h2>Server</h2>
        <div className='type'>
          {skills.servers.map((server) =>
            (<div className='skill'><server.icon size={75}/><br/> {server.name} {levelToStar(server.level)}</div>))
          }
        </div>
        <h2>Database</h2>
        <div className='type'>
          {skills.databases.map((database) =>
            (<div className='skill'><database.icon size={75}/><br/> {database.name} {levelToStar(database.level)}</div>))
          }
        </div>

        <h2>Cloud</h2>
        <div className='type'>
          {skills.clouds.map((cloud) =>
            (<div className='skill'><cloud.icon size={75}/><br/> {cloud.name} {levelToStar(cloud.level)}</div>))
          }
        </div>
      </div>
    </div>
  );
}

export default Skill;
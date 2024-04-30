import './socialNetwork.css';

function SocialNetwork({joinUs}) {

const socialList = [
    {
        name: 'itch-io',
        url: 'https://wondersoftstudio.itch.io',
    },
    {
        name: 'discord',
        url: 'https://discord.gg/xsn6ZpNkCu',
    },
    {
        name: 'twitch',
        url: 'https://www.twitch.tv/wondersoftstudio',
    },
    {
        name: 'youtube',
        url: 'https://www.youtube.com/channel/UCS3ZO_L0NKPvPWbIEHJWpRQ ',
    },
    {
        name: 'linkedin-in',
        url: 'https://www.linkedin.com/company/wondersoft-studio/?viewAsMember=true',
    },

]


    return (
        <div className="social-icons">
            <div className="d-flex flex-column">
                    {socialList.map((social, index) => (
                    <a key={`${social.name}-${index}`} className="social-btn" href={social.url}><i className={"fa-brands fa-" + social.name }></i></a>
                ))}
            </div>
            {joinUs 
                ?   <a href={socialList[1].url}>
                        <img src="/img/discord.png" alt="" className='arrow-discord'/>
                    </a>
                : " "
            }
        </div>
    )
}

export default SocialNetwork
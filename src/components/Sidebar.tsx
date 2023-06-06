import '../css/sidebar.css'
// import DashboardIcon from '../images/dashboard.svg'
import BrowseIcon from '../images/browse.svg'
import MessageIcon from '../images/messages.svg'
import GroupsIcon from '../images/groups.svg'
import ForumsIcon from '../images/forum.svg'
import AiIcon from '../images/ai-assistant.svg'
import ToolsIcon from '../images/tools.svg'
import HelpIcon from '../images/help.svg'

function Sidebar() {
    
    return(
        <>
        <div className='sidebar'>
            <ul>
                <li className='flex items-center'> 
                    <div className='icon-padding svg-cover'>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M34.4137 37.5H24.3362C22.635 37.5 21.25 36.115 21.25 34.4137V21.8362C21.25 20.135 22.635 18.75 24.3362 18.75H34.4137C36.115 18.75 37.5 20.135 37.5 21.8362V34.4137C37.5 36.115 36.115 37.5 34.4137 37.5ZM24.3362 21.25C24.0125 21.25 23.75 21.5125 23.75 21.8362V34.4137C23.75 34.7375 24.0125 35 24.3362 35H34.4137C34.7375 35 35 34.7375 35 34.4137V21.8362C35 21.5125 34.7375 21.25 34.4137 21.25H24.3362Z" fill="black"/>
                    <path d="M34.4137 16.25H24.3362C22.635 16.25 21.25 14.865 21.25 13.1637V5.58625C21.25 3.885 22.635 2.5 24.3362 2.5H34.4137C36.115 2.5 37.5 3.885 37.5 5.58625V13.1637C37.5 14.865 36.115 16.25 34.4137 16.25ZM24.3362 5C24.0125 5 23.75 5.2625 23.75 5.58625V13.1637C23.75 13.4875 24.0125 13.75 24.3362 13.75H34.4137C34.7375 13.75 35 13.4875 35 13.1637V5.58625C35 5.2625 34.7375 5 34.4137 5H24.3362Z" fill="black"/>
                    <path d="M15.6637 21.25H5.58625C3.885 21.25 2.5 19.865 2.5 18.1637V5.58625C2.5 3.885 3.885 2.5 5.58625 2.5H15.6637C17.365 2.5 18.75 3.885 18.75 5.58625V18.1637C18.75 19.865 17.365 21.25 15.6637 21.25ZM5.58625 5C5.2625 5 5 5.2625 5 5.58625V18.1637C5 18.4875 5.2625 18.75 5.58625 18.75H15.6637C15.9875 18.75 16.25 18.4875 16.25 18.1637V5.58625C16.25 5.2625 15.9875 5 15.6637 5H5.58625Z" fill="black"/>
                    <path d="M15.6637 37.5H5.58625C3.885 37.5 2.5 36.115 2.5 34.4137V26.8362C2.5 25.135 3.885 23.75 5.58625 23.75H15.6637C17.365 23.75 18.75 25.135 18.75 26.8362V34.4137C18.75 36.115 17.365 37.5 15.6637 37.5ZM5.58625 26.25C5.2625 26.25 5 26.5125 5 26.8362V34.4137C5 34.7375 5.2625 35 5.58625 35H15.6637C15.9875 35 16.25 34.7375 16.25 34.4137V26.8362C16.25 26.5125 15.9875 26.25 15.6637 26.25H5.58625Z" fill="black"/>
                    </svg>
                    </div>
                    <span>Dashboard</span>
                </li>

                <li className='flex items-center'> 
                    <img src={BrowseIcon} className='icon-padding'/>
                    <span>Browse</span>
                </li>

                <li className='flex items-center'> 
                    <img src={MessageIcon} className='icon-padding'/>
                    <span>Messages</span>
                </li>

                <li className='flex items-center'> 
                    <img src={GroupsIcon} className='big-side-icon'/>
                    <span>Groups</span>
                </li>

                <li className='flex items-center'> 
                    <img src={ForumsIcon} className='icon-padding'/>
                    <span>Forums</span>
                </li>

                <li className='flex items-center'> 
                    <img src={AiIcon} className='big-side-icon'/>
                    <span>AI Assistant</span>
                </li>

                <li className='flex items-center'> 
                    <img src={ToolsIcon} className='big-side-icon'/>
                    <span>Tools</span>
                </li>

                <li className='flex items-center'> 
                    <img src={HelpIcon} className='icon-padding'/>
                    <span>Help</span>
                </li>
            </ul>
        </div>
        </>
    )
}

export default Sidebar
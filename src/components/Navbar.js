import { useState} from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Menu, Segment } from 'semantic-ui-react'
export default function NavbarLg() {
  const [activeItem,setactiveItem]=useState("home")
  const handleItemClick = (e, { name }) => setactiveItem(name)
    return (
      <Segment inverted attached size='mini'>
        <Menu inverted secondary>
          <Menu.Item
            name='logo'
            active={activeItem === 'logo'}
            onClick={handleItemClick}
          >
            <img src="ghostblog.svg"  alt="" />
          </Menu.Item>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='messages'
            active={activeItem === 'messages'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='friends'
            active={activeItem === 'friends'}
            onClick={handleItemClick}
          />
          
          <Menu.Item
            name='login'
            active={activeItem === 'login'}
            onClick={handleItemClick}
            position="right"
          />
          <Menu.Item
            name='sign_in'
            active={activeItem === 'sign_in'}
            onClick={handleItemClick}
          />
          {/* section */}
        </Menu>
      </Segment>
    )
  }
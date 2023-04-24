import React from 'react';
// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Badge from './Badge';
import AvatarImage from '../assets/avatarImage2.jpeg';
import { darkThemeColor } from '../../utils/Interview';
import { RiHomeLine, RiFileCopyLine} from "react-icons/ri"
// import { FaWallet } from "react-icons/fa"
import {  AiOutlinePieChart } from "react-icons/ai";
// import { Menu } from 'antd';
// import Assessments from '../Pages/Assessments';
// import { themeColor } from '../../utils/Interview';
// import { Menu } from 'antd';
// import AppRoutes from './AppRoutes';
import { useNavigate } from 'react-router-dom';



function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="SideMenu">
    <Container>
  <ProfileContainer>
    <Avatar src={AvatarImage}/>
    <Name> Mahat Maghadhi </Name>
    <Badge content= "I am a Profound Software Engineer. Call me Daddy, hehe!!"/>
  </ProfileContainer>
  <LinksContainer>
    <Links>
      <NewLink onClick={() => navigate("/clientdb")}>
        <li>
          <RiHomeLine />
          <h3>Dashboard</h3>
        </li>
      </NewLink>
      <NewLink onClick={() => navigate("/assessments")}>
        <li>
          <RiFileCopyLine />
          <h3>Assessments</h3>
        </li>
      </NewLink>
      
      <NewLink onClick={() => navigate("/reports")}>
        <li>
          <AiOutlinePieChart />
          <h3>Reports</h3>
        </li>
      </NewLink>
    </Links>
    <ContactContainer>
      <span>Having troubles?</span>
      <Link to="/contact">Contact us</Link>
    </ContactContainer>
  </LinksContainer>
</Container>
</div>

  )
}

const Container = styled.div`
  width: 20%;
  height: 100% !important;
  border-radius: 2rem;
  background-color: #091322;
  background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);  display: flex;
  // background-image: linear-gradient(-225deg, #FF057C 0%, #7C64D5 48%, #4CC3FF 80%);
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    height: max-content !important;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Avatar = styled.img`
  height: 7rem;
  border-radius: 8rem;
  margin-top: 20%;
`;

const Name = styled.h1`
  color: black;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0.8rem 0 0.5rem 0;
`;

const LinksContainer = styled.div`
  background-color: ${darkThemeColor};
  // background-image: linear-gradient(to top, #ab00c3, #b105c8, #b70bcc, #bd11d1, #c315d5, #c821da, #cd2ade, #d232e3, #d73fe9, #dd4aef, #e255f5, #e75ffb);  width: 100%;
  border-radius: 1rem;
  height: 60%;
  width: 80%;
`;

const Links = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  height: 60%;
`;

const NewLink = styled.li`
  margin-left: 20%;
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  color: #e4e4e4;
  cursor: pointer;
  h3 {
    font-weight: 300;
  }
  svg {
    font-size: 1.1rem;
    margin-top: 3%;
  }
`;


const ContactContainer = styled.div`
  width: 85%;
  background-color: #091322;
  color: #c4c4c4;
  height: 30%;
  margin: auto auto;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  a {
    color: white;
    text-decoration: none;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-bottom: 2rem;
  }
`;


export default Sidebar
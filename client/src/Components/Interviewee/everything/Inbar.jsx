import React from 'react';
import { MailOutlined, BellFilled } from '@ant-design/icons';
import styled from 'styled-components';
import { Badge, Drawer, List, Space, Typography } from "antd";
import { useEffect, useState } from 'react';
import { getAssessments, getComments } from '../../../API';
import { FiSearch } from "react-icons/fi";





function Inbar() {

  const [comments, setComments] = useState([]);
    const [assessments, setAssessments] = useState([]);
    const [commentsOpen, setCommentsOpen] = useState(false);
    const [notificationsOpen, setNotificationsOpen] = useState(false);

    useEffect(() => {
      getComments().then((res) => {
          const commentsArray = Array.isArray(res.total) ? res.total : [res.total];
          setComments(commentsArray);
        });
        
  }, []);

  useEffect(() => {
      getAssessments().then((res) => {
          const assessmentsArray = Array.isArray(res.total) ? res.total : [res.total];
          setAssessments(assessmentsArray);
        });          
  }, []);


  return (
    <InbarContainer>
      <Text> 
      Smart Recruiters
      <br />
        Good morning,
        <span> <b>Marhat</b> </span>
      </Text>
      
      <InputContainer>
        <Icon>
          <FiSearch />
        </Icon>
        <Input type="text" placeholder="Search for projects" />
      </InputContainer>
      <Space>
      <Badge count={comments ? comments.length : 0} dot>
          <MailOutlined style={{fontSize: 24}}  
          onClick={()=>{
              setCommentsOpen(true);
          }}/>
      </Badge>
      <Badge count={assessments ? assessments.length : 0}>
          <BellFilled style={{fontSize: 24}} 
          onClick={()=>{
              setNotificationsOpen(true);
          }}/>  
      </Badge>
  </Space>
      <Drawer title="Comments" open={commentsOpen} onClose={(
        )=>{
            setCommentsOpen(false);
        }} maskClosable>
        <List dataSource={comments} renderItem={(item) => {
            return <List.Item><Typography.Text strong>{item.body} "This is some awesome thinking!" </Typography.Text></List.Item>
        }}></List>
    </Drawer>
    <Drawer title="Notifications" open={notificationsOpen} onClose={(
        )=>{
            setNotificationsOpen(false);
        }} maskClosable>
        <List dataSource={assessments} renderItem={(item) => {
            return <List.Item><Typography.Text strong>{item.title} has been ordered! </Typography.Text></List.Item>
        }}></List>
    </Drawer>
    </InbarContainer>
  )
}


const InbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    margin-bottom: 1rem;
  }
`;

const Text = styled.h1`
  span {
    font-weight: 500;
    color: #484258;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-top: 1rem;
  }
`;
const InputContainer = styled.div`
  display: flex;
`;

const Icon = styled.div`
  height: 3rem;
  width: 3rem;
  background-color: #dce4ff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  svg {
    color: #555555;
  }
`;
const Input = styled.input`
  border: none;
  background-color: #dce4ff;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  color: #464646;
  &:focus {
    border: none;
    outline: none;
  }
`;

export default Inbar
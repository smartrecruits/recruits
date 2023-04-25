import { MediumWorkmarkOutlined, TrophyOutlined } from "@ant-design/icons"
import { Card, Space, Statistic, Table, Typography } from "antd"
import { useEffect, useState } from "react";
import {getAssessments, getComments} from "../../../API";

function Dashboard() {
    return ( 
        <Space size={20} direction="vertical">
        <Typography.Title level={4}>Dashboard</Typography.Title>
        <Space direction="horizontal">
            <DashboardCard 
            icon={<MediumWorkmarkOutlined 
                style={{color:"purple", backgroundColor:"rgba (0,255,0,0.25)", 
                borderRadius: 20, 
                fontSize : 44, 
                padding: 8,}}
            />} 
            title={"Assessments"} 
            value={80} />
            <DashboardCard title={"Code-Challenge"} 
            value={74} />
            <DashboardCard title={"Check out trial"} value={"practice"} />
            <DashboardCard title={"Grades"} value={80} />
        </Space>
        <Space>
        <RecentAssessment />
        </Space>
    </Space>
    );
}

function DashboardCard({ title, value, icon }) {
    return (
        <Card>
            <Space direction="horizontal">
                <TrophyOutlined />
                {icon}
                <Statistic title={title} value={value} />
            </Space>
        </Card>
    )
}

function RecentAssessment() {
    const [dataSource, setDataSource] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getAssessments().then((res => {
            setDataSource(res.posts.splice(0, 3));
            setLoading(false);
        }));
    }, []);
    
    useEffect(() => {
        setLoading(true);
        getComments().then((res => {
            setDataSource(res.comments.splice(0, 3));
            setLoading(false);
        }));
    }, []);

    return (
        <>
            <Typography.Text>Recent Assessments </Typography.Text>
            <Table
                columns={[
                    {
                        title: "Todo",
                        dataIndex: "Body",
                    },
               
                    {  
                        title: "Tags",
                        dataIndex: "Reactions",
                    },
                ]}
                loading={loading}
                dataSource={dataSource}
            ></Table>
        </>
    );
}

export default Dashboard
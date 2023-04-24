import { Typography } from "antd"
import Card from "./Card"
// import { FontColorsOutlined } from "@ant-design/icons"
// import './Assessment.css'


function Assessments() {
    return <div>
        <Typography.Title level={4} style={{ color: 'white' }}>
            <h2 className="assessment">Assessments</h2>
        </Typography.Title>
          <Card 
        title="Card Title"
        imageurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ-SDeKMk-RP4eR_Bng9zSfdxy3ewAg3nmGw&usqp=CAU"
        imageurl2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpgWSUDPNCvHetrYbW5S-PHWtweytTHH-jrQ&usqp=CAU"
        body="Start the Questions today here"
        />
    </div>
}

export default Assessments
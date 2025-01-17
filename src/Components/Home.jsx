import {  Layout } from 'antd';
import BackgroundVideo from './BackgroundVideo';
const { Content } = Layout;
const Home = () => {
  return (
    <div>
         <Layout >
      <Layout>
        <Content ><BackgroundVideo /></Content>
         
      </Layout>
    </Layout>
    </div>
  )
}

export default Home
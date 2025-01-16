import { Flex, Layout } from 'antd';
import LogginForm from './LogginForm';
import BackgroundVideo from './BackgroundVideo';
const {Footer, Sider, Content } = Layout;
const Home = () => {
  return (
    <div>
         <Layout >
      <Layout>
        <Content ><BackgroundVideo /></Content>
        <Sider className='bg-blue-500  w-full' >
          <LogginForm />
        </Sider>
      </Layout>
    </Layout>
    </div>
  )
}

export default Home
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input, Form, Button, Checkbox } from 'antd';
import { useState } from 'react';

const LogginForm = () => {
    const [visible, setVisible] = useState(false);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const onChangeFullName = (e) => {
        setFullName(e.target.value);
    };

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const onChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    };

    const onReset = () => {
        setFullName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    const onSubmit = (values) => {
        console.log("Form Values: ", values);
    };

    return (
        <div className='py-4 px-6'>
            <img src="src/imges/image copy 2.png" alt="my illustration"  className='w-20 h-20 rounded-full flex justify-center'/>
            <h1 className='text-white font-semibold '>create account on HealTracks supportive login or sign up</h1>
                <Form onFinish={onSubmit}>
            <div>
                <Form.Item
                    name="fullName"
                    rules={[{ required: true, message: 'Please enter your full name' }]}
                >
                    <label 
                    className='text-white'
                    >Full Name</label>
                    <Input
                        showCount
                        maxLength={40}
                        onChange={onChangeFullName}
                        value={fullName}
                        placeholder="Enter your Full Name"
                    />
                </Form.Item>
                
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Please enter your email address' }, { type: 'email', message: 'Please enter a valid email!' }]}
                >
                    <label 
                    className='text-white'
                    >Email</label>
                    <Input
                        type="email"
                        placeholder="Enter your email address"
                        onChange={onChangeEmail}
                        value={email}
                    />
                </Form.Item>

                <label className='text-white' >password</label>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please enter your password' }]}
                >
                    <label htmlFor=""></label>
                    <Input.Password
                        placeholder="Input password"
                        value={password}
                        onChange={onChangePassword}
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
                </Form.Item>
                 <label htmlFor="" className='text-white'>comfirm password</label>
                <Form.Item
                    name="confirmPassword"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        { required: true, message: 'Please confirm your password' },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password
                        placeholder="Confirm password"
                        value={confirmPassword}
                        onChange={onChangeConfirmPassword}
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
                </Form.Item>

                <Form.Item name="checkbox" valuePropName="checked">
                    <Checkbox className='text-white'>I agree to the terms and conditions</Checkbox>
                </Form.Item>
                 <div className='grid-cols-2 gap-3'>
                 <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Button htmlType="button" onClick={onReset}>
                        Reset
                    </Button>
                </Form.Item>
                 </div>
                
            </div>
        </Form>
        </div>

    );
};

export default LogginForm;

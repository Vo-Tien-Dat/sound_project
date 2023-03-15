import React, { ChangeEvent, useState } from 'react';
import { Button, Checkbox, Form, Input, Typography } from 'antd';
import { Space, Row, Col, Divider } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import './index.scss';
import { isLogging } from '../../app/reducers/authSlice';

const onFinish = (values: any) => {
	console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
	console.log('Failed:', errorInfo);
};

const Login: React.FC = () => {
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');

	const handleUserName = (event: ChangeEvent<HTMLInputElement>) => {
		setUserName(event.currentTarget.value);
	};

	const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
		setPassword(event.currentTarget.value);
	};

	const dispatch = useDispatch();

	const handleSignIn = () => {
		dispatch(isLogging({ userName, password }));
	};

	return (
		<Space className="LoginSpace">
			<Space>
				<Form
					className="LoginFormOverride"
					name="basic"
					style={{ width: '360px', minWidth: '240px' }}
					initialValues={{ remember: true }}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete="off"
				>
					<Form.Item
						className="LoginFormItemOverride"
						wrapperCol={{ span: 24 }}
						name="username"
						rules={[{ required: true, message: 'Please input your username' }]}
					>
						<Input
							className="InputOverride"
							onChange={handleUserName}
							value={userName}
							placeholder="Username or E-mail"
						/>
					</Form.Item>

					<Form.Item
						className="LoginFormItemOverride"
						wrapperCol={{ span: 24 }}
						name="password"
						rules={[{ required: true, message: 'Please input your password' }]}
					>
						<Input.Password
							className="InputOverride"
							placeholder="Password"
							onChange={handlePassword}
							value={password}
							iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
						/>
					</Form.Item>

					<Form.Item className="LoginFormItemOverride" wrapperCol={{ span: 24 }} name="password">
						<Row justify="space-between">
							<Col>
								<a href="#">
									<Typography>Forgot password ?</Typography>
								</a>
							</Col>
							<Col>
								<a href="#">
									<Typography>Sign Up</Typography>
								</a>
							</Col>
						</Row>
					</Form.Item>

					<Form.Item className="LoginFormItemOverride" wrapperCol={{ span: 24 }}>
						<Button
							size={'large'}
							type="primary"
							htmlType="submit"
							style={{ width: '100%' }}
							onClick={handleSignIn}
						>
							<Typography className="SubmitedTypographyOverride">Sign In</Typography>
						</Button>
					</Form.Item>

					<Divider>or</Divider>

					<Form.Item className="LoginFormItemOverride" wrapperCol={{ span: 24 }}>
						<Button type="primary" size={'large'} style={{ width: '100%' }}>
							Connect with Facebook
						</Button>
					</Form.Item>
					<Form.Item className="LoginFormItemOverride" wrapperCol={{ span: 24 }}>
						<Button size={'large'} style={{ width: '100%' }}>
							Connect with Google
						</Button>
					</Form.Item>
				</Form>
			</Space>
		</Space>
	);
};

export default Login;

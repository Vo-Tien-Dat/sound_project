import React, { ChangeEvent, useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input, Typography } from 'antd';
import { Space, Row, Col, Divider } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import './index.scss';
import { isLogging } from '../../app/reducers/authSlice';
import { RootState } from '../../app/store';
import { redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const onFinish = (values: any) => {};

const onFinishFailed = (errorInfo: any) => {};

const VALIDATE_PASSWORD_FAILED = 'password is empty';

const VALIDATE_EMAIL_FALIED = 'email is empty';

const VALIDATE_EMAIL_SUCCESS = '';

const VALIDATE_PASSWORD_SUCCESS = '';

type validating = '' | 'success' | 'warning' | 'error' | 'validating';

type helpUserName = '' | 'Không đúng form của email' | 'email bị trống';

type helpPassword = '' | 'Không đúng form của password' | 'Mật khẩu bị trống';
const Login: React.FC = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const loggingSuccessStatus = useSelector<RootState, boolean>(state => state.auth.logging_success_status);
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [userNameValidateStatus, setUserNameValidateStatus] = useState<validating>('');
	const [passwordValidateStatus, setPasswordValidateStatus] = useState<validating>('');
	const [helpUserName, setHelpUserName] = useState<string>(VALIDATE_EMAIL_SUCCESS);
	const [helpPassword, setHelpPassword] = useState<string>(VALIDATE_PASSWORD_SUCCESS);
	const [formLogin] = Form.useForm();

	const handleRedirect = () => {};

	const handleUserName = (event: ChangeEvent<HTMLInputElement>) => {
		setUserName(event.currentTarget.value);
	};

	const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
		setPassword(event.currentTarget.value);
	};

	const validateUserNameAndPassword = () => {};

	const handleSignIn = () => {
		dispatch(isLogging({ userName, password }));
	};

	useEffect(() => {
		if (userName === '') {
			setUserNameValidateStatus('error');
			setHelpUserName(VALIDATE_EMAIL_FALIED);
		}
	}, [userName, password]);

	return (
		<Space className="login-space">
			<Space>
				<Form
					form={formLogin}
					className="login-form"
					name="basic"
					style={{ width: '360px', minWidth: '240px' }}
					initialValues={{ remember: true }}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete="off"
				>
					<Form.Item
						validateStatus={userNameValidateStatus}
						help={helpUserName}
						className="login-form-item"
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
						className="login-form-item"
						validateStatus={passwordValidateStatus}
						help={helpPassword}
						wrapperCol={{ span: 24 }}
						name="password"
					>
						<Input.Password
							className="InputOverride"
							placeholder="Password"
							onChange={handlePassword}
							value={password}
							iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
						/>
					</Form.Item>

					<Form.Item className="login-form-item" wrapperCol={{ span: 24 }} name="password">
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

					<Form.Item className="login-form-item" wrapperCol={{ span: 24 }}>
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

					<Form.Item className="login-form-item" wrapperCol={{ span: 24 }}>
						<Button type="primary" size={'large'} style={{ width: '100%' }}>
							Connect with Facebook
						</Button>
					</Form.Item>
					<Form.Item className="login-form-item" wrapperCol={{ span: 24 }}>
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

import React, { FC } from 'react';
import { Space, Form, Input, Checkbox, Button, Typography, DatePicker } from 'antd';
import type { DatePickerProps } from 'antd';
import './index.scss';
const onChange: DatePickerProps['onChange'] = (date, dateString) => {
	console.log(date, dateString);
};
export const SignUp: FC = () => {
	return (
		<Space className="SignUpSpaceOverride">
			<Form
				className="SignUpFormOverride"
				name="basic"
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				style={{ maxWidth: 600 }}
				initialValues={{ remember: true }}
				autoComplete="off"
			>
				<Form.Item className="SignUpFormItemOverride" wrapperCol={{ span: 24 }}>
					<Typography>Name</Typography>
					<Input />
				</Form.Item>
				<Form.Item className="SignUpFormItemOverride" wrapperCol={{ span: 24 }}>
					<Typography>User name</Typography>
					<Input />
				</Form.Item>

				<Form.Item className="SignUpFormItemOverride" wrapperCol={{ span: 24 }}>
					<Typography>Type password</Typography>
					<Input.Password />
				</Form.Item>
				<Form.Item className="SignUpFormItemOverride" wrapperCol={{ span: 24 }}>
					<Typography>Retype password</Typography>
					<Input.Password />
				</Form.Item>

				<Form.Item className="SignUpFormItemOverride" wrapperCol={{ span: 24 }}>
					<Typography>Birthday</Typography>
					<DatePicker style = {{width: '100%!important'}} onChange={onChange} />
				</Form.Item>

				<Form.Item wrapperCol={{ span: 24 }}>
					<Button
						className="SignUpButtonSubmitOverride"
						type="primary"
						htmlType="submit"
						style={{ width: '100%' }}
					>
						Sign Up
					</Button>
				</Form.Item>
			</Form>
		</Space>
	);
};

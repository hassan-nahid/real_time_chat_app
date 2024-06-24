import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckBox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const Signup = () => {

	const {loading, signup} = useSignup()

	const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});

	const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs,gender});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(inputs);
	};

	return (
		<div className='flex flex-col items-center justify-center max-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 mx-4'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Sign Up <span className='text-blue-500'> ChatApp</span>
				</h1>
				<form onSubmit={handleSubmit}>
					<div>
						<label className='label p-2'>
							<span className='text-base label-text text-black'>Full Name</span>
						</label>
						<input type='text'value={inputs.fullName} onChange={(e) => setInputs({...inputs,fullName: e.target.value})} placeholder='Adam Smith' className='w-full input input-bordered  h-10' />
					</div>
					<div>
						<label className='label p-2 '>
							<span className='text-base label-text text-black'>Username</span>
						</label>
						<input type='text' placeholder='adamsmith' value={inputs.username} onChange={(e) => setInputs({...inputs,username: e.target.value})} className='w-full input input-bordered h-10' />
					</div>
					<div>
						<label className='label'>
							<span className='text-base label-text text-black'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10'
							value={inputs.password} onChange={(e) => setInputs({...inputs,password: e.target.value})}
						/>
					</div>
					<div>
						<label className='label'>
							<span className='text-base label-text text-black'>Confirm Password</span>
						</label>
						<input
							type='password'
							placeholder='Confirm Password'
							className='w-full input input-bordered h-10'
							value={inputs.confirmPassword} onChange={(e) => setInputs({...inputs,confirmPassword: e.target.value})}
						/>
					</div>
					<GenderCheckbox handleCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />
					<Link className='text-sm hover:underline text-black hover:text-blue-600 mt-2 inline-block' to='/login'>
						Already have an account?
					</Link>
					<div>
						{loading ? (
							<span className='loading loading-spinner'></span>
						) : (
							<button type='submit' className='btn btn-block btn-sm mt-2'>
								Sign Up
							</button>
						)}
					</div>
				</form>
			</div>
		</div>
	);
};
export default Signup;
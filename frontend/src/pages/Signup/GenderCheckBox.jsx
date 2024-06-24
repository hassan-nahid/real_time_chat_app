const GenderCheckbox = ({ handleCheckboxChange, selectedGender }) => {
	return (
		<div className='flex'>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "checked" : ""}`}>
					<span className='label-text text-black'>Male</span>
					<input type='checkbox' checked={selectedGender === "male"} 
						onChange={() => handleCheckboxChange("male")} className='checkbox border-slate-900' />
				</label>
			</div>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "checked" : ""}`}>
					<span className='label-text text-black'>Female</span>
					<input type='checkbox' className='checkbox border-slate-900'
						checked={selectedGender === "female"}
						onChange={() => handleCheckboxChange("female")} />
				</label>
			</div>
		</div>
	);
};
export default GenderCheckbox;
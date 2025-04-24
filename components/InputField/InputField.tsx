'use client'

import React, { ChangeEvent, useEffect, useState } from 'react';
import { TInputFieldProps } from './TInputFieldProps';
import { MdErrorOutline } from "react-icons/md";

const InputField = (props: TInputFieldProps) => {
	const { label, icon, id, type, errorMessage, isPhone, required, onChange } = props;
	const [value, setValue] = useState(props.value ?? '');
	const [isFocused, setIsFocused] = useState(false);

	useEffect(() => {
		setValue(props.value);
	}, [props.value]);

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setValue(e.target.value ?? "");
		onChange(e as ChangeEvent<HTMLInputElement>);
	};

	const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

	return (
		<div className="flex flex-col w-full gap-y-2">
			<div className="flex items-center w-full gap-x-4 mt-[1em]">
				<div className={`relative flex justify-center w-[40px] h-[40px] overflow-hidden ${errorMessage ? 'items-start text-red-500' : 'items-center text-blue-primary1'} ${isFocused && !errorMessage ? 'text-green-500' : ''}`}>
					{icon}
				</div>
				<div className="relative w-full pt-2">
					{type !== 'textarea' ? (
						<input
							type={type}
							id={id}
							value={value}
							onChange={handleChange}
							onFocus={handleFocus}
							onBlur={handleBlur}
							className={`appearance-none rounded-none overflow-hidden text-base block py-2.5 px-0 w-full bg-blue-primary2 bg-transparent border-x-0 border-t-0 border-b ${errorMessage ? 'border-red-600' : 'border-blue-primary1'} appearance-none focus:outline-none focus:ring-0 focus:border-teal-5 peer`}
							placeholder=""
							maxLength={isPhone ? 14 : 524288}
							required={required}
							onKeyDown={(e) => {
								if (isPhone && !/[\d-]/.test(e.key) && !['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(e.key)) {
									e.preventDefault();
								}
							}}
						/>
					) : (
						<textarea
							id={id}
							value={value}
							onChange={handleChange}
							onFocus={handleFocus}
							onBlur={handleBlur}
							className={`appearance-none text-base block py-2.5 px-0 rounded-none w-full text-blue-primary1 bg-transparent border-0 border-b ${errorMessage ? 'border-red-600' : 'border-blue-primary1'} focus:outline-none focus:ring-0 focus:border-teal-5 peer resize-none`}
							placeholder=" "
							rows={3}
						></textarea>
					)}
					<label 
						htmlFor={id}
						className={`absolute text-base ${errorMessage ? 'text-red-600' : 'text-blue-primary1'} z-10 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-teal-5 peer peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto`}
					>
						{label}
					</label>
					{errorMessage &&
						<div className="flex text-red-600 text-sm">
							<div className="mt-[8px]"><MdErrorOutline /></div>
							<p className="mt-[5px] ml-[5px]">{errorMessage}</p>
						</div>
					}
				</div>
			</div>
		</div>
	);
};

export default InputField;
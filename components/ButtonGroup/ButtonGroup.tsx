'use client'

import React, { useState, useRef, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { TButtonGroupProps } from './TButtonGroupProps'

const ButtonGroup = (props: TButtonGroupProps) => {
	const { onButtonClick, buttonData } = props;

	const [activeBtn, setActiveBtn] = useState<string | null>(buttonData[0]?.id);
	const btnRefs = useRef<(HTMLDivElement | null)[]>([]);
	const pathname = usePathname();

	useEffect(() => {
		const currentUrl = `${pathname}${window.location.hash}`;
		buttonData.forEach(btn => {
			if (currentUrl === btn.href) {
				let targetBtn = btn.id;
				setActiveBtn(targetBtn);
				onButtonClick(targetBtn);
			}
		});
	}, [pathname, onButtonClick, buttonData]);

	const handleButtonClick = (id: string, event: React.MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault();
		setActiveBtn(id);
		onButtonClick(id);
	};

	return (
		<div className="flex justify-center overflow-x-auto no-scrollbar" style={{ scrollbarWidth: 'none' }}>
			<div className="inline-flex space-x-0 w-auto mt-4 lg:mt-0">
				{buttonData.map((btn, index) => (
					<div
						key={btn.id}
						ref={el => { btnRefs.current[index] = el }}
						className="inline-block h-9 lg:contents"
					>
						<Link
							href={btn.href}
							onClick={(event) => handleButtonClick(btn.id, event)}
							aria-current={activeBtn === btn.id ? "page" : undefined}
							className={`py-2 px-2 text-xs sm:text-sm md:text-base lg:text-lg font-medium text-blue-primary1 lg:px-4 border border-gray-200
								${index === 0 ? 'rounded-l-full' : index === buttonData.length - 1 ? 'rounded-r-full' : ''}
								${activeBtn === btn.id ? 'relative border-b-2 border-transparent border-0 bg-gradient-to-r from-[#00D27A] to-[#50E468] text-white' : 'bg-white hover:bg-gray-100'}
								whitespace-nowrap
							`}
						>
							{btn.label}
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}

export default ButtonGroup;

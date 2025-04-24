'use client'

import { ICustomImageProps } from '@/types/global';
import Image from 'next/image'
import React from 'react'

const CustomImage = (props: ICustomImageProps) => {
	const {
    src,
    alt,
    width,
    height,
    sizes,
    style,
    className,
    priority,
    loading,
    onError,
		onLoad,
		onClick,
  } = props;

	const handleContextMenu = (event: React.MouseEvent) => {
		event.preventDefault();
	};
	const handleDragStart = (event: React.DragEvent) => {
		event.preventDefault();
	};

	return (
		<Image 
			src={src}
			alt={alt}
			width={width}
			height={height}
			sizes={sizes}
			style={style}
			className={`noselect ${className}`}
			priority={priority}
			loading={loading}
			onLoad={onLoad}
			onError={onError}
			onContextMenu={handleContextMenu}
			onDragStart={handleDragStart}
			onClick={onClick}
		/>
	)
}

export default CustomImage

/* eslint-disable semi */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';



export const Profile=()=>{
	const uploadedImage = React.useRef(null);
	const imageUploader = React.useRef(null);

	const handleImageUpload = e => {
		const [file] = e.target.files;
		if (file) {
			const reader = new FileReader();
			const { current } = uploadedImage;
			current.file = file;
			reader.onload = e => {
				current.src = e.target.result;
			};
			reader.readAsDataURL(file);
		}
	};

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				borderRadius: '50%',
			}}
		>
			<input
				type='file'
				accept='image/*'
				onChange={handleImageUpload}
				ref={imageUploader}
				style={{
					display: 'none',
					
				}}
			/>
			<div
				// state = {{imagePreviewUrl:
				//       'https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true',
				//     name: "",
				//     status: "",
               
				// }},
				style={{
					height: '40px',
					width: '40px',
					border: '1px solid black',
					borderRadius: '50%',
					// backgroundColor:'red'
					backgroundImage:'C:\\Users\\This_user\\Desktop\\מסלול הנדסאים\\web\\איקונים\\icons8-customer-30',
				}}
				onClick={() => imageUploader.current.click()}
			>
				<img
					ref={uploadedImage}
					style={{
						width: '100%',
						height: '100%',
						position: 'acsolute',
						borderRadius: '50%',
					}}
				/>
			</div>
     
		</div>
	);
};
export const faq_group = [
	{
		id: "faq-group-1",
		label: "Top FAQs",
		href: "/support#top-faqs",
	},
	{
		id: "faq-group-2",
		label: "Retail",
		href: "/support#retail",
	},
	{
		id: "faq-group-3",
		label: "Enterprise",
		href: "/support#enterprise"
	},
	{
		id: "faq-group-4",
		label: "Troubleshooting",
		href: "/support#troubleshooting"
	},
]

export const faqs = [
	// TOP FAQS (faq-group-1)
	{
		id: "accordion-open-1",
		groupId: "faq-group-1",
		title: "How do I register my device?",
		content: `
		To get started with instaProtek, you have two options:
		<br><br>
		1. Scan the instaProtek Shield's QR code: Simply locate the QR code on the product's packaging and use your smartphone's QR code scanning functionality to scan it. This will direct you to the appropriate app store where you can download the Instaprotek app.
		<br><br>
		2. Download the app manually: Visit the App Store (for iOS devices) or the Play Store (for Android devices) and search for "instaProtek." Download and install the app on your smartphone.
		<br><br>
		<div class="support-app-img">
			<a href="https://apps.apple.com/us/app/instaprotek/id1456989327"><img src="https://acdn.dnamicro.net/instaprotek/download_on_app_store.png" alt="App Store" /></a>
			<a href="https://play.google.com/store/apps/details?id=com.instaprotek.app&hl=en_US"><img src="https://acdn.dnamicro.net/instaprotek/download_on_google_play.png " alt="Google Play" /></a>
		</div>
		`
	},
	{
		id: "accordion-open-2",
		groupId: "faq-group-1",
		title: "What is the step by step process of registration using the app?",
		content: `
		Registration is easy. See our video below for the step by step process.
		<br><br>
		<span style="display: block; text-align: center;">Android</span><br>
		<video class="video-js" id="my-video" controls="" preload="auto" data-setup="{&quot;aspectRatio&quot;:&quot;16:9&quot;}" poster="https://acdn.dnamicro.net/instaprotek/others/instaprotek_how_to_register_thumbnail_june_2024.png"><source src="https://acdn.dnamicro.net/instaprotek/instaprotek_android_registration_nov_20_2024.mp4" type="video/mp4"><p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that</p></video>
		<br><br>
		<span style="display: block; text-align: center;">iOS</span><br>
		<video class="video-js" id="my-video" controls="" preload="auto" data-setup="{&quot;aspectRatio&quot;:&quot;16:9&quot;}" poster="https://acdn.dnamicro.net/instaprotek/others/instaprotek_how_to_register_thumbnail_june_2024.png"><source src="https://acdn.dnamicro.net/instaprotek/others/instaprotek_ios_registration_june_1_2024.mp4" type="video/mp4"><p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that</p></video>
		`
	},
	{
		id: "accordion-open-3",
		groupId: "faq-group-1",
		title: "How long can I register my product?",
		content: `Please register within 30 days from your product's purchase date.`
	},
	{
		id: "accordion-open-4",
		groupId: "faq-group-1",
		title: "How long does my limited warranty last?",
		content: `It lasts for 1 year from the product's purchase date.`
	},
	{
		id: "accordion-open-5",
		groupId: "faq-group-1",
		title: "How can I file a claim?",
		content: `
		Filing a claim with instaProtek is made easy and convenient with our self-service options. Simply log in to your account through the app and click on the "File a claim" button. Alternatively, you can reach out to us via email at <a href="mailto:support@instaprotek.com" style="color: #00D27A;">support@instaprotek.com</a>. Our dedicated customer support team is always available and ready to assist you promptly. Please see video below:
		<br><br>
		<span style="display: block; text-align: center;">Android</span><br>
		<video class="video-js" id="my-video" controls="" preload="auto" data-setup="{&quot;aspectRatio&quot;:&quot;16:9&quot;}" poster="https://acdn.dnamicro.net/instaprotek/others/instaprotek_how_to_claim_thumbnail_june_2024.png"><source src="https://acdn.dnamicro.net/instaprotek/instaprotek-how_to_self_claim_android_nov_20_2024.mp4"><p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that</p></video>
		<br><br>
		<span style="display: block; text-align: center;">iOS</span><br>
		<video class="video-js" id="my-video" controls="" preload="auto" data-setup="{&quot;aspectRatio&quot;:&quot;16:9&quot;}" poster="https://acdn.dnamicro.net/instaprotek/others/instaprotek_how_to_claim_thumbnail_june_2024.png"><source src="https://acdn.dnamicro.net/instaprotek/others/instaprotek_ios_claim_june_1_2024.mp4" type="video/mp4"><p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that</p></video>
		`
	},
	{
		id: "accordion-open-6",
		groupId: "faq-group-1",
		title: "Can I file a claim after my device has been repaired?",
		content: `Before proceeding with the repair of your device, it is crucial to file a claim and submit photo/s of the damaged device through our app. This step is essential in processing your claim.`
	},
	{
		id: "accordion-open-7",
		groupId: "faq-group-1",
		title: "Can I request to delete my data?",
		content: `Absolutely, please email <a href="mailto:support@instaprotek.com" style="color: #00D27A;">support@instaprotek.com</a>.`
	},

	// REGISTRATION (faq-group-2)
	{
		id: "accordion-open-8",
		groupId: "faq-group-2",
		isParentAccordion: true,
		title: "Registration",
		content: [{
			id: "accordion-open-8.1",
			groupId: "accordion-open-8",
			isChildAccordion: true,
			title: "How do I register my device?",
			content: `
				To get started with instaProtek, you have two options:
				<br><br>
				1. Scan the instaProtek Shield's QR code: Simply locate the QR code on the product's packaging and use your smartphone's QR code scanning functionality to scan it. This will direct you to the appropriate app store where you can download the instaProtek app.
				<br><br>
				2. Download the app manually: Visit the App Store (for iOS devices) or the Play Store (for Android devices) and search for "instaProtek." Download and install the app on your smartphone.
				<br><br>
				<div class="support-app-img">
					<a href="https://apps.apple.com/us/app/instaprotek/id1456989327"><img src="https://acdn.dnamicro.net/instaprotek/download_on_app_store.png" alt="App Store" /></a>
					<a href="https://play.google.com/store/apps/details?id=com.instaprotek.app&hl=en_US"><img src="https://acdn.dnamicro.net/instaprotek/download_on_google_play.png " alt="Google Play" /></a>
				</div>
			`
		},
		{
			id: "accordion-open-8.2",
			groupId: "accordion-open-8",
			isChildAccordion: true,
			title: "What is the step by step process of registration using the app?",
			content: `
				Registration is easy. See our video below for the step by step process.
				<br><br>
				<span style="display: block; text-align: center;">Android</span><br>
				<video class="video-js" id="my-video" controls="" preload="auto" data-setup="{&quot;aspectRatio&quot;:&quot;16:9&quot;}" poster="https://acdn.dnamicro.net/instaprotek/others/instaprotek_how_to_register_thumbnail_june_2024.png"><source src="https://acdn.dnamicro.net/instaprotek/instaprotek_android_registration_nov_20_2024.mp4" type="video/mp4"><p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that</p></video>
				<br><br>
				<span style="display: block; text-align: center;">iOS</span><br>
				<video class="video-js" id="my-video" controls="" preload="auto" data-setup="{&quot;aspectRatio&quot;:&quot;16:9&quot;}" poster="https://acdn.dnamicro.net/instaprotek/others/instaprotek_how_to_register_thumbnail_june_2024.png"><source src="https://acdn.dnamicro.net/instaprotek/others/instaprotek_ios_registration_june_1_2024.mp4" type="video/mp4"><p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that</p></video>
			`
		},
		{
			id: "accordion-open-8.3",
			groupId: "accordion-open-8",
			isChildAccordion: true,
			title: "What is the purchase receipt being asked to be uploaded? Is it for my device?",
			content: `
				The purchase receipt you are asked to upload is specifically for the screen protection you purchased, not for your device. It helps us validate the date of your product's purchase and activation of the protection plan. This receipt ensures that your screen protection coverage is accurately recorded and can be easily verified when needed.
			`
		},
		{
			id: "accordion-open-8.4",
			groupId: "accordion-open-8",
			isChildAccordion: true,
			title: "I am having trouble with the app during the registration, what can I do?",
			content: `
				<p>You can reach out to us via email at <a href="mailto:support@instaprotek.com" style="color: #00D27A;">support@instaprotek.com</a>. Our dedicated customer support team is always available and ready to assist you.</p>
			`
		},
		{
			id: "accordion-open-8.5",
			groupId: "accordion-open-8",
			isChildAccordion: true,
			title: "Can I request to delete my data?",
			content: `
				Absolutely, please email <a href="mailto:support@instaprotek.com" style="color: #00D27A;">support@instaprotek.com</a>.
			`
		}],
	},

	// WARRANTY AND REPLACEMENT (faq-group-2)
	{
	id: "accordion-open-9",
		groupId: "faq-group-2",
		isParentAccordion: true,
		title: "Warranty & Replacement",
		content: [
		{
			id: "accordion-open-9.1",
			groupId: "accordion-open-9",
			isChildAccordion: true,
			title: "How long does my limited warranty last?",
			content: `
				The limited warranty for your product lasts for a period of 1 year from the date of purchase.
			`
		},
		{
			id: "accordion-open-9.2",
			groupId: "accordion-open-9",
			isChildAccordion: true,
			title: "Do you cover the replacement of the screen protector if it's damaged or faulty?",
			content: `
				Yes, if your product comes with an Instaprotek product replacement warranty (shipping and handling fee applies), we cover the replacement of the screen protector. However, if your product comes with the Instaprotek product guarantee, which covers the breakage of the device's screen, we do not cover the replacement of the screen protector.
			`
		},
		{
			id: "accordion-open-9.3",
			groupId: "accordion-open-9",
			isChildAccordion: true,
			title: "How will I know if I am eligible to file a claim?",
			content: `
				To determine your eligibility to file a claim, please ensure that you have registered your product within 30 days from the date of purchase and that your device is still within the 1-year period of the limited warranty. Once these conditions are met, you will be eligible to file a claim.
			`
		}]
	},

	// CLAIM PROCESS (faq-group-2)
	{
		id: "accordion-open-10",
		groupId: "faq-group-2",
		isParentAccordion: true,
		title: "Claim Process",
		content: [{
			id: "accordion-open-10.1",
			groupId: "accordion-open-10",
			isChildAccordion: true,
			title: "How can I file a claim?",
			content: `
				Filing a claim with instaProtek is made easy and convenient with our self-service options. Simply log in to your account through the app and click on the "File a claim" button. Alternatively, you can reach out to us via email at <a href="mailto:support@instaprotek.com" style="color: #00D27A;">support@instaprotek.com</a>. Our dedicated customer support team is always available and ready to assist you promptly. Please see video below:
				<br><br>
				<span style="display: block; text-align: center;">Android</span><br>
				<video class="video-js" id="my-video" controls="" preload="auto" data-setup="{&quot;aspectRatio&quot;:&quot;16:9&quot;}" poster="https://acdn.dnamicro.net/instaprotek/others/instaprotek_how_to_claim_thumbnail_june_2024.png"><source src="https://acdn.dnamicro.net/instaprotek/instaprotek-how_to_self_claim_android_nov_20_2024.mp4" type="video/mp4"><p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that</p></video>
				<br><br>
				<span style="display: block; text-align: center;">iOS</span><br>
				<video class="video-js" id="my-video" controls="" preload="auto" data-setup="{&quot;aspectRatio&quot;:&quot;16:9&quot;}" poster="https://acdn.dnamicro.net/instaprotek/others/instaprotek_how_to_claim_thumbnail_june_2024.png"><source src="https://acdn.dnamicro.net/instaprotek/others/instaprotek_ios_claim_june_1_2024.mp4" type="video/mp4"><p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that</p></video>
			`
		},
		{
			id: "accordion-open-10.2",
			groupId: "accordion-open-10",
			isChildAccordion: true,
			title: "Can I file a claim after my device has been repaired?",
			content: `
				After submitting a claim with a photo of the broken device displaying the IMEI/serial number and receiving repair approval, you will have a maximum of 30 days to get your device repaired and submit the repair receipt to avoid the closure of your one-time claim.
				<br><br>
				The repair receipt should include the following accurate details:
				<br><br>
				<ul style="list-style-type: disc; margin-left: 2em;">
					<li>Repair store name and phone number</li>
					<li>Repair date</li>
					<li>IMEI (for smartphones) or serial number (for tablets and wearables)</li>
					<li>Device make and model</li>
					<li>Type of repair performed</li>
					<li>Amount paid</li>
				</ul>
				<br>
				To submit the receipt, you have two convenient options:
				<br><br>
				<ol style="list-style-type: decimal; margin-left: 2em;">
					<li>Upload a photo of the receipt using the instaProtek app</li>
					<li>Email the photo of the receipt to <a href="mailto:support@instaprotek.com" style="color: #00D27A;">support@instaprotek.com</a></li>
				</ol>
				<br>
				Upon receiving the receipt, we will carefully validate it with the repair store. You will be promptly notified of the reimbursement status via email or by tracking the status in the app.
				<br><br>
				We offer different reimbursement methods for your convenience:
				<br><br>
				<ul style="list-style-type: disc; margin-left: 2em;">
					<li>ACH Transfer</li>
					<li>PayPal* (Please note: PayPal may charge their own processing fees to receive funds)</li>
					<li>Check* (Please note: A processing fee of $12.99 applies)</li>
				</ul>
				<br>
				Please select your preferred reimbursement method within 30 days from the date of approval to ensure a smooth process. Failure to do so may result in the closure of your one-time claim. We kindly request that you submit your receipt in a timely manner to avoid any inconvenience.
			`
		},
		{
			id: "accordion-open-10.3",
			groupId: "accordion-open-10",
			isChildAccordion: true,
			title: "Can I file a claim after my device has been repaired?",
			content: `
				Before proceeding with the repair of your device, it is crucial to file a claim and submit photo/s of the damaged device through our app. This step is essential in processing your claim.
			`
		},
		{
			id: "accordion-open-10.4",
			groupId: "accordion-open-10",
			isChildAccordion: true,
			title: "How much would be my coverage amount?",
			content: `
				The coverage amount for your device varies based on the specific product you purchased. You can find the details regarding your coverage amount either in your registered account upon registration or on the packaging of the product you purchased.
			`
		}]
	},
	
	// Enterprise (faq-group-3)
	{
		id: "accordion-open-11",
		groupId: "faq-group-3",
		title: "How to register devices?",
		content: `
		<p>To get started with the bulk registration of products, follow the steps below:</p>
		<br>
		<ul style="margin-left: 2em;">
			<li>Step 1: Log in to your instaProtek account by visiting the instaProtek portal at <a href="https://crm.instaprotek.com/enterprise/login" style="color: #00D27A;">crm.instaprotek.com/enterprise/login</a>.</li>
			<br>
			<li>Step 2: Navigate to the "Registrations" menu and select Import CSV. You can upload your bulk registration file by either dragging and dropping it into the designated area or by selecting the file manually. If you need a template, download the sample batch registration file provided.</li>
			<br>
			<li>Step 3: Carefully review the uploaded data. Once everything is accurate, click Upload to initiate the bulk registration process.</li>
			<br>
			<li>Step 4: To view the list of all registered products, click View All Registrations.</li>
		</ul>
		<br>
		<p>For more help, email <a href="mailto:enterprise@instaprotek.com" style="color: #00D27A;">enterprise@instaprotek.com</a> or visit <a href="/" style="color: #00D27A;">instaprotek.com</a>.</p>
		<br>
		<p>Please see video below:</p>
		<br>
		<video class="video-js" id="my-video" controls="" preload="auto" data-setup="{&quot;aspectRatio&quot;:&quot;16:9&quot;}" poster="https://acdn.dnamicro.net/instaprotek/instaprotek_how_to_enterprise_register_claim_thumbnail_aug_2024.png"><source src="https://acdn.dnamicro.net/instaprotek/instaprotek-enterprise-registration-video-v2.mp4" type="video/mp4"><p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that</p></video>
		`
	},

	{
		id: "accordion-open-12",
		groupId: "faq-group-3",
		title: "How to file a claim?",
		content: `
		<p>To file a claim, follow these steps:</p>
		<br>
		<ul style="margin-left: 2em;">
			<li>Step 1: Log in to your instaProtek account at <a href="https://crm.instaprotek.com/enterprise/login" style="color: #00D27A;">crm.instaprotek.com/enterprise/login</a>.</li>
			<br>
			<li>Step 2: Go to the Claim Reports menu and click New.</li>
			<br>
			<li>Step 3: Select the relevant registration and click Next.</li>
			<br>
			<li>Step 4: Review the product details, then click Next.</li>
			<br>
			<li>Step 5: Enter the claim note and click Next.</li>
			<br>
			<li>Step 6: Fill in the claim details and click Done.</li>
			<br>
			<li>Step 7: A popup will show your claim details and status in the upper right corner of the portal.</li>
		</ul>
		<br>
		<p>For more help, email <a href="mailto:enterprise@instaprotek.com" style="color: #00D27A;">enterprise@instaprotek.com</a> or visit <a href="/" style="color: #00D27A;">instaprotek.com</a>.</p>
		<br>
		<p>See the video below:</p>
		<br>
		<video class="video-js" id="enterprise_tutorial_claim_video" controls="" preload="auto" data-setup="{&quot;aspectRatio&quot;:&quot;16:9&quot;}" poster="https://acdn.dnamicro.net/instaprotek/instaprotek_how_to_enterprise_register_claim_thumbnail_aug_2024.png"><source src="https://acdn.dnamicro.net/instaprotek/instaprotek-enterprise-registration-video-v2.mp4" type="video/mp4"><p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that</p></video>
		`
	},

	// TROUBLESHOOTING (faq-group-4)
	{
		id: "accordion-open-13",
		groupId: "faq-group-4",
		title: "If you are encountering difficulties installing the instaProtek app, you can try the following steps:",
		content: `
		<ul class="faq-troubleshoot-style" style="margin-left: 2em;">
			<li>Go to your phone's "Settings" menu.</li>
			<li>Tap on "Apps" or "Applications" (the exact wording may vary depending on your device).</li>
			<li>Scroll down and locate "Google Play Store" from the list of installed apps.</li>
			<li>Tap on "Google Play Store" to access its settings.</li>
			<li>Within the Google Play Store settings, tap on "Storage."</li>
			<li>Look for options to "Clear cache" and "Clear data" and select both of them.</li>
			<li>Once you have cleared the cache and data, exit the settings.</li>
			<li>Open the Google Play Store app again.</li>
			<li>Search for "instaProtek" and redownload the app.</li>
			<li>By following these steps, you should be able to resolve any installation issues you are facing with the instaProtek app. If you continue to experience problems, please don't hesitate to contact our support team via email at <a href="mailto:support@instaprotek.com" style="color: #00D27A;">support@instaprotek.com</a> for further assistance.</li>
		</ul>
		<br>
		<div style="display: flex; flex-direction: column;">
			<span style="display: block; text-align: center;">Android</span><br>
			<video class="video-js" id="my-video" controls="" preload="auto" data-setup="{&quot;aspectRatio&quot;:&quot;16:9&quot;}" poster="/imgs/instaprotek_video_poster.webp"><source src="https://acdn.dnamicro.net/instaprotek/instaprotek_support_faq_troubleshooting_aug_2024_v1.mp4" type="video/mp4"><p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that</p></video>
		</div>
		`
	},
]

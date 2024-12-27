import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

const contactInfo = {
  EIN: "35-2756453",
  phone: "(877) 667 0463",
  address: "3059 WHISPER LAKE LN APT H WINTER PARK, FL 32792",
  organization: "AGMAE LLC",
  email: "Info@Fitdietpro.com",
  nameProject: 'Fit Diet Pro'
};

const metaDataPage = {
  siteName: "Don",
  url: "https://don.com",
  title: contactInfo.nameProject,
  description:
    "Choose our a safe and successful weight-loss program based on research and clinical experience for long lasting, sustainable weight loss.",
};

const navigation = [
  {
    label: "Homepage",
    href: "/",
  },
  {
    label: "Private Coaching",
    href: "/private-coaching",
  },
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    label: "Terms & Conditions",
    href: "/terms-conditions",
  },
];

const heroData = {
  heading1: "Transform Your Life with Expert Health Coaches",
  description: "If you think wellness is expensive, try illness.",
  image:
    "/custom/healthy-food-2.webp",
};

const benefitOne = {
  title: "Highlight your benefits",
  desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
  image:
    "/custom/woman-with-broccoli.webp",
  bullets: [
    {
      title: "Healthy Diets",
      desc: `${contactInfo.nameProject} suggest and provide the best Healthy Diet plan with wide variety of healthy foods.`,
      icon: <FaceSmileIcon />,
    },
    {
      title: "Nutrition Strategies",
      desc: "Understand your requirements, and our dietitian plan nutrition strategies to set fiber boost, fruits, vegetables, and portion control.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Individual Support",
      desc: "We have highly qualified Nutritions and exercise professionals who help you with Individual support as per need.",
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: "Excercise Daily",
      desc: "To lose or maintain weight, reduce your sitting time and at least start 30 minutes of physical exercise every day.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: "img/benefit-two.png",
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};

const footerData = {
  description:
    "We are committed to helping you achieve your weight loss goals with personalized support, expert guidance, and proven strategies. Whether you're just starting your journey or looking for new ways to stay motivated, our team is here to provide the resources and encouragement you need to succeed.",
  contactInfos: [
    // {
    //   label: "Organization",
    //   value: contactInfo.organization,
    //   icon: '/icons/ic-building.svg'
    // },
    {
      label: "Office Address",
      value: contactInfo.address,
      icon: "/icons/ic-location.svg",
    },
    {
      label: "Phone Number",
      value: contactInfo.phone,
      icon: "/icons/ic-phone.svg",
    },
    {
      label: "Email",
      value: contactInfo.email,
      icon: "/icons/ic-envelop.svg",
    },
    {
      label: "EIN Number",
      value: `EIN: ${contactInfo.EIN}`,
      icon: "/icons/ic-building.svg",
    },
  ],
  legalNavigation: [
    {
      label: "Contact Us",
      href: "/contact-us",
    },
    {
      label: "Privacy Policy",
      href: "/privacy-policy",
    },
    {
      label: "Terms & Conditions",
      href: "/terms-conditions",
    },
  ],
};

const blogData = [
  {
    link: "/corporate-diet-plans-employee-diet-plans",
    img: "/custom/blogs/corporate-diet.webp",
    header: "Corporate Diet Plans - Employee Diet Plans",
  },
  {
    link: "/sports-nutrition-eating-for-exercise-and-sports",
    img: "/custom/blogs/sport-nutrition.webp",
    header: "Sports Nutrition – Eating for Exercise and Sports",
  },
  {
    link: "/weight-management",
    img: "/custom/blogs/weight-management.webp",
    header: "Weight Management",
  },
];

const faqData = {
  description:
    "Answer your customers possible questions here, it will increase the conversion rate as well as support or chat requests.",
  faqs: [
    {
      question: "What is life coaching?",
      answer: `
      Life coaching is a professional partnership where a trained coach helps individuals identify and achieve personal or professional goals. Life coaches provide support, guidance, and motivation to help clients gain clarity, overcome obstacles, and make meaningful changes in their lives. Through structured conversations, assessments, and action plans, life coaches assist clients in areas like career, relationships, health, confidence, and overall well-being. The coaching process is forward-focused, aiming to unlock a person’s potential and empower them to make positive, lasting transformations in their personal and professional life.`,
    },
    {
      question: "What does a life coach do?",
      answer: `
        <div>
          <p>A <strong>life coach</strong> helps individuals clarify their goals, overcome obstacles, and make meaningful progress in their personal and professional lives. Here’s what a life coach typically does:</p>
          <ol>
            <li><p><strong>Goal Setting</strong>: A life coach works with clients to identify their goals, whether related to career, health, relationships, or personal development. They help clients define clear, achievable objectives.</p></li>
            <li><p><strong>Accountability</strong>: Life coaches hold clients accountable for taking action toward their goals. Regular check-ins and progress tracking ensure clients stay on track and maintain motivation.</p></li>
            <li><p><strong>Support and Motivation</strong>: A life coach provides encouragement, emotional support, and motivation throughout the coaching process, helping clients stay focused and confident as they work toward their goals.</p></li>
            <li><p><strong>Overcoming Obstacles</strong>: Life coaches help clients identify and overcome limiting beliefs, fears, and barriers that may be holding them back from success.</p></li>
            <li><p><strong>Personal Growth</strong>: Coaches guide clients in developing better self-awareness, confidence, and emotional resilience, which are essential for lasting transformation.</p></li>
            <li><p><strong>Action Plans</strong>: They help clients create actionable plans with step-by-step strategies to achieve their desired outcomes, ensuring that each action aligns with the client’s values and priorities.</p></li><li><p><strong>Skill Development</strong>: Life coaches help clients develop life skills such as time management, communication, stress management, decision-making, and more, to enhance overall personal effectiveness.</p></li>
          </ol>
          <p>Through these methods, a life coach empowers clients to make positive changes and achieve greater fulfillment in all aspects of their life.</p></div>
      `,
    },
    {
      question: "Is life coaching therapy or counseling?",
      answer:
        "Life coaching in a health organization focuses on empowering individuals to make positive changes and achieve their wellness goals, while therapy or counseling provides professional support for managing mental health concerns and emotional challenges. If deeper emotional issues are identified during life coaching sessions, clients may be referred to licensed therapists for additional support.",
    },
  ],
};

const privacyPolicyData = `
<div class="elementor-element elementor-element-7fb218cc elementor-widget elementor-widget-text-editor" data-id="7fb218cc" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
<p>This “Privacy Policy” describes the privacy practices of ${contactInfo.nameProject}, operated by ${contactInfo.organization}. In addition, this Privacy Policy outlines your rights and choices regarding the Personal Information we collect.</p>
<p>1. Personal Information We Collect<br>We collect personal information as described below. Please note that this Privacy Policy does not apply to personal information that we process on behalf of our business clients. Our use of this personal information is governed by our agreements with those clients. If you have concerns regarding personal information that we process on behalf of a business, please review their privacy policy and direct your concerns to that business or review their privacy policy.</p>
<p>Information you provide to us: Personal information you provide to us through our website may include:<br>Business and personal contact information, such as your first and last name, email and mailing addresses, phone number, professional title, and company name.<br>Profile information, such as your username and password used to establish an online account with us.<br>Registration information related to services or events you register for.<br>Feedback or correspondence you provide when you contact us with questions, feedback, or other inquiries.<br>Precise geolocation information when you authorize us to access your location.<br>Transaction information, including details about payments and products or services purchased from us.<br>Usage information, such as content you upload to our website or submit to us, including information related to interactive features.<br>Marketing information, including your communication preferences and engagement with our communications.<br>Other information not specifically listed here but used in accordance with this Privacy Policy or as disclosed at the time of collection.<br>Information we obtain from social media platforms: When you interact with our social media pages, the platform provider’s privacy policy will apply to your interactions and their collection, use, and processing of your personal information. Information you or the platforms provide to us will be treated in accordance with this Privacy Policy.<br>2. How We Use Your Personal Information<br>We use your personal information for the following purposes and as otherwise described in this Privacy Policy or at the time of collection:</p>
<p>To operate the Service: We use your personal information to provide, operate, and improve our website, including:<br>Providing information about our products and services.<br>Establishing and maintaining your user profile.<br>Communicating with you about the Service, including announcements, updates, security alerts, and support messages.<br>Understanding your needs and interests to personalize your experience with the Service and our communications.<br>Providing support and maintenance for the Service.<br>Responding to your requests, questions, and feedback.<br>For research and development: We analyze the use of the Service to improve it and develop new products and services.<br>To comply with the law: We use your personal information as necessary to comply with applicable laws, lawful requests, and legal processes.<br>For compliance, fraud prevention, and safety: We may use and disclose your personal information to protect rights, privacy, safety, or property, enforce terms and conditions, and investigate and deter against fraudulent, harmful, unauthorized, unethical, or illegal activity.<br>With your consent: In some cases, we may ask for your consent to collect, use, or share your personal information, as required by law.<br>3. Information We Disclose<br>No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All other categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.</p>
<p>4. How We Share Your Personal Information<br>we do not share your personal information with third parties without your consent, except in the following circumstances or as described in this Privacy Policy:</p>
<p>For compliance, fraud prevention, and safety: We may share your personal information for the purposes mentioned earlier in this Privacy Policy.<br>5. Your Choices<br>In this section, we describe the rights and choices available to all users.</p>
<p>Access or Update Your Information. If you have registered for an account with us, you may review and update certain personal information in your account profile by logging into the account.</p>
<p>Opt-out of marketing communications. You may opt-out of marketing-related emails by following the opt-out or unsubscribe instructions at the bottom of the email, or by contacting us at ${contactInfo.email}. You may continue to receive service-related and other non-marketing emails.</p>
<p>Cookies. Most browser settings let you delete and reject cookies placed by websites. Many browsers accept cookies by default until you change your settings. If you do not accept cookies, you may not be able to use all functionality of the Service and it may not work properly. For more information about cookies, including how to see what cookies have been set on your browser and how to manage and delete them, visit https://www.allaboutcookies.org. We use Google Analytics to help us understand user activity on the Service. You can learn more about Google Analytics cookies at https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage and about how Google protects your data at https://policies.google.com/privacy. You can prevent the use of Google Analytics relating to your use of the Service by downloading and installing a browser plugin available at https://tools.google.com/dlpage/gaoptout.</p>
<p>Advertising choices. You can limit use of your information for interest-based advertising by:</p>
<p>Browser settings. Blocking third-party cookies in your browser settings.<br>Privacy browsers/plug-ins. By using privacy browsers or ad-blocking browser plug-ins that let you block tracking technologies.<br>Platform settings. Google offers opt-out features that let you opt-out of use of your information for interest-based advertising:<br>Google: https://adssettings.google.com<br>Ad industry tools. Opting out of interest-based ads from companies participating in the following industry opt-out programs:<br>Network Advertising Initiative: https://optout.networkadvertising.org<br>Digital Advertising Alliance: https://optout.aboutads.info<br>AppChoices mobile app, available at https://www.youradchoices.com/appchoices, will allow you to opt out of interest-based mobile app ads served by participating members of the Digital Advertising Alliance.<br>You will need to apply these opt-out settings on each device from which you wish to opt-out.</p>
<p>Do Not Track. Some Internet browsers may be configured to send “Do Not Track” signals to the online services that you visit. We currently do not respond to “Do Not Track” or similar signals. To find out more about “Do Not Track,” please visit https://www.allaboutdnt.com.</p>
<p>Choosing not to share your personal information. Where we are required by law to collect your personal information, or where we need your personal information in order to provide the Service to you, if you do not provide this information when requested (or you later ask to delete it), we may not be able to provide you with our services. We will tell you what information you must provide to receive the Service by designating it as required at the time of collection or through other appropriate means.</p>
<p>6. Security Practices<br>The security of your personal information is important to us. We employ a number of organizational, technical and physical safeguards designed to protect the personal information we collect. However, security risk is inherent in all internet and information technologies and we cannot guarantee the security of your personal information. Email, in particular, is an insecure way to transmit personal information. Please take special care regarding what information you send to us via email.</p>
<p>7. Children<br>The Service is not directed to, and we do not knowingly collect personal information from, anyone under the age of 18. If a parent or guardian becomes aware that his or her child has provided us with information without their consent, he or she should contact us. We will delete such information from our files as soon as reasonably practicable. We encourage parents with concerns to contact us.</p>
<p>8. Changes to this Privacy Policy<br>We reserve the right to modify this Privacy Policy at any time. If we make material changes to this Privacy Policy, we will notify you by updating the date of this Privacy Policy and posting it on the Service. We may, and if required by law, will also provide notification of changes in another way that we believe is reasonably likely to reach you, such as via e-mail (if you have an account where we have your contact information) or another manner through the Service.</p>
<p>Any modifications to this Privacy Policy will be effective upon our posting the new terms and/or upon implementation of the new changes on the Service (or as otherwise indicated at the time of posting). In all cases, your continued use of the Service after the posting of any modified Privacy Policy indicates your acceptance of the terms of the modified Privacy Policy.</p>
<p>How to Contact Us<br>If you have any questions about this Privacy Policy, please contact us at ${contactInfo.email}</p>						</div>
				</div>
`;

const termsData = `
<div class="elementor-widget-container">
<p>Permitted Use</p>
<p>The content on this website is intended for your personal, legitimate, and non-commercial use in connection with educational consulting services. Any usage of the website by a competing company or any other non-consumer third party is strictly prohibited. Without our prior written consent, you are not permitted to: (i) establish links from another website to this one; (ii) post, transmit, duplicate, alter, create derivative works from, distribute, sell, or republish any content obtained or downloaded from this website; or (iii) engage in systematic retrieval of data or other content from this website. This prohibition encompasses activities mandated by applicable laws.</p>
<p>Copyright and Trademarks</p>
<p>Unless otherwise specified, all materials on this website, including theTHE LIGHT 8 LLC, logo and otherTHE LIGHT 8 LLC, trademarks and service marks, are the property of Fit Diet Pro.com and are safeguarded by international copyright and trademark laws. All rights reserved. © 2024THE LIGHT 8 LLC . Any other use is strictly prohibited.</p>
<p>Our Products and Services</p>
<p>The information and materials provided on this website are for general reference purposes only and may not comprehensively describe the terms, conditions, and exceptions related to Fit Diet Pro.com’s products and services. Coverage availability and requirements may vary by state and your individual circumstances. The products and services featured on this website are exclusively accessible in jurisdictions where Fit Diet Pro.com holds the requisite licenses.</p>
<p>Registration and Opting-In for the Service</p>
<p>To enroll in the service, you are required to provide your mobile phone number and consent to these terms and conditions. Additionally, you must be at least 18 years of age to enroll. Prior to commencing the service, you will need to acknowledge these terms. Fit Diet Pro.com retains the right to cease offering the service at any time, with or without notice.</p>
<p>By opting into the service, you:</p>
<p>Acknowledge that agreeing to receive messages is not a mandatory condition for making a purchase.<br>Confirm that you are either the subscriber to the specified phone number or an authorized user of that number under a family or business plan.<br>Consent to the use of an electronic record to document your opt-in. For a free paper or email copy of the opt-in or to update your contact information in our records, please contact info@Fit Diet Pro.com. To view and retain an electronic copy of these Terms or the remainder of your opt-in, you will need (i) a device such as a computer or mobile phone, and (ii) an email account accessible from the device, along with a browser or other software capable of displaying emails.<br>Message Frequency</p>
<p>Upon confirming your decision to opt-in to the Service, the frequency of messages you receive may vary.</p>
<p>Charges and Carriers</p>
<p>Standard text messaging and data charges may apply. Please review your service agreement with your wireless carrier or contact them to ascertain the fees for sending and receiving text messages and any additional charges associated with utilizing the service. You are responsible for any message, data, or other fees that may be incurred as a result of using the service, including usage and subscription fees.</p>
<p>Supported carriers include AT&amp;T, T-Mobile, Sprint, Boost, Virgin Mobile, U.S. Cellular, Cricket, Alltel, Cincinnati Bell, Cellcom, C-Spire, nTelos, MetroPCS, and other smaller regional carriers. The availability of the Service may vary among wireless carriers, and Fit Diet Pro.com may add or remove carriers from the Service without prior notice. Fit Diet Pro.com and mobile carriers are not liable for any undue delays, delivery failures, or errors in messages.</p>
<p>To STOP the Service</p>
<p>To cease receiving text messages from Fit Diet Pro.com, simply text the word STOP in response to any messages received from Fit Diet Pro.com. This is the sole method to opt out. For services using a different number, text STOP to that respective number to unsubscribe. Your opt-out request may prompt either a confirmation text or a request for clarification regarding which text message program the request applies to (if you are subscribed to more than one). To complete the opt-out process, please provide the requested clarification. You acknowledge that the text message platform may not recognize and respond to unsubscribe requests lacking the STOP keyword command. Consequently, you agree that Fit Diet Pro.com and its service providers shall not be held liable for failing to honor such requests. If you unsubscribe from one of our text message programs, you may continue to receive text messages from Fit Diet Pro.com through any other programs you have joined until you separately unsubscribe from those programs. These terms remain in effect even if you withdraw your consent or opt out of the service. Our SMS campaign presently updates subscribers about potential minority and disabled benefits they may be eligible for through Fit Diet Pro.com.</p>
<p>Disclaimer of Warranties</p>
<p>All information, products, content, and other materials on the Site, accessible from the Site, or within a Third-Party Site are provided “as is” and without warranties or representations of any kind, whether express or implied. Consequently,Fit Diet Pro.com expressly disclaims all warranties, whether express or implied, including, but not limited to, the warranties of title and non-infringement, as well as the implied warranties of merchantability and fitness for a particular purpose. Furthermore, Fit Diet Pro.com does not warrant or represent that: (i) the Site will operate without errors or interruptions; (ii) defects will be rectified; (iii) the Site, any emails sent by Fit Diet Pro.com, or the server facilitating the Site will be free from viruses or other harmful elements; (iv) the Site will be available to you, or that you will qualify for the offered products or services; (v) the materials on the Site will remain accurate as of any specific date; or (vi) the products or services presented through the Site are available outside the United States or in jurisdictions where Fit Diet Pro.com lacks proper licensing.</p>
<p>If you reside in a jurisdiction that does not permit a disclaimer of implied warranties, the above disclaimer, or a portion thereof, may not be applicable to you.</p>
<p>Limitation of Liability</p>
<p>Fit Diet Pro.com shall not be held liable for any losses, damages, injuries, or claims, including any special, indirect, incidental, consequential, exemplary, or punitive damages, arising out of or relating in any manner to: (i) the Site, materials on the Site, or the inability to use the Site; (ii) any Third-Party Site, materials on any Third-Party Site, or the inability to use any Third-Party Site; (iii) any defect, omission, error, interruption, delay, or computer virus; or (iv) except in cases of gross negligence or intentional actions by Fit Diet Pro.com, the unauthorized alteration of or access to your transmissions or personal data.</p>
<p>In jurisdictions where the limitation of liability for certain damages is not permitted by law, the above limitation of liability, or a portion thereof, may not apply to you. Nevertheless, you consent to Fit Diet Pro.com’s aggregate liability for all damages, losses, injuries, or claims of any kind or nature being restricted to the amount you have paid to access the website in any case. These Terms of Use remain in effect until terminated by either party. You may terminate these Terms of Use at any time by discontinuing all use of the website’s information and destroying any materials obtained from it, including all related documentation and copies. Fit Diet Pro.com may also terminate these Terms of Use and/or the products or services offered by Fit Diet Pro.com at any time without notice if, at our sole discretion, you violate any term or condition of these Terms of Use. Upon termination, you must cease all use of the website’s information and destroy any materials obtained from Fit Diet Pro.com, including all related documentation and copies. Fit Diet Pro.com reserves the right to terminate all or part of the website at any time without notice to you.</p>
<p>Contact Information</p>
<p>For queries regarding our privacy policy, please reach out to us at the following address or email:</p>
<p>Email: ${contactInfo.email}</p>
<p>EIN: ${contactInfo.EIN}</p>
<p>Phone: ${contactInfo.phone}</p>
<p>Address: ${contactInfo.address}</p>
<p>Organization: ${contactInfo.organization}</p>						</div>
`;

const meetOurTeams = [
  {
    name: "Jack Doe",
    role: "Meditation Coach",
    img: "/custom/member-1.webp",
  },
  {
    name: "John Doe",
    role: "Diet Coach",
    img: "/custom/member-2.webp",
  },
  {
    name: "Jenny Doe",
    role: "Health Coach",
    img: "/custom/member-3.webp",
  },
];

export {
  benefitOne,
  benefitTwo,
  heroData,
  footerData,
  navigation,
  metaDataPage,
  faqData,
  privacyPolicyData,
  contactInfo,
  meetOurTeams,
  blogData,
  termsData,
};

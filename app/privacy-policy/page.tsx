export const metadata = { title: "Privacy Policy | BippiBot" };

const SECTIONS: { h: string; p: string[] }[] = [
  {
    h: "What information do we collect?",
    p: [
      "We collect information from you when you subscribe to our newsletter, fill out a form, or submit information. We may collect information about your computer, including your IP address, operating system, and browser type using Google Analytics, which is used to improve browsing for everyone and does not identify any individual.",
      "When ordering or registering on our site, as appropriate, you may be asked to enter your name, e-mail address, mailing address, or phone number. You may, however, visit our site anonymously. We transfer information about you if BippiBot is acquired by or merged with another company. In this event, BippiBot will notify you before information about you is transferred and becomes subject to a different privacy policy.",
    ],
  },
  {
    h: "What do we use your information for?",
    p: [
      "Any of the information we collect from you may be used to process transactions. Your information, whether public or private, will not be sold, exchanged, transferred, or given to any other company for any reason whatsoever, without your consent, other than for the express purpose of delivering the purchased product or service requested.",
      "The email address you provide may be used to send you information, respond to inquiries, and/or other requests or questions.",
    ],
  },
  {
    h: "How do we protect your information?",
    p: ["We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information."],
  },
  {
    h: "Do we disclose any information to outside parties?",
    p: [
      "We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety.",
    ],
  },
  {
    h: "Third-party links",
    p: ["Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We, therefore, have no responsibility or liability for the content and activities of these linked sites."],
  },
  {
    h: "Third-party services",
    p: [
      "In general, the third-party providers used by us will only collect, use, and disclose your information to the extent necessary to allow them to perform the services they provide to us. Certain third-party service providers, such as payment gateways, have their own privacy policies with respect to the information we are required to provide to them for your purchase-related transactions.",
      "Once you leave our site or are redirected to a third-party website or application, you are no longer governed by this Privacy Policy or our website's Terms of Service.",
    ],
  },
  {
    h: "Remarketing",
    p: [
      "BippiBot may use third-party vendor re-marketing tracking cookies, including but not limited to the Google Adwords tracking cookie. This means we will continue to show ads to you across the internet, specifically on the Google Content Network. We are not collecting any identifiable information through the use of Google's or any other third-party remarketing system.",
      "Third-party vendors, including Facebook and Google, whose services we use, will place cookies on web browsers to serve ads based on past visits to our website.",
    ],
  },
  {
    h: "This website may use Google AdWords",
    p: ["This website uses the Google AdWords remarketing service to advertise on third-party websites (including Google) to previous visitors to our site. Any data collected will be used in accordance with our own privacy policy and Google's privacy policy."],
  },
  {
    h: "California Online Privacy Protection Act Compliance",
    p: ["Because we value your privacy, we have taken the necessary precautions to be in compliance with the California Online Privacy Protection Act. We will not distribute your personal information to outside parties without your consent."],
  },
  {
    h: "Children's Online Privacy Protection Act Compliance",
    p: ["We are in compliance with the requirements of COPPA, and we do not collect any information from anyone under 13 years of age. Our website, products, and services are all directed to people who are at least 13 years old or older."],
  },
  {
    h: "Personal, Financial, and Property Information",
    p: ["BippiBot may require you to submit certain information so we can help you in your situation. This information may include your contact information, property details, or even financial information needed to analyze your property and situation. This information is for our use only and will not be shared with outside parties unless necessary to assist you in solving your situation."],
  },
  {
    h: "Online Privacy Policy Only",
    p: ["This online privacy policy applies only to information collected through our website and not to information collected offline."],
  },
  {
    h: "Changes to our Privacy Policy",
    p: ["If we decide to change our privacy policy, we will post those changes on this page."],
  },
  {
    h: "Contacting Us",
    p: ["If there are any questions regarding this privacy policy, you may contact us with the information on our contact page."],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-bold text-[var(--navy-900)] sm:text-4xl">Privacy Policy</h1>
      <div className="mt-10 space-y-8">
        {SECTIONS.map((s) => (
          <div key={s.h}>
            <h2 className="text-lg font-semibold text-[var(--navy-900)]">{s.h}</h2>
            {s.p.map((para, i) => (
              <p key={i} className="mt-2 text-sm leading-relaxed text-[var(--slate-500)]">
                {para}
              </p>
            ))}
          </div>
        ))}
      </div>
      <p className="mt-12 text-sm font-medium text-[var(--navy-900)]">
        StreamCities, LLC
        <br />
        Las Vegas, NV USA
      </p>
    </section>
  );
}

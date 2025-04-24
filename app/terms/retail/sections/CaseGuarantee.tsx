import Link from 'next/link';
import React from 'react';

const CaseGuarantee = () => {
  return (
    <>
      {/* Case-Guarantee - Start */}
      <section className="space-y-4 mt-8">

        {/* Case-Guarantee Header - Start */}
        <div className="font-bold">
          <h2 className="text-xl text-green-primary1">Case Guarantee</h2>
          <p>Eligible Device: Mobile Phones</p>
          <p>Product: Protection Case</p>
        </div>
        {/* Case-Guarantee Header - End */}

        {/* Case-Guarantee Content - Start */}
        <p>
          This limited device protection, guarantees that instaProtek will provide coverage against defects described below. The limited device protection will be effective for a period not to exceed one (1) year beginning on the original purchase date as shown on your purchase receipt. Your coverage is limited to the maximum amount set forth on your Product&#39;s packaging and/or as specified on the Product&#39;s website. This amount will be applied towards the repair of your Eligible Device excluding any type of screen at approved repair facilities specified by instaProtek at the time a claim is initiated through instaProtek&#39;s Service Center. This Product Guarantee does not cover any loss or theft, any type of liquid/water damage, software failure, and anything to do with a screen.
        </p>
        <p>
          <span className="font-bold">Register your device protection</span>: After purchasing and installing the Product on your Eligible Device, download the instaProtek app from the Apple or Google Play store, run the app and follow the instructions. The Eligible Device must be undamaged at the time the Product is applied. Physical damage incurred prior to application of the Product will not be covered. To qualify for the device repair guarantee, your Eligible Device must be protected by the Product at the time of damage. This limited device protection is non-transferable and only applies to the original purchaser. The Product must have been purchased from an authorized dealer. Your receipt must clearly show the place of purchase, date of purchase and the Product purchased.
        </p>
        <p>
          If you successfully complete all of the registration steps, then you will receive a confirmation email, at your designated email address. If you do not receive a confirmation email, it is your responsibility to contact our Service Center, via the information listed on the Product packaging or App/Website to resolve this situation. Your Eligible Device will not be considered covered unless you have received a confirmation email.
        </p>
        <p>
          Device protection coverage is subject to the maximum coverage amount specified on your Product&#39;s packaging and only if the purchased Product is properly applied. instaProtek will not be liable for any indirect or incidental damages arising from the use of this Product.
        </p>
        <p>
          <span className="font-bold">Claim Process</span>: You are responsible to ensure that you have used the Product properly, and within its specified limits by familiarizing yourself with the instructions applicable for your Product.
        </p>
        <p>
          If you do so and accidental physical damage occurs to your Eligible Device within 1 year following your Product purchase date, then you may use your&nbsp;<span className="font-bold">one-time</span>&nbsp;Product claim and initiate a claim request through the instaProtek app. The instaProtek app must have been on the device you registered at the time of damage. The app will be used to verify your registration and device information. Our Service Center will also verify eligibility and coverage. If your Claim passes the verification process, then our Service Center will provide approval for your Claim and direct you on how to complete the repair.&nbsp;<span className="font-bold">You must submit photos of your broken device and obtain approval of your Claim prior to having your device repaired.</span>&nbsp;You are responsible for the cost of repair at the time of repair, however upon completion of the repair you must provide the repair receipt. You will be reimbursed based on the amount of repair minus any amount covered by your warranty/insurance carrier. Your reimbursement check will be sent to the address on file in the name of the person registered. If your Claim has been denied, a reason for denial (such as, for example, incomplete information, mismatched information, incorrect Product application, etc.) will be provided. Once the Claim has been completed (either finally approved or denied) your one- time use of the limited device protection is deemed completed and is no longer available to you for the Eligible Device and the Product purchased.
        </p>
        <p>
          A claim can be denied if the Eligible Device cannot be repaired and must be replaced. However, if the primary cause of replacement is determined to be related to the Coverage Type and the price of the covered part can be determined from the following website:&nbsp;<Link href="https://www.mobilesentrix.com/" target="_blank" rel="noopener noreferrer" className="underline text-green-primary1 hover:text-green-300">https://www.mobilesentrix.com/</Link>&nbsp;then the customer will be reimbursed for the cost of the part as specified in said website up to the coverage limit of the policy.
        </p>
        {/* Case-Guarantee Content - End */}
      </section>
      {/* Case-Guarantee - End */}
    </>
  );
};

export default CaseGuarantee;
import React from 'react';
import { ContentSection } from '@/components';
import { informationWeCollectTable } from '@/data';
import Link from 'next/link';

const CaliforniaPrivacyPolicy = () => {
    return (
        <ContentSection id="california-privacy-policy" title="instaProtek Privacy Policy for California Residents" style="text-center">
            {/* Introduction - Start */}
            <p>This&nbsp;<span className="font-bold">Privacy Policy for California Residents&nbsp;</span>supplements the information contained in instaProtek&#39;s Privacy Policy and applies solely to all visitors, users, and others who reside in the State of California (&quot;consumers&quot; or &quot;you&quot;). Any terms defined in the California Consumer Privacy Act of 2018 (CCPA) have the same meaning when used in this Policy.</p>
            {/* Introduction - End */}

            {/* Information We Collect - Start */}
            <p className="font-bold underline text-center">Information We Collect</p>

            <p>We collect information that identifies, relates to, describes, references, is reasonably capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular consumer, household, or device&nbsp;<span className="font-bold">(&quot;personal information&quot;)</span>. Personal information does not include:</p>

            <p>Publicly available information from government records.</p>
            <p>Deidentified or aggregated consumer information.</p>
            <p>In particular, we have collected the following categories of personal information from consumers within the last twelve (12) months:</p>

            {/* Information We Collect (TABLE) - Start */}
            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 border-separate border-spacing-0">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 px-1 lg:px-4 py-2 text-left">Category</th>
                            <th className="border border-gray-300 px-1 lg:px-4 py-2 text-left">Examples</th>
                            <th className="border border-gray-300 px-1 lg:px-4 py-2 text-left">Collected</th>
                        </tr>
                    </thead>
                    <tbody>
                        {informationWeCollectTable.map((row, index) => (
                            <tr key={index}>
                                <td className="border border-gray-300 px-1 lg:px-4 py-2">{row.category}</td>
                                <td className="border border-gray-300 px-1 lg:px-4 py-2">
                                    <div className="space-y-2">
                                        {Array.isArray(row.examples)
                                            ? row.examples.map((example, i) => (
                                                <p key={i}>{example}</p>
                                            ))
                                            : <p>{row.examples}</p>
                                        }
                                    </div>
                                </td>
                                <td className="border border-gray-300 px-1 lg:px-4 py-2 text-center">{row.collected}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Information We Collect (TABLE) - End */}

            <p>We obtain the categories of personal information listed above from the following categories of sources identified in our Privacy Policy:</p>
            {/* Information We Collect - End */}

            {/* Use of Personal Information - Start */}
            <p className="font-bold underline text-center">Use of Personal Information</p>

            <p>We may use, or disclose the personal information we collect for one or more of the following purposes identified in our Privacy Policy. We will not collect additional categories of personal information or use the personal information we collected for materially different, unrelated, or incompatible purposes without providing you notice. instaProtek will not:</p>

            <ul className="list-disc space-y-2 pl-12">
                <li>sell your personal information;</li>
                <li>process your personal information for any commercial purpose other than providing the services; or</li>
                <li>retain, use, or disclose your personal information outside of the scope of the agreement we have with you.</li>
            </ul>

            <p>For the avoidance of doubt, we are not sharing, disclosing, or making available personal information as consideration for any services we receive from others. We also understand our obligations under the CCPA and will comply with them.</p>
            {/* Use of Personal Information - End */}

            {/* Your Rights and Choices - Start */}
            <p>The California Consumer Privacy Act (the &quot;CCPA&quot;) provides consumers (California residents) with specific rights regarding their Personal Information. This section describes your CCPA rights and explains how to exercise those rights.</p>

            <ul className="list-disc space-y-2 pl-12 square-bullet">
                <li>Right to Know and Access: You have the right to know (and request that we disclose to you) what Personal Information collected, sold, and disclosed about you.</li>
                <li>Right to Request Deletion: You have the right to request that we delete any of your Personal Information that we collected from you and retained, subject to certain exceptions.</li>
                <li>Right to Opt-Out of the Sale of Your Personal Information. If you are age 16 or older, you have the right to direct us to not sell your Personal Information at any time. We do not sell the Personal Information of consumers, including those under 16 years of age.</li>
                <li>Right to Non-Discrimination: We will not discriminate against you for exercising any of your CCPA rights. Unless permitted by the CCPA, we will not: (i) deny you goods or services; (ii) charge you different prices or rates for goods or services, including through granting discounts or other benefits, or imposing penalties; (iii) provide you a different level or quality of goods or services; or (iv) suggest that you may receive a different price or rate for goods or services or a different level or quality of goods or services.</li>
            </ul>

            <p>To exercise your rights to know or delete described above, please submit a request by either emailing us at&nbsp;<Link href="mailto:support@instaprotek.com" target="_blank" rel="noopener noreferrer" className="text-green-primary1 hover:text-green-300">support@instaprotek.com</Link>&nbsp;with the subject line: CCPA REQUEST. Only you, or someone legally authorized to act on your behalf, may make a request to know or delete related to your Personal Information. You may only submit a request to know twice within a 12-month period.</p>

            <p>Your request to know or delete must provide sufficient information that allows us to reasonably verify you are the person about whom we collected Personal Information or an authorized representative, which may include providing us with your name, email address, physical address, and other information we may need to verify you identity, which varies depending on your relationship with us. We cannot respond to your request or provide you with Personal Information if we cannot verify your identity or authority to make the request and confirm the Personal Information relates to you.</p>
            {/* Your Rights and Choices - End */}

            {/* California Residents - Start */}
            <p className="font-bold underline text-center">California Residents</p>
            <p>Residents from California should read our Privacy Policy for California Residents, below, for more information.</p>
            {/* California Residents - End */}

            {/* Contact Information - Start */}
            <p className="font-bold underline text-center">Contact Information</p>
            <p>If you have any questions or comments about this notice, the ways in which instaProtek collects and uses your information described here and in the Privacy Policy, your choices and rights regarding such use, or wish to exercise your rights under California law, please do not hesitate to contact us at:</p>

            <div className="font-bold">
                <Link href="/" className="text-green-primary1 hover:text-green-300">https://www.instaprotek.com</Link>
                <p>1 Wrigley</p>
                <p>Irvine, CA 92618</p>
                <p>U.S.A</p>
                <Link href="mailto:support@instaprotek.com" className="text-green-primary1 hover:text-green-300">support@instaprotek.com</Link>
            </div>
            {/* Contact Information - End*/}
        </ContentSection>
    );
};

export default CaliforniaPrivacyPolicy;
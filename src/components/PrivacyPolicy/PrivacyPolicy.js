import React, { Component } from 'react';
import '../App/App.css';
import './PrivacyPolicy.css'
import Footer from '../Footer/Footer'

class PrivacyPolicy extends Component {
  render() {
    return (
      <div className='PrivacyPolicy'>
        <h2>Privacy Policy</h2>
        <section>
          <p>Taiki Yukawa built the Climb Note app as a free app. This SERVICE is provided by Individual at no cost and is intended
              for use as is.</p>
          <p>This page is used to inform website visitors regarding my policies with the collection, use, and
              disclosure of Personal Information if anyone decided to use my Service.</p>
          <p>If you choose to use my Service, then you agree to the collection and use of information in
              relation with this policy. The Personal Information that I collect are used for providing and
              improving the Service. I will not use or share your information with anyone except as described
              in this Privacy Policy.</p>
        </section>

        <section>
          <p><strong>Information Collection and Use</strong></p>
          <p>For a better experience while using our Service, I may require you to provide us with certain
              personally identifiable information, including but not limited to users name, pictures, audio, videos, and location.
            The information that I request will be retained by us and used as described in this privacy policy.</p>
          <p>The app does use third party services that may collect information used to identify you. <strong>Google Analytics (Google Inc.)</strong> Google Analytics is a web analysis service provided by Google Inc. (“Google”). Google utilizes the Data collected to track and examine the use of this Application, to prepare reports on its activities and share them with other Google services. Google may use the Data collected to contextualize and personalize the ads of its own advertising network. Personal Data collected: Cookies and Usage Data. Place of processing: US – <a className='privacy-link' href='https://www.google.com/intl/en/policies/privacy/' target="_blank"  rel="noopener noreferrer">Privacy Policy</a> – <a className='privacy-link' href='https://tools.google.com/dlpage/gaoptout?hl=en' target="_blank"  rel="noopener noreferrer">Opt Out</a>
          <strong>Facebook Analytics for Apps (Facebook, Inc.)</strong>
          Facebook Analytics for Apps is an analytics service provided by Facebook, Inc.
          Personal Data collected: Usage Data and various types of Data as specified in the privacy policy of the service.
          Place of processing: US – <a className='privacy-link' href='https://www.facebook.com/about/privacy/' target="_blank"  rel="noopener noreferrer">Privacy Policy</a>.</p>
        </section>

        <section>
          <p><strong>Log Data</strong></p>
          <p>I want to inform you that whenever you use my Service, in case of an error in the app I collect
              data and information (through third party products) on your phone called Log Data. This Log Data
              may include information such as your devices’s Internet Protocol (“IP”) address, device name,
              operating system version, configuration of the app when utilising my Service, the time and date
              of your use of the Service, and other statistics.</p>
        </section>

        <section>
          <p><strong>Cookies</strong></p>
          <p>Cookies are files with small amount of data that is commonly used an anonymous unique identifier.
              These are sent to your browser from the website that you visit and are stored on your devices’s
              internal memory.</p>
          <p>This Services does not uses these “cookies” explicitly. However, the app may use third party code
              and libraries that use “cookies” to collection information and to improve their services. You
              have the option to either accept or refuse these cookies, and know when a cookie is being sent
              to your device. If you choose to refuse our cookies, you may not be able to use some portions of
              this Service.</p>
        </section>

        <section>
          <p><strong>Service Providers</strong></p>
          <p>I may employ third-party companies and individuals due to the following reasons:</p>
          <ul>
              <li>To facilitate our Service;</li>
              <li>To provide the Service on our behalf;</li>
              <li>To perform Service-related services; or</li>
              <li>To assist us in analyzing how our Service is used.</li>
          </ul>
          <p>I want to inform users of this Service that these third parties have access to your Personal
              Information. The reason is to perform the tasks assigned to them on our behalf. However, they
              are obligated not to disclose or use the information for any other purpose.</p>
        </section>

        <section>
          <p><strong>Security</strong></p>
          <p>I value your trust in providing us your Personal Information, thus we are striving to use
              commercially acceptable means of protecting it. But remember that no method of transmission over
              the internet, or method of electronic storage is 100% secure and reliable, and I cannot
              guarantee its absolute security.</p>
        </section>

        <section>
          <p><strong>Links to Other Sites</strong></p>
          <p>This Service may contain links to other sites. If you click on a third-party link, you will be
              directed to that site. Note that these external sites are not operated by me. Therefore, I
              strongly advise you to review the Privacy Policy of these websites. I have no control over, and
              assume no responsibility for the content, privacy policies, or practices of any third-party
              sites or services.</p>
        </section>

        <section>
          <p><strong>Children’s Privacy</strong></p>
          <p>This Services do not address anyone under the age of 13. I do not knowingly collect personal
              identifiable information from children under 13. In the case I discover that a child under 13
              has provided me with personal information, I immediately delete this from our servers. If you
              are a parent or guardian and you are aware that your child has provided us with personal
              information, please contact me so that I will be able to do necessary actions.</p>
        </section>

        <section>
          <p><strong>Changes to This Privacy Policy</strong></p>
          <p>I may update our Privacy Policy from time to time. Thus, you are advised to review this page
              periodically for any changes. I will notify you of any changes by posting the new Privacy Policy
              on this page. These changes are effective immediately, after they are posted on this page.</p>
        </section>

        <section>
          <p><strong>Contact Us</strong></p>
          <p>If you have any questions or suggestions about my Privacy Policy, do not hesitate to contact
              me.</p>
          <p>This Privacy Policy page was created at <a className='privacy-link' href="https://privacypolicytemplate.net"
                                                        target="_blank"  rel="noopener noreferrer">privacypolicytemplate.net</a>.</p>
        </section>
        <Footer />
      </div>
    );
  }
}

export default PrivacyPolicy;

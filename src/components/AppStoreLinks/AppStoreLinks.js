import React from 'react';
import './AppStoreLinks.css';

 function AppStoreLinks (props) {
  return (
    <div className='info'>
      <div className='app-links-wrapper'>
        <h2 className='info-title'>Available on</h2>
        <div className='app-links-container'>
          <a href="https://itunes.apple.com/us/app/climb-note/id1261275461?mt=8" className='app-store-link'/>
          <a href='https://play.google.com/store/apps/details?id=com.climbnote&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png' className='play-store-link'/></a>
        </div>
      </div>
      <div className='release-note-wrapper'>
        <h2 className='info-title'>Relase Note</h2>
        <h3 className='release-sub-title'>This is an initial release with basic features!</h3>
        <ul className='release-list'>
          <li>Share climbing information:<br/>climbing locations,<br/>parking locations,<br/>and solutions with photos and videos.</li>
          <li>Follow other climbers.</li>
          <li>Find climbing information.</li>
        </ul>
        <h3 className='release-sub-title'>Future release.</h3>
        <ul className='release-list'>
          <li>search by map</li>
          <li>offline functions</li>
          <li>Find climbing information.</li>
        </ul>
      </div>
    </div>
  )
}

export default AppStoreLinks;

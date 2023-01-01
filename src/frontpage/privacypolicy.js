import Navbar from "./navbar";
import Footer from "./footer";
import style from "./index.module.css";

function Privacy() {
    return (
        <div>
        <div className={style.privacypolicy}>

            <div className={style.privacyheader}>
            <Navbar/>
                <div className={`${style.privacyheadertext} ${style.fontwhite}`}>
                <h1>RealmOfRich Privacy Policy</h1>
                <h4>RealmOfRich is a brand name of DBH Consulting LLP</h4>
                <h2><br/>We believe you should always know what data we collect from you and how we use it, and that you should have meaningful control over both. We want to empower you to make the best decisions about the information that you share with us.

                <br/><br/>That’s the basic purpose of this Privacy Policy.</h2>
                </div>
            </div>
            <div className={`${style.subhead} ${style.backshade}`}>
            <h4>You should read this policy in full, but here are a few key things we hope you take away from it:</h4>

            </div>
            <div className={style.privacycontenttextmargin}>
                <div className={style.privacycontenttext}>
                    <div><img src="./check_circle.png"></img></div>
                    <div>
                    RealmOfRich social posts are public and social posts are immediately viewable and searchable by anyone around the world. There are non non-public ways to communicate on RealmOfRich too, through protected social posts and Direct Messaging, Group posts, Group notifications and whisper messages. If you wish you can also use RealmOfRich under a pseudonym if you prefer not to use your name.
                    </div>
                </div>
                <div className={style.privacycontenttext}>
                    <div><img src="./check_circle.png"></img></div>
                    <div>
                    When you use RealmOfRich, even if you’re just looking at Social posts, we receive some personal information from you like the type of device you’re using and your IP address. You can choose to share additional information with us like your email address, phone number, address book contacts, and a public profile. We use this information for things like keeping your account secure and showing you more relevant Posts, people to follow, ads.
                    </div>
                </div>
                <div className={style.privacycontenttext}>
                    <div><img src="./check_circle.png"></img></div>
                    <div>
                    We give you control through your settings to limit the data we collect from you and how we use it, and to control things like account security, marketing preferences, apps that can access your account, and address book contacts you’ve uploaded to RealmOfRich.
                    </div>
                </div>
                <div className={style.privacycontenttext}>
                    <div><img src="./check_circle.png"></img></div>
                    <div>
                    We give you control through your settings to limit the data we collect from you and how we use it, and to control things like account security, marketing preferences, apps that can access your account, and address book contacts you’ve uploaded to RealmOfRich.
                    </div>
                </div>
            </div>
            <div className={style.privacyheader1}>
                Information You Share With Us<span id={style.number}>1</span>
            </div>
            <div className={`${style.subhead} ${style.backshade}`}>
            <h4>We require these information to provide our services to you. For example, you must have an account in order to upload or share content on RealmOfRich. When you choose to share the information below with us, we collect and use it to operate our services.
            </h4>
            </div>
            <div className={style.privacycontenttextmargin}>
                <div className={style.privacycontenttextsticky}>
                    <div className={`${style.sticky} ${style.sidebar} ${style.privacy}`}>
                    <a href="#basicaccount">Basic Account Information</a><br/><br/>
                    <a href="#publicinformation">Public Information</a><br/><br/>
                    <a href="#contactinformation">Contact Information and Address Books</a><br/><br/>
                    <a href="#directmessages">Direct Messages and Non-Public Communications</a><br/><br/>
                    <a href="#groupbanner">Group Banner, posts and Information</a><br/><br/>
                    <a href="#paymentinformation">Payment Information</a><br/><br/>
                    {/*Financial Data, Religious & Political Inclinations, Personal Identity Data*/}
                    <a href="#howyoucontrol">How You Control the Information You Share With Us</a>
                     </div>
                    <div className={`${style.main} ${style.privacycontent}`}>
                        <div className={style.privacymain}>
                            <h2 id={style.basicaccount}>Basic Account Information</h2>
                            You don’t have to create an account to use some of our service features, such as searching and viewing public RealmOfRich profiles and Group banners. If you do choose to create an account, you must provide us with some personal data so that we can provide our services to you. On RealmOfRich this includes a display name (for example, “Light Man”), a username (for example, @Lightman), a password, and an email address or phone number. Your display name and username are always public, but you can use either your real name or a pseudonym. You can also create and manage multiple RealmOfRich profiles (upto 3) from same account, for example to express different parts of your identity.
                        </div>
                        <div className={style.privacymain}>
                            <h2 id={style.publicinformation}>Public Information</h2>
                            Some activities on RealmOfRich is public, including your profile information(unless you explicitly make it private, hidden, locked), your time zone and language, when you created your account, and your Social posts and certain information about your Social posts like the date, time. You also may choose to publish your location in your Social Posts or your RealmOfRich profile. Groups you make on RealmOfRich can be either public(meaning anybody can join ), private(you limit membership). Similarly information you share inside Group can be confined to only within group or (explicitly marked posts) flow to outside of the group to people who follow the Group. People you follow and who follow you, and Social Posts you Like or Repost are also public.(unless your profile restricts it). If you like, Repost, reply, or otherwise publicly engage with an ad on our services, that advertiser might thereby learn information about you associated with the ad with which you engaged such as characteristics of the audience the ad was intended to reach. Information posted about you by other people who use our services may also be public. For example, other people may tag you in a photo (if your settings allow) or mention you in a Social Post.<br/><br/>

                            You are responsible for your Social Post and other information you provide through our services, and you should think carefully about what you make public, especially if it is sensitive information. If you update your public information on RealmOfRich, such as by deleting a post or deactivating your account, we will reflect your updated content on RealmOfRich.com, RealmOfRich for Android.<br/><br/>

                            By publicly posting content when you Post, you are directing us to disclose that information as broadly as possible, including through our APIs, and directing those accessing the information through our APIs to do the same. To facilitate the fast global dissemination of RealmOfRich Posts to people around the world, we in future may use technology like application programming interfaces (APIs) and embeds to make that information available to websites, apps, and others for their use - for example, displaying RealmOfRich Posts on a news website or analyzing what people say on RealmOfRich. We have standard terms that govern how this data can be used, and a compliance program to enforce these terms. But these individuals and companies are not affiliated with RealmOfRich, and their offerings may not reflect updates you make on RealmOfRich.
                        </div>
                        <div className={style.privacymain}>
                            <h2 id={style.contactinformation}>Contact Information and Address Books</h2>
                            We use your contact information, such as your email address or phone number, to authenticate your account and keep it - and our services - secure, and to help prevent spam, fraud, and abuse. We also use contact information to enable certain account features (for example, for login verification), and to send you information about our services, and to personalize our services, including ads. If you provide us with your phone number, you agree to receive text messages from RealmOfRich to that number as your country’s laws allow. RealmOfRich also uses your contact information to market to you as your country’s laws allow, and to help others find your account if your settings permit, including through third-party services and client applications. You can use your settings for email and mobile notifications to control notifications you receive from RealmOfRich. You can also unsubscribe from a notification by following the instructions contained within the notification or here.

                            You can choose to upload and sync your address book on RealmOfRich so that we can help you find and connect with people you know and help others find and connect with you. We also use this information to better recommend content to you and others.

                            If you email us, we will keep the content of your message, your emailaddress, and your contact information to respond to your request.
                        </div>
                        <div className={style.privacymain}>
                            <h2 id={style.directmessages}>Direct Messages and Non-Public Communications</h2>
                            We provide certain features that let you communicate more privately or control who sees your content. For example, you can use Direct Messages to have non-public conversations on RealmOfRich, protect your Social posts, limit flow of Group posts to outside of Group, whisper messages in public chats(others can see you whisper a message without actually vieweing the content of message) or host private broadcasts. When you communicate with others by sending or receiving Direct Messages, we will store and process your communications and information related to them. This includes link scanning for malicious content, link shortening, detection of spam, abuse and prohibited images, and use of reported issues. We also use information about whom you have communicated with and when (but not the content of those communications) to better understand the use of our services, to protect the safety and integrity of our platform, and to show more relevant content. We share the content of your Direct Messages with the people you’ve sent them to; we do not use them to serve you ads. Note that if you interact in a way that would ordinarily be public with RealmOfRich content shared with you via Direct Message, for instance by liking a Social post, those interactions will be public. When you use features like Direct Messages to communicate, remember that recipients have their own copy of your communications on RealmOfRich - even if you delete your copy of those messages from your account - which they may duplicate, store, or re-share.
                        </div>
                        <div className={style.privacymain}>
                            <h2 id={style.groupbanner}>Group Banner, posts and Information</h2>
                            Group Banner is public on RealmOfRich however the contents are not. Information on how many members have joined the Group, Group badges any other public data about Group is visible to anyone on RealmOfRich. Anything you post inside the Group is protected by default unless you mark it public which then is visible to anyone following the Group but not member of the Group.
                        </div>
                        <div className={style.privacymain}>
                            <h2 id={style.paymentinformation}>Payment Information</h2>
                            You may provide us with payment information, including your credit or debit card number UPI ID, card expiration date, CVV code, and billing address, in order to purchase services offered on the platform.
                        </div>
                        {/*<div className="privacymain">
                            <h2>Financial Data, Religious & Political Inclinations, Personal Identity Data</h2>
                            You may provide us with payment information, including your credit or debit card number UPI ID, card expiration date, CVV code, and billing address, in order to purchase services offered on the platform.
    </div>*/}
                        <div className={style.privacymain}>
                            <h2 id={style.howyoucontrol}>How You Control the Information You Share with Us</h2>
                            Your Profile settings let you decide:
                            <br/>
                            <ul>
                                <li>Whether your Social posts are publicly available on RealmOfRich</li>
                                <li>Whether others can tag you in a photo</li>
                                <li>Whether you will be able to receive Direct Messages from anyone on RealmOfRich or just your followers</li>
                                <li>Whether others can find you based on your email or phone number</li>
                                <li>When and where you may see sensitive content on RealmOfRich</li>
                                <li>Whether you want to block or mute other RealmOfRich accounts</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.privacyheader2} id="privacyheader2">
            Additional Information We Receive About You<span id="number">2</span>
            </div>
            <div className={`${style.subhead} ${style.backshade}`}>
            <h4>We receive certain information when you use our services or other websites or mobile applications that include our content, and from third parties including advertisers. Like the information you share with us, we use the data below to operate our services.
            </h4>
            </div>
            <div className={style.privacycontenttextmargin}>
                <div className={style.privacycontenttextsticky}>
                    <div className={`${style.sticky} ${style.sidebar} ${style.privacy}`}>
                    <a href="#locationinformation">Location Information</a><br/><br/>
                    <a href="#links">Links</a><br/><br/>
                    <a href="#cookies">Cookies</a><br/><br/>
                    <a href="#logdata">Log Data</a><br/><br/>
                    <a href="#advertisers">Advertisers and Other Ad Partners</a>
                     </div>
                    <div className={`${style.main} ${style.privacycontent}`}>
                        <div className={style.privacymain}>
                            <h2 id={style.locationinformation}>Location Information</h2>
                            We require information about your signup and current location, which we get from signals such as your IP address or device settings, to securely and reliably set up and maintain your account and to provide our services to you.

                            Subject to your settings, we may collect, use, and store additional information about your location - such as your current precise position or places where you’ve previously used RealmOfRich - to operate or personalize our services including with more relevant content like local trends, stories, ads, and suggestions for people to follow.
                        </div>
                        <div className={style.privacymain}>
                            <h2 id={style.links}>Links</h2>
                            In order to operate our services, we keep track of how you interact with links across our services. This includes links in emails we send you and links in Social posts that appear on other websites or mobile applications.

                            If you click on an external link or ad on our services, that advertiser or website operator might figure out that you came from RealmOfRich platform, along with other information associated with the ad you clicked such as characteristics of the audience it was intended to reach. They may also collect other personal data from you, such as cookie identifiers or your IP address.
                        </div>
                        <div className={style.privacymain}>
                            <h2 id={style.cookies}>Cookies</h2>
                            A cookie is a small piece of data that is stored on your computer or mobile device. Like many websites, we use cookies and similar technologies to collect additional website usage data and to operate our services. Cookies are not required for many parts of our services such as searching and looking at public profiles. Although most web browsers automatically accept cookies, many browsers’ settings can be set to decline cookies or alert you when a website is attempting to place a cookie on your computer7. However, some of our services may not function properly if you disable cookies. When your browser or device allows it, we use both session cookies and persistent cookies to better understand how you interact with our services, to monitor aggregate usage patterns, and to personalize and otherwise operate our services such as by providing account security, personalizing the content we show you including ads, and remembering your language preferences.
                        </div>
                        <div className={style.privacymain}>
                            <h2 id={style.logdata}>Log Data</h2>
                            We receive information when you view content on or otherwise interact with our services, which we refer to as “Log Data,” even if you have not created an account. For example, when you visit our websites, sign into our services, interact with our email notifications, use your account to authenticate to a third-party service we may receive information about you. This Log Data includes information such as your IP address, browser type, operating system, the referring web page, pages visited, location, your mobile carrier, device information (including device and application IDs), search terms (including those not submitted as queries), and cookie information. We also receive Log Data when you click on, view, or interact with links on our services. We use Log Data to operate our services and ensure their secure, reliable, and robust performance. For example, we use Log Data to protect the security of accounts and to determine what content is popular on our services. We also use this data to improve the content we show you, including ads and to improve the effectiveness of our own marketing.
                            <br/><br/>
                            We use information you provide to us and data we receive, including Log Data and data from third parties, to make inferences like what topics you may be interested in, how old you are, and what languages you speak. This helps us better promote and design our services for you and personalize the content we show you, including ads.
                        </div>
                        <div className={style.privacymain}>
                            <h2 id={style.advertisers}>Advertisers and Other Ad Partners</h2>
                            Advertising revenue allows us to support and improve our services. We use the information described in this Privacy Policy to help make our advertising more relevant to you, to measure its effectiveness, and to help recognize your devices to serve you ads on and off of RealmOfRich. Our ad partners and affiliates share information with us such as browser cookie IDs, mobile device IDs, hashed email addresses, demographic or interest data, and content viewed or actions taken on a website or app. Some of our ad partners, particularly our advertisers, also enable us to collect similar information directly from their website or app by integrating our advertising technology. Information shared by ad partners and affiliates or collected by RealmOfRich from the websites and apps of ad partners and affiliates may be combined with the other information you share with RealmOfRich and that RealmOfRich receives about you described elsewhere in our Privacy Policy.<br/><br/>

                            </div>
                    </div>
                </div>
            </div>
        
        </div>
        
        <Footer />
        </div>
        );
}

export default Privacy;
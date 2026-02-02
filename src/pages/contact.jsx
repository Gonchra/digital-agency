import HeroAlt from '@/sections/HeroAlt'
import heroAltImgSrc from "@/assets/images/HeroAlt/hero-alt-logo.png"
import ContactBanner from '@/sections/ContactBanner'
import ContactUsForm from '@/sections/ContactUsForm'
import Locations from '@/sections/Locations'

export const metadata = {
  title: 'Contact Us',
}

export default () => {
  const emailItems = [
    {
      contactTitle: 'For General Inquiries',
      contact: 'info@digitx.com',
    },
    {
      contactTitle: 'For Business Collaborations',
      contact: 'partner@digitx.com',
    },
    {
      contactTitle: 'For Job Opportunities',
      contact: 'careers@digitx.com',
    },
  ]

  const telItems = [
    {
      contactTitle: 'General Enquiries',
      contact: '+1-XXX-XXX-XXXX',
    },
    {
      contactTitle: 'Business Collaborations',
      contact: '+1-XXX-XXX-XXXX',
    },
    {
      contactTitle: 'Free Consultation',
      contact: '+1-XXX-XXX-XXXX',
    },
  ]

  return (
    <>
      <HeroAlt imgSrc={heroAltImgSrc} />
      <ContactBanner />
      <ContactUsForm
        title="Contact Us Via Email"
        contactItems={emailItems}
        isEmailForm
      />
      <ContactUsForm
        title="Contact Us By Phone"
        contactItems={telItems}
      />
      <Locations />
    </>
  )
}
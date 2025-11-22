import Section from '@/layouts/Section'
import Grid from '@/components/Grid'
import MemberCard from '@/components/MemberCard'

const Members = () => {
  const memberItems = [
    {
      avatar: "/members/team/1.png",
      name: "John Smith",
      jobTitle: "Co-Founder & CEO",
      socials: [
        {
          label: 'LinkedIn',
          iconName: 'linked-in',
        },
        {
          label: 'Instagram',
          iconName: 'instagram',
        },
        {
          label: 'Twitter',
          iconName: 'twitter',
        },
      ]
    },
    {
      avatar: "/members/team/2.png",
      name: "Sarah Adams",
      jobTitle: "Head of Design",
      socials: [
        {
          label: 'LinkedIn',
          iconName: 'linked-in',
        },
        {
          label: 'Facebook',
          iconName: 'facebook',
        },
        {
          label: 'Twitter',
          iconName: 'twitter',
        },
      ]
    },
    {
      avatar: "/members/team/3.png",
      name: "Michael Williams",
      jobTitle: "Project Manager",
      socials: [
        {
          label: 'LinkedIn',
          iconName: 'linked-in',
        },
        {
          label: 'Facebook',
          iconName: 'facebook',
        },
        {
          label: 'Twitter',
          iconName: 'twitter',
        },
      ]
    },
    {
      avatar: "/members/team/4.png",
      name: "Emily Johnson",
      jobTitle: "Lead Web Developer",
      socials: [
        {
          label: 'LinkedIn',
          iconName: 'linked-in',
        },
        {
          label: 'Facebook',
          iconName: 'facebook',
        },
        {
          label: 'Twitter',
          iconName: 'twitter',
        },
      ]
    },
    {
      avatar: "/members/team/5.png",
      name: "Jessica Lee",
      jobTitle: "UX/UI Designer",
      socials: [
        {
          label: 'LinkedIn',
          iconName: 'linked-in',
        },
        {
          label: 'Facebook',
          iconName: 'facebook',
        },
        {
          label: 'Twitter',
          iconName: 'twitter',
        },
      ]
    },
    {
      avatar: "/members/team/6.png",
      name: "Robert Johnson",
      jobTitle: "Lead Mobile App Developer",
      socials: [
        {
          label: 'LinkedIn',
          iconName: 'linked-in',
        },
        {
          label: 'Facebook',
          iconName: 'facebook',
        },
        {
          label: 'Twitter',
          iconName: 'twitter',
        },
      ]
    },
    {
      avatar: "/members/team/7.png",
      name: "Emma Taylor",
      jobTitle: "Digital Marketer",
      socials: [
        {
          label: 'LinkedIn',
          iconName: 'linked-in',
        },
        {
          label: 'Facebook',
          iconName: 'facebook',
        },
        {
          label: 'Twitter',
          iconName: 'twitter',
        },
      ]
    },
    {
      avatar: "/members/team/8.png",
      name: "Olivia Martin",
      jobTitle: "Content Specialist",
      socials: [
        {
          label: 'LinkedIn',
          iconName: 'linked-in',
        },
        {
          label: 'Facebook',
          iconName: 'facebook',
        },
        {
          label: 'Twitter',
          iconName: 'twitter',
        },
      ]
    },
  ]

  const title = (
    <>
      Our <span>Team Members</span>
    </>
  )

  const description =
    'Partnering with DigitX offers a multitude of advantages. Experience increased brand visibility, improved customer engagement, and higher ROI. Our tailored solutions are designed to meet your unique business needs, ensuring lasting success.'

  return (
    <Section title={title} titleId="members-title" description={description}>
      <Grid
        columns={4}
        extraAttrs={{
          'data-js-partial-hider': '',
        }}
      >
        {memberItems.map((memberItem, index) => (
          <MemberCard key={index} {...memberItem} />
        ))}
      </Grid>
    </Section>
  )
}

export default Members
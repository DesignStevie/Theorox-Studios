const projectData = [
  {
    id: 0,
    projectName: "Onboarding Wizard",
    linkName: "/oboarding_wizard",
    company: "Gallagher New Zealand",
    squad: "1 Product Manager, 4 Engineers, 2 Testers",
    timeframe: " Oct 2022 - Feb 2023",
    short_description:
      "Creating a cloud security management solution for cardholder and building control.",
    image: require("../Images/tile_image_webclient.png"),
    problem:
      "One of my squad's main focus was to shift a pre-existing on-premise software to an all-cloud solution while overhauling and improving all usability with new and existing customers. \n \n A large feature that we needed to overcome was an onboarding process of new Cardholder/Users to the site, this would be a new feature compared to the on-premise software but still utilising it’s existing features. \n \n I took to the task working with my squad in an agile environment to iterate on the feature to create a feasible onboarding solution.",
    understand:
      "We first began reaching out to our external stakeholders and looked at the existing on-premise solution for onboarding cardholders, we identified our target personas and created a journey map that reflects those business processes, we found that it had no clear built-in process for onboarding users as it was built to accommodate any type of business workflow, so every business would have its own set of workflows and could differ vastly from one another so we took the key similarities instead.  \n \n We also discovered this was a usability issue as it would also require extensive training and modules for the customers to be able to use and understand first. \n \n We knew we had to explore and create a solution that could do the same thing but still be easy and intuitive to understand and use without the training and modules.",
    research:
      "I then began speaking and interviewing our existing customers that use this feature on a day-to-day basis, these customers would fit our targeted persona as well so that we knew we are getting information from actual users. \n \n Because the current solution is quite all over the place we found out through our customers that a step-for-step process in onboarding a new Cardholder/User where all the necessary steps can be provided for them seemed to be a potential solution. \n \n I completed my research to look at competitors and how they achieve their solutions, as well as non-competitor research to see how other organisations do step-for-step onboarding.",
    ideate:
      "We proceeded together with the squad on discovering some lo-fi ideas to create a step-for-step solution for onboarding a new Cardholder/User by doing a crazy 8’s session together. \n \n We already had a form of a step-for-step process in mind before this phase but we continued to see if we can find some unique additions to the step-for-step process or even potentially a whole new solution. \n \n After the exercise, the squad voted on their most preferred design ideas and we decided collectively to proceed with a step-for-step wizard and added in some unique add ons from their designs to further enhance and improve the usability for the final solution.",
    prototype:
      "After we put together all the pieces in our ideation phase I then set out to create the final prototype which we could go and test with our customers/users to validate the solution. \n \n I designed a hi-fi prototype in Figma using the design system I created for our entire department for all our different platforms and projects. \n \n After going back to my squad for some refinements, feedback, and critiques I then came up with a final testing solution that I could go test with our customers.",
    validate:
      "I experimented with a new way of testing our prototypes by using a platform called Useberry. Userberry is an online platform where I can upload my Figma prototypes, create questions and give some context as to what the user needs to complete. \n \n Because we have customers all across the world I thought it would be great to create this on Useberry and send out a mass link to all our external customers where they can in their own time complete the test. \n \n I received way more results than expected which was fantastic and viewed all recordings and completion rates, then compiled the results to find that the prototype was a great success. We moved this straight over to development.",
    finalSolution:
      "After receiving all the results we were happy to move this over into our next planned sprint where we can build this feature in different parts for MVP (minimal viable product) and get our customers to begin using it with their real-world data. \n \n We still look to continue refining and making the experience even better as we receive more feedback and suggestions from our customers. \n \n We already began investigating a customised Wizard experience tailored to the user's preference and what steps they use and don't use to make their workflows even faster for onboarding Cardholders/Users.",
    headerImage: require("../Images/OnboardingFinalsolution.png"),
    empathiseImage: require("../Images/CCWeb_Empathise.png"),
    researchImage: require("../Images/CCWeb_Research.png"),
    ideateImage: require("../Images/CCWeb_Ideate.png"),
    prototypeImage: require("../Images/CCWeb_Prototype.png"),
    finalSolutionImage: require("../Images/finalSolution_CCWeb.png"),
  },
  {
    id: 1,
    projectName: "Two Factor Authenticator",
    linkName: "/two_factor_authenticator",
    company: "Gallagher New Zealand",
    squad: "1 Product Manager, 3 Engineers, 2 Testers",
    timeframe: " Jan 2022 - Apr 2022",
    short_description:
      "Revamping and adding a 2FA Solution to a pre-existing mobile credential app for IOS & Android.",
    image: require("../Images/tile_image_credentials.png"),
    problem:
      "When developing our Cloud Security Solution we needed to create a 2FA (Two Factor Authenticator) to better secure the login process to Command Centre Web using our existing Mobile Credential App. \n \n I took to this task working with my squad in an agile environment to create the feature and release it as soon as possible. ",
    understand:
      "After gathering all the requirements and how the Two Factor Authenticator will be utilised to gain access to our Command Centre Web, I jumped in straight away and began gathering information about our existing Mobile App (Mobile Connect) and how it currently is being used by our users. \n \n Mobile Connect is a Gallagher Mobile App that is used as a digital credential to gain access through secure doors, rather than using a physical access card.",
    research:
      "I focused on looking at competitors that are used as Two Factor Authenticators such as Google Auth, Microsoft Authenticator, Adobe Account Access, and Blizzard Authenticator, I found some common ground between them all that can be used within our final solution, I also used the competitor's solutions as inspiration from the UI and would be applying certain key aspects to my solution as well.",
    ideate:
      "I made multiple concept designs of how I would imagine the solution would look like and where core features will be placed and easily accessed by users that are wanting to log in quickly. I took the time to improve on certain features in the app that I believe would further improve the user experience, such as moving items into a secondary menu, collapsing main menu items, and updating icons. \n \n I wanted to add the ability to make “favourites” so that if a user had to have multiple 2FA codes for logging into multiple sites they could manage it quickly and easily. \n \n I went back and forth to my squad and mentors for feedback, critique, and suggestions and made some minor adjustments, and would move it into the prototyping phase.",
    prototype:
      "I could now begin making a hi-fi prototype that could be tested internally and externally with our customers and stakeholders. \n \n I designed the prototype in Adobe XD and after going back to my squad for some refinements, feedback, and critiques, I could then move this over to the deliver phase.",
    validate:
      "I began testing my solution with internal users that would suit the targeted persona, and validate that they can find the 2FA code quickly, manage multiple 2FA codes, and also validate the additional UI changes that I made to improve the overall usability. \n \n After successfully validating my prototypes internally I moved over to our external customers and tested for the same tasks above. \n \n With all users passing my tests and given minor feedback, I could successfully conclude that the new feature and added enhancements were ready to be moved over to our developers.",
    finalSolution:
      "I began testing my solution with users & stakeholders that would suit the targeted persona, and validate that they can find the 2FA code quickly, manage multiple 2FA codes, and also validate the additional UI changes that I made to improve the overall usability. \n \n With all users passing my tests, I could successfully conclude that the new feature and added enhancements were ready to be moved over to our developers.",
    headerImage: require("../Images/2FAFinal.png"),
    empathiseImage: require("../Images/discoverImagePlaceholder01.png"),
    researchImage: require("../Images/Credentials_Research.png"),
    ideateImage: require("../Images/Credentials_Ideate.png"),
    prototypeImage: require("../Images/Credentials_Prototype.png"),
    finalSolutionImage: require("../Images/finalSolution_Credentials.png"),
  },
  {
    id: 2,
    projectName: "Credential Request",
    linkName: "/credential_request",
    company: "Gallagher New Zealand",
    squad: "1 Product Manager, 4  Engineers, 2 Testers",
    timeframe: " Oct 2022 - Mar 2023",
    short_description:
      "Creating a new self service credential and access management cloud solution.",
    long_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n \n Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. \n \n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n \n Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    image: require("../Images/tile_image_arw.png"),
    problem:
      "Another squads main focus was to design and develop a full Cloud Access Management solution for credential and access control that was customer driving in user experience. \n \n One of many features, we needed to create an MVP solution for the end requesters (i.e Employees) to enable them to quickly and effectively request new credentials from their organization and could be processed by the corresponding approvers (i.e HR Admins) within the system. \n \n I took to this task working with my squad in an agile environment to iterate on this feature with our customers to create a viable solution. ",
    understand:
      "For this feature we looked to bringing all knowledge from across the teams and internal stakeholders as to what we expect this requesting workflow will look and what the users will experience. \n \n We took all this information and set out to discover what our customers and users will expect and want from this eperience.",
    research:
      "We went out to our customers and users that would fit our persona for this feature and interviewed them to get a broader idea as to what they would expect the requesting service will look like and what will be expected of their users. \n \n I looked at competitors solutions as well and found some common ground between them and how they solved their solution. I would use this as inspiration and make certain aspects a part from my own solution",
    ideate:
      "I took all the knowledge and information taken from the first two phases above and set out to create my own unique solution that would suit and satisfy the problem. \n \n I worked back and forth with customers and my own squad to refine my workings based on their critique, feedback and suggestions and come up with a final solution that can move into the prototyping phase. \n \n I knew this will still need more refinement but needed to begin prototyping so that I can jump straight into testing my solution to truly discover if there are any problems that need ironing out.",
    prototype:
      "After having my final solution ready to go I then set out to create the final prototype and jumps straight into testing with some users. \n \n I designed a hi-fi prototype in Figma using the design system I created for our entire department for all our different platforms and projects. \n \n After going back to my squad for some refinements, feedback and critiques on the workflow I then was ready to take this out into the field to be tested.",
    validate:
      "We went into Wintec and organised a time to get 15 students to work through some scenarios and complete the tasks on my prototype. The students would be a targeted persona and what be a great set of users to get honest feedback from. \n \n We separated the Groups to do one task for requesting a new credential and we had the other group request a replacement credential. \n \n We had a complete 100% completion rate and got some great feedback and suggestions from the students.",
    finalSolution:
      "After finalising data we received from all the test users I made some minor adjustments to the prototype and could confidently push it over to the developers to build. \n \n We will continue refining and make any further adjustments in the future as we get more feedback from all our users.",
    headerImage: require("../Images/RequestCredentialFinal.png"),
    empathiseImage: require("../Images/discoverImagePlaceholder02.png"),
    researchImage: require("../Images/ARW_Research.png"),
    ideateImage: require("../Images/ARW_Ideate.png"),
    prototypeImage: require("../Images/ARW_Prototype.png"),
    finalSolutionImage: require("../Images/finalSolution_ARW.png"),
  },
];

export default projectData;

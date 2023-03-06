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
    image: require("../Images/ProjectTileOnboarding.png"),
    problem:
      "My squad's objective was to shift a pre-existing on-premise software to an all-cloud solution while improving all usability. We came across a large feature that we needed to look at improving vastly which was the onboarding process of a new Cardholder/User, this would be a new feature compared to the on-premise software but still utilising it’s existing features.",
    understand:
      "I first looked at the existing on-premise solution for onboarding a user and deconstructed its features and found that it had no built-in process for onboarding users as it was built to accommodate any type of business workflow, this was a usability issue as it would require training and modules for the customers to be able to use and understand it. \n \n We knew we had to find and create a solution that could do the same thing but still be easy and intuitive to understand and use without the training and modules.",
    research:
      "I then began speaking and interviewing our existing customers that use this feature on a day-to-day basis, these customers would fit our targeted persona as well so that we knew we are getting information from actual users. \n \n Because the current solution is quite all over the place we found out through our customers that a step-for-step process in onboarding a new Cardholder/User where all the necessary steps can be provided for them seemed to be a potential solution. \n \n I completed my research to look at competitors and how they achieve their solutions, as well as non-competitor research to see how other organisations do step-for-step onboarding.",
    ideate:
      "We proceeded together with the squad on discovering some lo-fi ideas to create a step-for-step solution for onboarding a new Cardholder/User. \n \n We already had a form of a “Wizard” in mind before the ideation phase but we continued to see if we can find some unique ideas in adding to the wizard. \n \n After the ideation phase, the squad voted on their most preferred design ideas and we decided fully to proceed with a step-for-step Wizard and added in features of their designs and ideas to further enhance the final feature.",
    prototype:
      "After we put together all the pieces in our ideation phase I then set out to create the final prototype which we could go and test with our customers/users to validate the solution. /n /n I designed a hi-fi prototype in Figma using the design system I created for our entire department for all our different platforms and projects. /n /n After going back to my squad for some refinements, feedback, and critiques I then came up with a final testing solution that I could go test with our customers.",
    validate:
      "I experimented with a new way of testing our prototypes by using a platform called Useberry. Userberry is an online platform where I can upload my Figma prototypes, create questions and give some context as to what the user needs to complete. /n /n Because we have customers all across the world I thought it would be great to create this on Useberry and send out a mass link to all our external customers where they can in their own time complete the test. /n /n I received way more results than expected which were great and viewed all recordings and compiled the results and completion rates and found that the prototype was a great success. We moved this straight over to development.",
    finalSolution:
      "After receiving all the results we were happy to move this over into our next planned sprint where we can build this feature in different parts for MVP (minimal viable product) and get our customers to begin using it with their real-world data. /n /n We still look to continue refining and making the experience even better as we receive more feedback and suggestions from our customers. /n /n We already began investigating a customised Wizard experience tailored to the user's preference and what steps they use and don't use to make their workflows even faster for onboarding Cardholders/Users.",
    finalSolutionImage: require("../Images/OnboardingFinalsolution.png"),
    finalSolutionImageTwo: require("../Images/OnboardingCredential.png"),
    finalSolutionImageThree: require("../Images/OnboardingSummary.png")
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
    image: require("../Images/ProjectTileCredentials.png"),
    problem:
      "When developing our Cloud Security solution we needed to create a 2FA (Two Factor Authenticator) to better secure the login process to Command Centre Web using our existing Mobile Credential App.",
    understand:
      "After gathering all the requirements and how the Two Factor authenticator will be utilised to gain access to our Command Centre Web, I jumped in straight away and began gathering information about our existing Mobile App (Mobile Connect) and how it currently is being used by our users. \n \n Mobile Connect is a Gallagher Mobile App that is used as a digital credential to gain access through secure doors, rather than using a physical access card.",
    research:
      "I focused on looking at competitors that are used as Two Factor Authenticators such as Google Auth, Microsoft Authenticator, Adobe Account Access, and Blizzard Authenticator, I found some common ground between them all that can be used within our final solution, I also used the competitor's solutions as inspiration from the UI and would be applying certain key aspects to my solution as well.",
    ideate:
      "I made multiple concept designs of how I would imagine the solution would look like and where core features will be placed and easily accessed by users that are wanting to log in quickly. I took the time to improve on certain features in the app that I believe would further improve the user experience, such as moving items into a secondary menu, collapsing main menu items, and updating icons. \n \n I wanted to add the ability to make “favourites” so that if a user had to have multiple 2FA codes for logging into multiple sites they could manage it quickly and easily. \n \n I went back and forth to my squad and mentors for feedback, critique, and suggestions and made some minor adjustments, and would move it into the prototyping phase.",
    prototype:
      "I could now begin making a hi-fi prototype that could be tested internally and externally with our customers. \n \n I designed the prototype in Adobe XD and after going back to my squad for some refinements, feedback, and critiques on the workflow I could then move this over to the testing phase.",
    validate:
      "I began testing my solution with internal users that would suit the targeted persona, and validate that they can find the 2FA code quickly, manage multiple 2FA codes, and also validate the additional UI changes that I made to improve the overall usability. \n \n After successfully validating my prototypes internally I moved over to our external customers and tested for the same tasks above. \n \n With all users passing my tests and given minor feedback, I could successfully conclude that the new feature and added enhancements were ready to be moved over to our developers.",
    finalSolution:
      "Confident with the results from the user tests, I was able to pass this over to the developers to begin building for Android and IOS. I look to further improve a lot more features of the app in the future that I discovered along the journey but was short on time and was not in scope. \n \n When Command Centre Web became live, we started seeing a lot more uptake on the Mobile App.",
    finalSolutionImage: require("../Images/2FAFinal.png"),
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
    image: require("../Images/ProjectTileCredentialRequest.png"),
    problem:
      "A new project started and we needed to design & develop a full Cloud Access Management solution and required us to create friendly experience for the end user to enable them request new & replace card & mobile credentials.",
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
    finalSolutionImage: require("../Images/RequestCredentialFinal.png"),
  },
];

export default projectData;

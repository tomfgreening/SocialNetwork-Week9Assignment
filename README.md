🧪 Build a Social Network

This week’s assignment was to create a social media-esc application using the various tools learnt over the last few weeks. I quite enjoyed doing this week’s assignment, and even though I didn’t get to do as much as I wanted to, I’m happy with the outcome and definitely feel more positive about using Next.js. I’m particularly proud of myself for the ‘flow-state’ I managed to achieve whilst writing the code for some of the components in the assignment. I have also managed to be more resourceful this week, and gotten better at finding what code I need from the demos across various weeks on GitHub. My only major issue with the assignment this week was that due to moving home and not having constant access to the internet, I was not able to give as much time as I should have to it, but, I do not have negative feelings, I only wish I could have carried on for longer as I know there is stuff I was close to grasping but just didn’t have the time to properly explore. Another aspect that caused me some trouble was the database set-up. I was putting pressure on myself to get started as soon as possible, but knowing that I really struggled with database set-up last week, so I knew I had to prioritise it this week. With this in mind, I still felt myself rushing and making mistakes that I would have to rectify later, in regards to matching user profile data I wanted to capture, to the database columns. All my SQL editor queries are in the seed.js file, so you can how how I fixed these issues.

I will now go through the user stories and requirements for the assignment, and give my comments.

User Stories

🐿️ As a user, I want to sign up and log in securely using Clerk so that I can interact with the app as a user on the site and edit my user profile.

I enjoyed using Clerk this week, I love how versatile and secure it is and how professional it looks with minimal styling. I made protected routes, so that user information was secure.

🐿️ As a user, I want to see an error/not found page (using error.js or not-found.js) if I try to visit a page on the site which doesn’t exist.

This was fairly straight-forward and I feel good about writing the code and understanding how it works.

🐿️ As a user, I want an enhanced user experience with modern UI components, such as using a Radix UI Primitive or a similar library, so that the interface is more intuitive and visually appealing.

Yet again, I have made the mistake of leave styling until last. In the workshop for the component libraries session, I experimented with some icons, I had in my head that I could use this part of my workshop code for the assignment. This was fine until it actually came to implementing it, for one, it just isn’t very elegant; two, the import line broke my project and I did not have time to fix it.

🐿️ As a user, I want to create and manage my profile, including adding information like a biography, so that I can personalise my account.

Creating forms was where I achieved the previously mentioned ‘flow-state’, I looked at the code from Manny’s demo with the birds from last week and it just clicked! I was really impressed with how quickly I was able to put the forms together.

🐿️ As a user, I want to create my posts to be displayed on my profile page so that I can share and manage my content easily.

This is something that I feel like I got 85% of the way there with. I was trying to map a user’s posts to their profile page using the Clerk ID, I wasn’t 100% sure on where I would be getting the Clerk ID from and I think I ended up confusing me. I would appreciate some direct feedback on this part of my assignment.

Requirements

🎯 Set up user sign-up and user login using Clerk.

See sign-up and sign-in folders/pages.

🎯 Create and display an error/not found page if the user visits a page that doesn’t exist.

See not-found.js in user-profile folder.

🎯 Use 1 or more Radix UI Primitive component, or something similar (e.g. use of a different component library to enhance UX, not just Tailwind).

See RadixSocialsIcon.jsx in components folder.

🎯 Enable users to create a user profile, and input profile information (such as a user biography) using a form. Users and user information should be stored in their own table in the database and handled with an appropriate route (e.g. /user/[userId]).

See create-profile folder.

🎯 Enable users to create posts associated with their Clerk userId. Posts should be displayed on the user’s profile page.

See NewPingForm.jsx in components folder and page.js in posts[id] folder.

Overall I’m happy with what I achieved this week and I look forward to making some time to revisit this assignment and finish off the last few bits I missed. I hope my improved confidence and understanding come through in my work and I look forward to hear your thoughts on where I can improve.


Build a Social Network
Overview
We’ve explored the many benefits of using Next.js for building database-driven, blog-style applications, including its simplified data handling and the ease of creating dynamic routes with the params object. You’ve developed apps that allow post submission, display posts and accept comments.

This week, we’ve focused on authentication and its role in creating user profiles and associating content with specific users. By combining database-driven functionality with user authentication, you lay the foundation for building a social media application.

Topics
Next.js
User authentication using Clerk
Next.js: routing, error handling
Radix UI
Resources
Next.js: Introduction
Next.js: Data Fetching, Caching, and Revalidating
Clerk: Docs
Clerk: Next.js Quick Start
Clerk: Next.js Custom Signup and Sign in Pages
Clerk: Next.js Server Actions
Next.js: Route Handlers
Next.js: Routing Fundamentals
Next.js: not-found.js
Next.js: error.js
Radix UI: Docs
Radix UI: Getting Started
Instructions
User Stories
🐿️ As a user, I want to sign up and log in securely using Clerk so that I can interact with the app as a user on the site and edit my user profile.
🐿️ As a user, I want to see an error/not found page (using error.js or not-found.js) if I try to visit a page on the site which doesn’t exist.
🐿️ As a user, I want an enhanced user experience with modern UI components, such as using a Radix UI Primitive or a similar library, so that the interface is more intuitive and visually appealing.
🐿️ As a user, I want to create and manage my profile, including adding information like a biography, so that I can personalise my account.
🐿️ As a user, I want to create my posts to be displayed on my profile page so that I can share and manage my content easily.
Requirements
🎯 Set up user sign-up and user login using Clerk.
🎯 Create and display an error/not found page if the user visits a page that doesn’t exist.
🎯 Use 1 or more Radix UI Primitive component, or something similar (e.g. use of a different component library to enhance UX, not just Tailwind).
🎯 Enable users to create a user profile, and input profile information (such as a user biography) using a form. Users and user information should be stored in their own table in the database and handled with an appropriate route (e.g. /user/[userId]).
🎯 Enable users to create posts associated with their Clerk userId. Posts should be displayed on the user’s profile page.
How to Deploy
Next.js was developed by Vercel, which is where we’re going to deploy our app, so some of the difficulties faced when deploying are reduced.

Ensure that any data displayed using .map() has a key.
Push everything to GitHub.
Click ‘Add New…’ and then select ‘Project’.
In the ‘Environment Variables’ drop-down menu, add anything from your .env.local file here.
Wait a minute or so, and your website is deployed!
Stretch Goals
To achieve an 8/8 in your assignment, aim to achieve all of the requirements, plus some extra goals for each section of the marking rubric. This can be excellence in styling or something that demonstrates creativity or innovation in the week’s topics.

Below are some examples of stretch goals and user stories that you could add to your project, but are not expected to.

Stretch User Stories
🐿️ As a user, I want to edit the content of my posts, so that I can correct any spelling mistakes or add content that I forgot.
🐿️ As a user, I want to delete my posts, so that I can remove duplicated content accidentally posted.
🐿️ As a user, I want to visit other users’ profiles after seeing their posts on a global timeline so that I can learn more about them and view their other content.
🐿️ As a user, I want to follow other users so that I can stay updated on their posts and activities.
🐿️ As a user, I want to like other users’ posts so that I can show appreciation for content I enjoy.
🐿️ As a user, I want to be prompted to complete my biography if it’s left blank after logging in, ensuring that my profile is complete and informative.
🐿️ As a user, I want to see an error/not found page (using error.js or not-found.js) if I try to visit another users profile that doesn’t exist, so that I’m informed about the invalid page.
Stretch Requirements
🏹 Allow users to update their content. You can achieve this either with a dynamic route (“/posts/[id]/edit”) or by creating a modal.
🏹 Allow users to delete their content.
🏹 Allow users to view other profiles directly from posts they see on the global timeline, using a dynamic users route.
🏹 Let users follow each other by establishing a follower and followee relationship between profiles.
🏹 Enable users to like posts by linking their user_id to the liked_post in a junction table.
🏹 Ensure that a user’s biography cannot be left blank. If a user logs in without one, prompt them to add this information.
🏹 Create and display an error/not found page if the user visits another users profile that doesn’t exist.
Reflection
Please also provide an assignment reflection in your project README.md file.

Required
🎯 What requirements did you achieve?
🎯 Were there any requirements or goals that you were unable to achieve?
🎯 If so, what was it that you found difficult about these tasks?
Optional
🏹 Feel free to add any other reflections you would like to share about your submission, for example:

Requesting feedback about a specific part of your submission.
What useful external sources helped you complete the assignment (e.g Youtube tutorials)?
What errors or bugs did you encounter while completing your assignment? How did you solve them?
What went really well and what could have gone better?
Submission Instructions
Please submit the deployed URL, your GitHub repository link and a screenshot of your Database Schema (and Query Editor, if it was used).

How to send your database schema:
In Supabase, select the project you have connected to this application.
In the menu, go to ‘Database’.
Then, go to ‘Schema Visualiser’.
Take a screenshot of the tables you’ve used and save it in your files.
On Moodle, in your submission, click the image icon and follow the instructions.

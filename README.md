# Daily Smiley

A site that allows users to create an account and keep track of their daily mood over extended periods of time.

# Personal Goals within the project
- using next.js
- using tailwind.css
- using Firebase

# Project expected structure

The site will be simple from appearance and only contain a few components
- header
    - containing the name of the site
    - a short description of the site
- main
    - This will display different data based on if the user is logged in or not
        - if not logged in it will display the Hero component
            - describe the functionality of the site
            - will prompt the user to create an account
        - if logged in this will display the dashboard compenent
            - allow the user to select a daily mood
            - display previous moods entered on a calendar format
            - display extra stats like how much time there is left in the day to submit a mood
- footer
    - copyright
    - links to my portfolio website and linkedIn profile

# First Step
create structure of project with basic functionality as place holders with comments where needed
- implement component structure
    - header
    - main
        - (temporary authentication variable with conditional calling)
            - hero
            - dashboard
    - footer
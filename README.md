# Code Samples

Each directory contains a different sample. Included here for easy reference are the description, why I'm proud of it, and how I feel it represents my abilities. 

## addSlides
### The Task
  - Add new slides to an existing slider to advertise sales during specific time windows, e.g. Memorial Day weekend. 
  - Sales run from midnight on the start date until midnight on the end date. 
  - The slides should only be visible during this time window, and not visible outside of it. 
  - Portions of the string in each slide needs to be bold.

### Considerations
  - The time window, strings, portions of the string that should be bold, and number of slides will change each time.
  - The Date object in JavaScript, and how that might affect time calculations. Using hours, days, weeks, months, or even years would prevent the use of comparisons (e.g. >=) or require additional checks because they have a circular structure (start > end > start).
  - If only portions of the string can be bold, then strings need to be broken up and added as separate elements.
  - There needs to be some way to identify which portion of each string should be bold. 
  - This process needs to be be in place, tested, and automated so changes are not being pushed to production at midnight on Fridays.

### Solution
  - Create a JavaScript function with parameters that can be passed in for the things that will change each time (time window, strings, portions that should be bold, number of slides). New instances of the function can be added to the file as the sales are scheduled (lines 72-74), and the function will run on page load, executing the code to add the slides during the time window that is passed in.
  - To prevent date errors, convert all dates into the JavaScript equivalent of UNIX timestamp format: milliseconds since 1/1/1970 (lines 40-46), and check if the current date falls between the start and end (line 49).
  - To break the string up, store in a data structure. 
  - Objects (lines 1-35) are a good choice for data structure in this case, because the keys can used to identify which portions of the string should be bold (line 59). 
  - A nested structure can be used to separate the data, and loops used to iterate over each level to create each slide (see lines 51 and 55).


### Why I'm proud of it
Clean and concise solution to a challenge that ended up being more complex than expected that uses the tools available. 
This is the third iteration of this function. During testing the first two, I contended with the limitations and complexities of the Date object, and wanted to come up with a solution so the time units used wouldn't create additional complexity. Using days to measure the time window? What happens when it goes from Saturday (6) to Sunday (0)? Now comparison operators don't work without adding checks to see if it went from 6 to 0. The same problem ended up coming up in every other measure of time once I started really digging into the options with the Date object and thinking about edge cases (days of the month? What happens when the time window overlaps two months? Weeks? What happens during a New Years' sale?). 
After digging into the docs and experimenting with the Date object, I discovered that `Date.getTime()` returns milliseconds since the Unix timestamp - i.e. it's a linear measurement of time, without a start and end. So, by converting all of my inputs to this same measurement, I'm able to run a simple check to see if the function is running between the start and end times. 

### How I feel it represents my abilities
- Think and work through a challenge.
- Consider and test edge cases.
- Worked with the tools available to independantly come up with a creative solution to the challenge using the docs, testing solutions, and without relying on libraries. 
- Perseverance. Keep iterating until arriving at a clean, concise solution.

You can see a working example on a sandbox store at https://kul-sandbox.myshopify.com/


## Dashboard
### The Task
Create a responsive dashboard in collaboration with various stakeholders and a vendor, using their platform, that would show all of the relevant account information to members of the rewards program when they log into the system. The data should be shown using charts wherever visualizing the data that way makes sense.

### Considerations
- Vendor platform was new, and needed to be learned. To be more accurate, it is a mix of familiar and new syntax: the file itself is HTML, but it has special tags that can be used to extend functionality, sort of a hybrid between HTML, JSX, and a templating language. For example, conditionals can be added directly to the HTML using `<IF><ELSE></IF>` tags (line 42), and variables can be pulled from the backend using the `~variable~` format (lines 6-32).
- Deploying to vendor platform new
- Working with charts new to me.


### Solution
- Worked closely with vendor by pair programming during the early stages to learn how to use the platform, with code reviews at the end of the process to ensure it has been implemented correctly. 


### Why I'm proud of it
This page went through a number of iterations based on feedback from the various stakeholders but I believe the final result turned out to be visually pleasing, met the requirements, with clean and concise code.
While not all charts were used on the finished page, left them in the JS file so the various charts used in the page creation process are represented.

### How I feel it represents my abilities
Show adaptability and ability to quickly learn a new platform
used the docs and figured out how the charts work, successfully incorporated them into the platform
ability to collaborate with multiple stakeholder, handle changing requirements, and deliver working final product


## Rewards
### The Task


### Considerations


### Solution


### Why I'm proud of it


### How I feel it represents my abilities



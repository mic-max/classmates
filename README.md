# classmates

A tool to find people you have multiple classes with using cuLearn.  
This is Carleton University's online school system that has all of your courses, assignments and grades.  
It is based on moodle, so modifying it for another moodle-based system should not be too difficult. Contact me or add an issue for other school requests.  

Instructions:
1. Copy the contents of `browser.js` to your clipboard.
2. Open a tab for each course you want to check.
3. Paste the code into the console. (F12)
4. Copy the output by right clicking it and selecting `copy Object`.
5. Paste these arrays into the `data.json` file and name the course.
6. Execute the program `npm start`.


### Developed for
- cuLearn, a moodle-based system

### TODO
- Add some basic testing
- Make it easier for regular people to run (Selenium?)
- Add support for finding courses your facebook friends are in
- ^ Will probably require some better name matching
- Support other school systems, Queen's ?
- Images for the instructions

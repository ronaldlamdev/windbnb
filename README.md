Live site URL : https://ronaldlamdev.github.io/windbnb/

WindBnB, an AirBnB clone, created with React and Tailwind CSS. 

#What I learned from this project
-How to implement the useContext to pass global states to different components. I used the useContext hook to pass 
 location inputs and number of guests from the location and guest component respectively to the header component
 to display selected location and number of guests. I also used the usecContext hook to to pass location and guests states 
 to the setStays function to filter rooms based on preference. **This was also the main highlight for me in creating this project and
 is also the first time using the useContext hook.**
 
 -Shortening multiple utility classes into custom classes making code easier to read.
 
 -Mapping out repetitive components using map function.
 
 -Filtering data using filter function. 
 
 -Passing props 
 
 -When I was creating the setStays function, I made the mistake of passing in the location and guest states as arguements. 
 What I didn't realize was that they were not states I was passing but instead just simply variable arguements instead. So
 when I clicked on handleSubmit, it would not filter correctly because location and guests variable were not equal to anything resulting
 in an empty array for stays to filter. I had ot remove these 2 variables and now the setStays function works correctly. 
 
 #How I can improve
 
 -I need to stop using fixed widths and learned to use max width for better responsive design.
 
 -Learn more advanced React hooks like useRef.
 
 -Learn TypeScript

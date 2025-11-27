

import Link from "next/link";
export default function Home() {
    return (
      <>


      <div className="img">
      <img src= "https://images.unsplash.com/photo-1699891730676-037bed3c1bed?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2Vic2l0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"></img>
       </div>

       <nav>
        <Link href="/">Home</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/projects">Projects</Link>

      </nav>


       <div className="descriptive-container">  

      

    

       <div className="Description">
       <img src= "https://i.pinimg.com/736x/41/1c/18/411c18ca5b87903a4a2cebbb93e8d32b.jpg"/>
       </div>



       <div className="Description1">
        <p>About Me</p>
        <p>  
        I am a software engineer with a rigorous academic background and a deep appreciation for the intellectual craft of technology.
        My work is guided by a commitment to precision, elegance, and clarity whether in designing scalable systems,
        writing clean and maintainable code, or approaching complex challenges with structured creativity.
        
        </p>
       </div>


       <div className="Description2">
       <img src= "https://i.pinimg.com/736x/41/1c/18/411c18ca5b87903a4a2cebbb93e8d32b.jpg"/>
       
       </div>

      
      </div>







      <div className="objective"> 
        
        <p>Objective</p>

        <p>
        I am a software Developer who enjoys turning ideas and interactive 
        and functional web experiences through code, design and innovation.

        building modern, efficient and user focused web applications using 
        clean code and creative design. 
 

        </p>

      </div>

      


      
      <div className="Education">

        <p>Education</p>

        <p>Seneca Polytechnic</p>
        <p>September 2023- August 2027</p>
        <p>Honours Bachelor of Technology – Software Development.</p>


      </div>



      <div className="Skill">


        <div className="skillimg">
        <img src= "https://images.stockcake.com/public/9/1/8/9188a8e9-4bdf-4210-b046-fb70b2b029fd_large/coding-at-night-stockcake.jpg"/>
        </div>




      <div className="Skillslist">
        <ul>
        <p>Skills</p>
        <li>React</li>
        <li>Python</li>
        <li>Node.js</li>
        <li>Next.js</li>
        <li>MongoDB</li>
        <li>SQL/My SQL</li>
        <li>JavaScript</li>
        <li>HTML/CSS</li>
        <li>GitHub</li>





        <p>Personal Skills</p>
        <li>Cross team collaboration</li>
        <li>Mentorship</li>
        <li>Knowledge sharing</li>
        <li>Architectural participation</li>
        </ul> 
      </div>




      <div className="skillimg2">
      <img src= "https://images.stockcake.com/public/9/1/8/9188a8e9-4bdf-4210-b046-fb70b2b029fd_large/coding-at-night-stockcake.jpg"/>
        </div>





      </div>










    


       <div className="Team">

        <ul>

      <p>Members of Clubs </p>

         <li>STRA Labs </li>
         <p>Student-led space innovation team at Seneca Polytechnic. Founded in 2025, we're building a community
            of future aerospace engineers and developers exploring cutting-edge 
            technologies in the space industry.</p>


         <li>Disruptive technologies </li>

         <p>Advancing knowledge in IT Audit, Security, and Governance beyond the classroom. 
                We focus on industry standards, best practices, and emerging security frameworks while fostering dialogue between students, 
                industry professionals, and academia on critical IT governance challenges.</p>




          <li>Open source </li>

          <p>Contributing to open source projects with emphasis on clean, maintainable code following modern conventions like BEM methodology. 
                Collaborating with developers to create well-documented, accessible solutions that 
                benefit the broader development community.</p>


         <li>Cyber cafe club </li>

         <p>Participating in hands-on cybersecurity challenges and CTF competitions. 
                    Developing practical security skills while connecting with 
    peers passionate about ethical hacking and digital defense.</p>

        <li>Wealth management & financial planning club.</li>

          <p>Learning the fundamentals of personal finance, investment strategies, and long-term wealth building. 
        Part of a community helping students develop financial literacy for professional and personal success.</p>

          </ul>

      </div>


   



      </>
    );
  };

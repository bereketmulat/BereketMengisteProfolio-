import Image from 'next/image'


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

       <img src="/IMG_9459.JPG" alt="Description of your image"  className="profile-image"/>

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



      <div className="Hobbies">
          <p className="hobby">Hobbies</p>
          <div className="hobby-images">
            <img src="/IMG_1392 2.JPG" alt="Hobby 1" className="hobby-img"/>
            <img src="/IMG_0477.HEIC" alt="Hobby 2" className="hobby-img"/>
            <img src="/IMG_1391.JPG" alt="Hobby 3" className="hobby-img"/>
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
        <li>JavaScript</li>
        <li>HTML/CSS</li>
        <li> MySQL/ SQL</li>
            
        





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
         <p>We are a student-led team at Seneca Polytechnic. Our team consists of members who are passionate about the space innovation industry.
          We began our journey in 2025, but despite the fact that we are a very recent group, we have massive ambitions.</p>


         <li>Disruptive technologies </li>

         <p>Through student empowerment, the purpose is to expand recognition of the IT Audit and Assurance, Security and IT Governance disciplines by extending education beyond the classroom on standards, practices and certification. • To promote the education of and help expand the knowledge and skills of its members in the interrelated fields of IT governance, IS audit, security, control and assurance; • To encourage a free exchange of IT governance, IS audit, security, control and assurance techniques, approaches, and problem-solving by its members; • To promote adequate communication to keep members abreast of current events in IT governance, IS audit, security, control and assurance that can be beneficial to them and their employers; • To communicate to management, auditors, universities and IS professionals the importance of establishing controls necessary to ensure proper IT governance and the effective 
          organization and utilization of IT resources.</p>




          <li>Open source </li>

          <p>Stack follows the BEM naming convention that focusses on logical code readability that 
            is reflected in both the HTML and CSS. Interactive elements such as accordions and tabs 
            follow the same markup patterns making rapid development easier for developers and beginners alike.
            Add to this the thoughtfully presented documentation, featuring code highlighting, snippets, 
            class customizer explanation and youve got yourself one powerful value package.</p>


         <li>Cyber cafe club </li>

         <p>Dive into hacking challenges, sharpen your skills, and join a community of students passionate about cybersecurity.</p>

        <li>Wealth management & financial planning club.</li>

          <p>Our Missionis to educate and empower Seneca students to build financial confidence by 
          learning the fundamentals of money management, investing, and long-term wealth planning. 
          We aim to create a supportive community where students can develop smart financial habits and 
          prepare for lasting success in their personal and professional lives.</p>

          </ul>

      </div>

   



      </>
    );
  };


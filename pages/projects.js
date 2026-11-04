
import Link from "next/link";
export default function projects(){
    return (

<div className="project">
    <a href = "https://www.figma.com/proto/OcNAlL2jYjqRaOlFqSwvoq/Assignment-1-and-2-GUI-year-3-sem-1?node-id=722-640&t=QKhZEFwZSXYoL0se-1">Night Shift - Street Wear - Figma Project</a>
    
        <p> For this project, we have designed a streetwear fashion e-commerce website called “NightShift”. 
        Nightshift is a website that aims to provide users with a slightly different e-commerce experience, 
        and that promotes an air of exclusivity using various techniques. The context, meaning the audience of 
        our website are mainly millennials and GEN Z- this is reflected in our language choices, styling and colors.
        The audience is composed of both millennials and GEN Z because streetwear is a style worn by young people in cities. 
    </p>
    <a href = "https://github.com/bereketmulat/project1">Jack Pot - Lottery </a>
  
    <p>
    For this project, I designed a lottery system where users can place a bet on a specific sequence of numbers. 
    The program randomly generates numbers sequences and if the user's chosen sequence matches the winning numbers they earn a payout based on their wage.
    If the sequence doesn't match, the user can try again, encouraging reparating engagement while demonstrating key concepts like probability,
    input validation and random numbers generator. This project showcases my ability to design logical systems and handle user interaction.

    </p>
    <a href = "https://fantasy-football-app-mu.vercel.app">Fantasy Football</a>
    <p>
    NFL Pick’em
    Call every game, settle it with the group chat. Create a private lobby, share the 5-character code with friends and family, 
    and pick a winner for each game of the week. Picks stay hidden until you’ve locked in all of them, they lock at kickoff,
    and the scoreboard updates live as games are played. Built with React Native (Expo), Next.js and Supabase.
       
    </p>

    <Link href="/">Back</Link>

    
   
    

       

</div>
        

    )
}

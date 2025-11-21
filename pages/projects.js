
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
        The goal of our website is to make buying clothing items quick and efficient- especially since most of our customers
        will be trying to buy an item before it is sold out. To create a uniform look, we adhered to the principle of visual 
        continuity (consult the “visual framework” section). When it comes to patterns, we have employed a variety of different
        design considerations, and adapted our desktop version to mobile, mainly by removing certain transitions that did not 
        work (hover) and by changing the navigating experience to now be done with a hamburger menu. Finally, in terms of what 
        is different from the desktop version, I added a “sort by” function, an updated “add to cart” shortcut and a “sold out”
        tag for some clothing items. The paragraphs below will discuss the functionality, features, information architecture and 
        the patterns used when making the design. 
    </p>
    <a href = "https://github.com/bereketmulat/project1">Jack Pot - Lottery </a>
  
    <p>
    For this project, I designed a lottery system where users can place a bet on a specific sequence of numbers. 
    The program randomly generates numbers sequences and if the user's chosen sequence matches the winning numbers they earn a payout based on their wage.
    If the sequence doesn't match, the user can try again, encouraging reparating engagement while demonstrating key concepts like probability,
    input validation and random numbers generator. This project showcases my ability to design logical systems, handle user interaction and implement clear win/lose conditions.

    </p>
    <Link href="/">Back</Link>
   
    

       

</div>
        

    )
}
